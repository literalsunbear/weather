import React from 'react';
import './App.css';
import Sunny from './Sunny';
import Cloudy from './Cloudy';
import Rainy from './Rainy';
import Snowy from './Snowy';
import Forecast from './Forecast';
import Result from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sunny: false,
      cloudy: true,
      rainy: false,
      snowy: false
    };
    this.handleTestClick = this.handleTestClick.bind(this);
  }

  handleTestClick = () => {
    this.setState({snowy: true});
  }

  render() {
    return (
      <div className='App'>

        <div className='effects-container'>
          <Sunny sunny={this.state.sunny}/>
          <Cloudy cloudy={this.state.cloudy}/>
          <Rainy rainy={this.state.rainy}/>
          <Snowy snowy={this.state.snowy}/>
        </div>

        <div id="search-container">
          <input id="search-box"></input>
          <button 
          type="submit"
          onClick={this.handleTestClick}>search</button>
        </div>

        <div id="result-container">
          <Result />
        </div>

        <div className='forecast-container'>
          <Forecast />
        </div>

      </div>
    )
  }
}

export default App;
