import React from 'react'
import uuid from 'uuid'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: uuid(),
            username: "",
            email: "",
            mobile: ''
        }
    }

    handleUserNameChange = (event) => {
        const username = event.target.value
        this.setState(() => ({ username }))
    }


    handleEmailChange = (event) => {
        const email = event.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange = (event) => {
        const mobile = event.target.value
        this.setState(() => ({ mobile }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { id, username, email, mobile } = this.state
        const formData = {
            id,
            username,
            email,
            mobile
        }
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        username
                    <input type="text" name="username" onChange={this.handleUserNameChange} value={this.state.username} />
                    </label>
                    <label>
                        email
                    <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
                    </label>
                    <label>
                        mobile
                    <input type="text" name="mobile" onChange={this.handleMobileChange} value={this.state.mobile} />
                    </label>

                    <input type="submit" value="submit" />

                </form>

            </div>
        )
    }
}

export default UserForm