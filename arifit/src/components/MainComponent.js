import React from 'react';
import { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import Register from "./RegisterComponent";
import Registered from "./RegisteredOkComponent";
import Services from "./ServicesComponent";

function MainComponent() {

    const [user, setUser] = useState(null);

    return (
        <div id="wrapper">
            <Header user={user} setUser={setUser} />
            <Switch>
                <Route path="/home" component={() => <HomeComponent user={user} setUser={setUser}/>}/>
                <Route exact path="/register/:rol" component={() => <Register />}/>
                <Route exact path="/registrocompleto" component={Registered} />
                <Route exact path="/service/:rol" component={Services} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default MainComponent
