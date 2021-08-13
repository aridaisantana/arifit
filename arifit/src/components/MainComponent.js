import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import Register from "./Sesion/RegisterComponent";
import Registered from "./Sesion/RegisteredOkComponent";
import About from "./AboutComponent";
import Dashboard from './Services/Dashboard';
import AdminInterface from "./Services/AdminInterface";

function MainComponent() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJson = window.localStorage.getItem('loggedUser');
        if(loggedUserJson){
            const user = JSON.parse(loggedUserJson);
            setUser(user);
        }
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/home" component={() => <HomeComponent user={user} setUser={setUser}/>}/>
                <Route exact path="/aboutus" component={() => <About user={user} setUser={setUser}/>} />
                <Route exact path="/register/:rol" component={() => <Register user={user} setUser={setUser}/>}/>
                <Route exact path="/registrocompleto" component={() => <Registered user={user} setUser={setUser}/>} />
                <Route exact path="/service/:rol" component={() => <Dashboard user={user} />} />
                <Route exact path="/sysadmin" component={() => <AdminInterface />} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default MainComponent
