import React, { Component } from 'react';
import './App.css';
import GifCard from './Gifcard'
import Trending from './Trending'


class App extends Component {
  render() {
    return (
        <div>
        <Trending /> 
        <GifCard />
        </div>
    );
  }
}

export default App;
