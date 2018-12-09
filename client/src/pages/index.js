import React from 'react'
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from 'gatsby'

// Styles
const Image = styled(Img)`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  filter: brightness(50%);
  position: fixed;
`

const Container = styled.div`
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

const Bloc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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

export default function Accueil({
    data, // this prop will be injected by the GraphQL query below.
}) {
    return (
    <Container>
        <Image
        fluid={data.file.childImageSharp.fluid}
        style={{ position: `fixed` }}
      />
      <Bloc>
        <ContenuHeader>
        <Titre>Communauté MMI</Titre>
        <Lien to="/a-propos/">En savoir plus sur le projet</Lien>
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
