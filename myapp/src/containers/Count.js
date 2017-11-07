import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, subtractOne } from '../actions/index';

class Count extends Component {
	render() {
		const { Counter } = this.props;
		const { addOneInCounter, subtractOneInCounter } = this.props;
		return (
			<div>
				<h2>{Counter}</h2>
				<button onClick={addOneInCounter}>add</button>
				<button onClick={subtractOneInCounter}>subtract</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// this state.todolist comes from the global reducers(index.js) todolist: TodoListReducer
	return {
		Counter: state.counter
	};
}

// dispatch
function mapDispatchToProps(dispatch) {
	return {
		addOneInCounter: () => dispatch(addOne()),
		subtractOneInCounter: () => dispatch(subtractOne())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);

// always deconstruct your props don't use this.props anymore
// if you pass in a key to a
