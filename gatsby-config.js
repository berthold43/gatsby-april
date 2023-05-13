/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
    title: "Mental hälsa",
  },
  plugins: [
            "gatsby-plugin-sass",
            "gatsby-plugin-image",
             "gatsby-plugin-sharp",
             "gatsby-transformer-sharp",
        {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
      "gatsby-plugin-mdx",
],
};
