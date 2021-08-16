
import React from 'react';
import {AiFillDelete} from 'react-icons/ai';

async function deleteDiet(credentials) {
    return fetch('/deleteDiet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const DeleteDiet = ({userId, dietId, elementDeleted, setElementDeleted}) => {

    const handleClick = async () => {
        
        console.log("ID de dieta que manda", dietId)
        const deletedDiet = await deleteDiet({
            userId,
            dietId
        });
        console.log(deletedDiet, deletedDiet.ok);
        if(deletedDiet.ok === true){
            console.log("Dieta eliminada");
            setElementDeleted(!elementDeleted);
        }else{
            console.log("Algo fue mal");
        }
    }

    return ( 
        <AiFillDelete onClick={() => handleClick()}/>
     );
}
 
export default DeleteDiet;