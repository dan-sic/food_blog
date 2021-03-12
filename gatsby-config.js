const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Food&Fun Blog",
    description: "This is a food blog with a spoonful of fun",
    author: "@dandev",
    twitterUsername: "@dandev",
    image: "/site_img.jpeg",
    siteUrl: "http://localhost:3000",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito Sans",
            },
            {
              family: "Playfair Display",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_HOST,
        queryLimit: 1000,
        contentTypes: [`article`, `category`, `tag`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Food&Fun Blog`,
        short_name: `Food&Fun`,
        start_url: `/`,
        background_color: `#fff3e6`,
        theme_color: `#c1a1d3`,
        display: `standalone`,
        icon: `src/assets/logo-primary-small.svg`,
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/index.html`,
          "/contact/index.html",
          "/articles/index.html",
          "/404.html",
        ],
      },
    },
  ],
}
