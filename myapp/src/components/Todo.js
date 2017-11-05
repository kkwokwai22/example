import React, { Component } from 'react';
import TodoListItem from '../containers/TodoListItem';
import Input from '../containers/Input';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <Input />
        <TodoListItem />
      </div>
    );
  }
}
