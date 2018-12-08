import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>MMI Communauté arrive courant janvier 2019 !</h1>
    <p>Encore un peu de patience ;)</p>
    <Link to="/a-propos/">En savoir plus.</Link>
  </Layout>
)

export default IndexPage
