import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import Input from './Input';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      listItem: ['Shampoo', 'cheese', 'books']
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem() {
    let inputValue = document.getElementById('inputValue').value;
    this.state.listItem.push(inputValue.toString());
    let updateList = this.state.listItem;
    this.setState({
      listItem: updateList
    });
  }

  deleteItem(item) {
    let updateList = this.state.listItem.filter(val => {
      if (item !== val) {
        return val;
      }
    });
    this.setState({
      listItem: updateList
    });
  }

  render() {
    return (
      <div>
        <Input addItem={this.addItem} />
        <TodoListItem listItem={this.state.listItem} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
