// Les importations
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

// Styles
const Container = styled.div`
  background-color: #656565;
  background-image: linear-gradient(19deg, #656565 0%, #181818 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom-left: 100px solid black;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Lien = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover{
    color: white;
    opacity: 0.5;
    text-decoration: none;
  }
`

// Le composant Header
const Header = ({ titreSite }) => (
  <Container>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Lien to="/">
          {titreSite}
        </Lien>
      </h1>
    </Wrapper>
  </Container>
)

Header.propTypes = {
  titreSite: PropTypes.string,
}

Header.defaultProps = {
  titreSite: '',
}

export default Header
