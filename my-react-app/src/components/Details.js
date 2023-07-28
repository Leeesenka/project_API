import React from 'react';

const Details = ({ user, onDeleteUser }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>    
        <h1>Details</h1>
        <div className="card" style={{ width: '20rem', cursor: 'pointer' }}>

        <img src={user.image || 'No image available'} className="card-img-top" alt="User"></img>
        <div className="card-body">
   
          <p className="card-title" >ID: {user.id || 'No ID available'}</p>
          <p className="card-title">First Name: {user.firstName || 'No first name available'}</p>
          <p className="card-title">Last Name: {user.lastName || 'No last name available'}</p>
          <p className="card-title">Age: {user.age || 'No age available'}</p>
          <p className="card-title">Email: {user.email || 'No email available'}</p>
          <p className="card-title">Address: {(user.address && user.address.address) || 'No address available'}</p>
          <p className="card-title">Phone: {user.phone || 'No phone number available'}</p>
          <p className="card-title">Birth Date: {user.birthDate || 'No birth date available'}</p>
          <button type="button" 
                  class="btn btn-dark"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onDeleteUser(user.id);
                  }}>Delete</button>
        </div>
    </div>
    </div>
  );
};

export default Details;
