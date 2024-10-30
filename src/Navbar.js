// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
        <Nav.Link as={Link} to="/albums">Álbumes</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
