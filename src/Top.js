import React, { Component } from 'react';
import MergeSort from './MergeSort.js';

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

        </ul>
      </div>
    );
  }
}

export default Top;