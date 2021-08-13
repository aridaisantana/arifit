import React from 'react'
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function LoginForm({setUser, setIsModalOpen}) {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await loginUser({
          email,
          password
        });

        var loginErrorSpan = document.querySelector("#loginError");

        if(user.ok === false){
          loginErrorSpan.textContent = "Correo o contraseña incorrectos";
        }else{
          loginErrorSpan.textContent = "";
          setUser(user);
          window.localStorage.setItem('loggedUser', JSON.stringify(user));
          setIsModalOpen(false);
          user.usuario.rol !== "SYSADMIN" ? history.push(`/service/${user.usuario.rol.toLowerCase()}`) : history.push("/sysadmin");
          
        }
        
        
    }


    return (
        <div style={{textAlign: 'center'}}>
          <form onSubmit={(e) => handleSubmit(e)} >
            <input 
              type="text" 
              id="login" 
              className="form-button-submit-reset text-password fadeIn second" 
              name="email" 
              value={email} 
              placeholder="Correo" 
              onChange={(e) => {
                    setEmail(e.target.value);
            }}/>
            <input type="password" id="password" className="form-button-submit-reset text-password fadeIn third" value={password} name="password" placeholder="Contraseña" onChange={(e) =>{
                    setPassword(e.target.value);
                }}/>
            <input type="submit" className="form-button-submit-reset fadeIn fourth" value="Iniciar" />
          </form>
          <span id="loginError" style={{color:"red"}}></span>
        </div>
    )
}


LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired
  };
  
