import Section from '../components/Section'
import Identity from '../components/identity'
import React from '../App.css'
import Layout from "../layouts/layout";

const PresentationPage = () => {
    return (
        <>
            <Section title='Présentation'>
                <Identity
                    picture={process.env.PUBLIC_URL + 'profile_placeholder.png'}
                    firstname='Corentin'
                    lastname='Maille'
                    job='Développeur Fullstack Junior'
                />
            </Section>

            <Section title='Linkedin'>
                {/*<Linkedin logo="" lien="http://linkedin/corentinmaille.com" />*/}
            </Section>

            <Section title="Centres d'intérêts">

            </Section>

            <Section titre='GitHub : http://monliengithub'>

            </Section>
        </>
    )
}

export default PresentationPage