import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectCard from "../components/portfoliocard"

class Portfolio extends Component {
  render() {
    const portfolioProjects = get(this, 'props.data.allProjectslistJson.edges')
    console.log(portfolioProjects)

    return (
      <Layout pageTitle="Portfolio">
        <h1>Portfolio</h1>
        <div className="portfolioCards">
          {portfolioProjects.map(({ node }) => {
            return (
              <ProjectCard
                key={node.id}
                title={node.title}
                platform={node.platform}
                projectScreenshot={node.imageSrc.childImageSharp.fluid}
                imgAltText={node.imgAltText}
                description={node.description}
                hyperlink="/interests"
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Portfolio

export const portfolioQuery = graphql`
  query {
    allProjectslistJson {
      edges {
        node {
          id
          title
          platform
          imageSrc {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imgAltText
          description
        }
      }
    }
  }
`
