import React from "react"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Helmet>
            <title>{frontmatter.titre} | {data.site.siteMetadata.title}</title>
        </Helmet>
      <div className="blog-post">
        <h1>{frontmatter.titre}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr/>
        <p>
            Écrit par <b>{frontmatter.auteur}</b> le {frontmatter.date}.
        </p>
      </div>
    </Layout>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export const pageQuery = graphql`
  query($path: String!) {
    site {
        siteMetadata {
          title
        }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        titre
        auteur
      }
    }
  }
`