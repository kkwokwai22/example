// action is just a object that flows through all of our reducers
// our reducers then can use that action to produce a different value for it particular piece of state

// we need to make sure this action get pass to all of our reducers
// bind to the container

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ONE = 'ADD_ONE';
export const MAKE_ZERO = 'MAKE_ZERO';
export const SUBTRACT_ONE = 'SUBTRACT_ONE';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';

export function addToDoItem(todo) {
	// SelectBook is a actionCreator, and it needs to return an action,
	// an object with the type property

	// always have two property
	// type
	// payload
	return {
		type: ADD_TODO_ITEM,
		payload: todo
	};
}

export function deleteItem(item) {
	return {
		type: DELETE_ITEM,
		payload: item
	};
}

export function changeCounter(input) {
	return {
		type: CHANGE_COUNTER,
		payload: input
	};
}

export function addOne() {
	return {
		type: ADD_ONE
	};
}

export function subtractOne() {
	return {
		type: SUBTRACT_ONE
	};
}

export function makeZero() {
	return {
		type: MAKE_ZERO,
		payload: 0
	};
}
