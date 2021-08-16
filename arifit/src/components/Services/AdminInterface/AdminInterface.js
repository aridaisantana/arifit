
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome, AiOutlineFilePdf, AiFillDelete} from 'react-icons/ai';
import RoutineForm from './AdminInterfaceRoutineForm';
import DietForm from './AdminInterfaceDietForm';
import DeleteRoutine from './AdminInterfaceDeleteRoutine';
import DeleteDiet from './AdminInterfaceDeleteDiet';

const AdminInterface = () => {

    const [users, setUsers] = useState([]);
    const [elementDeleted, setElementDeleted] = useState(false);
    const [addedElement, setAddedElement] = useState(false);

    let componentMounted = true;

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(
                    "/getUsers"
                );
                const json = await response.json();
                if (componentMounted){
                    const usersList = new Array();
                    json.forEach( (user) => {
                        
                        let id = user._id;
                        let nombre = user.nombre;
                        let email = user.email;
                        let created = user.created;
                        let rol = user.rol;
                        let training = user.training;
                        let diet = user.diet;

                        let userObject = {
                             id,
                             nombre,
                             email,
                             created,
                             rol,
                             training,
                             diet
                        }
                    
                        usersList.push({
                            userObject
                        })
           
                     });
                    setUsers(usersList);
                }
                
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
        return () => { 
            componentMounted = false;
        }
    }, []);


    console.log("usuarios", users);

    return ( 
        
        <div>
            <Link style={{color:"black"}} to={"/home"}><AiOutlineHome style={{height:"30px", width:"30px", marginRight:"5px"}} /></Link>
            <h1>Interfaz de administrador</h1>
                {users.map((element) => {
                     return(
                        <div style={{backgroundColor:"lightcoral", width:"250px", marginLeft:"2%"}} key={element.userObject.id}>
                        <ul style={{listStyle:"none"}} key={element.userObject.id}>
                            <li>{element.userObject.nombre.toString()}</li>
                            <li>{element.userObject.email.toString()}</li>
                            <li>{element.userObject.created.toString()}</li>
                            <li>{element.userObject.rol.toString()}</li>
                            <li>
                                <RoutineForm email={element.userObject.email.toString()} addedElement={addedElement} setAddedElement={setAddedElement} />
                            </li>
                            <li>
                                <DietForm email={element.userObject.email.toString()} />
                            </li>
                            <li>
                                <h5>Rutinas</h5>
                                {element.userObject.training && element.userObject.training.map(routine => {
                                    console.log(routine._id);
                                    return(
                                        <div>
                                            <a href={routine.training} title="pdf"><AiOutlineFilePdf /></a>
                                            <DeleteRoutine 
                                             userId={element.userObject.id.toString()}
                                             routineId={routine._id.toString()} 
                                             elementDeleted={elementDeleted} 
                                             setElementDeleted={setElementDeleted}/>
                                        </div>
                                    );
                                })}
                            </li>
                            <li>
                                <h5>Dietas</h5>
                                {element.userObject.diet && element.userObject.diet.map(diet => {
                                    return(
                                        <div>
                                        <a href={diet.diet} title="pdf"><AiOutlineFilePdf /></a>
                                            <DeleteDiet 
                                                 userId={element.userObject.id.toString()}
                                                 dietId={diet._id.toString()} 
                                                 elementDeleted={elementDeleted} 
                                                 setElementDeleted={setElementDeleted}/>
                                        </div>
                                    );
                                })}
                            </li>
                        </ul>
                        </div>
                    );
                })}
        </div>
    );
}
 
export default AdminInterface;