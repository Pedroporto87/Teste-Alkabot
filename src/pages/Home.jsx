import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.scss'

const Home = () => {
const navigate = useNavigate()
const handlePost = () => {
    return navigate("/posts")
}
const handleUsers = () => {
    return navigate("/users")
}

  return (
    <div className='home-div'>
        <h1>Escolha seu caminho!</h1>
            <div className='home-buttons'>
                <button onClick={handlePost}>Posts</button>
                <button onClick={handleUsers}>Usuários</button>
            </div>
    </div>
  )
}

export default Home