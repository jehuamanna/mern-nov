import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            department: 'hr',
            priority: '',
            message: ''
        }
        this.changeHandle = this.changeHandle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeHandle(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        console.log(formData)
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=6fc7ce15eecbbb73', formData).then(function(response){
            this.props.setData(response.data)
        }.bind(this))

    }

    render() {
        return (
            <div>
                <h2>Add Ticket</h2>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.name} onChange={this.changeHandle} name="name" />
                    </label><br/>

                    <label>Department
                    <select value={this.state.department} name="department" onChange={this.changeHandle}>
                            <option value="Sales">Sales</option>
                            <option value="hr">Hr</option>
                            <option value="technical">Technical</option>
                        </select>
                    </label><br/>

                    <label>
                        Priority
                    <input type="radio" name="priority" value="high" onChange={this.changeHandle}/> High
                    <input type="radio" name="priority" value="medium" onChange={this.changeHandle}/> Medium
                    <input type="radio" name="priority" value="low" onChange={this.changeHandle}/> Low
                    </label><br/>
                    <label>
                        Message
                        <textarea value={this.state.message} name="message" onChange={this.changeHandle}></textarea>
                    </label><br/>

                    <input type="submit" value="submit"/>

                </form>
            </div>
        )
    }
}

export default Form