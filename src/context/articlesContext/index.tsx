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
  return articleTitle.toLocaleLowerCase().replace(/\s/g, "-")
}
// 150, 350, 560, 1130
export const query = graphql`
  {
    allStrapiArticle {
      nodes {
        body
        description
        id
        title
        tags {
          id
          name
        }
        image {
          childImageSharp {
            fluid(srcSetBreakpoints: [225, 550, 800, 850, 1700]) {
              ...GatsbyImageSharpFluid_withWebp
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
