import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const UserForm = ({ addUser }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    image: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({
      firstName: '',
      lastName: '',
      image: '',
      age: '',
      email: '',
      phone: '',
      address: '',
      birthDate: '',
    });
    handleClose();
  };

  const isDisabled = user.firstName === '' || user.lastName === '' || user.image === '' || user.age === '';

  return (
    <div className='new'>
      <Button variant="primary" class="btn btn-dark" onClick={handleShow}>
        New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" name="age" value={user.age} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" value={user.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={user.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="date" name="birthDate" value={user.birthDate} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="image" value={user.image} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" class="btn btn-dark" type="submit" disabled={isDisabled}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserForm;
