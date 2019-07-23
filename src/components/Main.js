import React from 'react'
import Showcase from './Showcase'
import Users from './Users'

export default function Main(props) {
    return (
        <div>
            <Showcase />
            <Users users={props.users} />
        </div>
    )
}
