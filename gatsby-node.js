exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allStrapiArticle {
        nodes {
          id
          title
        }
      }
    }
  `)

  const items = data.allStrapiArticle.nodes.map(item => ({
    ...item,
    slug: item.title.toLocaleLowerCase().replace(/\s/g, "-"),
  }))

  items.forEach(item => {
    const { slug, id } = item

    actions.createPage({
      path: `/articles/${slug}`,
      component: require.resolve("./src/templates/Article/Article.tsx"),
      context: { id },
    })
  })
}
