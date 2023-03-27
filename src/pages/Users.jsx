import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { UserToggleButton } from '../Components/userToggleButton';
import '../styles/Users.scss'

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

const handlePosts = () => {
    return navigate("/posts")
}
const handleHome = () => {
    return navigate("/")
}

  return (
    <>
    <h1>Usuários</h1>
      <div className='nav-buttons'>
        <button onClick={handleHome}>Home</button>
        <button onClick={handlePosts}>Posts</button>
      </div>
      {users.map((user) =>
              <li key={user.id}><span>Nome:</span> {user.name}
                <p><span>Username:</span> {user.username}</p>
                <p><span>E-mail:</span> {user.email}</p>
                <UserToggleButton user={user} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default Users
