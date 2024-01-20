import React, { useState , useEffect } from 'react';
import WeekGrid from './Weekgrid';
import TaskColumn from './TaskColumn';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const Home = () => {
    {{/*
    
const [best_fitness, setfit] = useState("");

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
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            window.location.href = '/login'
        } else {
            (async () => {
                try{
                    const{data} = await axios.get(
                        'http://localhost:8000/home/', {
                            headers: {
                                "Content-Type": 'application/json'
                        }}
                    );
                    setMessage(data.message)
                } catch (e){
                    console.log('not auth')
                }
            })()};
    }, []);

    return(
        <div className='App'>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <h3>Hi {message}</h3>
            <WeekGrid></WeekGrid>
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