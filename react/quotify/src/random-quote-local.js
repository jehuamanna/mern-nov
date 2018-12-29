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
        let index = Math.round(Math.random()*100 % localDB.length-1)
        this.setState({
            quote:localDB[index]
        })

    }


    render () {

        

        return (
            <div>
                <h2>{this.state.quote.quoteText}</h2>
                <h3>{this.state.quote.quoteAuthor}</h3>
                <button onClick={this.clickHandle} >Get Quote</button>
            </div>
        )
    }
}