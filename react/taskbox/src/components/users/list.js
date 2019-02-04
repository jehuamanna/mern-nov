import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const UserList = (props) => {
    return (
        <div>
            <h2>Listing Users  {props.users.length}</h2>
            <ul>
                {props.users.map(user => {
                    return <li key={user.id}><Link to={`/users/${user.id}`} >{user.username}</Link> </li>
                })}
            </ul>
            <Link to="/users/new"> Add User</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps)(UserList)