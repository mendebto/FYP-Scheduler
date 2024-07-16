import '../App.css';
import React, {useState, useEffect} from 'react';
import {Router, Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import 'react-bootstrap';


const Login = () => {
    
    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        try {
            const {data} = await axios.post('http://localhost:8000/token/', user);
            Cookies.set('access_token', data.access_token);
            Cookies.set('refresh_token', data.refresh_token);
            navigate('/'); 
    }
    catch(error) {
        console.log(error);
    }} 

    return(
        <div>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <h1 id='title'>Login</h1>
            <div class='row justify-content-center'>
                <label>
                    <input
                        type="radio"
                        value="student"
                        checked={userType === "student"}
                        onChange={e => handleUserChange(e)}
                    />
                     Student Login
                </label>
                <br/>
                <label>
                    <input 
                    type='radio'
                    value="staff"
                    checked={userType === 'staff'}
                    onChange={e => handleUserChange(e)}
                    />
                Staff Login
                </label>
            </div>

            {userType === "student" ? (
                <StudentLogin/>) : (
                <StaffLogin/>
            )}

            <Link to="/signup" className='row justify-content-center'><p>Signup</p></Link>
            
        </div>
    );
}

const StudentLogin = () => {
    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        console.log(userType);
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        
            const {data} = await axios.post('http://localhost:8000/token/', user,
            {headers: {'Content-Type': 'application/json'}},
            {withCredentials: true});
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
            navigate('/');
    }
    return(
        <div className='Auth-form-container row justify-content-center'>
            <form class='Auth-form form-group'>
                <input
                type='email'
                placeholder='Enter Student Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input
                type='password'
                placeholder=' Enter Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div class='col text-center'>
                    <button
                    type='submit' 
                    className='btn btn-primary'>
                    Log in
                    </button>
                </div>
               
            </form>
        </div>
    );
}
const StaffLogin = () => {
    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        try {
            const {data} = await axios.post('http://localhost:8000/token/', user);
            Cookies.set('access_token', data.access_token);
            Cookies.set('refresh_token', data.refresh_token);
            navigate('/');
    }
    catch(error) {
        console.log(error);
    }}
    return(
        <div class='row justify-content-center'> 
            <form>
                <input
                type='email'
                placeholder='Enter Staff Email'
                onChange={e => setEmail(e.target.value)}
                />
                <br/>
                <input
                type='password'
                placeholder='Enter Password'
                onChange={e => setPassword(e.target.value)}
                />
                <div class='col text-center'>
                    <button
                    type='submit' class='btn btn-primary' onClick={submit}>
                    Log in
                    </button>
                </div>
            
            </form>
        </div>

    );
}

export default Login;