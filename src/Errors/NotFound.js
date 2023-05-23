import {Link} from "react-router-dom";
import React from "../App.css";


const NotFound = () => {
    return (
        <div className="text-center bg-light border my-5 py-5" style={{ height: "150px" }}>
            <h3>Not Found !!!</h3>
            <Link to='/'>Safe Zone</Link>
        </div>
    )
}


export default NotFound