export default function createReducer(initialState, handlers) {
    return function reducer(action, state = initialState) {
        if(handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}