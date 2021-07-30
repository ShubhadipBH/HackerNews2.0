
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes/Routes';


function App() {
  return (
    <div className="App" 
    style={{backgroundColor:"#F6F6EF"}}>
        <Routes/> 
    </div>
  );
}

export default App;