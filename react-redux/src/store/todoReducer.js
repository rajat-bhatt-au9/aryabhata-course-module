const initalTodo =  ['Revise for the test'];

const todoReducer = (state, action) => {
    state = state || initalTodo

    switch (action.type) {
        case 'ADD_TASK':
            return [ ...state, action.payload ];
        case 'REMOVE_TASK':
            const todos = state.filter(function(item) {
                return item !== action.payload;
            });
            return [...todos];
        default:
            return state;
    }
};

export default todoReducer;