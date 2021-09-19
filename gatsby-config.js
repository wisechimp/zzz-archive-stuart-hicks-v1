/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // No prefix path as this is on a custom domain
  siteMetadata: {
    title: "Stuart Hicks - App Developer",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/project-page-layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectslist`,
        path: `./src/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skillslist`,
        path: `./src/data/skills`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "portfolio",
        path: `./src/pages/portfolio/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
