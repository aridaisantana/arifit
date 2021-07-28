import React, {useState} from 'react'
import AddWeights from './AddWeightsComponent';
import WeightsChart from './WeightsChartComponent';

function Services({user}) {
    
    const [ updateWeights, setUpdateWeights] = useState(false);

    const userLogged = () =>{

        return (
            <>
                <h1 style={
                    {textAlign: "center", 
                    marginTop:"15px", 
                    fontFamily:"sans-serif", 
                    fontSize: "30px", 
                    color:"rgb(169, 67, 224)"
                    }}>
                    Perfil de {user.usuario.nombre}
                </h1>
                <div id="servicesContainer">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-sm-5 col-xs-12 mb-4 mt-5">
                                <AddWeights user={user} updateWeights={updateWeights} setUpdateWeights={setUpdateWeights} />
                            </div>
                            <div className="col-sm-7 col-xs-12 mb-4 mt-2">
                                <WeightsChart user={user} updateWeights={updateWeights} setUpdateWeights={setUpdateWeights}/>
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
