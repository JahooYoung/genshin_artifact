use std::cell::RefCell;
use std::collections::{HashMap, HashSet};
use mona::artifacts::{Artifact, ArtifactSetName, ArtifactSlotName};
use mona::artifacts::eff::ARTIFACT_EFF5;
use mona::artifacts::effect_config::ArtifactEffectConfig;
use mona::attribute::SimpleAttributeGraph2;
use mona::buffs::Buff;
use mona::character::Character;
use mona::common::StatName;
use mona::enemies::Enemy;
use mona::target_functions::TargetFunction;
use mona::log;
use mona::utils::artifact::get_per_slot_artifacts;
use mona::weapon::Weapon;
use smallvec::{SmallVec, smallvec};
use crate::applications::optimize_artifacts::algorithm::SingleOptimizeAlgorithm;
use crate::applications::optimize_artifacts::algorithms::common::{get_artifacts_group, get_artifacts_group_without_set, get_set_names, get_super_artifact_vec, get_super_artifact_vec_without_set, ResultRecorder, ValueFunction};
use crate::applications::optimize_artifacts::algorithms::cutoff_heuristic::CutoffAlgorithmHeuristic;
use crate::applications::optimize_artifacts::algorithms::weight_heuristic::{NaiveWeightHeuristic, WeightHeuristicAlgorithm};
use crate::applications::optimize_artifacts::inter::{ConstraintConfig, ConstraintSetMode, OptimizationResult};

type SimpleSlotName = usize;


pub struct CutoffAlgo3Helper<'a> {
    // make sure vec length is not 0
    pub artifacts: HashMap<(ArtifactSetName, SimpleSlotName, StatName), Vec<&'a Artifact>>,
    pub artifacts_without_set: HashMap<(SimpleSlotName, StatName), Vec<&'a Artifact>>,
    pub artifacts_all: Vec<&'a Artifact>,
    pub artifact_sets: Vec<ArtifactSetName>,

    pub super_artifacts: HashMap<(ArtifactSetName, SimpleSlotName, StatName), Vec<Artifact>>,
    pub super_artifacts_without_set: HashMap<(SimpleSlotName, StatName), Vec<Artifact>>,

    pub sand_stats: Vec<StatName>,
    pub goblet_stats: Vec<StatName>,
    pub head_stats: Vec<StatName>,

    pub factor_a: f64,
}

#[derive(Copy, Clone)]
pub enum SlotSetName {
    Some(ArtifactSetName),
    Any,
}

static EMPTY_ARTIFACT: Artifact = Artifact {
    id: 0,
    slot: ArtifactSlotName::Flower,
    main_stat: (StatName::HPFixed, 0.0),
    sub_stats: Vec::new(),
    set_name: ArtifactSetName::Empty,
    level: 20,
    star: 5
};

