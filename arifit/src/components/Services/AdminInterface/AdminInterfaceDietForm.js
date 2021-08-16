import React, {useState} from 'react';

async function addDiet(credentials) {
    return fetch('/addDiet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const DietForm = ({email, addedElement, setAddedElement}) => {
    const [dietLink, setDietLink] = useState("");

    const handleSubmitDiet = async (e) => {
        e.preventDefault();
        const file = await addDiet({
            email,
            dietLink
        });
        console.log(file.ok);
        if(file.ok === true){
            console.log("Se ha añadido correctamente el enlace");
            setDietLink("");
            setAddedElement(!addedElement);
        }else{
            console.log("Algo fue mal");
        }
    }

    return ( 

        <form onSubmit={(e) => handleSubmitDiet(e) }>
            <input name="dietLink" type="text" value={dietLink} onChange={(e) => {
                 setDietLink(e.target.value);
            }}/>
            <input type="submit" value="Subir Dieta" />
        </form>

   );
}
 
export default DietForm;