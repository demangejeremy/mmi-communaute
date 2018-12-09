module.exports = {
  siteMetadata: {
    title: 'MMI Communauté',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-twitter`,
      options: {           
          q: `@DemangeJeremy`,    
          credentials: {
              consumer_key: "aNZDEsTw10NYQrQxOVy9t9Uxs",
              consumer_secret: "gPdp6wKVDOfiwCgB5VB20KDITUvdUIorusn18iELJltefqmsm9",
              bearer_token: "iUp5qxugnMIDSgpxAcGEKxbKUtPPUuSdysFhPTcSaOiAw",
          },
          tweet_mode: 'extended',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contenu`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Communauté MMI",
        short_name: "MMI",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/images/icon.png",

      // WebApp Manifest Configuration
      appName: null,
      appDescription: "Application dédiée au DUT MMI.",
      developerName: "Jérémy DEMANGE",
      developerURL: null,
      dir: 'auto',
      lang: 'fr-FR',
      background: '#fff',
      theme_color: '#6b37bf',
      display: 'standalone',
      orientation: 'any',
      start_url: '/',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    },
  },
    'gatsby-plugin-offline',
  ],
}