impl<'a> CutoffAlgo3Helper<'a> {
    pub fn new(artifacts: &'a [&'a Artifact], weight_heuristic: HashMap<StatName, f64>, set_heuristics: HashMap<ArtifactSetName, f64>, factor_a: f64) -> CutoffAlgo3Helper<'a> {
        let mut sand_stats = HashSet::new();
        let mut goblet_stats = HashSet::new();
        let mut head_stats = HashSet::new();

        for art in artifacts.iter() {
            let slot = art.slot;
            let main_stat = art.main_stat.0;
            if slot == ArtifactSlotName::Sand {
                sand_stats.insert(main_stat);
            } else if slot == ArtifactSlotName::Goblet {
                goblet_stats.insert(main_stat);
            } else if slot == ArtifactSlotName::Head {
                head_stats.insert(main_stat);
            }
        }

        let mut sand_stats: Vec<StatName> = sand_stats.into_iter().collect();
        let mut goblet_stats: Vec<StatName> = goblet_stats.into_iter().collect();
        let mut head_stats: Vec<StatName> = head_stats.into_iter().collect();

        let mut artifacts: Vec<&Artifact> = artifacts.iter().cloned().collect();
        artifacts.sort_by_cached_key(|x| {
            // we want first to handle artifacts with extremely large sub stats,
            // to make the super artifact more effective
            let mut normalized_score: [i32; 4] = [0; 4];
            for (i, &(stat_name, value)) in x.sub_stats.iter().enumerate() {
                let weight = weight_heuristic.get(&stat_name).cloned().unwrap_or(0.1);
                let eff = value / ARTIFACT_EFF5.get_value(stat_name, 3);
                normalized_score[i] = -(weight * eff * 100.0) as i32;
            }
            normalized_score.sort();
            let main_stat_eff = -(x.main_stat.1 / ARTIFACT_EFF5.get_value(x.main_stat.0, 3) * 100.0) as i32;
            (main_stat_eff, normalized_score[0], normalized_score[1], normalized_score[2], normalized_score[3])
        });

        let mut artifacts_group = get_artifacts_group(artifacts.as_slice());
        let mut artifacts_group_without_set = get_artifacts_group_without_set(artifacts.as_slice());

        // if let Some(ref weights) = weight_heuristic {
        //     sand_stats.sort_by_cached_key(|x| {
        //         -(weights.get(x).cloned().unwrap_or(0.0) * 100.0) as i32
        //     });
        //     goblet_stats.sort_by_cached_key(|x| {
        //         -(weights.get(x).cloned().unwrap_or(0.0) * 100.0) as i32
        //     });
        //     head_stats.sort_by_cached_key(|x| {
        //         -(weights.get(x).cloned().unwrap_or(0.0) * 100.0) as i32
        //     });
        //     // println!("{:?}", sand_stats);

        //     for (_, arts) in artifacts_group.iter_mut() {
        //         arts.sort_by_cached_key(|x| {
        //             let mut score = 0.0;
        //             for &(stat_name, value) in x.sub_stats.iter() {
        //                 let weight = weights.get(&stat_name).cloned().unwrap_or(0.0);
        //                 let eff = value / ARTIFACT_EFF5.get_value(stat_name, 3);
        //                 score += weight * eff;
        //             }
        //             -(score * 100.0) as i32
        //         })
        //     }
        //     for (_, arts) in artifacts_group_without_set.iter_mut() {
        //         arts.sort_by_cached_key(|x| {
        //             let mut score = 0.0;
        //             for &(stat_name, value) in x.sub_stats.iter() {
        //                 let weight = weights.get(&stat_name).cloned().unwrap_or(0.0);
        //                 let eff = value / ARTIFACT_EFF5.get_value(stat_name, 3);
        //                 score += weight * eff;
        //             }
        //             -(score * 100.0) as i32
        //         })
        //     }
        // }

        let mut sets = get_set_names(artifacts.as_slice());
        sets.sort_by_key(|x| {
            let v = set_heuristics.get(x).cloned().unwrap_or(0.0);
            -(v * 100.0) as i32
        });

        CutoffAlgo3Helper {
            super_artifacts: get_super_artifact_vec(&artifacts_group),
            super_artifacts_without_set: get_super_artifact_vec_without_set(&artifacts_group_without_set),

            artifacts: artifacts_group,
            artifacts_without_set: artifacts_group_without_set,
            artifacts_all: artifacts,
            artifact_sets: sets,

            sand_stats,
            goblet_stats,
            head_stats,

            factor_a,
        }
    }

    pub fn get_arts(&self, set_name: SlotSetName, main_stat: StatName, slot: SimpleSlotName) -> Option<&[&Artifact]> {
        match set_name {
            SlotSetName::Some(x) => {
                if let Some(arts) = self.artifacts.get(&(x, slot, main_stat)) {
                    Some(&arts)
                } else {
                    None
                }
            },
            SlotSetName::Any => {
                if let Some(arts) = self.artifacts_without_set.get(&(slot, main_stat)) {
                    Some(&arts)
                } else {
                    None
                }
            }
        }
    }

    pub fn get_super_art(&self, set_name: SlotSetName, main_stat: StatName, slot: SimpleSlotName, idx: usize) -> Option<&Artifact> {
        match set_name {
            SlotSetName::Some(x) => self.super_artifacts.get(&(x, slot, main_stat))?.get(idx),
            SlotSetName::Any => self.super_artifacts_without_set.get(&(slot, main_stat))?.get(idx),
        }
    }

    pub fn is_better_than_current_least(&self, arts: &[&Artifact], value_fn: &ValueFunction, rc: &ResultRecorder) -> bool {
        let attribute = value_fn.get_attribute(arts);

        if !value_fn.check_attribute_attribute(&attribute) {
            return false;
        }

        let score = value_fn.score_attribute(&attribute, arts);
        let current_least = rc.current_least();
        score * self.factor_a > current_least
    }

    pub fn update_artifacts(&self, arts: &[&Artifact], value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let attribute = value_fn.get_attribute(arts);
        if !value_fn.check_attribute_attribute(&attribute) {
            return;
        }
        let score = value_fn.score_attribute(&attribute, arts);

        let art_ids = [
            arts[0].id,
            arts[1].id,
            arts[2].id,
            arts[3].id,
            arts[4].id,
        ];
        rc.push_result(art_ids, score);
    }

    pub fn do_iter(&self, set_names: &[SlotSetName], main_stats: &[StatName], value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let arts: SmallVec<[&[&Artifact]; 5]> = {
            let mut temp: SmallVec<[&[&Artifact]; 5]> = SmallVec::new();
            for i in 0..5 {
                let maybe_arts = self.get_arts(set_names[i], main_stats[i], i);
                if maybe_arts.is_none() {
                    return;
                }
                temp.push(maybe_arts.unwrap());
            }
            // temp.sort_by_cached_key(|x| {
            //     x.len()
            // });
            temp
        };

        for i0 in 0..arts[4].len() {
            {
                let mut super_arts: SmallVec<[&Artifact; 5]> = SmallVec::new();
                super_arts.push(arts[4][i0]);

                for i in 0..4 {
                    if let Some(super_art) = self.get_super_art(set_names[i], main_stats[i], i, 0) {
                        super_arts.push(super_art);
                    } else {
                        return;
                    }
                }

                if !self.is_better_than_current_least(&super_arts, value_fn, rc) {
                    continue;
                }
            }

            for i1 in 0..arts[3].len() {
                {
                    let mut super_arts: SmallVec<[&Artifact; 5]> = SmallVec::new();
                    super_arts.push(arts[4][i0]);
                    super_arts.push(arts[3][i1]);

                    for i in 0..3 {
                        if let Some(super_art) = self.get_super_art(set_names[i], main_stats[i], i, 0) {
                            super_arts.push(super_art);
                        } else {
                            return;
                        }
                    }

                    if !self.is_better_than_current_least(&super_arts, value_fn, rc) {
                        continue;
                    }
                }

                for i2 in 0..arts[2].len() {
                    // {
                    //     let mut super_arts: SmallVec<[&Artifact; 5]> = smallvec![
                    //         arts[4][i0],
                    //         arts[3][i1],
                    //         arts[2][i2],
                    //     ];

                    //     for i in 0..2 {
                    //         if let Some(super_art) = self.get_super_art(set_names[i], main_stats[i], i, 0) {
                    //             super_arts.push(super_art);
                    //         } else {
                    //             return;
                    //         }
                    //     }

                    //     if !self.is_better_than_current_least(&super_arts, value_fn, rc) {
                    //         continue;
                    //     }
                    // }

                    for i3 in 0..arts[1].len() {
                        if i3 % 3 == 0 {
                            let mut super_arts: SmallVec<[&Artifact; 5]> = smallvec![
                                arts[4][i0],
                                arts[3][i1],
                                arts[2][i2],
                            ];

                            for i in 0..2 {
                                let idx = if i == 1 { i3 } else { 0 };
                                if let Some(super_art) = self.get_super_art(set_names[i], main_stats[i], i, idx) {
                                    super_arts.push(super_art);
                                } else {
                                    return;
                                }
                            }

                            if !self.is_better_than_current_least(&super_arts, value_fn, rc) {
                                break;
                            }
                        }

                        let mut super_arts: SmallVec<[&Artifact; 5]> = smallvec![
                            arts[4][i0],
                            arts[3][i1],
                            arts[2][i2],
                            arts[1][i3],
                            &EMPTY_ARTIFACT,
                        ];
                        for i4 in 0..arts[0].len() {
                            if i4 % 3 == 0 {
                                for i in 0..1 {
                                    if let Some(super_art) = self.get_super_art(set_names[i], main_stats[i], i, i4) {
                                        super_arts[4] = super_art;
                                    } else {
                                        return;
                                    }
                                }

                                if !self.is_better_than_current_least(&super_arts, value_fn, rc) {
                                    break;
                                }
                            }

                            let artifacts: SmallVec<[&Artifact; 5]> = smallvec![
                                arts[0][i4],
                                arts[1][i3],
                                arts[2][i2],
                                arts[3][i1],
                                arts[4][i0],
                            ];

                            self.update_artifacts(&artifacts, value_fn, rc);
                        }
                    }
                }
            }
        }
    }

    pub fn iter_set(&self, set_mask: &[[i32; 5]], s1: ArtifactSetName, s2: ArtifactSetName, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        for &sand in self.sand_stats.iter() {
            for &head in self.head_stats.iter() {
                for &goblet in self.goblet_stats.iter() {
                    let main_stats = [StatName::HPFixed, StatName::ATKFixed, sand, goblet, head];
                    'outer: for set_composition in set_mask.iter() {
                        {
                            let mut super_artifacts: SmallVec<[&Artifact; 5]> = SmallVec::new();
                            for (index, &mask) in set_composition.iter().enumerate() {
                                let slot_set_name = if mask == 0 {
                                    SlotSetName::Any
                                } else if mask == 1 {
                                    SlotSetName::Some(s1)
                                } else {
                                    SlotSetName::Some(s2)
                                };

                                let super_art = if let Some(x) = self.get_super_art(slot_set_name, main_stats[index], index, 0) {
                                    x
                                } else {
                                    continue 'outer;
                                };

                                super_artifacts.push(super_art);
                            }

                            if !self.is_better_than_current_least(&super_artifacts, value_fn, rc) {
                                continue 'outer;
                            }
                        }

                        // do iter
                        let set_names = {
                            let mut temp: SmallVec<[SlotSetName; 5]> = SmallVec::new();
                            for &mask in set_composition.iter() {
                                if mask == 0 {
                                    temp.push(SlotSetName::Any);
                                } else if mask == 1 {
                                    temp.push(SlotSetName::Some(s1));
                                } else {
                                    temp.push(SlotSetName::Some(s2));
                                }
                            }
                            temp
                        };

                        self.do_iter(&set_names, &main_stats, value_fn, rc);
                    }
                }
            }
        }

    }

    pub fn iter_set4(&self, set_name: ArtifactSetName, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let set_masks = [
            [0, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 0, 1], [1, 1, 1, 1, 0]
        ];

        // self.iter_set(&set_masks, set_name, ArtifactSetName::Empty, main_stats, value_fn, rc);
        self.iter_set(&set_masks, set_name, ArtifactSetName::Empty, value_fn, rc);
    }

    pub fn iter_set22(&self, s1: ArtifactSetName, s2: ArtifactSetName, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let set_mask = [
            [0, 1, 1, 2, 2], [0, 1, 2, 1, 2], [0, 1, 2, 2, 1], [0, 2, 1, 1, 2], [0, 2, 1, 2, 1], [0, 2, 2, 1, 1],
            [1, 0, 1, 2, 2], [1, 0, 2, 1, 2], [1, 0, 2, 2, 1], [2, 0, 1, 1, 2], [2, 0, 1, 2, 1], [2, 0, 2, 1, 1],
            [1, 1, 0, 2, 2], [1, 2, 0, 1, 2], [1, 2, 0, 2, 1], [2, 1, 0, 1, 2], [2, 1, 0, 2, 1], [2, 2, 0, 1, 1],
            [1, 1, 2, 0, 2], [1, 2, 1, 0, 2], [1, 2, 2, 0, 1], [2, 1, 1, 0, 2], [2, 1, 2, 0, 1], [2, 2, 1, 0, 1],
            [1, 1, 2, 2, 0], [1, 2, 1, 2, 0], [1, 2, 2, 1, 0], [2, 1, 1, 2, 0], [2, 1, 2, 1, 0], [2, 2, 1, 1, 0],
        ];

        // self.iter_set(&set_mask, s1, s2, main_stats, value_fn, rc);
        self.iter_set(&set_mask, s1, s2, value_fn, rc);
    }

    pub fn iter_set2(&self, set_name: ArtifactSetName, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let set_masks = [
            [1, 1, 0, 0, 0], [1, 0, 1, 0, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 1],
            [0, 1, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0], [0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1]
        ];

        // self.iter_set(&set_masks, set_name, ArtifactSetName::Empty, main_stats, value_fn, rc);
        self.iter_set(&set_masks, set_name, ArtifactSetName::Empty, value_fn, rc);
    }

    pub fn iter_any(&self, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        // let mut set_count = [0; ArtifactSetName::LEN];

        // self.iter_set(&[[0, 0, 0, 0, 0]], ArtifactSetName::Empty, ArtifactSetName::Empty, main_stats, value_fn, rc);
        self.iter_set(&[[0, 0, 0, 0, 0]], ArtifactSetName::Empty, ArtifactSetName::Empty, value_fn, rc);
    }

    pub fn do_calculation(&self, value_fn: &ValueFunction, rc: &mut ResultRecorder) {
        let set_names = &self.artifact_sets;

        let do_set4 = |recorder: &mut ResultRecorder| {
            for &set_name in set_names.iter() {
                self.iter_set4(set_name, value_fn, recorder);
            }
        };

        let do_set22 = |recorder: &mut ResultRecorder| {
            for i in 0..set_names.len() {
                let s1 = set_names[i];
                for j in i..set_names.len() {
                    let s2 = set_names[j];
                    self.iter_set22(s1, s2, value_fn, recorder);
                }
            }
        };

        let do_set2x = |recorder: &mut ResultRecorder, set_name: ArtifactSetName| {
            for &s1 in set_names.iter() {
                self.iter_set22(s1, set_name, value_fn, recorder);
            }
        };

        let do_set2 = |recorder: &mut ResultRecorder| {
            for &s1 in set_names.iter() {
                self.iter_set2(s1, value_fn, recorder);
            }
        };

        let do_any = |recorder: &mut ResultRecorder| {
            self.iter_any(value_fn, recorder);
        };

        let do_no_constraint = |recorder: &mut ResultRecorder| {
            log!("start algo3");
            do_set4(recorder);
            log!("finish 44");
            do_set22(recorder);
            log!("finish 22");
            do_set2(recorder);
            log!("finish 2");
            do_any(recorder);
            log!("finish any");
        };

        // log!("\n\nsuper_arts:");
        // self.super_artifacts.iter().for_each(|(k, v)| {
        //     log!("\n\t{:?}:", k);
        //     v.iter().for_each(|x| {
        //         log!("\t\t{:?}", x);
        //     })
        // });
        // log!("\n\nartifacts:");
        // self.artifacts.iter().for_each(|(k, v)| {
        //     log!("\n\t{:?}:", k);
        //     v.iter().for_each(|x| {
        //         log!("\t\t{:?}", x);
        //     })
        // });
        // log!("\n\nsuper_arts_without_set:");
        // self.super_artifacts_without_set.iter().for_each(|(k, v)| {
        //     log!("\n\t{:?}:", k);
        //     v.iter().for_each(|x| {
        //         log!("\t\t{:?}", x);
        //     })
        // });
        // log!("\n\nartifacts_without_set:");
        // self.artifacts_without_set.iter().for_each(|(k, v)| {
        //     log!("\n\t{:?}:", k);
        //     v.iter().for_each(|x| {
        //         log!("\t\t{:?}", x);
        //     })
        // });

        match &value_fn.constraint.set_mode {
            Some(set_mode) => {
                match set_mode {
                    ConstraintSetMode::Any => do_no_constraint(rc),
                    ConstraintSetMode::Set4(set) => self.iter_set4(*set, value_fn, rc),
                    ConstraintSetMode::Set22(s1, s2) => self.iter_set22(*s1, *s2, value_fn, rc),
                    ConstraintSetMode::Set2(set) => {
                        self.iter_set4(*set, value_fn, rc);
                        do_set2x(rc, *set);
                        self.iter_set2(*set, value_fn, rc);
                    }
                }
            },
            None => do_no_constraint(rc),
        }
    }
}

