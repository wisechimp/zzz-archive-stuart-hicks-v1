import React from "react"

import Layout from "./layout"

const ProjectPageLayout = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter

  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      {children}
    </Layout>
  )
}

export default ProjectPageLayout
