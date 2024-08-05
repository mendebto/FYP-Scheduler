import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext, loginUser} from  "../auth/authcontext";

import { NavLink } from 'react-bootstrap';

const Login = () => {

    const { loading, loginUser, user} = useContext(AuthContext) || {};

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [role, setRole] = useState("");
    const [idCode, setIdCode] = useState("");

    if(loading) {
        return(
            <div></div>
        );
    }

    if(user) {
        navigate("/");
    }

    const onSubmit = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then((result) => {
            console.log(result);
            navigate("/");
        })
        .catch((error) => console.log(error.message));

        e.target.reset();
    };

    return(
        <div className='App'>
            <div>
                <form onSubmit={onSubmit}>
                    
                    <div>
                        <label>Email</label>

                        <input
                            type='text'
                            name="email"
                            placeholder='Email'
                            className='input input-bordered'
                        />

                        <label>Password</label>

                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='input input-bordered'
                        />

                        <button className='btn btn-primary'>Login</button>
                    </div>
                    
                </form>
            </div>
            
            <div>
                <NavLink to="./signup">Sign up</NavLink>
            </div>
            
        </div>
    );
}

export default Login;