/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Stuart Hicks App Developer",
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skillslist`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
