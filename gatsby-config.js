module.exports = {
  siteMetadata: {
    title: `Ben James`,
    description: `Ben James - technology & sustainability. IPCC, Octopus Energy, Arm, Hackaday, Cambridge Consultants, MEng Engineering at Cambridge.`,
    author: `Ben James`,
    url: "https://benjames.io",
    image: "/images/profileImgCompressed.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-178629664-1",
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-NKZE1G9JH0", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#4D143B`,
        theme_color: `#4D143B`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:100,200,300,400,500,600,700,800`,
          `Libre Baskerville\:400i, 400`,
          `Lato\:100, 300, 400, 600`,
          `Poppins\: 600`, // For InClimate only
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
