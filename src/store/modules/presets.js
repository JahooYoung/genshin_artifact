import Vue from "vue"

import {upgradePresetItem} from "@util/preset"

const VERSION_PRESET = 3;

export default {
    namespaced: true,
    state: {
        presets: {},
    },
    mutations: {
        set(state, payload) {
            if (payload) {
                for (let name in payload) {
                    let entry = payload[name];
                    let item = entry.item;

                    try {
                        const newItem = upgradePresetItem(item);
                        // console.log(newItem);
                        entry.item = newItem;
                    } catch (e) {
                        console.log("upgrade preset item failed");
                        console.log(e);
                    }
                }
                state.presets = payload;
            } else {
                state.presets = {};
            }
        },

        addOrOverwrite(state, { item, name }) {
            const entry = {
                item,
                name,
                version: VERSION_PRESET
            }

            Vue.set(state.presets, name, entry)
        },

        delete(state, { name }) {
            Vue.delete(state.presets, name);
        }
    },
    getters: {
        all(state) {
            return state.presets;
        },

        allFlat(state) {
            return Object.values(state.presets)
        },

        count(state) {
            return Object.keys(state.presets).length;
        },

        // firstName(state, getters) {
        //     if (getters.count === 0) {
        //         return "";
        //     }
        //     return Object.keys(state.presets)[0];
        // }
    }
}
