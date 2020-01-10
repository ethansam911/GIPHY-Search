import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Trending from './Trending';

class App extends Component {
  render() {
    return (
            <div>
	    <Search />
            <Trending />
            </div>
    );
  }
}

export default App;
