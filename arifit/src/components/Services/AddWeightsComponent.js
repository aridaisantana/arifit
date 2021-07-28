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

const AddWeights = ({user, updateWeights, setUpdateWeights}) => {

    const [newWeight, setNewWeight] = useState(30);

    let email = user && user.usuario.email;
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let sendedWeight = await await addWeights({email, newWeight});
        
        if(sendedWeight.ok === true){
            alert("works fine");
            setUpdateWeights(!updateWeights);
        }
    }

    return ( 
        <div>
            <form id="updateInformation" onSubmit={(e) => handleSubmit(e)}>
                <div className="text-center p-3">
                    <h4 style={{color:"rgba(169, 67, 224, 0.8)"}}>Actualizar Peso</h4>
                    <label>Inserte su nuevo peso: </label>
                    <input 
                    style={{width:"30%", borderRadius:"10%", borderColor:"steelblue"}} 
                    name="weight"
                    value={newWeight}
                    onChange={(e) => {
                        setNewWeight(e.target.value);
                    }}
                    type="number" 
                    min="30" 
                    required
                    />
                    <input type="file" id="files" className="hidden"/>
                    <label className="fileLabel" htmlFor="files">Subir imagen del cambio</label>
                    <div className="mt-3">
                        <input type="submit" className="form-button-submit-reset fourth" value="Actualizar Información" />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddWeights;