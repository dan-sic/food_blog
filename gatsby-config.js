const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Food&Fun Blog",
    description: "This is a food blog with a spuneful of fun",
    author: "@dandev",
    // image: "/twitter-img.png",
    // siteUrl: "",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
            },
            {
              family: "Lora",
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
        contentTypes: [`article`],
      },
    },
  ],
}
