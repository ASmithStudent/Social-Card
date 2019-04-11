import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Fwitter</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components">Components</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;