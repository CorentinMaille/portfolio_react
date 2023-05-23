import {Link} from "react-router-dom";
import React from "../App.css";

const ExperiencesLink = () => {
    return (
        <Link to={{screen: 'Profile', params: {id: 'jane'}}}>
            Mes expériences
        </Link>
    )
}

export default ExperiencesLink