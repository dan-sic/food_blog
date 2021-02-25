import React from "react"
import { useArticles } from "../../context/articlesContext/index"
import { ArticleListItem } from "./ArticleListItem/ArticleListItem"

export const ArticlesList = () => {
  const [articles] = useArticles()

  return (
    <div className="articles">
      {articles.map(article => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </div>
  )
}
