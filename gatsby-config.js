/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // No prefix path as this is on a custom domain
  siteMetadata: {
    title: "Stuart Hicks App Developer",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectslist`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skillslist`,
        path: `${__dirname}/src/data/skills`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
