import React from 'react'

export default class AddQuote extends React.Component {
    constructor () {
        super()
        this.state= {
            quoteText: "",
            quoteAuthor: "",
            buttonDisabled: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.buttonHandle = this.buttonHandle.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({
            buttonDisabled: false
        })
    }
    
    buttonHandle(){
        let localDB = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        let quote = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor,
            quoteId: Math.round(Math.random() * 1000000)
        }
        console.log(quote)
        let saved = false
        localDB.forEach(quote => {
            if(quote.quoteText === this.state.quoteText && quote.quoteAuthor === this.state.quoteAuthor){
                saved = true
                
            }
        })
        if(!saved){
            this.setState({
                buttonDisabled: true
            })
            localDB.push(quote)
            localStorage.setItem('quotes', JSON.stringify(localDB))
        }

    }

    render () {
        return (
        <div>
            <textarea  onChange={this.handleChange} name="quoteText" cols="40" rows="20"></textarea><br/>
            <input type="text" onChange={this.handleChange} name="quoteAuthor" /><br/>
            <button class="btn btn-success" onClick={this.buttonHandle} disabled={this.state.buttonDisabled}>Add Quote</button>
        </div>
        )
    }
}