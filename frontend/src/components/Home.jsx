import React, { useState , useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Calgrid from './Calgrid';
import Sidebar from './Sidebar';
import Staffsidebar from './Staffsidebar';
import Grid from './Grid';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const Home = () => {
    
    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            setIsAuth(true);
        }
    }, [isAuth]);
    useEffect(() => {
        if (localStorage.getItem('refresh_token') !== null){
            setIsAuth(true);
        } else {
            setIsAuth(false);
            //navigate('/login'); //uncomment this to enable authentication
        }
    })
    useEffect(() => {
        (async () => {
            try{
                const {data} = await 
                axios.post('http://localhost:8000/logout/',{
                    refresh_token: localStorage.getItem('refresh_token')
                }, {headers: {'Content-Type': 'application/json'}},
                {withCredentials: true});
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = null;
            navigate('/login');
        } catch(error) {
            console.log(error);
        }
    })();
}, [isAuth]);
    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <Staffsidebar/>
            <Calgrid/>
        </div>
    );
}

export default Home;