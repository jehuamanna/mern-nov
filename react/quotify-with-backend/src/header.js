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
            localDB:  []

        }
        this.getQuoteFromApi = this.getQuoteFromApi.bind(this)
        this.saveToLocal = this.saveToLocal.bind(this)
        this.editQuote = this.editQuote.bind(this)
        this.removeQuote = this.removeQuote.bind(this)
        this.getRandomQuote = this.getRandomQuote.bind(this)
        this.addQuote = this.addQuote.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/quotes')
            .then((response) => {
                this.setState({
                    localDB: response.data
                })
            })
        this.getQuoteFromApi()
    }

    getQuoteFromApi() {
        //axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(function (response) {
        axios.get('http://localhost:3001/quotes/new').then(function (response) {
                this.setState({
                quote: {
                    quoteText: response.data.quoteText,
                    quoteAuthor: response.data.quoteAuthor,
                    //quoteId: Math.round(Math.random() * 10000000)
                }
            })
        }.bind(this))
    }

    saveToLocal() {
        let quoteO = {
            quoteText: this.state.quote.quoteText,
            quoteAuthor: this.state.quote.quoteAuthor,
            //quoteId: this.state.quote.quoteId
        }
        axios.post('http://localhost:3001/quotes/new', quoteO)
            .then((response) => {
                
                this.setState({
                    quote:{
                        quoteText: response.data.quoteText,
                        quoteAuthor: response.data.quoteAuthor,
                        quoteId : response.data._id
                    }
                })
            })

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
                

            })
            // localDB.push(quote)
        }
    }


    editQuote(quote, id) {
        let editedQuote = this.state.localDB.find(function (quote) {
            return quote._id === id
        })
        editedQuote.quoteText = quote.quoteText
        editedQuote.quoteAuthor = quote.quoteAuthor
        //localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
        axios.put(`http://localhost:3001/quotes/${id}`, editedQuote)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err))

    }

    removeQuote(id) {
        console.log(id)
        let deleteIndex
        this.state.localDB.forEach(function (quote, index) {
            if (quote.quoteId === id)
                deleteIndex = index
        })
        this.state.localDB.splice(deleteIndex, 1)
        //localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
        axios.delete(`http://localhost:3001/quotes/${id}`).then((response) =>{
            console.log(response)
        })
        .catch((err)=> {console.log(err)})
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
                //localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
                axios.post('http://localhost:3001/quotes', quoteO)
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err))
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