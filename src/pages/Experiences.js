import Section from '../components/Section'
import List from '../components/List'
import React from '../App.css'

const ExperiencesPage = () => {
    return (
        <>
            <Section title='Expériences'>
                <List
                    line1='Développeur Fullstack Chez PROGEDOC'
                    line2='Développeur Fullstack Chez ArteFrance'
                />
            </Section>

            <Section title='Formations'>
                <List
                    line1='Baccalauréat ES'
                    line2='BTS SIO SLAM'
                    line3='Bachelor DEVOPS & FullStack'
                    line4='Master IA'
                />
            </Section>

            <Section title='Diplômes'></Section>
        </>
    )
}

export default ExperiencesPage