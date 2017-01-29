import * as Types from './types';

export function updateMax(max) {
    return {
        type: Types.UPDATE_MAX,
        value: max
    }
}

export function calculatePercentages() {
    console.log('crapculating');
    return {
        type: Types.CALCULATE_PERCENTAGES
    }
}