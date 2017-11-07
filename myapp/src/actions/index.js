// action is just a object that flows through all of our reducers
// our reducers then can use that action to produce a different value for it particular piece of state

// we need to make sure this action get pass to all of our reducers
// bind to the container

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

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

