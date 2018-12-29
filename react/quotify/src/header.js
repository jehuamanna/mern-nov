import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import RandomQuoteApi from './random-quote-api'
import RandomQuoteLocal from './random-quote-local'
import AddQuote from './add-quote'
import ListAllQuotes from './list-all-quotes'

export default class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Quotify</h1>
                    <Link to="/" >Random Quote (API)</Link> | 
                    <Link to="/list-all-saved-quotes">Random Quote (Local)</Link> | 
                    <Link to="/new-quote">Add Quote</Link> | 
                    <Link to="/saved-quote">List All Quotes</Link> 

                    <Route path="/" component={RandomQuoteApi} exact/>
                    <Route path="/list-all-saved-quotes" component={RandomQuoteLocal}/>
                    <Route path="/new-quote" component={AddQuote}/>
                    <Route path="/saved-quote" component={ListAllQuotes} />

                </div>
            </BrowserRouter>


        )
    }
}