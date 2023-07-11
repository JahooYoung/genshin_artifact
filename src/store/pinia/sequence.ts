import {computed, reactive, ref, watch} from "vue"

function f() {
    const sequences = ref<Record<string, string[]>>({})

    function init(payload: any) {
        if (payload?.sequences) {
            sequences.value = payload.sequences
        } else if (payload?.sequence) { // backward compatibility
            sequences.value['default'] = payload.sequence
        } else {
            sequences.value = {}
        }
    }

    return {
        sequences,
        init,
    }
}

const s = f()

export function watchContent() {
    return {
        sequences: s.sequences.value
    }
}

// watch(() => {
//     return s.sequence.value
// }, newValue => {
//     localStorage.setItem("sequence", JSON.stringify(newValue))
// }, {
//     deep: true
// })

export const useSequenceStore = () => {
    return s
}
