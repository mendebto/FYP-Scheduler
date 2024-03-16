import '../App.css';
import React, {useState, useEffect} from 'react';
import {Router, Link} from "react-router-dom";
const Login = () => {

    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    const handleSubmit =(e) => {
        
    }

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
                        onChange={handleUserChange}
                    />
                     Student Login
                </label>
                <br/>
                <label>
                    <input 
                    type='radio'
                    value="staff"
                    checked={userType === 'staff'}
                    onChange={handleUserChange}
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
    return(
        <div class='row justify-content-center'>
            <form class='form-group'>
                <input
                type='email'
                placeholder='Enter Student ID'

                />
                <br/>
                <input
                type='password'
                placeholder=' Enter Password'

                />
                <div class='col text-center'>
                    <button
                    type='submit' class='btn btn-primary'>
                    Log in
                    </button>
                </div>
               
            </form>
        </div>
    );
}

const StaffLogin = () => {
    return(
        <div class='row justify-content-center'> 
            <form>
                <input
                type='email'
                placeholder='Enter Staff ID'

                />
                <br/>
                <input
                type='password'
                placeholder='Enter Password'

                />
                <div class='col text-center'>
                    <button
                    type='submit' class='btn btn-primary '>
                    Log in
                    </button>
                </div>
            
            </form>
        </div>

    );
}

export default Login;