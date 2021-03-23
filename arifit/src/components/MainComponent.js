import React from 'react';
import { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from "./HeaderComponent";
import HomeComponent from "./HomeComponent";

function MainComponent() {

    const [token, setToken] = useState();

    return (
        <div>
            <Header token={token} setToken={setToken}/>
            <Switch>
                <Route path="/home" component={() => <HomeComponent token={token}/>}/>
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default MainComponent
