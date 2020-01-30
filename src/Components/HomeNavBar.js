import React, { Component } from 'react';
import logo from '../Img/Ripple_Hand_logo_400x400 transparent.png';
import { Navbar, Nav, Image, Badge, NavDropdown } from 'react-bootstrap';
import '../Components/HomeNavBar.css';
import { Redirect } from 'react-router-dom';

// HomeNavBar Props:
//  activeUser: Null/Value ,
//  handlelogout() - callback to App , 
//  variant (style): ,
//  bg (style): , 
//  page: string "Home"/"Login"/"Dashboard".... 

export default class HomeNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            redirectToHome : false, 
            activePage: this.props.page
        }

       this.logout = this.logout.bind(this)
    }
    
    componentDidUpdate() {
        if (this.state.redirectToHome)  {
            this.setState({
                redirectToHome: false
            })
        }
    }

    logout()    {
        // HandleLogout Callback to App Page
        const {activeUser , handleLogout} = this.props;
        handleLogout(activeUser);

        this.setState({
            redirectToHome: true
        })
    }
    
    render() {
        const {redirectToHome} = this.state;
        if (redirectToHome) {
            return <Redirect to="/"/>
        }
        const { activeUser,variant,bg,page } = this.props;

        const productLink = !activeUser ? <Nav.Link href="/Product">Product</Nav.Link> : null;
        const featuresLink = !activeUser ? <Nav.Link href="/Features">Features</Nav.Link> : null;
        const aboutLink = !activeUser ? <Nav.Link href="/About">About</Nav.Link> : null;

        const dashboardLink = activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null;
        const signinLink = !activeUser && page!=="Signup" ?  <Nav.Link href="#/signup" className="signupLink">Sign in <Badge>free</Badge></Nav.Link> : null;
        const loginLink = !activeUser && page!=="Login"? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const userAccount = activeUser ? <NavDropdown title={this.props.activeUser.username} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Another thing</NavDropdown.Item></NavDropdown> 
                                        : null; 
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>Logout</Nav.Link> : null; 

        return (
            <div className="HomeNavBar">
                 <Navbar bg={bg} variant={variant} expand="md">
                    <Navbar.Brand href="/" onClick={this.goHome} ><Image src={logo} className="brand-logo" roundedCircle />Ripple</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {productLink}
                            {featuresLink}
                            {aboutLink}
                            {loginLink}
                            {signinLink}
                            {dashboardLink}
                            {userAccount}
                            {logoutLink}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
