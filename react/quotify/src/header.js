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
            buttonEnabled: false,
            localDB: localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []

        }
        this.getQuoteFromApi = this.getQuoteFromApi.bind(this)
    }

    componentDidMount() {
        this.getQuoteFromApi()
    }

    getQuoteFromApi(){
        axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(function (response) {
            this.setState({
                quote:{
                    quoteText: response.data.quoteText,
                    quoteAuthor: response.data.quoteAuthor,
                    quoteId: Math.round(Math.random() * 10000000)
                }
            })
        }.bind(this))
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

                    <Route path="/" render={() => <RandomQuoteApi quote={this.state.quote} />} exact />
                    <Route path="/list-all-saved-quotes" component={RandomQuoteLocal} />
                    <Route path="/new-quote" component={AddQuote} />
                    <Route path="/saved-quote" component={ListAllQuotes} />

                </div>
            </BrowserRouter>


        )
    }
}