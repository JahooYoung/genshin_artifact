use serde::{Serialize, Deserialize};
use strum_macros::{Display, EnumString};
use strum::*;
use num_derive::FromPrimitive;
use mona_derive::{CharacterData, EnumLen};
use crate::attribute::Attribute;
use crate::character::character_common_data::CharacterCommonData;
use crate::character::character_static_data::CharacterStaticData;
use crate::character::CharacterConfig;
use crate::character::traits::{CharacterSkillMap, CharacterTrait};
use crate::character::skill_config::CharacterSkillConfig;
use crate::common::ChangeAttribute;
use crate::damage::damage_builder::DamageBuilder;
use crate::damage::DamageContext;
use crate::target_functions::TargetFunction;
use crate::team::TeamQuantization;
use crate::weapon::weapon_common_data::WeaponCommonData;
use crate::common::item_config_type::ItemConfig;
// required by strum_derive::EnumString
use std::str::FromStr;


#[derive(Serialize, Deserialize)]
#[derive(Debug, Eq, PartialEq, Hash, Copy, Clone)]
#[derive(Display, FromPrimitive, EnumString, CharacterData, EnumLen)]
pub enum CharacterName {
    AetherAnemo,
    Albedo,
    Aloy,
    Amber,
    AratakiItto,
    Barbara,
    Beidou,
    Bennett,
    Chongyun,
    Diluc,
    Diona,
    Eula,
    Fischl,
    Ganyu,
    Gorou,
    HuTao,
    Jean,
    KaedeharaKazuha,
    Kaeya,
    KamisatoAyaka,
    KamisatoAyato,
    Keqing,
    Klee,
    KujouSara,
    KukiShinobu,
    Lisa,
    Mona,
    Ningguang,
    Noelle,
    Qiqi,
    RaidenShogun,
    Razor,
    Rosaria,
    SangonomiyaKokomi,
    Sayu,
    Shenhe,
    Sucrose,
    Tartaglia,
    Thoma,
    // Traveler,
    Venti,
    Xiangling,
    Xiao,
    Xingqiu,
    Xinyan,
    YaeMiko,
    Yanfei,
    Yelan,
    Yoimiya,
    Yunjin,
    Zhongli,
}