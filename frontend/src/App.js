import {  Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className='App'> 
        <Routes>
          <Route exact path='/' element={ <Home/> }></Route>
          <Route path='/signup' element={ <Signup/> }></Route>
          <Route path='/login' element={ <Login/> }></Route>
        </Routes> 
    </div>
  );
}

export default App;
