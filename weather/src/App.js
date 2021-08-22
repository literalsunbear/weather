import React from 'react';
import './App.css';
import Result from './Result';
import Effect from './Effect';
import dropdown from './images/expand_icon_white.svg';
import logo from './images/openweatherlogo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // input handling
      currentData: [], // tmp storage for data traversing/manip
      current: { // current weather data
        location: '',
        description: '',
        imgSrc: '',
        temp: '',
        max: '',
        min: ''
      },
      showEffect: false,
      showResult: false,
      showForecast: false,
      daytime: false,
      weatherCode: ''
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDropdown = (event) => {
    const dropdown = document.querySelector('.search-nav');
    const dropdownButton = document.querySelector('.dropdown-button');
    dropdown.classList.toggle('show');
    dropdownButton.classList.toggle('show');
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSearch = async (event) => {
    // remove nav
    this.handleDropdown();

    const key = '486715e03ac41999dee9a7594ce38c95';
    let currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

    this.setState({ showResult: false });
    this.setState({ showEffect: false });
    await new Promise(r => setTimeout(r, 750)); // sleep function //

    // remove main title for the rest of the session
    const mainTitle = document.querySelector('.main-title');
    if(!mainTitle) {
      //pass;
    } else {
      mainTitle.className="main-title-hide";
    }


    // ***temp disable for testing*** //
    try {
      const currentResponse = 
        await fetch(currentURL + this.state.inputValue + '&appid=' + key + '&units=imperial');
      this.setState({ currentData: [await currentResponse.json()] });

      console.log(this.state.currentData);

      if(this.state.currentData[0].dt >= this.state.currentData[0].sys.sunrise &&
        this.state.currentData[0].dt < this.state.currentData[0].sys.sunset) {
        this.setState({ daytime: true });
      } else {
        this.setState({ daytime: false })
      }
      this.setState({ weatherCode: this.state.currentData[0].weather[0].id });
      this.setState({ showEffect: true });


      // set the state of current weather for result module
      this.setState( () => ({
        current: {
          location: this.state.currentData[0].name,
          description: this.state.currentData[0].weather[0].description,
          imgSrc: `http://openweathermap.org/img/wn/${this.state.currentData[0].weather[0].icon}@2x.png`,
          temp: Math.round(this.state.currentData[0].main.temp),
          max: Math.round(this.state.currentData[0].main.temp_max),
          min: Math.round(this.state.currentData[0].main.temp_min),
        }
      }))
      this.setState({showResult: true});
    } catch(error) {
      alert('Please check your query and try again.')
    }
    // clear input value
    this.setState({ inputValue: '' }); 
  }

  render() {
    return (
      <div className='App'>
        <h1
        className="main-title">how's the weather?</h1>

        <div className='effects-container'>
          <Effect
            weatherCode={this.state.weatherCode}
            showEffect={this.state.showEffect}
            daytime={this.state.daytime}
          />
        </div>

        <div id="search-container">
          <div className="search-nav">
            <input 
            id="search-box"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="city, state, country"
            ></input>
            <button 
            type="button"
            onClick={this.handleSearch}>go</button>
            <img 
            className="dropdown-button"
            src={dropdown}
            onClick={this.handleDropdown}
            alt="dropdown icon"
            ></img>
          </div>
          
        </div>

        <div id="result-container">
          <Result 
          data={this.state.current}
          showResult={this.state.showResult}/>
        </div>

        <div id="footer">
          <p>built to spec per The Odin Project thanks to </p>
          <a
          href="https://openweathermap.org/"
          target="_blank"><img src={logo}></img></a>
        </div>
      </div>
    )
  }
}

export default App;
