<<<<<<< HEAD
import React, { Component } from 'react'
import axios from 'axios'

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingSearch:"",
            data: []
        }
    }

    handleChange = (event) => {
        this.setState({trendingSearch: event.target.value});   
    }

    handleClick = () => {
        axios.get("http://api.giphy.com/v1/gifs/trending?api_key=" + "X0JVNouDUsrGBIINWA2b2ixSJgK45sKl")
            .then(response => {
                this.setState({
                    data: response.data.data
                })
                console.log(response.data.data)
            })
=======
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
>>>>>>> trending
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
<<<<<<< HEAD
                    return (
			    <div class="gif">
                            <img src={element.images.original.url} alt="animated"></img>
                            </div>
                    );
                })
            )	    
=======
                    return (<div class="gif">
                        <img src={element.images.original.url} alt="animated"></img>
                        </div>
                        )
                })
            )

>>>>>>> trending
        }
    }
    render() {
        let display = this.determineDisplay();
        return (

<<<<<<< HEAD
		<div>
                <input id="search" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Submit</button>
=======
            <div>
                <button onClick={this.handleClick}>Trending</button>
>>>>>>> trending
                {display}
            </div>
        )
    }
}

export default Trending;
