import React, { Component } from 'react'
import NodeGroup from "react-move/NodeGroup";
import { range } from "d3-array";
import { easeExpOut } from "d3-ease";
import './index.css'

const Top = ({bubble, merge, insertion, quick, selection, turnGray}) =>  {
  console.log(merge)
  return (
    <div className="Top">
      <ul className="sort">
        <li><button onClick={bubble}>Bubble Sort</button></li>
        <li><button onClick={merge}>Merge Sort</button></li>
        <li><button onClick={selection}>Selection Sort</button></li>
        <li><button onClick={insertion}>Insertion Sort</button></li>
        <li><button onClick={quick}>Quick Sort</button></li>
        <li><button onClick={turnGray}>Turn Gray</button></li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {data: []},
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      lastPressed: 0,
      order: range(itemsCount),
      red:  {},
      blue: [],
      list: [],
      algoName: 'Sorting Algorithms!',
      category: '',
    }
  }

  renderNewItems(items) {
    this.turnGray()
    console.log(items.data)
    let out = []
    this.setState({algoName: items.name, category: items.category})

    items.data.forEach(item => {

      out.push(
        item.name
      )
    })
    console.log('out', out)
    this.setState({items: out, order: range(out.length)}, () => this.renderList(out))
    console.log('this.state', this.state)

  }

  componentDidMount() {
    this.renderNewItems({data: [], name: 'Sorting Algorithms!', category: ''})
  }

  renderMerge() {
    this.renderNewItems(merge)
  }

  renderInsertion() {
    this.renderNewItems(insertion)
  }

  renderQuick() {
    this.renderNewItems(quick)
  }

  renderBubble() {
    this.renderNewItems(bubble)
  }

  renderSelection() {
    this.renderNewItems(selection)
  }

  handleClick = (e) => {
    console.log(e, e.type)
  }

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

  turnGray = () => {
    this.setState({'red': {}})
  }

  handleMouseDown = (pos, pressY, { pageY, type}) => {
    console.log('pos', pos)
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      lastPressed: pos
    });
    window.addEventListener("onKeyPress", this.handleKeyPress);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  handleMouseMove = ({ pageY, pageX}) => {
    console.log('pageY', pageY, 'pageX', pageX)
    const { isPressed, topDeltaY, order, lastPressed } = this.state;
    if (pageX > 1500 && pageX < 2000) {
      const red = this.state.red;
      red[lastPressed] = 'red';
      this.setState({'red': red});
    } else if (pageX < 500 && pageX > 0) {
      const red = this.state.red;
      red[lastPressed] = false;
      this.setState({'red': red});
    } else if (pageX > 2000) {
      const red = this.state.red;
      red[lastPressed] = 'blue';
      this.setState({'red': red});
    } else if (pageX < 0) {
      const red = this.state.red;
      red[lastPressed] = 'yellow';
      this.setState({'red': red})
    }
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

    window.removeEventListener("onKeyPress", this.handleKeyPress);
    window.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("mousemove", this.handleMouseMove);
  };

  handleTouchEnd = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });

    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
  };


  renderList(items) {
    const { mouseY, isPressed, lastPressed, order } = this.state;
    let itemsCount = items.length
    const out = (<div className="demo-container">
        <NodeGroup
          data={range(itemsCount)}
          keyAccessor={d => `${d}`}
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
                    className={this.state.red[key] ? this.state.red[key] === 'red' ? "red-list-item" : 'blue-list-item' : "list-item"}
                    key={key}
                    onClick={e => this.handleClick(e)}
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

                    {`${order.indexOf(data) + 1}  -  ${items[key]}`}
                  </div>
                );
              })}
            </div>
          )}
        </NodeGroup>
      </div>);
    return out
  }

  render() {
    const newList = this.renderList(this.state.items)
    return (
      <div className="App">
        <h1 className="title">{this.state.algoName}</h1>
        <h2 className="algo-name">{this.state.category}</h2>
        <Top
          turnGray={() => this.turnGray()}
          selection={() => this.renderSelection()}
          merge={() => this.renderMerge()}
          insertion={() => this.renderInsertion()}
          quick={() => this.renderQuick()}
          bubble={() => this.renderBubble()}
        />
        {newList}
      </div>
    )
  }
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

let itemsCount = 16;
const itemHeight = 75; // set list-item height and line-height in css as well

const bubble = {
  name: 'Bubble Sort',
  category: 'Best Ninja Turtle',
  data: [
    {name: 'Leonardo', img: ''},
    {name: 'Donatelo', img: ''},
    {name: 'Michelangelo', img: ''},
    {name: 'Rafael', img: ''}
  ]
}

const merge = {
  name: 'Merge Sort',
  category: 'Best Tv Shows',
  data: [
    {name: 'South Park', img: ''},
    {name: 'Curb Your Enthusiasm', img: ''},
    {name: 'Broad City', img: ''},
    {name: 'Boondocks', img: ''},
    {name: 'Samarai Champloo', img: ''},
    {name: 'The Wire', img: ''},
    {name: 'Who\'s Line Is It Anyways', img: ''},
    {name: 'Game of Thrones', img: ''},
    {name: '', img: ''}
  ]
}

const selection = {
  name: 'Selection',
  category: 'Best Pro Sport',
  data: [
    {name: 'PGA', img: ''},
    {name: 'MLB', img: ''},
    {name: 'NBA', img: ''},
    {name: 'NHL', img: ''},
    {name: 'NFL', img: ''},
    {name: 'Premier League', img: ''},

  ]
}

const insertion = {
  name: 'Insertion',
  category: 'Worst Person',
  data: [
    {name: 'A Slow Driver', img: ''},
    {name: 'A Nazi', img: ''},
    {name: 'A Child', img: ''},
    {name: 'Drake', img: ''},
    {name: 'King Joffrey', img: ''},
    {name: 'Kim Jon Un', img: ''},
    {name: 'Person leaving cart in parking space', img: ''},
    {name: 'Murderer', img: ''}
  ]
}


const quick = {
  name: 'Quick Sort',
  category: 'Would win fight',
  data: [
    {name: 'Hailey + Crossbow', img: ''},
    {name: 'Robin + War Hammer', img: ''},
    {name: 'Cody + Broadsword', img: ''},
    {name: 'Rebecca + Spartan Spear and Shield', img: ''},
    {name: 'Lena + Shuriken', img: ''},
    {name: 'Chucky + Double-Katana', img: ''},
    {name: 'Peter + Sais', img: ''},
    {name: 'Ralph + Nunchaku', img: ''}

  ]
}

export default App