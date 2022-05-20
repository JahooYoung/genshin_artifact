use mona::buffs::buff_meta::{BuffImage, BuffMetaData};
use mona::buffs::buff_name::BuffName;
use askama::Template;
use mona::artifacts::artifact_trait::ArtifactMetaData;
use crate::utils::get_internal_character_name;

struct BuffMeta {
    name: String,
    chs: String,
    image: String,
    // character | misc
    image_type: String,
    // if image_type is character, use internal name to get mihoyo image url, not using mine
    character_internal_name: String,
    genre: String,
    config: Vec<String>,
    description: String,
}

#[derive(Template)]
#[template(path = "buff_meta_template.js")]
struct BuffMetaTemplate {
    buffs: Vec<BuffMeta>
}

fn convert_image(i: &BuffImage) -> String {
    match *i {
        BuffImage::Avatar(x) => format!("characters/{}_avatar", x.to_string()),
        BuffImage::Custom(x) => String::from(x),
        BuffImage::Misc(x) => format!("misc/{}", x),
        BuffImage::Weapon(x) => format!("weapons/{}_tn", x.to_string()),
        BuffImage::Artifact(x) => {
            let meta: ArtifactMetaData = x.get_meta();
            if meta.flower.is_some() {
                format!("artifacts/{}_flower", x.to_string())
            } else if meta.feather.is_some() {
                format!("artifacts/{}_feater", x.to_string())
            } else if meta.sand.is_some() {
                format!("artifacts/{}_sand", x.to_string())
            } else if meta.goblet.is_some() {
                format!("artifacts/{}_goblet", x.to_string())
            } else {
                format!("artifacts/{}_head", x.to_string())
            }
        }
    }
}

pub fn gen_buff_meta_as_js_file() -> String {
    let mut data: Vec<BuffMeta> = Vec::new();

    for i in 0_usize..BuffName::LEN {
        let e: BuffName = num::FromPrimitive::from_usize(i).unwrap();

        let meta: BuffMetaData = e.get_meta();
        let config = if let Some(x) = e.get_config() {
            x.iter().map(|c| c.to_json()).collect()
        } else {
            Vec::new()
        };

        let description = if let Some(x) = meta.description {
            String::from(x)
        } else {
            String::new()
        };

        data.push(BuffMeta {
            name: meta.name.to_string(),
            chs: String::from(meta.chs),
            image: convert_image(&meta.image),
            image_type: if let BuffImage::Avatar(_) = meta.image { String::from("character") } else { String::from("misc") },
            character_internal_name: if let BuffImage::Avatar(c) = meta.image {
                get_internal_character_name(c)
            } else { String::new() },
            genre: meta.genre.to_string(),
            config,
            description,
        })
    }

    let t = BuffMetaTemplate {
        buffs: data
    };

    t.render().unwrap()
}
