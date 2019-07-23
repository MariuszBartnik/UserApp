import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddUser extends Component {
    state = {
        name: '',
        email: '',
        city: '',
        street: '',
        phone: '',
        website: '',
        company: '',
        submitted: false
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    addUser = (e) => {
        e.preventDefault()

        let { name, email, city, street, phone, website, company} = this.state

        const user = {
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

        this.props.addUser(user);
        this.setState({
            submitted: true
        })

        setTimeout(()=>{
            this.props.history.push('/')
        }, 2000)
    }

    render() {
        let { name, email, city, street, phone, website, company} = this.state
        return ( 
        !this.state.submitted ? 
            (<div className="add-user-form">
                <h2>Add new user</h2>
                <form onSubmit={this.addUser}>
                    <input type="text" name="name" value={name} onChange={this.inputChange} required placeholder="Name" />
                    <input type="text" name="email" value={email} onChange={this.inputChange} required placeholder="E-mail" />
                    <input type="text" name="city" value={city} onChange={this.inputChange} required placeholder="City" />
                    <input type="text" name="street" value={street} onChange={this.inputChange} required placeholder="Street" />
                    <input type="text" name="phone" value={phone} onChange={this.inputChange} required placeholder="Phone" />
                    <input type="text" name="website" value={website} onChange={this.inputChange} required placeholder="Website" />
                    <input type="text" name="company" value={company} onChange={this.inputChange} required placeholder="Company" />
                    <input type="submit" value="Add user" />
                </form>
            </div>) 
        : ( <div className="msg">
                <h2>User Added</h2>
                <Link to={'/'} className="btn-primary">Go back to main page</Link>
            </div>
        )
            
        )
    }
}

export default AddUser
