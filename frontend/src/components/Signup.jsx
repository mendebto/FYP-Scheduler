import './../App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {

    const[userType, setUserType] = useState("student");

    const handleUserChange = (e) => {
        setUserType(e.target.value);
    }

    return(
        <div>
            <h1 class="Logo">FYP SCHEDULER</h1>
            <h1 id='title'>Signup</h1>


            <div class='row justify-content-center'>
                <label>
                    
                    <input
                        type="radio"
                        value="student"
                        checked={userType === "student"}
                        onChange={handleUserChange}
                    />
                     Student Signup
                </label>
                <br/>
                <label>
                    <input 
                    type='radio'
                    value="staff"
                    checked={userType === 'staff'}
                    onChange={handleUserChange}
                    />
                Staff Signup
                </label>
            </div>
            {userType === "student" ? (
                <StudentSignup/>) : (
                <StaffSignup/>
            )}
            <br/>
            <Link to="/login" className='row justify-content-center'><p>Login</p></Link>
        </div>
    );
}

const StudentSignup= () => {
    return(
        <div class='row justify-content-center'>
            <form>
                    <input
                    type='email'
                    placeholder='Student ID'
                    />
                    <br/>
                    <input
                    type='firstname'
                    placeholder='Firstname'
                    />
                    <br/>
                    <input
                    type='lastname'
                    placeholder='Lastname'
                    />
                    <br/>
                    <input
                    type='password'
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
    return(
        <div class='row justify-content-center'>
            <form>
                <input
                type='email'
                placeholder='Staff ID'
                />
                <br/>
                <input
                type='firstname'
                placeholder='Firstname'

                />
                <br/>
                <input
                type='lastname'
                placeholder='Lastname'
                />
                <br/>
                <input
                type='password'
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