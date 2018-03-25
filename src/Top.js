import React, { Component } from 'react';

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <ul className="sort">
          <li><button href="http://www.google.com">Insertion</button></li>
          <li><button href="#">Merge</button></li>
          <li><button href="#">Heap</button></li>
          <li><button href="#">Quick</button></li>
          <li><button href="#">Bubble</button></li>
          <li><button href="#">Radix</button></li>
        </ul>
      </div>
    );
  }
}

export default Top;