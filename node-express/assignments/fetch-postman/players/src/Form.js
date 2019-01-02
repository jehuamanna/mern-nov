import React from 'react'

export default class Form extends React.Component {
    constructor(){
        super()
        this.state={
            id:'',
            name:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
        this.props.submitData(this.state)
        this.setState({
            id: "",
            name: ""
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div>
                <label>
                    ID:
                    <input type="text" name="id" onChange={this.handleChange} value={this.state.id} />
                    <br/>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <br/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleClick}/>
            </div>
        )
    }
}