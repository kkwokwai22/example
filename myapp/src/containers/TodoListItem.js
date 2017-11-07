import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoListItem extends Component {
  render() {
    let renderList = this.props.Todolist.map(todo => {
      return (
        <li key={todo}>
          {todo}
          <button>delete</button>
        </li>
      );
    });
    return <div>{renderList}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state.todolist);
  // this state.todolist comes from the global reducers(index.js) todolist: TodoListReducer
  return {
    Todolist: state.todolist
  };
}

export default connect(mapStateToProps, null)(TodoListItem);
