import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, subtractOne, makeZero, changeCounter } from '../actions/index';

class Count extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counterInput: 0
		};

		this.changeCounter = this.changeCounter.bind(this);
	}

	changeCounter(event) {
		this.setState({
			counterInput: event.target.value
		});
	}

	changeCounterFunc(input) {}

	render() {
		const { Counter } = this.props;
		const { addOneInCounter, subtractOneInCounter, clearCounter, changeInput } = this.props;
		let changeCounterFunc = input => {
			changeInput(parseInt(this.state.counterInput));
		};
		return (
			<div>
				<h2>{Counter}</h2>
				<input placeholder="change the input" onChange={this.changeCounter} />
				<button onClick={changeCounterFunc}>Submit</button>
				<button onClick={addOneInCounter}>add</button>
				<button onClick={subtractOneInCounter}>subtract</button>
				<button onClick={clearCounter}>Clear</button>
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
		subtractOneInCounter: () => dispatch(subtractOne()),
		clearCounter: () => dispatch(makeZero()),
		changeInput: input => dispatch(changeCounter(input))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);

// always deconstruct your props don't use this.props anymore
// if you pass in a key to a
