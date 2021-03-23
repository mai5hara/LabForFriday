import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { details,featured,html } from '../styles/projects.details.module.css'

export default function ProjectDetails({ data }) {
  console.log(data.markdownRemark)
  const { htmlData } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: htmlData }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`