import Competences from '../components/Competences'
import Competence from '../components/Competence'
import React from '../App.css'

;
import Layout from "../layouts/layout";

const CompetencesPage = () => {
    return (
        <>
            <Competences title='Compétences'>
                <Competence
                    logo='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F11%2FJavaScript-logo.jpg&f=1&nofb=1&ipt=0218bb418b7f63617c041152d8da1cc08901d01eb7ebdc1264701090eb9a1040&ipo=images'
                    name='Javascript'
                    lien=''
                    note='2'
                />

                <Competence logo='' name='CSS' lien='' note='3' />

                <Competence logo='' name='HTML' lien='' note='1' />

                <Competence logo='' name='Java' lien='' note='5' />

                <Competence logo='' name='Spring' lien='' note='5' />

                <Competence logo='' name='Rabbitmq' lien='' note='3' />

                <Competence logo='' name='Docker' lien='' note='4' />

                <Competence logo='' name='Kubernetes' lien='' note='2' />
            </Competences>
        </>
    )
}

export default CompetencesPage