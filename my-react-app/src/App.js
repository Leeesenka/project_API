import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import Details from './components/Details';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users/?limit=10')
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error(error));
  }, []);

  const handleUserSelect = user => {
    setSelectedUser(user);
  };

  const handleDeleteUser = userId => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    }
  };

  return (
    <div className='main'>
      <div className='users'>
        <Users users={users} onSelectUser={handleUserSelect} onDeleteUser={handleDeleteUser} />
      </div>
      <div className='info'>
  
        {selectedUser && <Details user={selectedUser} onDeleteUser={handleDeleteUser} />}
      </div>
    </div>
  );
}

export default App;
