import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import WeatherDetail from './containers/weather_detail';

class App extends Component {
  render() {
    return (
      <div className='App container mt-3'>
        <SearchBar />
        <WeatherDetail />
        <WeatherList />
      </div>
    );
  }
}

export default App;
