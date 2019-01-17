import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import RandomQuoteApi from './random-quote-api'
import RandomQuoteLocal from './random-quote-local'
import AddQuote from './add-quote'
import ListAllQuotes from './list-all-quotes'
import axios from 'axios'


export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: {
                quoteText: '',
                quoteAuthor: '',
                quoteId: ''
            },
            randomQuote: '',
            localDB: localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []

        }
        this.getQuoteFromApi = this.getQuoteFromApi.bind(this)
        this.saveToLocal = this.saveToLocal.bind(this)
        this.editQuote = this.editQuote.bind(this)
        this.removeQuote = this.removeQuote.bind(this)
        this.getRandomQuote = this.getRandomQuote.bind(this)
        this.addQuote = this.addQuote.bind(this)
    }

    componentDidMount() {
        this.getQuoteFromApi()
    }

    getQuoteFromApi() {
        axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(function (response) {
            this.setState({
                quote: {
                    quoteText: response.data.quoteText,
                    quoteAuthor: response.data.quoteAuthor,
                    quoteId: Math.round(Math.random() * 10000000)
                }
            })
        }.bind(this))
    }

    saveToLocal() {
        let quoteO = {
            quoteText: this.state.quote.quoteText,
            quoteAuthor: this.state.quote.quoteAuthor,
            quoteId: this.state.quote.quoteId
        }
        let saved = false
        this.state.localDB.forEach(function (quote) {
            if (quote.quoteText === quoteO.quoteText) {
                saved = true
            }
        })
        if (!saved) {
            this.setState(function (prevState) {
                return {
                    localDB: [...prevState.localDB, quoteO]
                }
            }, () => {
                localStorage.setItem('quotes', JSON.stringify(this.state.localDB))

            })
            // localDB.push(quote)
        }
    }


    editQuote(quote, id) {
        console.log(id)

        let editedQuote = this.state.localDB.find(function (quote) {
            return quote.quoteId === id
        })

        editedQuote.quoteText = quote.quoteText
        editedQuote.quoteAuthor = quote.quoteAuthor
        localStorage.setItem('quotes', JSON.stringify(this.state.localDB))

    }

    removeQuote(id) {
        let deleteIndex
        this.state.localDB.forEach(function (quote, index) {
            if (quote.quoteId === id)
                deleteIndex = index
        })

        this.state.localDB.splice(deleteIndex, 1)
        localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
        this.setState({})

    }

    getRandomQuote() {
        let index = Math.floor(Math.random() * 100 % this.state.localDB.length)
        this.setState(function (prevState) {
            return {
                randomQuote: prevState.localDB[index]
            }
        })
    }

    addQuote(quoteO) {
        let saved = false
        this.state.localDB.forEach(quote => {
            if (quote.quoteText === quoteO.quoteText && quote.quoteAuthor === quoteO.quoteAuthor) {
                saved = true

            }
        })
        if (!saved) {
            this.setState(function(prevState){
                return {
                    localDB: [...prevState.localDB, quoteO]
                }
            }, () => {
                console.log(this.state.localDB)
                localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
            })
            
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Quotify</h1>
                    <Link to="/" >Random Quote (API)</Link> |
                    <Link to="/list-all-saved-quotes">Random Quote (Local)</Link> |
                    <Link to="/new-quote">Add Quote</Link> |
                    <Link to="/saved-quote">List All Quotes</Link>

                    <Route path="/" render={() => <RandomQuoteApi quote={this.state.quote} saveToLocal={this.saveToLocal} getQuoteFromApi={this.getQuoteFromApi} />} exact />
                    <Route path="/list-all-saved-quotes" render={() => <RandomQuoteLocal getRandomQuote={this.getRandomQuote} randomQuote={this.state.randomQuote} />} />
                    <Route path="/new-quote" render={() => <AddQuote addQuote={this.addQuote} />} />
                    <Route path="/saved-quote" render={() => <ListAllQuotes editQuote={this.editQuote} localDB={this.state.localDB} removeQuote={this.removeQuote} />} />

                </div>
            </BrowserRouter>


        )
    }
}