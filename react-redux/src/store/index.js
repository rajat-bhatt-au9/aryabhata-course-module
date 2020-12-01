import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const reducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
});

const store = createStore(reducer);

export default store;
