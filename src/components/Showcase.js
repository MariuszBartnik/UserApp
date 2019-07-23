import React, { Component } from 'react'
import logo from '../logo.svg';

export class Showcase extends Component {
    render() {
        return (
            <div className="showcase">
                <div className="showcase-title">
                    <div className="showcase-title-content">
                        <h3 className="section-subheader">React</h3>
                        <h1>User Application</h1>
                        <p>Simple user aplication created with React</p>

                        <a href="https://github.com/MariuszBartnik/UserApp/tree/React" className="btn-primary">See code on GitHub</a>
        
                    </div>    
                </div>
                <div className="showcase-icon">
                    <img alt="React Logo" src={logo} className="App-logo" />
                </div>
            </div>
        )
    }
}

export default Showcase
