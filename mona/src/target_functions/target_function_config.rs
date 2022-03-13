use serde::{Serialize, Deserialize};

use crate::common::{Element};
use crate::target_functions::target_functions::cryo::rosaria_default::RosariaDefaultTFConfig;

#[derive(Serialize, Deserialize)]
pub enum TargetFunctionConfig {
    PyroDamage { t: usize },
    CryoDamage { t: usize },
    HydroDamage { t: usize },
    ElectroDamage { t: usize },
    AnemoDamage { t: usize },
    GeoDamage { t: usize },
    PhysicalDamage { t: usize },

    GanyuDefault { melt_rate: f64 },
    GorouDefault { recharge_demand: f64 },
    DilucDefault { melt_rate: f64, vaporize_rate: f64 },
    // ExpectationConfig { element: Element, skill_type: SkillType }
    HuTaoDefault { vaporize_rate: f64, melt_rate: f64 },
    JeanDefault { recharge_demand: f64, damage_weight: f64 },
    KaedeharaKazuhaDamage { recharge_demand: f64, other_dmg_ratio: f64, swirl_rate: f64 },
    KaedeharaKazuhaDefault { recharge_demand: f64 },
    LisaDefault { recharge_demand: f64 },
    MonaDefault { recharge_demand: f64 },
    QiqiDefault { recharge_demand: f64 },
    RaidenShogunDefault { recharge_demand: f64 },
    RosariaDefault(RosariaDefaultTFConfig),
    SayuDefault { recharge_demand: f64 },
    ShenheDefault { recharge_demand: f64 },
    SucroseDefault { recharge_demand: f64 },
    ThomaDefault { recharge_demand: f64 },
    VentiDefault { swirl_rate: f64 },
    XianglingDefault { recharge_demand: f64, melt_rate: f64, vaporize_rate: f64, overload_rate: f64 },
    XingqiuDefault { recharge_demand: f64 },
    XinyanDefault { recharge_demand: f64, damage_demand: f64 },
    YaeMikoDefault { recharge_demand: f64, electro_charged_times: f64, overload_times: f64 },
    YoimiyaDefault { vaporize_rate: f64, melt_rate: f64 },
    YunjinDefault { recharge_demand: f64 },
    ZhongliDefault { recharge_demand: f64 },
    KujouSaraDamage { recharge_demand: f64 },


    BennettDamage { recharge_demand: f64, other_dmg_ratio: f64 },


    NoConfig
}
