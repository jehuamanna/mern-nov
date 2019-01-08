import React from 'react'
import DisplayEditQuotes from './display-edit-quotes';

export default class ListAllQuotes extends React.Component {
    constructor() {
        super()
        this.displayQuotes = this.displayQuotes.bind(this)
        this.editQuote = this.editQuote.bind(this)
        this.removeQuote = this.removeQuote.bind(this)

    }

    displayQuotes() {
        
        return (
            <div>
                {this.props.localDB.map(function (quote) {
                    return <DisplayEditQuotes key={quote.quoteId} removeQuote={this.removeQuote} editQuote={this.editQuote} quote={quote} />
                }.bind(this))}
            </div>
        )
    }

    

    editQuote(quote, id) {
        this.props.editQuote(quote, id)
    }

    removeQuote(id){
        this.props.removeQuote(id)
    }

    render() {
        return (
            <div>
                {this.displayQuotes()}
            </div>
        )
    }
}