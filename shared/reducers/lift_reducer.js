import * as Types from '../actions/types';
import _ from 'lodash';

import { PERCENTAGES } from '../constants/application.constants';

const computePercentagesOf = (maxValue) => {
    return _.reduce(PERCENTAGES, (acc, percentage) => {
        const computation = {
            percentageOfMax: percentage,
            value: (percentage / 100) * maxValue
        };
        return acc.concat(computation);
    }, [])
};

const onCalculate = (state) => {
    const {
        maxBench,
        maxSquat,
        maxDeadLift
    } = state;

    const benchPercentages = computePercentagesOf(maxBench);
    const squatPercentages = computePercentagesOf(maxSquat);
    const deadLiftPercentages = computePercentagesOf(maxDeadLift);

    return {
        benchPercentages,
        squatPercentages,
        deadLiftPercentages
    };
};

function computeCalculationDivisibleByTwo(calculation) {
    const isEven = calculation % 2 === 0;
    if(isEven) {
        return calculation
    } else if(calculation > 0) {
        return calculation - 1;
    } else {
        return 0;
    }
}

export function showPlatesForWeight(weight) {
    const MF = Math.floor;
    let weightMinusBar = weight - 45;
    const num45 = computeCalculationDivisibleByTwo(MF(weightMinusBar / 45));
    weightMinusBar = weightMinusBar - 45 * num45;
    const num35 = computeCalculationDivisibleByTwo(MF(weightMinusBar / 35));
    weightMinusBar = weightMinusBar - 35 * num35;
    const num25 = computeCalculationDivisibleByTwo(MF(weightMinusBar / 25));
    weightMinusBar = weightMinusBar - 25 * num25;
    const num10 = computeCalculationDivisibleByTwo(MF(weightMinusBar / 10));
    weightMinusBar = weightMinusBar - 10 * num10;
    const num5  = computeCalculationDivisibleByTwo(MF(weightMinusBar / 5));
    weightMinusBar = weightMinusBar - 5 * num5;
    const num1  = computeCalculationDivisibleByTwo(MF(weightMinusBar / 1));
    return _.pickBy({
        45: num45,
        35: num35,
        25: num25,
        10: num10,
        5: num5,
        1: num1
    }, _.identity)
}

export default function liftReducer(state = {
    maxBench: null,
    maxSquat: null,
    maxDeadLift: null,
    benchPercentages: [],
    squatPercentages: [],
    deadLiftPercentages: [],
    activePercentages: []}, action) {
    switch(action.type) {
        case Types.UPDATE_ACTIVE:
            return Object.assign({}, state, action.active);
        case Types.CALCULATE_PERCENTAGES: 
            return Object.assign({}, state, onCalculate(state));
        case Types.UPDATE_MAX:
            return Object.assign({}, state, action.value);
        case Types.RESET:
            return Object.assign({}, {
                maxBench: null,
                maxSquat: null,
                maxDeadLift: null,
                benchPercentages: [],
                squatPercentages: [],
                deadLiftPercentages: [],
                activePercentages: []
            });
        default:
            return state;
    }
};