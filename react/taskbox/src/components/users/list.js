import React from 'react'
import {Link} from 'react-router-dom'
const UserList = (props) => {
    return (
        <div>
            <h2>Listing Users</h2>
            <Link to="/user/new"> Add User</Link>
        </div>
    )
}

export default UserList