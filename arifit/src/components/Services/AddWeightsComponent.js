import React, {useState} from 'react';

async function addWeights(credentials) {
    return fetch('/addWeights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
}

const AddWeights = ({user}) => {

    const [newWeight, setNewWeight] = useState(30);

    let email = user && user.usuario.email;
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let sendedWeight = await await addWeights({email, newWeight});
        
        if(sendedWeight.ok === true){
            alert("works fine");
            console.log(sendedWeight);
        }
    }

    return ( 
        <div>
            <form id="updateInformation" onSubmit={(e) => handleSubmit(e)}>
                <div className="text-center">
                    <h4>Actualizar peso y fotos</h4>
                    <label>Inserte su nuevo peso: </label>
                    <input 
                    style={{width:"40%", borderRadius:"10%", borderColor:"steelblue"}} 
                    name="weight"
                    value={newWeight}
                    onChange={(e) => {
                        setNewWeight(e.target.value);
                    }}
                    type="number" 
                    min="30" 
                    required
                    />
                    <label>Suba Imágenes de su cambio:</label>
                    <input name="photoProgress" type="file" />
                    <div className="mt-5">
                        <input type="submit" value="Actualizar Información" />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddWeights;