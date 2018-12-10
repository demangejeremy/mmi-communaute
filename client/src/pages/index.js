import React from 'react'
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'


// Styles
const Image = styled(Img)`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  filter: brightness(50%);
  position: fixed;
`

const Container = styled.div`
  margin: 0;
  padding: 0;
  background: 0;
`

const ContenuHeader = styled.div`
  position: relative;
  padding: 5px;
`

const Titre = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
`

const SousTitre = styled.h2`
  opacity: 0.7;
  font-size: 1em;
  text-align: center;
  color: white;
`

const Paragraphe = styled.p`
  opacity: 0.7;
  font-size: 0.9em;
  text-align: center;
  color: white;
`

const Bloc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/*
const Lien = styled(Link)`
  text-align: center;
  border: 1px solid white;
  padding: 10px;
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
    background-color: white;
  }
`
*/
export default function Accueil({
    data, // this prop will be injected by the GraphQL query below.
}) {
    return (
    <Container>
        <Helmet
          meta={[
            { name: 'description', content: 'Application dédiée au DUT MMI.' },
            { name: 'keywords', content: 'mmi, dut, application' },
          ]}
        >
          <html lang="fr" />
          <title>Communauté MMI</title>
        </Helmet>
        <Image
        fluid={data.file.childImageSharp.fluid}
        style={{ position: `fixed` }}
        />
      <Bloc>
        <ContenuHeader>
        <Titre>Communauté MMI</Titre>
        <SousTitre>L'application dédiée au DUT Métiers du Multimédia et de l'Internet.</SousTitre>
        <Paragraphe>Rendez-vous courant janvier 2019.</Paragraphe>
        </ContenuHeader>
      </Bloc>
    </Container>
    )
}

export const query = graphql`
query {
  file(relativePath: { eq: "banniere.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
