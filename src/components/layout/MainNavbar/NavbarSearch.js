import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Nav,
  NavItem,
  NavLink
} from "shards-react";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        className="navbar-search"
        placeholder="Search for something..."
      />
    </InputGroup>
    <Nav className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <NavItem>
        <NavLink active href="#">
          Active
        </NavLink>
      </NavItem>
      <NavItem  >
        <NavLink href="#">Link</NavLink>
      </NavItem>
    </Nav>
  </Form>
);
