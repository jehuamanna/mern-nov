import React from 'react'
import DisplayEditQuotes from './display-edit-quotes';

export default class ListAllQuotes extends React.Component {
    constructor() {
        super()
        this.state = {
            localDB: [],
            editing: false
        }
        this.displayQuotes = this.displayQuotes.bind(this)
        this.editQuote = this.editQuote.bind(this)
        this.removeQuote = this.removeQuote.bind(this)

    }

    displayQuotes() {
        
        return (
            <div>
                {this.state.localDB.map(function (quote) {
                    return <DisplayEditQuotes removeQuote={this.removeQuote} editQuote={this.editQuote} quote={quote} />
                }.bind(this))}
            </div>
        )
    }

    componentDidMount() {
        let localDB = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        this.setState({
            localDB: localDB
        })
    }

    editQuote(quote, id) {
        console.log(id)

        let editedQuote = this.state.localDB.find(function (quote) {
            return quote.quoteId == id
        })

        editedQuote.quoteText = quote.quoteText
        editedQuote.quoteAuthor = quote.quoteAuthor
        localStorage.setItem('quotes', JSON.stringify(this.state.localDB))

    }

    removeQuote(id){
        let deleteIndex
        this.state.localDB.forEach(function (quote, index) {
            if(quote.quoteId == id)
                deleteIndex = index
        })

        console.log(deleteIndex)
        this.state.localDB.splice(deleteIndex, 1)
        localStorage.setItem('quotes', JSON.stringify(this.state.localDB))
        this.setState({})

    }

    render() {
        return (
            <div>
                {this.displayQuotes()}
            </div>
        )
    }
}