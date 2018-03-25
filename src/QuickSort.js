import React, { Component } from 'react';

class QuickSort extends Component {
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
      <div className="QuickSort">
          <li><button>{this.state.name}</button></li>
      </div>
    );
  }
}

export default QuickSortS;