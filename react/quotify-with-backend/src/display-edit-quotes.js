import React from 'react'
import DisplayQuote from './display-quote';
import EditArea from './edit-area';

export default class DisplayEditQuotes extends React.Component{
    constructor() {
        super()
        this.state={
            editing: false
        }
        this.changeEdit = this.changeEdit.bind(this)
        this.editQuote = this.editQuote.bind(this)
        this.removeQuote = this.removeQuote.bind(this)
    }

    changeEdit(value) {
        this.setState({
            editing:value
        })
    }

    editQuote(quote){
        this.props.editQuote(quote, this.props.quote._id)
    }   

    removeQuote(){
        this.props.removeQuote(this.props.quote._id)
    }


    render() {
        return (
            <div>
                {this.state.editing ? <EditArea quote={this.props.quote} editQuote={this.editQuote} changeEdit={this.changeEdit}/> : <DisplayQuote changeEdit={this.changeEdit} removeQuote={this.removeQuote} quote={this.props.quote}/>}
                
            </div>
        )
    }
}