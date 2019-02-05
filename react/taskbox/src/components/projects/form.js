import React from 'react'
import uuid from 'uuid'

class ProjectForm extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            id: uuid(),
            name: '',
            description: '',
            status: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit = (event) =>{
        event.preventDefault()
        const formData= {
            id: uuid(),
            name: this.state.name,
            description: this.state.description
        }

        this.props.onSubmit(formData)
        this.setState({
            id:'',
            name: '',
            description: ''
        })
    }

    handleNameChange = (event) => {
        const name = event.target.value
        this.setState({name})
    }

    handleDescriptionChange = (event) => {
        const description = event.target.value
        this.setState({description})
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label> <br/>
                    <label>
                        description
                        <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>

                        </label> <br/>
                        <input type="submit" value="submit" />
                </form>
            </div>
        )
    }

}



export default ProjectForm