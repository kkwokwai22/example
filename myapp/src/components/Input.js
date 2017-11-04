import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    let addItem = this.props.addItem;
    return (
      <div>
        <input id="inputValue" type="text" placeholder="What you like to add" />
        <button onClick={addItem}>addItem</button>
      </div>
    );
  }
}

