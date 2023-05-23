import {Link} from "react-router-dom";
import React from "../App.css";


const CompetencesLink = () => {
    return (
        <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
            Mes compétences
        </Link>
    )
}

export default CompetencesLink