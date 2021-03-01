import React from "react"
import { Article } from "../../../../context/articlesContext/Article"
import Image from "gatsby-image"

interface ArticleListItemProps {
  article: Article
}

export const BannerArticleListItem: React.FunctionComponent<ArticleListItemProps> = ({
  article,
}) => {
  const { title, image, publishDate } = article
  return (
    <article className="banner-article-list-item">
      <Image fluid={image.childImageSharp.fluid} />
      <div className="banner-article-list-item__data">
        <h4 className="banner-article-list-item__title">{title}</h4>
        <span className="banner-article-list-item__time">{publishDate}</span>
      </div>
    </article>
  )
}
