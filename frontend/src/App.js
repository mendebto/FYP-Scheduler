import {  Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/privatepages/home';
import TimeSelect from "./components/privatepages/timeselect";
import Login from './components/login';
import Signup from './components/signup';

import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <div className='App'> 
        <Routes>
        <Route exact path='/' element={ <Home/> }></Route>
        <Route path="/timeselect" element={<TimeSelect/>}></Route>
        <Route path='/signup' element={ <Signup/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
