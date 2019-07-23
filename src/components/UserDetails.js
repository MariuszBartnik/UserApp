import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class UserDetails extends Component {
    state = {
        currentComponent: 'email'
    }

    getImage = () => {
        const  { user } = this.props.location.state
        return `https://source.unsplash.com/random/250x250/?sig=${user.id}`
    }
    
    setCurrentComponent(component){
        this.setState({
            currentComponent: component
        })
    }

    getActive(component){
        if(component === this.state.currentComponent){
            return 'btn-primary active'
        }else{
            return 'btn-primary'
        }
    }

    render() {
        const  { user } = this.props.location.state
        let { currentComponent } = this.state
        let currentOutput = '' 
        if(currentComponent === 'email'){
            currentOutput = (
                <h4>
                    My email address is: 
                    <br />
                    <span>{user.email}</span>  
                </h4>
            )
        }else if(currentComponent === 'phone' ){
            currentOutput = (
                <h4>
                    My phone number is: 
                    <br />
                    <span>{user.phone}</span>  
                </h4>
            )
        }else if(currentComponent === 'address'){
            currentOutput = (
                <h4>
                    My address is: 
                    <br/>
                    <span>{user.address.street}, {user.address.city}</span>
                </h4>
            )
        }else if(currentComponent ==='company'){
            currentOutput = (
                <h4>
                    Currently I work for: 
                    <br />
                    <span>{user.company.name}</span>
                </h4>
            )
        }else if(currentComponent === 'website'){
            currentOutput = (
            <h4>
                My website address is: 
                <br />
                <span>{user.website}</span>
            </h4>
            )
        }
        
        return (
            <div className="user-detail-info">
                <img src={this.getImage()} alt="" />
                <h2> My name is <br /> <span>{ user.name }</span></h2>
                
                <div className="output">
                    {currentOutput}
                </div>

                <div className="form">
                    <button className={this.getActive('email')} onClick={() => { this.setCurrentComponent('email')}}>
                        <i className="fas fa-envelope"></i>
                    </button>
                    <button className={this.getActive('phone')} onClick={() => { this.setCurrentComponent('phone')}}>
                        <i className="fas fa-phone"></i>
                    </button>
                    <button className={this.getActive('address')} onClick={() => { this.setCurrentComponent('address')}}>
                        <i className="fas fa-map-marker-alt"></i>
                    </button>
                    <button className={this.getActive('company')} onClick={() => { this.setCurrentComponent('company')}}>
                        <i className="fas fa-user-tie"></i>
                    </button>
                    <button className={this.getActive('website')} onClick={() => { this.setCurrentComponent('website')}}>
                        <i className="fas fa-globe"></i>
                    </button>
                </div>


                <div className="edit">
                    <Link to={{pathname: '/edit-user', state: {user}}} className="btn-secondary btn-edit">Edit user</Link>
                    <Link to={{pathname: '/delete-user', state: {user}}} className="btn-secondary btn-delete">Delete User</Link>
                </div>

            </div>
        )
    }
}

export default UserDetails
