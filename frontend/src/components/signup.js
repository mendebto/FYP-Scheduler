import "../App.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../auth/authcontext";
import { updateProfile } from "firebase/auth";

import { 
    createUserWithEmailAndPassword, 
    } from "firebase/auth";

import { auth } from "../config";

const Signup = () => {

    const {createUser, user, loading} = useContext(AuthContext) || {};
    const navigate = useNavigate();

    console.log(auth?.currentUser?.email);

    if(user) {
        navigate("/");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password= e.target.password.value;
        const role = e.target.role.value;
        const IdNum = e.target.IdNum.value;
        createUser(email,password,role,IdNum)
        .then((result) => {
            updateProfile(result.user, {
                displayName:IdNum
            });
            navigate("/");
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
        e.target.reset();
    }

    return (
        <div className="App">
            <div>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                        />

                        
                    </div>

                    <div className="form-control">
                        <label>
                            Password
                        </label>
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                        />
                    </div>

                    <div>
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                        
                </form>
            </div>
            
        </div>
    );
};

export default Signup;