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
      data: [],
      current: {
        location: '',
        description: '',
        temp: '',
        max: '',
        min: '',
        humidity: ''
      },
      sunny: false,
      cloudy: false,
      rainy: false,
      snowy: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSearch = async (event) => {
    // use try/catch to handle errors //
    //****************************** */

    const key = '486715e03ac41999dee9a7594ce38c95';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=';

    const response = 
      await fetch(url + key + '&units=imperial');
    // console.log(await response);
    // console.log(await response.json());
    this.setState({data: [await response.json()]});

    // set the state of current weather
    this.setState(prevState => ({
      current: {
        location: this.state.data[0].name,
        description: this.state.data[0].weather[0].description,
        temp: this.state.data[0].main.temp,
        max: this.state.data[0].main.temp_max,
        min: this.state.data[0].main.temp_min,
        humidity: this.state.data[0].main.humidity + "%"
      }
  }))

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
          onClick={this.handleSearch}>search</button>
        </div>

        <div id="result-container">
          <Result 
          data={this.state.current}/>
        </div>

        <div id='forecast-container'>
          <Forecast />
        </div>

      </div>
    )
  }
}

export default App;
