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
        deadLiftPercentages,
        isComputed: true
    };
};


export default function liftReducer(state = {
    isComputed: false,
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
        default:
            return state;
    }
};