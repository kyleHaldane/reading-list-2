import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">google books</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/search">search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved">saved</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>:D</NavbarText>
      </Navbar>
    </div>
  );
}

export default Example;