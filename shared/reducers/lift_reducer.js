import createReducer from './create_reducer';
import * as Types from '../actions/types';
//
//export const calculatePercentages = createReducer({}, {
//
//});

export const updateMax = createReducer(
    {
        maxBench: 0,
        maxSquat: 0,
        maxDeadlift: 0
    },
    {
        [Types.UPDATE_MAX](state, action){
            console.log('in reducer');
            console.log(arguments);
            return state;
        }
    }
);