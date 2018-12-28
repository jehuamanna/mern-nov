import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            loading: true
        }
    }


    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
            this.setState({
                user: response.data,
                loading: false
            })
        })
    }

    render () {
        console.log(this.props)
        return(
            <div>
                <h2> User Detail</h2>
                {
                    this.state.loading
                    ? <p>Loading</p>
                    : <div>
                    <p>id - {this.state.user.name}</p>
                    <p>email - {this.state.user.email}</p>
                    <p>username - {this.state.user.username}</p>
                    <Link to="/users" >back</Link>
                    </div>
                }
            </div>
        )
    }
}

export default ShowUser