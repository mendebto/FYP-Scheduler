import '../App.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink } from 'react-bootstrap';

const Login = () => {

    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className='App'>
            <div>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            <div/>

            <div>
                <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
                
            <div>
                 <button 
                    onClick={onSubmit}
                >Login</button>
            </div>
               
            <div>
                <NavLink to="./signup">Sign up</NavLink>
            </div>
            </div>
        </div>
    );
}

export default Login;