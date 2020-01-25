import React, { Component } from 'react'
import '../Dashboard/Dashboard.css'
import HomeNavBar from '../../Components/HomeNavBar'


//<Dashboard/> Page Props:
//  activeUser={activeUser} 
//  handleLogout={this.handleLogout}
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        return (
            <div className="Dashboard">
                <HomeNavBar page="Dashboard" variant="light"/>
                <h1>Dashboard Page</h1>
            </div>
        )
    }
}
