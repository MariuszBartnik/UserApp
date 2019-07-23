import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class DeleteUser extends Component {
    state = {
        submitted: false
    }

    getImage = () => {
        const  { user } = this.props.location.state
        return `https://source.unsplash.com/random/250x250/?sig=${user.id}` 
    }

    deleteUser = () => {
        const  { user } = this.props.location.state

        this.props.deleteUser(user);
        this.setState({
            submitted: true
        })

        setTimeout(() => {
            this.props.history.push('/')
        }, 2000)
    }

    render(){
        const { user } = this.props.location.state
        return (
            !this.state.submitted ?     
                (<div className="delete-user">
                    <h2>Are You sure You want to delete this User?</h2>
                    <img src={this.getImage()} alt="" /> 
                    <h2>{ user.name }</h2>
                    <p>Email: { user.email }</p>
                    <p>Phone: { user.phone }</p>
                    <div className="buttons">
                        <button onClick={this.deleteUser} className="btn btn-danger">Confirm</button>
                        <Link className="btn btn-secondary" to="/">Cancel</Link>    
                    </div>
                </div>
            ) : ( 
                <div className="msg">
                    <h2>User Deleted</h2>
                    <Link to={'/'} className="btn-primary">Go back to main page</Link>
                </div>
            )
        )
    }
}

export default DeleteUser