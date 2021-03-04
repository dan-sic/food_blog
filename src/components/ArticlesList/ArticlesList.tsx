import React from "react"
import { ArticleListItem } from "./ArticleListItem/ArticleListItem"
import { Article } from "../../context/articlesContext/Article"

interface ArticlesListProps {
  articles: Article[]
}

export const ArticlesList: React.FunctionComponent<ArticlesListProps> = ({
  articles,
}) => {
  const noArticlesFound = articles.length === 0

  return (
    <div className="articles">
      {noArticlesFound ? (
        <span className="articles__empty">No articles found</span>
      ) : (
        articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))
      )}
    </div>
  )
}
