import React, { useState , useEffect } from 'react';
import Calgrid from './Calgrid';
import Sidebar from './Sidebar';
import Staffsidebar from './Staffsidebar';
import Grid from './Grid';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const Home = () => {
    {{/*
    useEffect(() => {
        axios.get('http://localhost:8000/genalgorithm')
            .then(response => {
                setfit(response.data.best_fitness);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
*/}}

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            setIsAuth(true);
        }
    }, [isAuth]);

    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            

            <Staffsidebar/>
            <Calgrid></Calgrid>
            {
                /*
                <Col xs={2} id='sidebar-wrapper'>
                <TaskColumn></TaskColumn>
                </Col>
                */
            }

            
            
        </div>
    );
}

export default Home;