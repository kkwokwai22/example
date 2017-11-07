import { ADD_TODO_ITEM } from '../actions/index';
import { DELETE_ITEM } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return state.concat(action.payload);
		case DELETE_ITEM:
			return state.splice(action.payload, 1);
		default:
			return state;
	}
}
