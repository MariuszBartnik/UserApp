import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
        return (
            <div id="nav">
                <Link to={'/'} className="nav-btn">Home</Link>
                <Link to={'/add-user'} className="nav-btn add-user" >+</Link>
            </div>
        )
}
