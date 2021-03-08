import React from "react"
import { graphql, Link } from "gatsby"
import { Article } from "../../context/articlesContext/Article"
import { Layout } from "../../components/Layout/Layout"
import { Banner, WithBanner } from "../../components/Banner/Banner"
import Image from "gatsby-image"
import { AiOutlineClockCircle } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import { About } from "../../components/Banner/About/About"
import { BannerArticlesList } from "../../components/Banner/BannerArticlesList/BannerArticlesList"
import { Subscribe } from "../../components/Banner/Subscribe/Subscribe"
import { StaticRoutes } from "../../utils/constants/routes"

export default ({ data }) => {
  const {
    strapiArticle: article,
  }: { strapiArticle: Omit<Article, "slug"> } = data

  return (
    <Layout>
      <WithBanner className="mt-md">
        <article className="article">
          <header className="article__header">
            <Image
              className="article__img"
              fluid={article.image.childImageSharp.fluid}
            />
            <div className="article__data">
              <h2 className="article__title">{article.title}</h2>
              <span className="article__time">
                <AiOutlineClockCircle />
                {article.publishDate}
              </span>
              <Link
                to={`${StaticRoutes.ARTICLES}?categoryId=${article.category.id}`}
              >
                <span className="article__category">
                  {article.category.name}
                </span>
              </Link>
            </div>
          </header>
          <ReactMarkdown className="article__content">
            {article.body}
          </ReactMarkdown>
          <div className="article__tags">
            {article.tags.map(tag => (
              <Link
                key={tag.id}
                to={`${StaticRoutes.ARTICLES}?tagId=${tag.id}`}
              >
                <span className="article__tag">#{tag.name}</span>
              </Link>
            ))}
          </div>
        </article>
        <Banner>
          <About />
          <Subscribe />
          <BannerArticlesList />
        </Banner>
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
        id
        name
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
