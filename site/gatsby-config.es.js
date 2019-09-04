import images from 'remark-images'
import emoji from 'remark-emoji'

module.exports = {
  siteMetadata: {
    title: 'Open UI',
    description: 'Open UI ',
    author: 'Open UI',
    githubURL: 'https://github.com/stardust-ui/specifications',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages` },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        remarkPlugins: [images, emoji],
      },
    },

    'gatsby-plugin-react-helmet',

    'gatsby-transformer-sharp',

    'gatsby-plugin-sharp',

    // TODO: do we need this?
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#00a453',
        theme_color: '#00a453',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-remove-trailing-slashes',

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
