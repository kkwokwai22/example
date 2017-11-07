import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDoItem } from '../actions/index';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({
			input: event.target.value
		});
	}

	onClickHandler() {
		this.props.addToDoItem(this.state.input);
	}
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="What you like to add"
					value={this.state.input}
					onChange={this.onInputChange}
				/>
				<button onClick={this.onClickHandler.bind(this)}>Add Todo</button>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addToDoItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);





