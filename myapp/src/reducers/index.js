import { combineReducers } from 'redux';
import TodoListReducer from './reducer_todolist';

const rootReducer = combineReducers({
	todolist: TodoListReducer
});

export default rootReducer;
