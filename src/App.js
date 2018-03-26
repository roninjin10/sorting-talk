import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { CSSTransitionGroup } from 'react-transition-group'
import NodeGroup from "react-move/NodeGroup";
import { range } from "d3-array";
import { easeExpOut } from "d3-ease";
import './index.css'

const Top = ({merge, insertion, quick}) =>  {
  console.log(merge)
  return (
    <div className="Top">
      <ul className="sort">
        <li><button onClick={merge}>Merge Sort</button></li>
        <li><button onClick={insertion}>Insertion Sort</button></li>
        <li><button onClick={quick}>Quick Sort</button></li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  renderNewItems(items) {
    console.log(items)
    let out = []

    let bottom = 500
    let right = 0

    items.forEach(item => {

      out.push(
        <CSSTransitionGroup
          key={item.name}
          transitionName="styles.itemtransition"
          transitionEnterTimeout={ 1000 }
          transitionLeaveTimeout={ 300 }
        >
          <Item
            name={item.name}
            image={item.image}
            bottom={bottom}
            right={right}
          />
        </CSSTransitionGroup>
      )
      if (right < 1700){
        right += 170
      } else {
        right = 0
        bottom -= 200
      }

    })
    console.log('out', out)
    this.setState({items: out})
    console.log('this.state', this.state)
  }

  componentDidMount() {
    this.renderNewItems(merge.data)
  }

  renderMerge() {
    this.renderNewItems(merge.data)
  }

  renderInsertion() {
    this.renderNewItems(insertion.data)
  }

  renderQuick() {
    this.renderNewItems(quick.data)
  }

  runMergeSort() {
    let items = this.state.items.slice()


  }
/*
const mergeSort = array => {
  if (array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length/2)
  const front = array.slice(0, middle)
  const back = array.slice(middle, array.length)

  return mergeStep(mergeSort(front), mergeSort(back))
}

const mergeStep = (array1, array2) => {
  let out = []
  while (array1.length && array2.length) {
    let x1 = array1[0]
    let x2 = array2[0]

    if (compare(x1, x2)) {
      out.push(x1)
      array1.shift()
    } else {
      out.push(x2)
      array2.shift()
    }
  }
  return out.concat(array1, array2)
}
*/
  render() {
    return (
      <div className="App">
        <h1 className="title">Sorting Algorithms!</h1>
        <Top
          merge={() => this.renderMerge()}
          insertion={() => this.renderInsertion()}
          quick={() => this.renderQuick()}
        />
        <div>{this.state.items}</div>
        <Demo
          items={this.state.items}
          order={this.state.items.length}
        />
      </div>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <Draggable>
        <div className="box" style={{position: 'absolute', bottom: this.props.bottom, right: this.props.right}}>
          <h4 className="box-text">{this.props.name}</h4>
        </div>
      </Draggable>
    )
  }
}
/*
<Draggable>
          <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}}>
            I already have an absolute position.
          </div>
        </Draggable>
*/
const compare = (a, b) => a > b

const mergeSort = array => {
  if (array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length/2)
  const front = array.slice(0, middle)
  const back = array.slice(middle, array.length)

  return mergeStep(mergeSort(front), mergeSort(back))
}

const mergeStep = (array1, array2) => {
  let out = []
  while (array1.length && array2.length) {
    let x1 = array1[0]
    let x2 = array2[0]

    if (compare(x1, x2)) {
      out.push(x1)
      array1.shift()
    } else {
      out.push(x2)
      array2.shift()
    }
  }
  return out.concat(array1, array2)
}

const merge = {
  name: 'Merge',
  category: 'Best Tv Shows',
  data: [
    {name: 'The Wire', img: ''},
    {name: 'Breaking Bad', img: ''},
    {name: 'South Park', img: ''},
    {name: 'Game of Thrones', img: ''},
    {name: 'Curb Your Enthusiasm', img: ''},
    {name: 'Parks and Rec', img: ''},
    {name: 'Chappelles Show', img: ''},
    {name: 'Broad City', img: ''},
    {name: 'Boondocks', img: ''},
    {name: 'King of the Hill', img: ''},
    {name: 'Samarai Champloo', img: ''},
    {name: 'Fullmetal Alchemist', img: ''},
    {name: 'Who\'s Line Is It Anyways', img: ''},
    {name: 'Judge Judy', img: ''},
    {name: 'Silicon Valley', img: ''},
    {name: 'The Fresh Pricne of Bel-Air', img: ''},
  ]
}

const insertionSort = array => {
  let out = []
  for (let i = 0; i < array.length; i++) {
    let next = array.shift()
    let insertIndex = out.length
    while(insertIndex && compare(next, out[insertIndex])) {
      insertIndex--
    }
    out.splice(insertIndex,0,next)
  }
  return out
}

const insertion = {
  name: 'Insertion',
  category: 'Worst People',
  data: [
    {name: 'A Slow Driver', img: ''},
    {name: 'A Nazi', img: ''},
    {name: 'A Child', img: ''},
    {name: 'Drake', img: ''},
    {name: 'King Joffrey', img: ''},
    {name: 'Kim Jon Un', img: ''},
    {name: 'Leaver of shopping cart in parking space', img: ''},
    {name: 'William Cory', img: ''}
  ]
}


const quick = {
  name: 'Quick Sort',
  category: 'Would win fight',
  data: [
    {name: 'Hailey with crossbow', img: ''},
    {name: 'Robin with war hammer', img: ''},
    {name: 'Cody with broadsword', img: ''},
    {name: 'Chucky with katana', img: ''},
    {name: 'Peter with sais', img: ''},
    {name: 'Ralph with nunchaku', img: ''},
    {name: 'Rebecca with spartan spear and shield', img: ''},
    {name: 'Lena with shuriken', img: ''}
  ]
}

// Movable List


function updateOrder(arr, beg, end) {
  const copy = arr.slice(0);
  const val = copy[beg];
  copy.splice(beg, 1);
  copy.splice(end, 0, val);
  return copy;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const itemsCount = 5;
const itemHeight = 75; // set list-item height and line-height in css as well

class Demo extends Component {
  state = {
    topDeltaY: 0,
    mouseY: 0,
    isPressed: false,
    lastPressed: 0,
    order: range(itemsCount)
  };

  handleTouchStart = (pos, pressY, { touches: [{ pageY }] }) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      lastPressed: pos
    });

    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);
  };

  handleTouchMove = e => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseDown = (pos, pressY, { pageY }) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      lastPressed: pos
    });

    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  handleMouseMove = ({ pageY }) => {
    const { isPressed, topDeltaY, order, lastPressed } = this.state;

    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(
        Math.round(mouseY / itemHeight),
        0,
        itemsCount - 1
      );
      let newOrder = order;

      if (currentRow !== order.indexOf(lastPressed)) {
        newOrder = updateOrder(order, order.indexOf(lastPressed), currentRow);
      }

      this.setState({ mouseY, order: newOrder });
    }
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });

    window.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("mousemove", this.handleMouseMove);
  };

  handleTouchEnd = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });

    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
  };

  render() {
    const { mouseY, isPressed, lastPressed, order } = this.state;

    return (
      <div className="demo-container">
        <NodeGroup
          data={range(itemsCount)}
          keyAccessor={d => `item-key-${d}`}
          start={d => ({
            scale: 1,
            shadow: 1,
            y: order.indexOf(d) * itemHeight
          })}
          update={d => {
            const dragging = lastPressed === d && isPressed;

            return {
              scale: [dragging ? 1.1 : 1],
              shadow: [dragging ? 5 : 1],
              y: [order.indexOf(d) * itemHeight],
              timing: { duration: 350, ease: easeExpOut }
            };
          }}
        >
          {nodes => (
            <div className="list">
              {nodes.map(({ key, data, state }) => {
                const { shadow, scale, y } = state;
                const transY = lastPressed === data && isPressed ? mouseY : y;

                return (
                  <div
                    className="list-item"
                    key={key}
                    onMouseDown={e => this.handleMouseDown(data, y, e)}
                    onTouchStart={e => this.handleTouchStart(data, y, e)}
                    style={{
                      boxShadow: `rgba(0, 0, 0, 0.4) 0px ${shadow}px ${2 *
                        shadow}px 0px`,
                      transform: `translate3d(0, ${transY}px, 0) scale(${scale})`,
                      WebkitTransform: `translate3d(0, ${transY}px, 0) scale(${scale})`,
                      zIndex: data === lastPressed ? 99 : data
                    }}
                  >
                    {order.indexOf(data) + 1}
                  </div>
                );
              })}
            </div>
          )}
        </NodeGroup>
      </div>
    );
  }
}


export default App