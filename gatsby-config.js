module.exports = {
  plugins: [
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
  ],
}
