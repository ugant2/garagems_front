import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import  './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        this.props.history.push('/')
    }
  
    render() {
        return (
            <div className="fixed-navbar">
            <Navbar className="fixed-part nav-color-bg"  expand='md'>
                <NavbarBrand href='/dashboard'>Garage Ms</NavbarBrand>
              
           
                    <Nav>
                        <NavItem>
                            <NavLink href='/dashboard'>Dashboard</NavLink>
                        </NavItem>
   
                        <NavItem className="login-button">
                            <Button className="login-login" color='primary' onClick={this.handleLogout}> Logout</Button>
                        </NavItem>
                    </Nav>
                
            </Navbar>
            </div>
        )
    }
}

export default withRouter(Navigation)