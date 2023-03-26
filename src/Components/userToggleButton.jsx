import React from "react";
import { useState } from "react";



export const userToggleButton = ({ user }) => {
    
    const [ativar, setAtivar] = useState(false)
    const [details, setDetails] = useState([])

    async function handleClick(id) {
        let response = await fetch(`https://https://jsonplaceholder.typicode.com/users/${id}`)
        let userData = await response.json();
        setDetails(userData)
        setAtivar((ativar) => !ativar)
    }
   
    return(
        <>
        <div>
            <button id={user.id} onClick={() => handleClick(user.id)}>Comentarios</button>
            {ativar && details.map((data) => 
        <li key={data.id}>
            <p>Endereço</p>
            <p>{data.street}{data.suite}</p>
            <p>{data.address.city}</p>
            <p>{data.address.zipcode}</p>
            <p>Empresa</p>
            <p>{data.company.name}</p>
            <p>{data.catchPhrase}</p>
        </li>
    )}
        </div>
        </>
    )
}