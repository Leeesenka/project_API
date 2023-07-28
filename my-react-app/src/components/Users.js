import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Users = ({ users, onSelectUser, onDeleteUser }) => {

  const handleDeleteClick = (e, userId) => {
    e.stopPropagation(); 
    onDeleteUser(userId);
  };

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.length > 0 ? users.map(user => (
          <li key={user.id}>
            <div
              className="card"
              style={{ width: '20rem', cursor: 'pointer' }}
              onClick={() => onSelectUser(user)}
            >
              <img src={user.image} className="card-img-top" alt="User"></img>
              <div className="card-body">
                <p className="card-title">ID: {user.id}</p>
                <p className="card-title">First Name: {user.firstName}</p>
                <p className="card-title">Last Name: {user.lastName}</p>
                <button 
                  type="button" 
                  className="btn btn-dark"
                  onClick={(e) => handleDeleteClick(e, user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))
        :
        <p>No users left.</p>
        }
      </ul>
    </div>
  );
};

export default Users;
