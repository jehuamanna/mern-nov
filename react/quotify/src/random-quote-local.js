import React from 'react'

export default class RandomQuoteLocal extends React.Component {

    constructor() {
        super()
        this.clickHandle = this.clickHandle.bind(this)
        
    }

    componentDidMount(){
        this.clickHandle()
    }

    clickHandle() {
        this.props.getRandomQuote()

    }

    displayQuote(){
        return (
            <div>
                <h2>{this.props.randomQuote.quoteText}</h2>
                <h3>{this.props.randomQuote.quoteAuthor}</h3>
                <button className="btn btn-primary" onClick={this.clickHandle} >Get Quote</button>
            </div>
        )
    }

    displayMessage() {
        return <h2>Please save some quotes</h2>
    }

    render () {

        return( this.props.randomQuote? 
        this.displayQuote(): this.displayMessage()
        )
    }
}