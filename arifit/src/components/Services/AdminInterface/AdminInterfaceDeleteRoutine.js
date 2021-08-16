
import React from 'react';
import {AiFillDelete} from 'react-icons/ai';

async function deleteRoutine(credentials) {
    return fetch('/deleteRoutine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const DeleteRoutine = ({userId, routineId, elementDeleted, setElementDeleted}) => {

    const handleClick = async () => {
        
        console.log("ID de rutina que manda", routineId)
        const deletedRoutine = await deleteRoutine({
            userId,
            routineId
        });
        console.log(deletedRoutine, deletedRoutine.ok);
        if(deletedRoutine.ok === true){
            console.log("Rutina eliminada");
            setElementDeleted(!elementDeleted);
        }else{
            console.log("Algo fue mal");
        }
    }

    return ( 
        <AiFillDelete onClick={() => handleClick()}/>
     );
}
 
export default DeleteRoutine;