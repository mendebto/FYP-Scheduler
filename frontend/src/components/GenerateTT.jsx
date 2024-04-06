import React, { useState , useEffect } from 'react';
import Calgrid from './Calgrid';
import Sidebar from './Sidebar';
import Grid from './Grid';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const GenerateTT= () => {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            setIsAuth(true);
        }
    }, [isAuth]);

    {
        /*
        const handleGenerate = () => {
        useEffect(() => {
            axios.get('http://localholst:8000/api/gentt/')
            .then(response => {
                //the data that is going to be received

            })
            .catch(error => {
                //if failure 
            })
        }
        )
    }
        */
    }
    
    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            

            <Sidebar/>
            <Calgrid/>
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

export default GenerateTT;