import React from 'react';
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <Navbar className='navbar fixed-top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img height={'150px'} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark' href="#features">Features</Nav.Link>
                        <Nav.Link className='text-dark' href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' href="#deets">More deets</Nav.Link>
                        <Nav.Link className='text-dark' eventKey={2} href="#memes">
                            Dank
                        </Nav.Link>
                        <NavDropdown className='text-dark' id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;