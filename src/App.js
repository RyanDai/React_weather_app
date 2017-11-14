import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles.css';
import Header  from './Header';
import Footer  from './Footer';
import WeatherChannel from './WeatherChannel';




class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}

export default App;
