import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import HomeNavBar from '../../Components/HomeNavBar'

export default class LoginPage extends Component {
    render() {
        return (
            <div className="Login">
                <HomeNavBar />
                <h1>login Page</h1>
            </div>
        )
    }
}
