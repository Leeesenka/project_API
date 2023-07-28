import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import UserForm from './UserForm';
import Search from './Search';

const NavigationBar = ({ onNewUser, onSearch, users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm); // Call the onSearch function with searchTerm
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // No action taken on form submission, you may want to add some action.
  };

  const filteredUsers = users ? users.filter(user => 
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <UserForm addUser={onNewUser} />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}></Nav>
        <Form className="d-flex">
          <Search onChange={handleSearchChange} />
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default NavigationBar;
