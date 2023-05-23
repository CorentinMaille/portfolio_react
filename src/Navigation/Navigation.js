import {Link} from "react-router-dom";
import React from "../App.css";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Présentation</Link>
                </li>
                <li>
                    <Link to='/experiences'>Mes expériences</Link>
                </li>
                <li>
                    <Link to='/competences'>Mes compétences</Link>
                </li>
                <li>
                    <Link to='/projets'>Mes Projets</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation