import React from "react";
import { useState } from "react";



export const ToggleButton = ({ post }) => {
    
    const [ativar, setAtivar] = useState(false)
    const [comments, setComments] = useState([])

    async function handleClick(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        let userData = await response.json();
        setComments(userData)
        setAtivar((ativar) => !ativar)
    }
   
    return(
        <>
        <div>
            <button id={post.id} onClick={() => handleClick(post.id)}>Comentários</button>
            {ativar && comments.map((comment) => 
        <li key={comment.postId}>
            <p><span>E-mail:</span>{comment.email}</p>
            <p><span>Nome:</span> {comment.name}</p>
            <p><span>Comentário:</span> {comment.body}</p>
            <p>...</p>
        </li>
    )}
        </div>
        </>
    )
}