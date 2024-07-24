import "../App.css";

import { useState } from "react";

import { 
    createUserWithEmailAndPassword, 
    signOut
    } from "firebase/auth";
import { auth } from "../config";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="App">
            
            <input 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}/>
            <input 
                placeholder="password" 
                type="password"
                onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={signUp}>Sign In</button>
            <button onClick={logout}> Logout </button>
        </div>
    );
};

export default Signup;