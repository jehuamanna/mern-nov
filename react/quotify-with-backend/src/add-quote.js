import React from 'react'
import { Link } from 'react-router-dom'


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
        let quote = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor,
            quoteId: Math.round(Math.random() * 1000000)
        }
        this.props.addQuote(quote)
        this.setState({
            buttonDisabled: true
        })

    }

    render () {
        return (
        <div>
            <textarea  onChange={this.handleChange} name="quoteText" cols="40" rows="10"></textarea><br/>
            <input type="text" onChange={this.handleChange} name="quoteAuthor" /><br/>
            <Link to="/saved-quote"><button className="btn btn-success" onClick={this.buttonHandle} disabled={this.state.buttonDisabled}>Add Quote</button></Link>
        </div>
        )
    }
}