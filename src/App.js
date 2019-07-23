import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import UserDetails from './components/UserDetails'
import Footer from './components/Footer';
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import DeleteUser from './components/DeleteUser'

export class App extends Component {
    state = {
        users: [],
    }

    addUser = (user) => {
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then((res) => {
                const users = [...this.state.users, res.data]
                this.setState({
                    users
                })
            })
    }
    
    editUser = (editedUser) => {
        if(editedUser.id !== 11){
            axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser)
                .then((res) => {
                    let index = this.state.users.findIndex((user) => user.id === res.data.id)
                    let users = [...this.state.users]
                    users[index] = res.data

                    this.setState({
                        users
                    })
            })
        }else{
            let users = [...this.state.users]
            users[10] = editedUser

            this.setState({
                users
            })
        }
    } 

    deleteUser = (deletedUser) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${deletedUser.id}`)
            .then(() => {
                const users = this.state.users.filter((user) => user.id !== deletedUser.id )
                this.setState({
                    users
                })
            })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                        <Route exact path="/" render={() => <Main users={this.state.users}/>} />
                        <Route path="/add-user" render={(props) => <AddUser {...props} addUser={this.addUser} submitted={this.state.submitted} />} />
                        <Route path="/user-details" component={UserDetails} />
                        <Route path="/edit-user" render ={(props) => <EditUser {...props} editUser={this.editUser}/>}/>
                        <Route path="/delete-user" render={(props) => <DeleteUser {...props} deleteUser={this.deleteUser} />} />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => this.setState({
            users: res.data
            })
        )
    }
}

export default App
