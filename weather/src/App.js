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
      inputValue: '',
      //for testing purposes//
      test: '',
      sunny: false,
      cloudy: false,
      rainy: false,
      snowy: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTestClick = this.handleTestClick.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleTestClick = (event) => {
    this.setState({rainy: true});
    this.setState({test: this.state.inputValue});
    this.setState({inputValue: ''})
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
          <input 
          id="search-box"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}></input>
          <button 
          type="submit"
          onClick={this.handleTestClick}>search</button>
        </div>

        <div id="result-container">
          <Result 
          test={this.state.test}/>
        </div>

        <div className='forecast-container'>
          <Forecast />
        </div>

      </div>
    )
  }
}

export default App;
