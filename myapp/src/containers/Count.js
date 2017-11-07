import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, subtractOne } from '../actions/index';

class Count extends Component {
	render() {
		const { Counter } = this.props;
		let add = () => addOne();
		let subtract = () => subtractOne();
		return (
			<div>
				<h2>{Counter}</h2>
				<button onClick={add}>add</button>
				<button onClick={subtract}>subtract</button>
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

function mapDispatchToProps(dispatch) {
	return {
		addOne: () => dispatch(addOne()),
		subtractOne: () => dispatch(subtractOne())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);

// always deconstruct your props don't use this.props anymore
// if you pass in a key to a
