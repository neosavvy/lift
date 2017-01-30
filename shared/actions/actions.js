import * as Types from './types';

export function updateMax(max) {
    return {
        type: Types.UPDATE_MAX,
        value: max
    }
}

export function calculatePercentages() {
    return {
        type: Types.CALCULATE_PERCENTAGES
    }
}

export function updateActive(active) {
    return {
        type: Types.UPDATE_ACTIVE,
        active: active
    }
}

export function reset() {
    return {
        type: Types.RESET
    }
}

export function selectWeight(weight) {
    return {
        type: Types.SELECT_WEIGHT,
        weight
    }
}