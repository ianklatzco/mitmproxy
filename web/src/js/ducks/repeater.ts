export const TOGGLE_VISIBILITY = 'REPEATER_TOGGLE_VISIBILITY'

interface RepeaterState {
    visible: boolean
}

export const defaultState: RepeaterState = {
    visible: false,
};

export default function reducer(state = defaultState, action): RepeaterState {
    switch (action.type) {
        case TOGGLE_VISIBILITY:
            return {
                ...state,
                visible: !state.visible
            }

        default:
            return state
    }
}

export function toggleVisibility() {
    return {type: TOGGLE_VISIBILITY}
}
