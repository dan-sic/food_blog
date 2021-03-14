import React from "react"
import { useArticles } from "../../../context/articlesContext/index"
import { BannerArticleListItem } from "./BannerArticleListItem/BannerArticleListItem"

export const BannerArticlesList = () => {
  const [articles] = useArticles()

  return (
    <section className="banner__section banner-articles">
      <h4 className="banner__heading">Popular articles</h4>
      {articles.slice(0, 3).map(article => (
        <BannerArticleListItem key={article.id} article={article} />
      ))}
    </section>
  )
}
