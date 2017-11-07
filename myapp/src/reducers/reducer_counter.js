import { ADD_ONE } from '../actions/index';
import { SUBTRACT_ONE } from '../actions/index';
import { MAKE_ZERO } from '../actions/index';
import { CHANGE_COUNTER } from '../actions/index';

export default function(state = 0, action) {
	switch (action.type) {
		case ADD_ONE:
			return (state = state + 1);
		case SUBTRACT_ONE:
			return (state = state - 1);
		case MAKE_ZERO:
			return (state = action.payload);
		case CHANGE_COUNTER:
			return (state = action.payload || 0);
		default:
			return state;
	}
}
