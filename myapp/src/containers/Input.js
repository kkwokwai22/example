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
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			input: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.addToDoItem(this.state.input);
		this.setState({
			input: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="What you like to add"
					value={this.state.input}
					onChange={this.onInputChange}
				/>
				<button type="submit">Add Todo</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addToDoItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);
