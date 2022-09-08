use crate::artifacts::artifact_trait::{ArtifactMetaData, ArtifactTrait};
use crate::artifacts::ArtifactSetName;
use super::super::effect::ArtifactEffect;
use crate::artifacts::effect_config::ArtifactEffectConfig;
use crate::attribute::{Attribute, AttributeName, AttributeCommon};
use crate::character::character_common_data::CharacterCommonData;
use crate::common::item_config_type::{ItemConfig, ItemConfigType};

pub struct PaleFlameEffect {
    pub level: f64,
    pub full_rate: f64,
}

impl PaleFlameEffect {
    pub fn new(config: &ArtifactEffectConfig) -> PaleFlameEffect {
        PaleFlameEffect {
            level: config.config_pale_flame.avg_level,
            full_rate: config.config_pale_flame.full_rate,
        }
    }
}

impl<T: Attribute> ArtifactEffect<T> for PaleFlameEffect {
    fn effect2(&self, attribute: &mut T) {
        attribute.set_value_by(AttributeName::BonusPhysical, "苍白之火2", 0.25);
    }

    fn effect4(&self, attribute: &mut T) {
        attribute.add_atk_percentage("苍白之火4", 0.09 * self.level);
        attribute.set_value_by(AttributeName::BonusPhysical, "苍白之火4", 0.25 * self.full_rate);
    }
}

pub struct PaleFlame;

impl ArtifactTrait for PaleFlame {
    fn create_effect<A: Attribute>(config: &ArtifactEffectConfig, _character_common_data: &CharacterCommonData) -> Box<dyn ArtifactEffect<A>> {
        Box::new(PaleFlameEffect::new(config))
    }

    #[cfg(not(target_family = "wasm"))]
    const META_DATA: ArtifactMetaData = ArtifactMetaData {
        name: ArtifactSetName::PaleFlame,
        name_mona: "paleFlame",
        chs: "苍白之火",
        flower: Some("无垢之花"),
        feather: Some("贤医之羽"),
        sand: Some("停摆之刻"),
        goblet: Some("超越之盏"),
        head: Some("嗤笑之面"),
        star: (4, 5),
        effect1: None,
        effect2: Some("造成的物理伤害提高25%。"),
        effect3: None,
        effect4: Some("元素战技命中敌人后，①攻击力提升9%。该效果持续7秒，至多叠加2层，每0.3秒至多触发一次。叠满2层时，②2件套的效果提升100%。"),
        effect5: None
    };

    #[cfg(not(target_family = "wasm"))]
    const CONFIG4: Option<&'static [ItemConfig]> = Some(&[
        ItemConfig {
            name: "avg_level",
            title: "a8",
            config: ItemConfigType::Float { min: 0.0, max: 2.0, default: 0.0 }
        },
        ItemConfig {
            name: "full_rate",
            title: "a9",
            config: ItemConfigType::Float { min: 0.0, max: 1.0, default: 0.0 }
        }
    ]);
}
