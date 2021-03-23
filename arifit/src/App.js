import './App.css';
import Main from "./components/MainComponent";
import {BrowserRouter } from 'react-router-dom';

function App() {

  //if(!token){
    //return <LogingForm setToken={setToken} />
  //}

  return (
    <div className="Arifit">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
