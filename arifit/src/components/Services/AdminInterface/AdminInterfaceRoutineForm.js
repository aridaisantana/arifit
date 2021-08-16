import React, {useState} from 'react';

async function addRoutine(credentials) {
    return fetch('/addRoutine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const RoutineForm = ({email, addedElement, setAddedElement}) => {
    const [routineLink, setRoutineLink] = useState("");

    const handleSubmitRoutine = async (e) => {
        e.preventDefault();
        const file = await addRoutine({
            email,
            routineLink
        });
        if(file.ok === true){
            console.log("Se ha añadido correctamente el enlace");
            setRoutineLink("");
            setAddedElement(!addedElement);
        }else{
            console.log("Algo fue mal");
        }
    }

    return ( 

        <form onSubmit={(e) => handleSubmitRoutine(e) }>
            <input name="routineLink" type="text" value={routineLink} onChange={(e) => {
                 setRoutineLink(e.target.value);
            }}/>
            <input type="submit" value="Subir Rutina" />
        </form>

   );
}
 
export default RoutineForm;