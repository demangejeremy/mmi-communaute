// Les importations
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

// Styles
const Container = styled.div`
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`


const Footer = ({ titreSite }) => (
  <Container>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p style={{ margin: 0 }}>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          {titreSite}, une application pensée par Jérémy DEMANGE
        </p>
      </p>
      <hr
        style={{
            color: 'white',
            margin: '10px',
            border: 'solid 1px white',
        }}
      />
      <p
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '12px',
         }}
      >
      <Link
          to="/a-propos/"
          style={{
            color: 'white',
            fontSize: '15px',
            padding: '10px',
         }}
        >
          À propos
        </Link>
        | 
        <Link
          to="/contribuer/"
          style={{
            color: 'white',
            fontSize: '15px',
            padding: '10px',
         }}
        >
          Contribuer au projet
        </Link>
        | 
        <a
          href="https://github.com/demangejeremy/mmi-communaute"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: 'white',
            fontSize: '15px',
            padding: '10px',
         }}
        >
          Rejoindre le projet sur GitHub
        </a>
      </p>
    </div>
  </Container>
)

Footer.propTypes = {
    titreSite: PropTypes.string,
  }
  
Footer.defaultProps = {
    titreSite: '',
  }

  
export default Footer
