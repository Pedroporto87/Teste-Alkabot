import { useState, useEffect } from 'react';
import React from 'react';
import { UserToggleButton } from '../Components/userToggleButton';

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    
  }, [])

  return (
    <>
    <h1>Usuários</h1>
      {users.map((user) =>
              <li key={user.id}>{user.name}
                <p>{user.username}</p>
                <p>{user.email}</p>
                <UserToggleButton user={user} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default Users
