import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PresentationPage from "../pages/Main";
import ExperiencesPage from "../pages/Experiences";
import CompetencesPage from "../pages/Competences";
import React from "../App.css";
import NotFound from "../Errors/NotFound";
import Layout from "../layouts/layout";
import ProjetsPage from "../pages/Projets";
import ProjetPage from "../pages/Projet";


const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<PresentationPage />} />
                    <Route path='/experiences' element={<ExperiencesPage />} />
                    <Route path='/competences' element={<CompetencesPage />} />
                    <Route path='/projets' element={<ProjetsPage />} />
                    <Route path='/projet/:id' element={<ProjetPage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}


export default Routeur