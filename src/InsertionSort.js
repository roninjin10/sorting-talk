import React, { Component } from 'react';

class InsertionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      data: props.data,
      intro: props.intro
    }
  }
  render() {
    return (
      <div className="InsertionSort">
          <li><button>{this.state.name}</button></li>
      </div>
    );
  }
}

export default InsertionSortS;