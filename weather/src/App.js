import React from 'react';
import './App.css';
import Sunny from './Sunny';
import Cloudy from './Cloudy';
import Rainy from './Rainy';
import Snowy from './Snowy';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sunny: true,
      cloudy: false,
      rainy: false,
      snowy: false
    }
  }

  render() {
    return (
      <div class='App'>

        <div class='effects-container'>
          <Sunny sunny={this.state.sunny}/>
          <Cloudy cloudy={this.state.cloudy}/>
          <Rainy rainy={this.state.rainy}/>
          <Snowy snowy={this.state.snowy}/>
        </div>

        <div id="search-container">
          <input id="search-box"></input>
          <button 
          type="button">search</button>
        </div>

        <div class='results-container'>
          <Results />
        </div>

      </div>
    )
  }

}

export default App;
