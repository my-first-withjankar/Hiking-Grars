import React from 'react';
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className='navbar sticky-top header' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={'50px'} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        {
                            user &&
                            <>
                                <Nav.Link as={Link} to="/adduser">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                            </>
                        }
                        <NavDropdown title='Pages' id="collasible-nav-dropdown">
                            <NavDropdown.Item className='bg-dark' as={Link} to='/about' >About Us</NavDropdown.Item>
                            <NavDropdown.Item className='bg-dark' href="#action/3.2">Another </NavDropdown.Item>
                            <NavDropdown.Item className='bg-dark' href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        {
                            user
                                ?
                                <Nav.Link onClick={logOut} as={Link} to="/"> Sign Out</Nav.Link>
                                :
                                <Nav.Link as={Link} to="login"> Login</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;