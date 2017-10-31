import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Nav>
        <NavItem href="/">Show Me Everyone</NavItem>
        <NavItem href="/#/new">Add Another Person</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar
