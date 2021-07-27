import React from 'react'
import AddWeights from './AddWeightsComponent';

function Services({user}) {
    

    const userLogged = () =>{
        
        return (
            <>
                <h1 style={{textAlign: "center", marginTop:"15px", fontFamily:"sans-serif", fontSize: "30px"}}>Perfil de {user.usuario.nombre}</h1>
                <div id="servicesContainer">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-sm-5 col-xs-12 mb-4 mt-2">
                                <AddWeights user={user}/>
                            </div>
                            <div className="col-sm-5 col-xs-12 mb-4 mt-2">
                                
                            </div>
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </>
            
        );
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
