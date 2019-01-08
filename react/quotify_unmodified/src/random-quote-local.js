import React from 'react'

export default class RandomQuoteLocal extends React.Component {

    constructor() {
        super()
        this.clickHandle = this.clickHandle.bind(this)
        this.state= { 
            quote: "" 
        }
        
    }

    componentDidMount(){
        this.clickHandle()
    }

    clickHandle() {
        let localDB = localStorage.getItem('quotes')? JSON.parse(localStorage.getItem('quotes')) : []
        let index = Math.floor(Math.random()*100 % localDB.length)
        console.log(index)
        this.setState({
            quote:localDB[index]
        })

    }

    displayQuote(){
        return (
            <div>
                <h2>{this.state.quote.quoteText}</h2>
                <h3>{this.state.quote.quoteAuthor}</h3>
                <button class="btn btn-primary" onClick={this.clickHandle} >Get Quote</button>
            </div>
        )
    }

    displayMessage() {
        return <h2>Please save some quotes</h2>
    }

    render () {

        return(
        this.state.quote?
         this.displayQuote()
        
        : this.displayMessage()
        )
    }
}