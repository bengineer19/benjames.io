module.exports = {
  siteMetadata: {
    title: `Ben James`,
    description: `Personal website and portfolio for Ben James.`,
    author: `Ben James`,
    url: "https://benjames.io",
    image: "/images/profileImgCompressed.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178629664-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:100,200,400,500,600,700,800`,
          `Libre Baskerville\:400i, 400`,
          `Lato\:100, 300, 400, 600`,
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
