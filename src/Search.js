/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Search extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    data: [],
	    prompt: ""
	};
	this.handleChange = this.handleChange.bind(this);
    }

    //chnages the prompt state for fetchData()
    handleChange = (event) => {
	let searchTerm = event.target.value.replace(/\s+/g,"+").toUpperCase();
	this.setState({prompt: searchTerm});
    }

    fetchData = () => {
	axios.get("http://api.giphy.com/v1/gifs/search?q=" + this.state.prompt + '&api_key=X0JVNouDUsrGBIINWA2b2ixSJgK45sKl')
	    .then ( response => {
		this.setState({data: response.data.data[0]});
	    })
	    .catch ( error => console.log(error));
    }

    displaySearchResults = () => {
	if (this.state.data.length === 0){
	    return (<p>No Results</p>);
	}
	else {
	    this.state.data.map( (element) => {
		return(<div className="gif">
		       <img src={element.images.original.url} alt="animated"> </img>;
		       </div>
		      )
	    });
	}
    }

    render() {
	return (
		<div id="SearchForm">
		<form onSubmit={this.fetchData}>
		<h1>Search</h1>
		<input type="text" placeholder="Search GIFY" onChange={this.handleChange}></input>
		<button type="submit">Submit</button>
		</form>
		<div id="SearchResults">
		{this.displaySearchResults()}
	    </div>
		
		</div>
	);
    }
};

Search.propTypes = {
    prompt: PropTypes.string
}

export default Search;
