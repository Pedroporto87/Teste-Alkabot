import React from "react";
import { useState } from "react";



export const ToggleButton = ({ post }) => {
    
    const [ativar, setAtivar] = useState(false)
    const [comments, setComments] = useState([])

    async function handleClick(id) {
        console.log(id)
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        let userData = await response.json();
        setComments(userData)
        setAtivar((ativar) => !ativar)

       
    }
   
    return(
        <>
        <div>
            <button id={post.id} onClick={() => handleClick(post.id)}>Comentarios</button>
            {ativar && comments.map((comment) => 
        <li key={comment.postId}>
            <h1>{comment.email}</h1>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
        </li>
    )}
        </div>
        </>
    )
}