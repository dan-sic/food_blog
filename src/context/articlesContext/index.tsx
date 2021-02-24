import { graphql, useStaticQuery } from "gatsby"
import React, { useContext, useState } from "react"
import { Article } from "./Article"

const ArticlesContext = React.createContext<[Article[]] | undefined>(undefined)

export const ArticlesProvider = props => {
  const data = useStaticQuery(query)

  const articles: Article[] = data.allStrapiArticle.nodes.map(
    (item: Omit<Article, "slug">) => {
      const article = {
        ...item,
        slug: createArticleSlug(item.title),
      }
      return article
    }
  )

  return <ArticlesContext.Provider value={[articles]} {...props} />
}

export const useArticles = () => {
  return useContext(ArticlesContext)
}

function createArticleSlug(articleTitle: string): string {
  return articleTitle.toLocaleLowerCase().replace(" ", "-")
}

export const query = graphql`
  {
    allStrapiArticle {
      nodes {
        body
        description
        id
        title
        tags {
          name
          id
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category {
          id
          name
        }
        publishDate(formatString: "MMM Do YY")
      }
    }
  }
`
