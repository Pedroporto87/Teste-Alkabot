import React from "react";
import { Outlet } from "react-router-dom";
import './styles/Header.scss'

const App = () => {
 
  return (
    <div>
      <h1>Teste Alkabot</h1>
      <Outlet />
    </div>
  )
    
    
  
}

export default App
