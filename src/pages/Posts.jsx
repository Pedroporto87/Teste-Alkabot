import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ToggleButton } from '../Components/toggleButton';
import '../styles/Posts.scss'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    
  }, [])
  const handleUsers = () => {
    return navigate("/users")
}
const handleHome = () => {
    return navigate("/")
}

  return (
    <>
    <h1>Posts</h1>
    <div className='nav-buttons'>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleUsers}>Usuários</button>
      </div>
      {posts.map((post) =>
              <li key={post.id}><span>Titulo:</span> {post.title}
                <p><span>Mensagem:</span> {post.body}</p>
                <ToggleButton post={post} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default Posts
