import React from 'react'

export default class RandomQuoteApi extends React.Component {
    constructor() {
        super()
        this.state = {
            buttonEnabled: false
        }

        this.getApiQuotes = this.getApiQuotes.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveToLocal = this.handleSaveToLocal.bind(this)
        this.getApiQuotes = this.getApiQuotes.bind(this)

    }

    getApiQuotes() {
        this.props.getQuoteFromApi()
        
    }

    componentDidMount() {
        this.getApiQuotes()
    }

    handleChange(){
        this.getApiQuotes()
        this.setState({
            buttonEnabled:false
        })
    }

    handleSaveToLocal(){
        this.setState({
            buttonEnabled:true
        })
        this.props.saveToLocal()

    }

    


    render() {
        return (
            <div>
                <h2>{this.props.quote.quoteText}</h2>
                <h3>-{this.props.quote.quoteAuthor}</h3>
                <button className="btn btn-success" type="button" onClick={this.handleSaveToLocal} disabled={ this.state.buttonEnabled}>{ this.state.buttonEnabled?"Saved":'Save To Local'}</button>
                <button className="btn btn-secondary" onClick={this.handleChange}>Get Another Quote</button>
            </div>)
    }
}