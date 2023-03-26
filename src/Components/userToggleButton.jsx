import React from "react";
import { useState } from "react";



export const UserToggleButton = ({ user }) => {
    
    const [ativar, setAtivar] = useState(false)
    const [details, setDetails] = useState([])

    async function handleClick(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let userData = await response.json();
        setDetails(userData)
        setAtivar((ativar) => !ativar)
    }
    const arr = Object.values(details)
    console.log(arr)
    return(
        <>
        <div>
            <button id={user.id} onClick={() => handleClick(user.id)}>Mais informações</button>
            {ativar && arr.map((key, i) => 
         <li key={user.id}>
            <p>Endereço</p>
            <p>{arr[4].street}{''}{arr[4].suite}</p>
            <p>{arr[4].city}</p>
            <p>{arr[4].zipcode}</p>
            <p>Empresa</p>
            <p>{arr[7].name}</p>
            <p>{arr[7].catchPhrase}</p>
           
        </li>
    )}
        </div>
        </>
    )
}