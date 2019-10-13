import React from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/portfoliocard"
import FarCry2Screen from '../images/andFarCry2MapsScreenshot.png'

export default () => (
  <Layout pageTitle="Portfolio">
    <h1>Portfolio</h1>
    <ProjectCard
      title="Far Cry 2 Maps"
      platform="Android/Java"
      projectScreenshot={FarCry2Screen}
      imgAltText="A screenshot of the Far Cry 2 Maps app showing the main screen with the overview map."
      description="A simple Android app with maps from the game Far Cry 2. Developed in Java."/>
  </Layout>
)
