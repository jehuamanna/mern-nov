import React from 'react'

export default class DisplayQuote extends React.Component {
    constructor() {
        super()

        this.clickEditHandle = this.clickEditHandle.bind(this)
        this.clickRemoveHandle = this.clickRemoveHandle.bind(this)
    }

    clickEditHandle() {
        this.props.changeEdit(true)
    }

    clickRemoveHandle() {
        this.props.removeQuote()
        console.log("hiii")
    }

    render() {
        let quote = this.props.quote
        return (
            <div>
                <div>{quote.quoteText}</div>
                <div>-{quote.quoteAuthor}</div>
                <button type="text" onClick={this.clickEditHandle} >Edit</button>
                <button type="text" onClick={this.clickRemoveHandle} >Remove</button>
            </div>
        )
    }
}