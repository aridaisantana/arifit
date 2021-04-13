import React from 'react'

function Services({setUser}) {
    
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser){
        return (
        
            <div>
                <h1>Bienvenido</h1>
            </div>
        )
    }else{
        return (
        
            <div>
                <h1>Por favor, inicie sesión</h1>
            </div>
        )
    }

    
}

export default Services
