import React from 'react'

import Layout from './layout'

function ProjectPageLayout({ children, pageContext}) {
  const { title } = pageContext.frontmatter

  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      {children}
    </Layout>
  )
}

export default ProjectPageLayout
