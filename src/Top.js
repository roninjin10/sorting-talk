import React, { Component } from 'react';
import MergeSort from './MergeSort.js';
import QuickSort from './QuickSort.js';

const merge = {
  name: 'Merge',
  category: 'Best Tv Shows',
  data: [
    'Sopranos',
    'The Wire',
    'Breaking Bad',
    'Seinfeld',
    'South Park',
    'Game of Thrones',
    'Curb Your Enthusiasm',
    'Parks and Rec',
    'Chappelles Show',
    'Broad City',
    'Boondocks',
    'King of the Hill',
    'Samarai Champloo',
    'Fullmetal Alchemist',
    'Westworld',
    'Who\'s Line Is it Anyways',
    'Judge Judy',
    'Weeds',
    'Silicon Valley',
    'The Fresh Prince of Bel-Air',
    'Making the Band 2'
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
    'William Cory',
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
    'Las Vegas',
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

const bucket = {
  name: 'Bucket Sort',
  category: `
    Favorite Food:
    Buckets: extrem
  `,
  data: [

  ]
}


class Top extends Component {

  render() {
    return (
      <div className="Top">
        <ul className="sort">
          <MergeSort
          name={merge.name}
          category={merge.category}
          data={merge.data}
          />

          <QuickSort
          name={quicksort.name}
          category={quicksort.category}
          data={quicksort.data}
          />
        </ul>
      </div>
    );
  }
}

export default Top;