import React from "react";


export const Comments = ({ comment }) => {
  return (
  <>
    {comment.map((comment) => 
        <li key={comment.postId}>
            <h1>{comment.email}</h1>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
        </li>
    )}
  </>)
}

