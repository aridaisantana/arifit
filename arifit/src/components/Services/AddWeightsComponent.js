import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

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

const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
});

const AddWeights = ({user, updateWeights, setUpdateWeights}) => {

    const [newWeight, setNewWeight] = useState(30);

    let email = user && user.usuario.email;
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("Email del usuario", email);
        console.log("Nuevo peso", newWeight);
        let sendedWeight = await addWeights({email, newWeight});
        
        if(sendedWeight.ok === true){
            console.log("work fine", sendedWeight);
            setUpdateWeights(!updateWeights);
        }
    }

    const classes = useStyles();

    return ( 
        <React.Fragment>
            <Title>Actualizar Información</Title>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <Typography component="p" variant="h6">Inserte su nuevo peso: </Typography>
                        <div className="addWeightsContainer">
                            <input 
                            style={{width:"100%", borderRadius:"10%", borderColor:"steelblue"}} 
                            name="weight"
                            value={newWeight}
                            onChange={(e) => {
                                setNewWeight(e.target.value);
                            }}
                            type="number" 
                            min="30" 
                            required
                            />
                             <br />
                            <input type="file" id="files" className="hidden"/>
                            <Typography style={{marginTop: "5%"}}color="textSecondary" className={classes.depositContext}><label className="updateButtom" htmlFor="files">Subir imagen del cambio</label></Typography>
                        </div>
                        <div style={{marginTop:"50%"}}>
                            <input className="updateButtom" type="submit" value="Actualizar Información" />      
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default AddWeights;