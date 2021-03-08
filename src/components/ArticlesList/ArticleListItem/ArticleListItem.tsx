import React from "react"
import { Article } from "../../../context/articlesContext/Article"
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { StaticRoutes } from "../../../utils/constants/routes"

interface ArticleListItemProps {
  article: Article
}

export const ArticleListItem: React.FunctionComponent<ArticleListItemProps> = ({
  article,
}) => {
  const { title, image, category, publishDate, slug, body } = article

  return (
    <article className="article-list-item">
      <Image
        className="article-list-item__image"
        fluid={image.childImageSharp.fluid}
      />
      <div className="article-list-item__data">
        <Link to={`${StaticRoutes.ARTICLES}/${slug}`}>
          <h3 className="article-list-item__title">{title}</h3>
        </Link>
        <p>{body.slice(0, 250) + "..."}</p>
        <div className="article-list-item__metadata">
          <Link
            to={`${StaticRoutes.ARTICLES}?categoryId=${article.category.id}`}
          >
            <span className="article__category">{category.name}</span>
          </Link>
          <span className="article__time">
            <AiOutlineClockCircle />
            {publishDate}
          </span>
        </div>
        <Link
          className="article-list-item__link"
          to={`${StaticRoutes.ARTICLES}/${slug}`}
        >
          Continue reading
          <AiOutlineArrowRight />
        </Link>
      </div>
    </article>
  )
}
