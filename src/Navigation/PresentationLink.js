import {Link} from "react-router-dom";
import React from "../App.css";


const PresentationLink = () => {
    return (
        <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
            Présentation
        </Link>
    )
}

export default PresentationLink