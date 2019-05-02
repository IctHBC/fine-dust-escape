import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './containers/header';

import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import WeatherDetail from './containers/weather_detail';

import InfoTable from './containers/info_table';
import Footer from './containers/footer';

class App extends Component {
  render() {
    return (
      <div className='App container mt-3'>
        <Header />
        <SearchBar />
        <WeatherDetail />
        <WeatherList />
        <InfoTable />
        <Footer/>
      </div>
    );
  }
}

export default App;
