import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Search extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    prompt: "",
	    data: []
	};
    }

    handleChange = (event) => {
	let searchTerm = event.target.value.replace(/\s+/g,"+").toUpperCase();
	this.setState({prompt: searchTerm});
    }

    handleSubmit = (event) => {
	event.preventDefault();
	console.log("Prompt: " + this.state.prompt);
	this.fetchData();
    }

    fetchData = () => {
	axios.get("api.giphy.com/v1/gifs/search?q=" + this.state.prompt + '&api_key=X0JVNouDUsrGBIINWA2b2ixSJgK45sKl')
	    .then ( response => {
		this.setState({data: response.data});
	    })
	    .then ( () => console.log(this.state.data))
	    .catch ( error => console.log(error));
    }

    displaySearchResults = () => {
	const {data} = this.state;
	if(data.length !== 0){
	    let result = Object.keys(this.state.data).map( (dataKey) => {
		return <p className="city" key={dataKey}>{this.state.data[dataKey]}</p>;
	    });
	    return result;
	}
	else {
	    return (<p>No Results</p>);
	}
    }

    render() {
	return (
		<div id="SearchForm">
		
		<form onSubmit={this.handleSubmit}>
		<h1>Search</h1>
		<input id="searchPrompt" type="text" placeholder="Search GIPHY" onChange={this.handleChange}>Search GIPH</input>
		<button type="submit">Submit</button>
		</form>
		
		<div id="SearchResults">
		{this.displaySearchResults()}
	    </div>
		
		</div>
	);
    }
};

Search.propType = {
    prompt: PropType.string
}

export default Search;
