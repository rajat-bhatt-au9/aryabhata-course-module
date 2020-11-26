const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    state = state || initialState

    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter+action.payload
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter-action.payload
            }
    
        default:
            return state;
    }
};

export default reducer;