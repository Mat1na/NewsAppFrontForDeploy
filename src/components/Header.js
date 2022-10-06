import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Countries from '../data/countries.json'



const Header = () => {

   

    return (

        <Navbar className="navbar " expand="sm">
            <Container className=''>
                <Navbar.Brand href='/' style={{
                    color: "white",
                    backgroundColor: "#fc0000",
                    borderRadius: '3px',
                }}>
                  <h2>T<small>he</small>T<small>oday</small>N<small>ews</small></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-4' />
                <div className="links">
                    {/* <Link to="/create" style={{
            color:"white",
            backgroundColor:"#f1356d",
            borderRadius:'8px', }}>New Article</Link> */}
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link >
                            <NavDropdown title="Choose Country " id="basic-nav-dropdown" defaultValue={"default"}  >
                                {Countries.map((country) => (
                                    <>
                                        <Link to={`country/${country.code}`}
                                            key={country.code}
                                            className="dropdown-item text-decoration-none"
                                            value={country.code}
                                           >
                                            {country.name}
                                        </Link>
                                    </>
                                ))}
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                    
                </div>
            </Container>
        </Navbar>

    );
}

export default Header;