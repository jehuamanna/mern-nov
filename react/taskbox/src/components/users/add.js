import React from 'react'
import UserForm from './form'
import {connect} from 'react-redux'
import {addUser} from '../../actions/users'

const UserAdd = (props) =>{
    return (
        <div>
            <h2>Adding Users</h2>
            <UserForm 
            handlesubmit={(user) => {
                props.dispatch(addUser(user))
                props.history.push('/users')
            }}
            />
        </div>
    )
}

export default connect()(UserAdd)