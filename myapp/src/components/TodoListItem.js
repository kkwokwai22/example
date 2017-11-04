import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let propsItem = this.props.listItem;
    let listOfItem = propsItem.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <button onClick={this.props.deleteItem.bind(this, item)}>Delete</button>
        </li>
      );
    });
    return <ul>{listOfItem}</ul>;
  }
}
