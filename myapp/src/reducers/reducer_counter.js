import { ADD_ONE } from '../actions/index';
import { SUBTRACT_ONE } from '../actions/index';

export default function(state = 0, action) {
	switch (action.type) {
		case ADD_ONE:
			return (state = state + 1);
		case SUBTRACT_ONE:
			return (state = state - 1);
		default:
			return state;
	}
}
