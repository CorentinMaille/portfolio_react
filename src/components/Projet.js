import {Link} from "react-router-dom";

const Projet = ({name, image, lien, description}) => {
    return (
        <>
            <div className="col-4">
                <p>{name}</p>
            </div>

            <div className="col-4">
                <Link to={lien} >
                    lien
                </ Link>
            </div>

            <div className="col-4">
                <p>{description}</p>
            </div>
        </>
    )
}

export default Projet