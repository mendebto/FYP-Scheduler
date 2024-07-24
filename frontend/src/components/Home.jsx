import '../App.css';

import React, { useState , useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

import Calgrid from './Calgrid';
import Sidebar from './Sidebar';


const Home = () => {
    
    const navigate = useNavigate();


    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <Sidebar/>
            <Calgrid/>
        </div>
    );
}

export default Home;