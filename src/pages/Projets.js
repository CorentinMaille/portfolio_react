import List from "../components/List";
import Projet from "../components/Projet";

import ProjectsConst from "../data/project";

const ProjetsPage = () => {
    return (
        <>
            <List
            line1= {
                <Projet
                    name={ProjectsConst[0].name}
                    image={ProjectsConst[0].image}
                    lien={ProjectsConst[0].lien}
                    description={ProjectsConst[0].description}
                />
            }
            line2= {
                <Projet
                    name={ProjectsConst[1].name}
                    image={ProjectsConst[1].image}
                    lien={ProjectsConst[1].lien}
                    description={ProjectsConst[1].description}
                />
            }
            line3= {
                <Projet
                    name={ProjectsConst[2].name}
                    image={ProjectsConst[2].image}
                    lien={ProjectsConst[2].lien}
                    description={ProjectsConst[2].description}
                />
            }
            line4= {
                <Projet
                    name={ProjectsConst[3].name}
                    image={ProjectsConst[3].image}
                    lien={ProjectsConst[3].lien}
                    description={ProjectsConst[3].description}
                />
            }
            />
        </>
    )
}

export default ProjetsPage