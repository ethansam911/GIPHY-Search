import React, { Component } from 'react'
import axios from 'axios'

 class GifCard extends Component {
    constructor(props) 
    {
        super(props)
        this.state = 
        {
            data: []
        }
    }

    componentDidMount = () => 
    {
        axios.get("http://api.giphy.com/v1/gifs/trending?api_key=9Q9MsWs3RkTosk6qfAWA9lvzrrd7e4RL")
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })

            })

    }

    determineDisplay = () =>
     {
        if (this.state.data.length === 0) 
        {
            return null;
        } 
        else 
        {
            return (
                this.state.data.data.map((element) => 
                {
                    console.log(element)
                    return (<img src={element.images.original.url} alt="animated"></img>)
                })
            );
        }

    }


    render() {
        let display = this.determineDisplay();
        return (
            <div>
                {display}
            </div>
        )
    }
}


export default GifCard;