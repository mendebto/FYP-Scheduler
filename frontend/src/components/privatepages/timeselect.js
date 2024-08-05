import { useContext } from "react";
import "../../App.css";
import Calgrid from "./calgrid";
import { AuthContext } from "../../auth/authcontext";
import { useNavigate } from "react-router-dom";


const TimeSelect = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext) || {};

    if(!user) {
        navigate("/login");
    }

    return(
        <div>
            
            <Calgrid/>
        </div>
    )
}

export default TimeSelect;