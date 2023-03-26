import { useState, useEffect } from 'react';
import React from 'react';
import { ToggleButton } from '../Components/toggleButton';

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    
  }, [])

  return (
    <>
      {posts.map((post, comment) =>
              <li key={post.id}>{post.title}
                <p>{post.body}</p>
                <ToggleButton post={post} />    
              </li> 
        )}
            
    </>
  )
    
    
  
}

export default Posts
