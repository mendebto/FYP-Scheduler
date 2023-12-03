import { useState , useEffect } from 'react';
import WeekGrid from './Weekgrid';
import '../App.css';
import axios from 'axios';

const Home = () => {
    
const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/hello-world')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    
    return(
        <div className='App'>
            <WeekGrid></WeekGrid>
            <h1>FYP SCHEDULER</h1>
            <p>{message}</p>
        </div>
    );
}

export default Home;