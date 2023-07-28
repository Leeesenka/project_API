import React from 'react';

const Details = ({ user, onDeleteUser }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>    
        <h1>Details</h1>
    <div className="card" style={{ width: '20rem', cursor: 'pointer' }}>

        <img src={user.image} className="card-img-top" alt="User"></img>
    <div className="card-body">
   
      <p className="card-title" >ID: {user.id}</p>
      <p className="card-title">First Name: {user.lastName}</p>
      <p className="card-title">Last Name: {user.firstName}</p>
      <p className="card-title">Age: {user.age}</p>
      <p className="card-title">Email: {user.email}</p>
      <p className="card-title">Address: {user.address.address}</p>
      <p className="card-title">Phone: {user.phone}</p>
      <p className="card-title">Birth Date: {user.birthDate}</p>
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
