import React from 'react';
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='navbar sticky-top header' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={'50px'} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-dark' href="#pricing">Pricing</Nav.Link>
                        <NavDropdown className='text-dark' title='Pages' id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' href="#deets">More deets</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="login"> Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;