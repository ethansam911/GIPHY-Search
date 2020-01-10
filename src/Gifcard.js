import React, { Component } from 'react'
import axios from 'axios'

class GifCard extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            data: [],
            display: false
        }
    }
    handleClick = () => {

        if (this.state.display === false) {
            axios.get("http://api.giphy.com/v1/gifs/random?api_key=X0JVNouDUsrGBIINWA2b2ixSJgK45sKl")
                .then(response => {
                    this.setState({
                        data: response.data,
                        display: true
                    })
                    console.log(response.data);

                })
        }
        else {
            this.setState({ display: true });
        }
    }


    determineDisplay = () => {
        //If no data is returned, then return nothing
        if (this.state.data.length === 0) 
        {
            return null;
        }
        else {
            return (
                this.state.data.map((element) => {
                    return (<div class="gif">
                        <img src={element.images.original.url} alt="animated"></img>
                    </div>
                    )
                })
            )

        }
    }

    render() {
        let display = this.determineDisplay();
        return (
            <div>
                <button onClick={this.handleClick}>Random</button>
                {display}
            </div>
        )
    }
}


export default GifCard;