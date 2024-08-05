import { useCallback, useEffect, useState, useContext, createContext } from "react";
import { auth } from "../config";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
 } from "firebase/auth";
import { db } from "../config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, role, idNum) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await db.collection("users").doc(userCredential.user.uid).set({
                email,
                password,
                role,
                idNum,
            });
            setUser(userCredential.user);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const loginUser = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authValue = {
        createUser,
        loginUser,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;