import React from "./App.css";

import Section from "./components/Section";
import Identity from "./components/identity";
import Competence from "./components/Competence";
import Comptence from "./components/Competence";
import Competences from "./components/Competences";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <Section title="Présentation">
            <Identity
                picture={process.env.PUBLIC_URL + 'profile_placeholder.png'}
                firstname="Corentin"
                lastname="Maille"
                job="Développeur Fullstack Junior"
            />
      </Section>

      <Section title="Linkedin">
            {/*<Linkedin logo="" lien="http://linkedin/corentinmaille.com" />*/}
      </Section>

      <Competences title="Compétences">
            <Competence
                logo="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F11%2FJavaScript-logo.jpg&f=1&nofb=1&ipt=0218bb418b7f63617c041152d8da1cc08901d01eb7ebdc1264701090eb9a1040&ipo=images"
                name="Javascript"
                lien=""
                note="2" />

            <Competence
                logo=""
                name="CSS"
                lien=""
                note="3" />

            <Competence
                logo=""
                name="HTML"
                lien=""
                note="1" />

            <Competence
                logo=""
                name="Java"
                lien=""
                note="5" />

            <Competence
                logo=""
                name="Spring"
                lien=""
                note="5" />

            <Competence
                logo=""
                name="Rabbitmq"
                lien=""
                note="3" />

            <Competence
                logo=""
                name="Docker"
                lien=""
                note="4" />

            <Competence
                logo=""
                name="Kubernetes"
                lien=""
                note="2" />
      </Competences>

      <Section title="Expériences">

      </Section>

      <Section title="Formations">
            <List
                line1="Baccalauréat ES"
                line2="BTS SIO SLAM"
                line3="Bachelor DEVOPS & FullStack"
                line4="Master IA"
            />
      </Section>


      <Section title="Diplômes">

      </Section>

      <Section title="Centres d'intérêts">

      </Section>

      <Section titre="GitHub : http://monliengithub">

      </Section>

    </div>
  );
}

export default App;
