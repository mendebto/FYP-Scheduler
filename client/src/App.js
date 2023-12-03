import logo from './logo.svg';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';

const App = () => {
  return (
    <div className='App'> 
        <Routes>
          <Route exact path='/' element={ <Home/> }></Route>
        </Routes> 
    </div>
  );
}

export default App;