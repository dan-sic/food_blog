import React from "react"
import { graphql } from "gatsby"
import { Article } from "../../context/articlesContext/Article"
import { Layout } from "../../components/Layout/Layout"
import { WithBanner } from "../../components/Banner/Banner"
import Image from "gatsby-image"
import { AiOutlineClockCircle } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import { AiOutlineMenu } from "react-icons/ai"

export default ({ data }) => {
  const {
    strapiArticle: article,
  }: { strapiArticle: Omit<Article, "slug"> } = data

  return (
    <Layout>
      <WithBanner>
        <article className="article">
          <header className="article__header">
            <Image fluid={article.image.childImageSharp.fluid} />
            <div className="article__data">
              <h2 className="article__title">{article.title}</h2>
              <div className="article__time">
                <AiOutlineClockCircle />
                {article.publishDate}
              </div>
              <span className="article__category">{article.category.name}</span>
            </div>
          </header>
          <ReactMarkdown className="article__content">
            {article.body}
          </ReactMarkdown>
          <div className="article__tags">
            {article.tags.map(tag => (
              <span key={tag.id}>#{tag.name}</span>
            ))}
          </div>
        </article>
      </WithBanner>
    </Layout>
  )
}

export const query = graphql`
  query GetArticle($id: String) {
    strapiArticle(id: { eq: $id }) {
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
          fluid(maxWidth: 1100) {
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
`
