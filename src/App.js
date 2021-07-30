import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes/Routes';


function App() {
  return (
    <div className="App" 
    style={{backgroundImage: "linear-gradient(to right top, #285598, #0d4eaa, #0843b9, #2934c5, #4b12cb)"}}>
        <Routes/> 
    </div>
  );
}

export default App;
