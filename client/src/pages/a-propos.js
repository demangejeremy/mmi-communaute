import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>À propos</h1>
    <p>Ceci est un projet Open Source sous licence MIT lancé par Jérémy DEMANGE.</p>
    <p>Plus d'informations à venir sous peu de temps.</p>
    <p>N'hésitez pas à contribuer à ce projet :)</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Layout>
)

export default SecondPage
