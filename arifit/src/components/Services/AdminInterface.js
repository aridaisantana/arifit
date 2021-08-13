
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';

const AdminInterface = () => {

    const [users, setUsers] = useState([]);
    let componentMounted = true;

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(
                    "/getUsers"
                );
                const json = await response.json();
                if (componentMounted){
                    setUsers(json);
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

    
    const usersList = new Array();
    const createUsersList = users.forEach( (user) => {
            
            let nombre = user.nombre;
            let email = user.email;
            let created = user.created;
            let rol = user.rol;

            let userObject = {
                 nombre,
                 email,
                 created,
                 rol
            }

            usersList.push({
                userObject
            })
           
    });
    

    console.log("El metodo devuelve", usersList);

    return ( 
        
        <div>
            <Link style={{color:"black"}} to={"/home"}><AiOutlineHome style={{height:"30px", width:"30px", marginRight:"5px"}} /></Link>
            <h1>Interfaz de administrador</h1>
            <table style={{border:"1px solid", marginLeft:"10px"}}>
                <tr><th>Nombre</th><th>Email</th><th>Created</th><th>rol</th></tr>
                {usersList.map((element) => {
                     return(
                        <tr >
                            <td>{element.userObject.nombre.toString()}</td>
                            <td>{element.userObject.email.toString()}</td>
                            <td>{element.userObject.created.toString()}</td>
                            <td>{element.userObject.rol.toString()}</td>
                            <td><button>Subir Rutina</button></td>
                            <td><button>Subir dieta</button></td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
 
export default AdminInterface;