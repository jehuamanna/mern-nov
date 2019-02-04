import React from 'react'
import {Link} from 'react-router-dom'
import {removeUser} from '../../actions/users'
import {connect} from 'react-redux'

const UserShow = (props) => {
    return (
        <div>
            <p>username-{props.user.username}</p>
            <p>email - {props.user.email}</p>
            <p> mobile - {props.user.mobile}</p>
            <Link to="/users">back</Link>
            <Link to={`/users/edit/${props.user.id}`}>edit</Link>

            <button onClick={() =>{
                const confirm = window.confirm("Are you sure?")
                if(confirmDelete) {
                    props.dispatch(removeUser(props.user.id))
                    props.history.push('/users')
                }
                
            }}>
            delete
            </button>
        </div>
    )
}


const mapStateToProps= (state, props) =>{
    return {
        user: state.users.find(user=> user.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)