import { useState, useEffect } from 'react';
import React from 'react';
import { userToggleButton } from '../Components/userToggleButton';

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    
  }, [])

  return (
    <>
      {users.map((user) =>
              <li key={user.id}>{user.name}
                <p>{user.username}</p>
                <p>{user.email}</p>
                <userToggleButton user={user} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default Users