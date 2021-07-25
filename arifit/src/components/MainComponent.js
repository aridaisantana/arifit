import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import Register from "./Sesion/RegisterComponent";
import Registered from "./Sesion/RegisteredOkComponent";
import Services from "./Services/ServicesComponent";
import About from "./AboutComponent";

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
        <div id="wrapper">
            <Header user={user} setUser={setUser} />
            <Switch>
                <Route path="/home" component={() => <HomeComponent user={user} setUser={setUser}/>}/>
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/register/:rol" component={() => <Register setUser={setUser}/>}/>
                <Route exact path="/registrocompleto" component={() => <Registered setUser={setUser}/>} />
                <Route exact path="/service/:rol" component={() => <Services user={user} />} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default MainComponent
