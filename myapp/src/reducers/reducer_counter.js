import { ADD_ONE } from '../actions/index';
import { SUBTRACT_ONE } from '../actions/index';

export default function(state = 0, action) {
	switch (action.type) {
		case ADD_ONE:
			console.log('adding', action);
			return state++;
		case SUBTRACT_ONE:
			console.log('noting adding', action);
			return state--;
		default:
			return state;
	}
}
