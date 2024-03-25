import './../App.css';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: e.target.value
        })
    }

    function SignupForm() {
        const [formData, setFormData] = useState({
            userType: '',
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000',formData)//needs to be confgiured
            .then(response => {
                navigate.push('/');
            })
            .catch(error => {
                //what to do when it fails
            })
    }

    return(
        <div>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <h1 id='title'>Signup</h1>

            <div class='row justify-content-center'>
            <form onSubmit={handleSubmit}>
                <input
                type='email'
                onChange={handleChange}
                placeholder='Staff ID'
                />
                <br/>
                <input
                type='firstname'
                onChange={handleChange}
                placeholder='Firstname'

                />
                <br/>
                <input
                type='lastname'
                onChange={handleChange}
                placeholder='Lastname'
                />
                <br/>
                <input
                type='password'
                onChange={handleChange}
                placeholder='Password'
                />
                <br/>
                <input
                type='password'
                placeholder='Retype Password'
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

const StudentSignup= () => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: e.target.value
        })
    }

    function SignupForm() {
        const [formData, setFormData] = useState({
            userType: '',
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000',formData)//needs to be confgiured
            .then(response => {
                navigate.push('/');
            })
            .catch(error => {
                //what to do when it fails
            })
    }

    return(
        <div class='row justify-content-center'>
            <form onSubmit={handleSubmit}>
                    <input
                    type='email'
                    onChange={handleChange}
                    placeholder='Student ID'
                    />
                    <br/>
                    <input
                    type='firstname'
                    onChange={handleChange}
                    placeholder='Firstname'
                    />
                    <br/>
                    <input
                    type='lastname'
                    onChange={handleChange}
                    placeholder='Lastname'
                    />
                    <br/>
                    <input
                    type='password'
                    onChange={handleChange}
                    placeholder='Password'
                />
                    <br/>
                    <input
                    type='password'
                    placeholder='Retype Password'

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
        
    );
}

const StaffSignup= () => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: e.target.value
        })
    }

    function SignupForm() {
        const [formData, setFormData] = useState({
            userType: '',
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000',formData)//needs to be confgiured
            .then(response => {
                navigate.push('/');
            })
            .catch(error => {
                //what to do when it fails
            })
    }

    return(
        <div class='row justify-content-center'>
            <form onSubmit={handleSubmit}>
                <input
                type='email'
                onChange={handleChange}
                placeholder='Staff ID'
                />
                <br/>
                <input
                type='firstname'
                onChange={handleChange}
                placeholder='Firstname'

                />
                <br/>
                <input
                type='lastname'
                onChange={handleChange}
                placeholder='Lastname'
                />
                <br/>
                <input
                type='password'
                onChange={handleChange}
                placeholder='Password'
                />
                <br/>
                <input
                type='password'
                placeholder='Retype Password'
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

    );
}
export default Signup;