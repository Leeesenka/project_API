import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import Details from './components/Details';

import NavigationBar from './components/NavigationBar'

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users/?limit=10')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const result = users.filter(user =>
      user.firstName.toLowerCase().search(searchTerm.toLowerCase()) !== -1
    );
    setFilteredUsers(result);
  }, [searchTerm, users]);

  const handleUserSelect = user => {
    setSelectedUser(user);
  };

  const handleDeleteUser = userId => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    }
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='header'>
      <NavigationBar onNewUser={addUser} onSearch={handleSearch} users={users} />
      <div className='main'>
        <div className='users'>
          <Users users={filteredUsers} onSelectUser={handleUserSelect} onDeleteUser={handleDeleteUser} />
        </div>
        <div className='info'>
        <p>Count of filtered users: {filteredUsers.length}</p>
        {filteredUsers.length === 0 && searchTerm !== '' && <p>No users with this username were found.</p>}
        {selectedUser && <Details user={selectedUser} onDeleteUser={handleDeleteUser} />}
        </div>
      </div>
    </div>
);
  }

export default App;
