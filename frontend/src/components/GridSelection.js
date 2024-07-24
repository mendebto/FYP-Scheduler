import "./../App.css";
import { useEffect, useState } from "react";

import { db, auth } from "../config";
import { 
    getDocs, 
    collection, 
    deleteDoc, 
    doc, 
    updateDoc, 
    addDoc } from "firebase/firestore";

import Signup from "./signup";

const GridSelection = () => {
    const [availTimes, setAvailTimes] = useState([]);

    const[newReqTime, setNewReqTime] = useState("");
    const[newIdNo, setNewIdNo] = useState("");
    const[newDemoType, setNewDemoType] = useState("");

    const studentAvailCollection = collection(db, "student_req_time");
    
    const[updatedReqTime, setUpdatedReqTime] = useState("");

    const getAvailTimes = async () => {
        try {
            const data = await getDocs();
            const userData = data.docs.map((doc) => ({
                ...doc.data(),
                id:doc.id,
            }));
            setAvailTimes(userData);
        } catch (err) {
            console.error(err);
        }
    }

    const onSubmitSelection = async() => {
        try {
            await addDoc(studentAvailCollection, {
                userId:auth?.currentUser?.uid,
                id_no: newIdNo,
                demoType: newDemoType,
                reqTime: newReqTime, 
            });
            getAvailTimes();
        } catch (err) {
            
        }
    }

    const clearSelection = async(id) => {
        const selectionDoc = doc(db, "student_req_time", id);
        await deleteDoc(selectionDoc);
    }

    const updateSelection = async(id) => {
        const selectionDoc = doc(db, "student_req_time", id);
        await updateDoc(selectionDoc, {updatedReqTime});
    }

    useEffect(() => {
        getAvailTimes();
    }, []);



    return(
        <div className="App">
            <Signup/>
            <div>
                {availTimes.map((studentReqTime) => (
                <div>
                    <h1>{studentReqTime.demoType}</h1>  
                    <p>{studentReqTime.reqTime}</p>
                    <p>{studentReqTime.id_no}</p>
                </div>
            ))}
            </div>

            <br/>

            <div>
                <input
                    placeholder="Student Number"
                    onChange={(e) => setNewIdNo(e.target.value)}/>
                <input
                    placeholder="Presentation Type"
                    onChange={(e) => setNewDemoType(e.target.value)}/>
                <input
                    placeholder="Request times"
                    onChange={(e) => setNewReqTime(e.target.value)}/>
                <button onClick={onSubmitSelection}>Submit</button>
                <br/>
            </div>

            <div>
                <input 
                    placeholder="New availability time request"
                    onChange={(e) => setUpdatedReqTime(e.target.value)}/>
                
            </div>
        </div>
    );
}
      
export default GridSelection;