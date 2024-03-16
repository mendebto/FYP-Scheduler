import axios from "axios";
import "./../App.css";
import { useState } from "react";

const GridSelection = () => {
    
    const handleSubmit = async (event) => {
      try {
        const response = await axios.post('/api', {
          height: height,
          weight: weight,
        });
        setForm(response.data.availabletimes);}
        catch(error) {
            console.error(error);
        }  
    }
    

    return(
        <div>
            <button></button>
        </div>
    );
}
    
export default GridSelection;