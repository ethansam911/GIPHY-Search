/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'


class Trending extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            data: [],
            display: false
        }
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if(this.state.display===false)
        {
            axios.get("http://api.giphy.com/v1/gifs/trending?api_key=" + "X0JVNouDUsrGBIINWA2b2ixSJgK45sKl")
		.then(response => {
                    this.setState({
			data: response.data.data,
			display: true
                    })
                    console.log(response.data.data);
                    
		})
        }
        else
        {
            this.setState({display: true});
        }
    }

    determineDisplay = () => {
        //If no data is returned, then return nothing
        if (this.state.data.length === 0) 
        {
            return null;
        } 
        else 
        {
            return (
                this.state.data.map((element) => {
                    return (
                            <img src={element.images.original.url} alt="animated"></img>
                           )
                })
            )
        }
    }
    render() {
        let display = this.determineDisplay();
        return (
		<div>
		<h1>Trending</h1>
                <button onClick={this.handleClick}>Trending</button> <br/>
		{display}
            </div>
        )
    }
}

export default Trending;
