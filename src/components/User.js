import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {
    getImage = () => {
        return `https://source.unsplash.com/random/250x250/?sig=${this.props.user.id}`
    }
    
    render() {
        const {name, email, phone} = this.props.user;

        return (            
            <div className="user">
                <img src={this.getImage()} alt={name} />
                <h2>{ name }</h2>
                <p>Email: { email }</p>
                <p>Phone: { phone }</p>
                <Link to={{ pathname: '/user-details', state: {user: this.props.user}}} className="btn-user-details">See more details >></Link>
            </div>
        )
    }

}

export default User
