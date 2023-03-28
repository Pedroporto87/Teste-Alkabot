import React from "react";
import { useState } from "react";




export const UserToggleButton = ({ user }) => {
    
    const [ativar, setAtivar] = useState(false)

 function handleClick() {

        setAtivar((ativar) => !ativar)
    };
   
    return(
        <>
        <div>
            <button id={user.id} onClick={() => handleClick()}>Mais informações</button>
            {ativar &&  
         <li key={user.id}>
            <p><span>Endereço:</span> {user.address.street}<span> </span>{user.address.suite}</p>
            <p><span>Cidade:</span> {user.address.city}</p>
            <p><span>CEP:</span> {user.address.zipcode}</p>
            <p><span>Empresa:</span> {user.company.name}</p>
            <p><span>O que faz:</span> {user.company.catchPhrase}</p>
            <p>...</p>
        </li>}
    
        </div>
        </>
    )
}