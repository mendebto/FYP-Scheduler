import {  Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';
import GridSelection from "./components/GridSelection";

const App = () => {
  return (
    <div className='App'> 
      <Routes>
        <Route exact path='/' element={ <Home/> }></Route>
        <Route path='/signup' element={ <Signup/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/gridsel' element={ <GridSelection/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
