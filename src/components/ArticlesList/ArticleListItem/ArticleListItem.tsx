import React from "react"
import { Article } from "../../../context/articlesContext/Article"
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import Image from "gatsby-image"
import { Link } from "gatsby"

interface ArticleListItemProps {
  article: Article
}

export const ArticleListItem: React.FunctionComponent<ArticleListItemProps> = ({
  article,
}) => {
  const { title, description, image, category, publishDate, slug } = article
  return (
    <article className="article-list-item">
      <Image
        className="article-list-item__image"
        fluid={image.childImageSharp.fluid}
      />
      <div className="article-list-item__data">
        <h3 className="article-list-item__title">{title}</h3>
        <p>{description}</p>
        <div className="article-list-item__metadata">
          <span className="article__category">{category.name}</span>
          <span className="article__time">
            <AiOutlineClockCircle />
            {publishDate}
          </span>
        </div>
        <Link className="article-list-item__link" to={`/${slug}/`}>
          Continue reading
          <AiOutlineArrowRight />
        </Link>
      </div>
    </article>
  )
}
