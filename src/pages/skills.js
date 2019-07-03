import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SkillIcon from "../components/skillicon"

class Skills extends Component {
  render() {
    const skillsList = get(this, 'props.data.allSkillslistJson.edges')

    return (
      <Layout pageTitle="Skills">
      <h1>Skills</h1>

      <h3><i>Technical Buzzwords</i></h3>
      <ul>
        <li>Mobile: Android - MVVM, Room NoSQL Databases, Firebase Database and Authentication, Local Notifications, Data Persistence</li>
        <li>Mobile: iOs - Local Notifications, Firebase Database and Authentication</li>
        <li>Mobile: React Native - Redux for managing state, Firebase Database and Authentication, Data persistence </li>
        <li>Responsive PWAs: Gatsby/React - Google Functions, WordPress integration</li>
        <li>Version Control: Git</li>
      </ul>
      <div className="skillIconRow">
        {skillsList.map(({ node }) => {
          return (
            <SkillIcon Name={node.skillname} />
          )
        })}
      </div>
      <h3><i>Soft Skills</i></h3>
      <ul>
        <li>Teamwork - </li>
        <li>Independant - </li>
        <li>Problem Solver - </li>
        <li></li>
      </ul>
    </Layout>
    )
  }
}

export default Skills

export const query = graphql`
  query {
    allSkillslistJson {
      edges {
        node {
          skillname
        }
      }
    }
  }
`
