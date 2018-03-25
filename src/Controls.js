import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <ul className="controls">
          <li><button>Swap</button></li>
          <li><button>Compare</button></li>
          <li><button>Move</button></li>
        </ul>
      </div>
    );
  }
}

export default Controls;