pub struct CutoffAlgo3 {
    pub accuracy_factor: f64,
}

impl SingleOptimizeAlgorithm for CutoffAlgo3 {
    fn optimize(&self, artifacts: &[&Artifact], artifact_config: Option<ArtifactEffectConfig>, character: &Character<SimpleAttributeGraph2>, weapon: &Weapon<SimpleAttributeGraph2>, target_function: &Box<dyn TargetFunction>, enemy: &Enemy, buffs: &[Box<dyn Buff<SimpleAttributeGraph2>>], constraint: &ConstraintConfig, count: usize) -> Vec<OptimizationResult> {
        let (flowers, feathers, sands, goblets, heads) = get_per_slot_artifacts(&artifacts);

        let any_zero = vec![flowers, feathers, sands, goblets, heads].iter().any(|x| x.len() == 0);
        if any_zero {
            let naive_algo = CutoffAlgorithmHeuristic { use_heuristic: false };
            return naive_algo.optimize(artifacts, artifact_config, character, weapon, target_function, enemy, buffs, constraint, count);
        }

        let mut result_recorder = ResultRecorder::new(count);

        let mut default_effect_config: ArtifactEffectConfig;
        let effect_config = if let Some(ref x) = artifact_config {
            x
        } else {
            default_effect_config = target_function.get_default_artifact_config(&Default::default());
            &default_effect_config
        };

        let value_function = ValueFunction {
            artifact_effect_config: &effect_config,
            character: &character,
            weapon: &weapon,
            target_function: &target_function,
            buffs: &buffs,
            enemy: &enemy,
            constraint: &constraint
        };

        let weight_heuristic_algo = NaiveWeightHeuristic {
            character,
            weapon
        };
        let weight_heuristic = weight_heuristic_algo.generate_stat(&target_function);
        let set_heuristic = weight_heuristic_algo.generate_set(&target_function);

        let mut algo = CutoffAlgo3Helper::new(
            artifacts,
            weight_heuristic,
            set_heuristic,
            // None,
            // None,
            self.accuracy_factor
        );
        algo.do_calculation(&value_function, &mut result_recorder);

        let intermediate_results = result_recorder.get_results_descend();
        let max_score = intermediate_results.iter().map(|x| x.score)
            .fold(f64::NEG_INFINITY, f64::max);

        let mut result = Vec::new();
        for item in intermediate_results.iter() {
            result.push(item.to_result(max_score));
        }

        result
    }
}
