import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class EditUser extends Component {
    state = {
        id: this.props.location.state.user.id,
        name: this.props.location.state.user.name,
        email: this.props.location.state.user.email,
        city: this.props.location.state.user.address.city,
        street: this.props.location.state.user.address.street,
        phone: this.props.location.state.user.phone,
        website:this.props.location.state.user.website,
        company: this.props.location.state.user.company.name,
        submitted: false
    }

    editUser = (e) => {
        e.preventDefault()
        let { id, name, email, city, street, phone, website, company } = this.state

        const user = {
            id,
            name,
            email,
            address: {
                city,
                street
            },
            phone, 
            website,
            company: {
                name: company
            }
        }

        this.props.editUser(user)

        this.setState({
            submitted: true
        })

        setTimeout(() => {
            this.props.history.push('/') 
        }, 2000) 
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { name, email, city, street, phone, website, company } = this.state
        return (
            !this.state.submitted ? (
                <div className="add-user-form">
                    <h2>Edit user</h2>
                    <form onSubmit={this.editUser}>
                        <input type="text" name="name" required value={name} onChange={this.inputChange} placeholder="Name" />
                        <input type="text" name="email" required value={email} onChange={this.inputChange} placeholder="E-mail" />
                        <input type="text" name="city" required value={city} onChange={this.inputChange} placeholder="City" />
                        <input type="text" name="street" required value={street} onChange={this.inputChange} placeholder="Street" />
                        <input type="text" name="phone" required value={phone} onChange={this.inputChange} placeholder="Phone" />
                        <input type="text" name="website" required value={website} onChange={this.inputChange} placeholder="Website" />
                        <input type="text" name="company" required value={company} onChange={this.inputChange} placeholder="Company" />
                        <input type="submit" value="Edit user" />
                    </form>
                </div>
            ) : (
                <div className="msg">
                    <h2>Used edition completed</h2>
                    <Link to={'/'} class="btn-primary">Go back to main page</Link>
                </div>
            )
            
        )
    }
}

export default EditUser
