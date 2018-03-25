import React, { Component } from 'react';
import Draggable from 'react-draggable';


const Top = ({merge, insertion, heap, quick}) =>  {

  return (
    <div className="Top">
      <ul className="sort">
        <li><button onclick={merge}>Merge Sort</button></li>
        <li><button onclick={insertion}>Insertion Sort</button></li>
        <li><button onclick={heap}>Heap Sort</button></li>
        <li><button onclick={quick}>Quick Sort</button></li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  renderNewItems(items) {
    let out = []

    let bottom = 500
    let right = 0

    items.forEach(item => {

      out.push(
        <Item
          name={item.name}
          image={item.image}
          bottom={bottom}
          right={right}
        />
      )
      if (right < 1700){
        right += 170
      } else {
        right = 0
        bottom -= 200
      }

    })

    this.setState({items: out});
  }

  componentDidMount() {
    this.renderNewItems(merge.data)
  }


  render() {
    return (
      <div className="App">
        <h1 className="title">Sorting Algorithms!</h1>
        <Top
          merge={() => this.renderNewItems(merge.data)}
          insertion={() => this.renderNewItems(insertion.data)}
          heap={() => this.renderNewItems(heap.data)}
          merge={() => this.renderNewItems(quick.data)}
        />
        <div>{this.state.items}</div>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <Draggable>
        <div className="box" style={{position: 'absolute', bottom: this.props.bottom, right: this.props.right}}>
          <img src={this.props.image} alt={this.props.name} width="160" height="100" />
        </div>
      </Draggable>
    );
  }
}
/*
<Draggable>
          <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}}>
            I already have an absolute position.
          </div>
        </Draggable>
*/

let sortingData = {}
const merge = {
  name: 'Merge',
  category: 'Best Tv Shows',
  data: [
    {name: 'Sopranos', img: ''},
    {name: 'The Wire', img: ''},
    {name: 'Breaking Bad', img: ''},
    {name: 'Seinfeld', img: ''},
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
    {name: 'Westworld', img: ''},
    {name: 'Who\'s Line Is It Anyways', img: ''},
    {name: 'Judge Judy', img: ''},
    {name: 'Weeds', img: ''},
    {name: 'Silicon Valley', img: ''},
    {name: 'The Fresh Pricne of Bel-Air', img: ''},
    {name: 'Making the Band 2', img: ''}
  ]
}

const insertion = {
  name: 'Insertion',
  category: 'Worst People',
  data: [
    'A Slow Driver',
    'A Nazi',
    'A Child',
    'Drake',
    'King Joffrey',
    'Kim Jon Un',
    'Leaver of shopping cart in parking space',
    'William Cory'
  ]
}

const heap = {
  name: 'HeapSort',
  category: 'Best Cities',
  data: [
    'Columbus',
    'San Francisco',
    'New York City',
    'San Diego',
    'Los Angeles',
    'Chicago',
    'Portland',
    'Seattle',
    'Washington DC',
    'Pittsburgh',
    'Denver',
    'Las Vegas'
  ]
}

const quick = {
  name: 'Quick Sort',
  category: 'Would win fight',
  data: [
    'Hailey with crossbow',
    'Robin with war hammer',
    'Cody with broadsword',
    'Chucky with katana',
    'Peter with sais',
    'Ralph with nunchaku',
    'Rebecca with spartan spear and shield',
    'Lena with shuriken'
  ]
}

export default App