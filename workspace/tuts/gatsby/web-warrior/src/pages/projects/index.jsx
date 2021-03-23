import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio,projects} from '../../styles/projects.module.css'
import Img from 'gatsby-image'


export default function Projects({ data }) {
  console.log(data)
  const projectsData = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      hello
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Project & Websites I've Created</h3>
        <div className={projects}>
          {projectsData.map(project => (
            <Link to={'/project/' + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a question</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`