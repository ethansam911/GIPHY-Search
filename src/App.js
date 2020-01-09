import React, { Component } from 'react';
import './App.css';
import Trending from './Trending';
import Search from './Search';

class App extends Component {
  render() {
    return (
	    <div className="App">
	    <Trending/>
	    </div>
    );
  }
}

export default App;
