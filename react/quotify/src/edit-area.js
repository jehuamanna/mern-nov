import React from 'react'

export default class EditArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quoteText: this.props.quote.quoteText,
            quoteAuthor: this.props.quote.quoteAuthor

        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleUpdate() {
        let quote = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor
        }
        console.log(quote)
        this.props.editQuote(quote)

        this.props.changeEdit(false)
    }

    handleCancel() {
        this.props.changeEdit(false)
        console.log('hi')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <div>
                <textarea value={this.state.quoteText} cols="40" rows="20" name="quoteText" onChange={this.handleChange} ></textarea>
                <input value={this.state.quoteAuthor} type="text" name="quoteAuthor" onChange={this.handleChange} />
                <button type="text" onClick={this.handleUpdate}>Update</button>
                <button type="text" onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }
}