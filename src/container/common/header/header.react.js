import React from 'react'

import { Link } from 'react-router-dom'

import {
  Navbar
} from 'react-bootstrap'

const Header = () => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>ReactBasicStarter</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Brand>
          <Link to='/home'>Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to='/example'>Example</Link>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
