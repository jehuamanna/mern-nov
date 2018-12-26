import React from 'react'
import axios from 'axios'

class Api extends React.Component{
    constructor() {
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(response =>{
            this.setState({
                users: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <ul>
                {this.state.users.map(function(user){
                    return <li>{user.username}</li>
                })}

                </ul>
            </div>
        )
    }

}
export default Api