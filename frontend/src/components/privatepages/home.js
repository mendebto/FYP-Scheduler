import '../../App.css';

import React, { useState , useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config';
import Sidebar from './sidebar';
import Calgrid from './calgrid';
import { AuthContext } from '../../auth/authcontext';

const Home = () => {
    
    const {user, logOut, loading} = useContext(AuthContext) || {};
    const navigate = useNavigate();
    console.log();
    if(!user) {
        navigate("/login");
    }

    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <Sidebar/>
            
        </div>
    );
}

export default Home;