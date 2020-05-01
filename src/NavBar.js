import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavItem from 'react-bootstrap/NavItem'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


class NavBar extends React.Component {
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Realt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="More Options" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Listing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Listings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link onClick={() => this.props.handleFormSwitch("signUp")}><Link to="/Login">Login</Link></Nav.Link>
            <Nav.Link eventKey={2} to="/SignUp">
            Sign Up
            </Nav.Link> */}
            <LinkContainer to="/Login">
              <NavItem>Login</NavItem>
            </LinkContainer>

            <LinkContainer to="/SignUp">
              <NavItem>Sign Up</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
}

export default NavBar;

