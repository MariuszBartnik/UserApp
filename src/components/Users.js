import React, { Component } from 'react'
import User from './User'

export class Users extends Component {
    render() {

        return (
            <div className="users">
                {this.props.users.map(user => (
                        <User user={user} key={user.id}/>
                ))
                }
            </div>
        )
            
    }
}

export default Users
