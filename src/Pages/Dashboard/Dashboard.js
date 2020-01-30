import React, { Component } from 'react'
import '../Dashboard/Dashboard.css'


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
        // const { activeUser,handleLogout } = this.props;
        // console.log(this.props);
        return (
            <div className="Dashboard">
                {/* <HomeNavBar page="Dashboard" variant="light" activeUser={activeUser} handleLogout={handleLogout}/> */}
                <h1>Dashboard Page</h1>
            </div>
        )
    }
}
