import React, { Component } from 'react';

class Quotes extends Component {

    state = {
        quote: " ",
        author: " "
    }

    getQuote = () => {
        
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    quote: data.content,
                    author: data.author
                })
            })
    }

    componentDidMount(){
        this.getQuote()
    }

    render() {
        return (
            <div>
                <h2>Get Your Daily Quote</h2>
                <div id="quoteContainer">
                    <p>{this.state.quote}</p>
        <p id="quoteGenius">{this.state.author}</p>
                </div>

                <div id="buttonContainer">
                    <button id="quoteButton" onClick={this.getQuote}>Quote Me</button>
                </div>
            </div>
        )
    }
}

export default Quotes;
