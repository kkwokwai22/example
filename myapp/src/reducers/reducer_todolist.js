import { ADD_TODO_ITEM } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return state.concat(action.payload);
	}
	return state;
}
