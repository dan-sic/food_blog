import React from "react"
import { Article } from "../../../../context/articlesContext/Article"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { StaticRoutes } from "../../../../utils/constants/routes"

interface ArticleListItemProps {
  article: Article
}

export const BannerArticleListItem: React.FunctionComponent<ArticleListItemProps> = ({
  article,
}) => {
  const { title, image, publishDate, slug } = article
  return (
    <Link
      aria-label={`Link to article: ${title}`}
      to={`${StaticRoutes.ARTICLES}/${slug}`}
    >
      <article className="banner-article-list-item">
        <Image
          fluid={{
            ...image.childImageSharp.fluid,
            sizes: "145px",
          }}
        />
        <div className="banner-article-list-item__data">
          <h5 className="banner-article-list-item__title">{title}</h5>
          <span className="banner-article-list-item__time">{publishDate}</span>
        </div>
      </article>
    </Link>
  )
}
