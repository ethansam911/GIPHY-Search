import React, { Component } from 'react';
import './App.css';
import Gifcard from './Gifcard';
import Search from './Search';
import Trending from './Trending';

class App extends Component {
  render() {
    return (
            <div>
	    <Search />
            <Trending />
	    <Gifcard />
            </div>
    );
  }
}

export default App;
