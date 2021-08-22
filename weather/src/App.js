import React from 'react';
import './App.css';
import Forecast from './Forecast';
import Result from './Result';
import Effect from './Effect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // input handling
      data: [], // tmp storage for data traversing/manip
      current: { // current weather data
        location: '',
        description: '',
        imgSrc: '',
        temp: '',
        max: '',
        min: '',
        humidity: ''
      },
      showEffect: false,
      showResult: false,
      showForecast: false,
      daytime: false,
      weatherCode: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSearch = async (event) => {
    const key = '486715e03ac41999dee9a7594ce38c95';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=';

    this.setState({ showResult: false });
    this.setState({ showEffect: false });
    await new Promise(r => setTimeout(r, 1000)); // sleep function //


    // ***temp disable for testing*** //
    // try {
    //   const response = 
    //     await fetch(url + this.state.inputValue + '&appid=' + key + '&units=imperial');
    //   this.setState({data: [await response.json()]});

    //   if(this.state.data[0].dt >= this.state.data[0].sys.sunrise &&
    //     this.state.data[0].dt < this.state.data[0].sys.sunset) {
    //     this.setState({daytime: true});
    //   } else {
    //     this.setState({daytime: false})
    //   }
    //   this.setState({weatherCode: this.state.data[0].weather[0].id})
    //   this.setState({showEffect: true});


      // set the state of current weather for result
    //   this.setState( () => ({
    //     current: {
    //       location: this.state.data[0].name,
    //       description: this.state.data[0].weather[0].description,
    //       imgSrc: `http://openweathermap.org/img/wn/${this.state.data[0].weather[0].icon}.png`,
    //       temp: this.state.data[0].main.temp,
    //       max: this.state.data[0].main.temp_max,
    //       min: this.state.data[0].main.temp_min,
    //       humidity: this.state.data[0].main.humidity + "%"
    //     }
    //   }))
    //   this.setState({showResult: true});
    // } catch(error) {
    //   alert('Please check your query and try again.')
    // }
    //*** end temp disable for testing ***/


      //** temp data for testing **/
      this.setState({ daytime: true });
      this.setState({ weatherCode: 801 });
      this.setState ({ showEffect: true });
      this.setState({ showResult: true })

      this.setState( () => ({
        current: {
          location: 'greenville',
          description: 'some clouds',
          imgSrc: 'http://openweathermap.org/img/wn/02d@2x.png',
          temp: '85',
          max: '89',
          min: '80',
          humidity: '80%'
        }
      }));
      //*** end temp data for testing ***//
  }

  render() {
    return (
      <div className='App'>

        <div className='effects-container'>
          <Effect
            weatherCode={this.state.weatherCode}
            showEffect={this.state.showEffect}
            daytime={this.state.daytime}
          />
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
          data={this.state.current}
          showResult={this.state.showResult}/>
        </div>

        <div id='forecast-container'>
          <Forecast />
        </div>

      </div>
    )
  }
}

export default App;
