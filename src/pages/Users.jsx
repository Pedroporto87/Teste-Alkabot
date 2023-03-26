import { useState, useEffect } from 'react';
import React from 'react';
import { userToggleButton } from '../Components/userToggleButton';

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    
  }, [])

  return (
    <>
      {users.map((user, comment) =>
              <li key={user.id}>{user.name}
                <p>{user.username}</p>
                <p>{user.email}</p>
                <userToggleButton user={user} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default App
