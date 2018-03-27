import React, { Component } from 'react';
import Draggable from 'react-draggable';
import
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depth1: props.items,
      depth2: [],
      depth3: [],
      depth4: [],

      dic: props.dic
    };
  }

  render() {
    return (
      <div className="List">

      </div>
    );
  }
}

List.defaultProps = {
  items: [],
  dic: {}
}

export default List;
