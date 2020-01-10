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
	let searchTerm = event.target.value.replace(" ","+").toUpperCase();
	this.setState({prompt: searchTerm});
    }

    handleSubmit = event => {
	event.preventDefault();
	console.log("Submitted");
	this.fetchData();
    }

    fetchData = () => {
	axios.get('http://api.giphy.com/v1/gifs/search?q=' + this.state.prompt + '&api_key=' + 'X0JVNouDUsrGBIINWA2b2ixSJgK45sKl')
	    .then ( response => {
		console.log(response.data.data);
		this.setState({data: response.data.data});
	    })
	    .then( () => console.log(this.state.data))
	    .catch ( error => console.log(error));
    }

    displaySearchResults = () => {
	const {data} = this.state;
	if (data.length === 0){
	    return (<p>No Results</p>);
	}
	else {
	    let result = Object.keys(this.state.data).map( (element) => {
		return(
		       <img key={element} src={this.state.data[element].images.downsized.url} alt="gif"></img>
		      );
	    });
	    return result;
	}
    }

    render() {
	return (
		<div id="SearchForm">
		<form  onSubmit={this.handleSubmit}>
		<h1>Search</h1>
		<input type="text" placeholder="Search GIFY" onChange={this.handleChange}></input>
		<input type="submit" value="Submit"/>
		</form>
		<div id="SearchResults">
		{this.displaySearchResults()}
	    </div>
		
		</div>
	);
    }
};


export default Search;
