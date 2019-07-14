// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Sonos API Demo',
    description: 'Demo React app to highlight the different Control APIs available with the Sonos Open Platform.',
    author: '@kyleseaman',
  },
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sonso-api-playground',
        short_name: 'sonos demo',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/sonos.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
