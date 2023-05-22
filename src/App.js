import React from "./App.css";
import Layout from "./components/layouts/layout";
import Identity from "./components/identity";
import Logo from "./logo.svg";

function App() {
  return (
    <div className="App">
        {/*Identity*/}
        {/*Linkedin*/}
        {/*Competences*/}
        {/*Expériences*/}
        {/*Formations*/}
        {/*Diplômes*/}
        {/*centre d intérêt*/}
        {/*Url de votre site ou git*/}
        {/*Projet : Nom / Description / Img / Lien*/}




        <Identity
            nom='le projet de qualité'
            image={Logo}
            lien='http://localhost:3000'
        />

        <Competences
            nom='le projet de moins bonne qualité'
            image={Logo}
            lien='http://localhost:3000'
        />

        <Socials

        />

        <Experiences

        />

        <Formations

        />

        <Diplomes

        />

        <Hobby

        />

        <website

        />
    </div>
  );
}

export default App;
