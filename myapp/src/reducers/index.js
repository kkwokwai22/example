import { combineReducers } from 'redux';
import TodoListReducer from './reducer_todolist';
import CounterReducer from './reducer_counter';

const rootReducer = combineReducers({
	todolist: TodoListReducer,
	counter: CounterReducer
});

export default rootReducer;
