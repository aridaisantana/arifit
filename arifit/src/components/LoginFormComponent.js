import React from 'react'
import {useState} from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:3080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function LoginForm({ setToken, setIsModalOpen, isModalOpen }) {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        
        setToken(token);
        setIsModalOpen(!isModalOpen);
    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="email" name="email" onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <input type="password" name="password" onChange={(e) =>{
                    setPassword(e.target.value);
                }}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}


LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  };
  
