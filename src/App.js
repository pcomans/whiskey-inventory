import React from 'react';
import './App.css';
import { Status, Whiskey } from './Whiskey';
import WhiskeyList from './WhiskeyList';
import FilterSelector, {AllSelected} from './FilterSelector';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedFilter: AllSelected,
      whiskeys: [
        new Whiskey(
          "Colonel E.H. Taylor",
          "Straight Kentucky Bourbon",
          2020,
          Status.HAVE
        ),
        new Whiskey(
          "Smoke Wagon",
          "Uncut and Unfiltered",
          2020,
          Status.WANT
        )
      ]
    };
  }
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Whiskey Inventory</h1>
        </header>
        <FilterSelector onChange={this.onFilterChanged} value={this.state.selectedFilter}/>
        <WhiskeyList whiskeys={this.state.whiskeys} filter={this.state.selectedFilter}>

        </WhiskeyList>
      </div>
    );
  }
  onFilterChanged = (filter) => {
    this.setState(
      {
        selectedFilter: filter
      }
    );
  }
}

export default App;
