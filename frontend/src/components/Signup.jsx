import './../App.css';
import React, { useState } from 'react';
import 'react-bootstrap';
import Cookies from 'js-cookie';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();
        const user = {
            id: id,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email,
        }
        try {
            const {data} = await axios.post('http://localhost:8000/register', user);
            Cookies.set('access_token', data.access_token);
            Cookies.set('refresh_token', data.refresh_token);
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }
    return(
        <div>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <h1 id='title'>Signup</h1>

            <div class='row justify-content-center'>
            <form>

                <input
                type='id'
                placeholder='Enter Student ID'
                onChange={e => setID(e.target.value)}
                />
                <input
                type='email'
                onChange={e => setEmail(e.target.value)}
                placeholder='Staff ID'
                />
                <br/>
                <input
                type='firstname'
                onChange={e => setFirstname(e.target.value)}
                placeholder='Firstname'

                />
                <br/>
                <input
                type='lastname'
                onChange={e => setLastname(e.target.value)}
                placeholder='Lastname'
                />
                <br/>
                <input
                type='password'
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
                />
                <br/>
                <div class='col text-center'>
                    <button
                    type='submit' class='btn btn-primary'>
                    Sign up
                    </button>
                </div>
                
            </form>
        </div>
            
            <br/>
            <Link to="/login" className='row justify-content-center'><p>Login</p></Link>
        </div>
    );
}

export default Signup;