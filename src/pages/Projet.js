import Card from "../components/Card";

import ProjectsConst from "../data/project";
import {useParams} from "react-router-dom";

const ProjetPage = () => {
    let { id } = useParams();
    let project = ProjectsConst[id - 1];

    return (
        <Card
            img={project.image}
            title={project.name}
            text={project.description}
        />
    )
}

export default ProjetPage