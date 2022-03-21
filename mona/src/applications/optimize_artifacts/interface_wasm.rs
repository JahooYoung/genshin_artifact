use std::collections::{BinaryHeap, HashMap};
use std::cmp::{PartialOrd, Eq, PartialEq, Ord, Ordering, Reverse};

use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
use smallvec::{SmallVec, smallvec};

use crate::artifacts::{Artifact, ArtifactSetName, ArtifactSlotName, ArtifactList};
use crate::character::{CharacterConfig, CharacterName, Character};
use crate::weapon::{WeaponName, WeaponConfig, Weapon};
use crate::target_functions::{TargetFunctionName, TargetFunctionConfig, TargetFunctionUtils};
use crate::buffs::{Buff, BuffConfig};
use crate::artifacts::effect_config::ArtifactEffectConfig;
use crate::attribute::{AttributeNoReactive, AttributeName, AttributeUtils, AttributeCommon, Attribute, ComplicatedAttributeGraph, SimpleAttributeGraph2};
use crate::enemies::Enemy;
use crate::{utils};
use crate::applications::common::{CharacterInterface, TargetFunctionInterface, WeaponInterface};
use crate::applications::optimize_artifacts::inter::OptimizeArtifactInterface;
use crate::applications::optimize_artifacts::single_optimize::{optimize_single, optimize_single_interface_wasm};

pub struct OptimizeSingleWasm;

#[wasm_bindgen]
impl OptimizeSingleWasm {
    pub fn optimize(val: &JsValue, artifacts: &JsValue) -> JsValue {
        utils::set_panic_hook();

        let input: OptimizeArtifactInterface = match val.into_serde() {
            Ok(x) => x,
            Err(e) => panic!("{}", e)
        };
        let artifacts: Vec<Artifact> = artifacts.into_serde().unwrap();
        let artifacts_ref: Vec<_> = artifacts.iter().collect();

        let character = input.character.to_character();
        let weapon = input.weapon.to_weapon(&character);
        let target_function = input.target_function.to_target_function(&character, &weapon);
        let constraint = input.constraint.unwrap_or(Default::default());
        let buffs: Vec<Box<dyn Buff<SimpleAttributeGraph2>>> = input.buffs.iter().map(|x| x.to_buff()).collect();
        let artifact_config = input.artifact_config.as_ref().map(|x| x.clone().to_config());

        let filtered_artifacts = input.filter.as_ref().map(|x| x.filter_artifact(&artifacts_ref));
        let artifacts = match filtered_artifacts {
            Some(ref a) => a.as_slice(),
            None => &artifacts_ref
        };

        let algorithm = input.algorithm.get_algorithm();

        let result = algorithm.optimize(
            &artifacts,
            artifact_config,
            &character,
            &weapon,
            &target_function,
            &Default::default(),
            &buffs,
            &constraint,
            100
        );

        JsValue::from_serde(&result).unwrap()
    }
}
