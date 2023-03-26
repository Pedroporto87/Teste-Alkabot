import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate()
const handlePost = () => {
    return navigate("/posts")
}
const handleUsers = () => {
    return navigate("/users")
}

  return (
    <div>
        <h1>Escolha seu caminho!</h1>
        <button onClick={handlePost}>Posts</button>
        <button onClick={handleUsers}>Users</button>
    </div>
  )
}

export default Home