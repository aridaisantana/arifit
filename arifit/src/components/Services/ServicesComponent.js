import React from 'react'

function Services({user}) {
    
    const userLogged = () =>{
        return (
        
            <div className="container">
                <h1 style={{textAlign: "center", marginTop:"15px", fontFamily:"sans-serif", fontSize: "30px"}}>Perfil de {user.usuario.nombre}</h1>
            </div>
        )
    }

    const userNotLogged = () => {
        return (
        
            <div>
                <h1>Por favor, inicie sesión</h1>
            </div>
        )
    }
    
    return(
        <div>
            {
                user ? userLogged() : userNotLogged()
            }
        </div>
    )

    
}

export default Services
