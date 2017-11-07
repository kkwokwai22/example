import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/index';

class TodoListItem extends Component {
  render() {
    const { deleteItem, Todolist } = this.props;
    let renderList = Todolist.map((todo, index) => {
      let onClickHandler = index => deleteItem(index);
      return (
        <li key={index}>
          {todo}
          <button onClick={onClickHandler}>delete</button>
        </li>
      );
    });
    return <div>{renderList}</div>;
  }
}

function mapStateToProps(state) {
  // this state.todolist comes from the global reducers(index.js) todolist: TodoListReducer
  return {
    Todolist: state.todolist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: index => dispatch(deleteItem(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);

// always deconstruct your props don't use this.props anymore
// if you pass in a key to a
