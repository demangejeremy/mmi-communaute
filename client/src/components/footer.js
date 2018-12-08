import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'


const Footer = ({ titreSite }) => (
  <div
    style={{
      background: 'black',
      marginTop: '50px',
    }}
  >
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
          {titreSite}, un site web pensé par Jérémy DEMANGE.
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
        <Link
          to="https://github.com/demangejeremy/mmi-communaute"
          target="_blank"
          style={{
            color: 'white',
            fontSize: '15px',
            padding: '10px',
         }}
        >
          Rejoindre le projet sur GitHub
        </Link>
      </p>
    </div>
  </div>
)

Footer.propTypes = {
    titreSite: PropTypes.string,
  }
  
Footer.defaultProps = {
    titreSite: '',
  }

  
export default Footer
