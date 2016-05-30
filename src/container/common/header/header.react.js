import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>ReactBasicStarter</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem key={1} onClick={ () => { browserHistory.push('home') } }>Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
