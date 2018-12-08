import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'


const Header = ({ titreSite }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '20px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          {titreSite}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  titreSite: PropTypes.string,
}

Header.defaultProps = {
  titreSite: '',
}

export default Header
