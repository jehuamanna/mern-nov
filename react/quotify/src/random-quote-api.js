import React from 'react'
import axios from 'axios'

export default class RandomQuoteApi extends React.Component {
    constructor() {
        super()
        this.state = {
            quoteText: '',
            quoteAuthor: '',
            quoteId : '',
            buttonEnabled: false
        }

        this.getApiQuotes = this.getApiQuotes.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveToLocal = this.handleSaveToLocal.bind(this)
        this.getApiQuotes()

    }

    getApiQuotes() {
        axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(function (response) {
            this.setState({
                quoteText: response.data.quoteText,
                quoteAuthor: response.data.quoteAuthor,
                quoteId: Math.round(Math.random() * 10000000)
            })
        }.bind(this))
    }

    componentDidMount() {
        this.getApiQuotes()
    }

    handleChange(){
        this.getApiQuotes()
        this.setState({
            buttonEnabled:false
        })
    }

    handleSaveToLocal(){
        this.setState({
            buttonEnabled:true
        })

        let localDB = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        let saved = false
        let quoteSaved = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor,
            quoteId: this.state.quoteId
        }
        localDB.forEach(function(quote){
            if(quote.quoteText == quoteSaved.quoteText){
                saved = true
            }
        }.bind(this))
        if(!saved){
            localDB.push(quoteSaved)
            localStorage.setItem('quotes', JSON.stringify(localDB))

        }


    }


    render() {
        return (
            <div>
                <h2>{this.state.quoteText}</h2>
                <h3>-{this.state.quoteAuthor}</h3>
                <button type="button" onClick={this.handleSaveToLocal} disabled={ this.state.buttonEnabled}>Save To Local</button>
                <button onClick={this.handleChange}>Get Another Quote</button>
            </div>)
    }
}