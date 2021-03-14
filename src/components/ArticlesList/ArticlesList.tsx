import React, { useState } from "react"
import { ArticleListItem } from "./ArticleListItem/ArticleListItem"
import { Article } from "../../context/articlesContext/Article"

interface ArticlesListProps {
  articles: Article[]
}

export const ArticlesList: React.FunctionComponent<ArticlesListProps> = ({
  articles,
}) => {
  const noArticlesFound = articles.length === 0
  const pageSize = 5
  const articlesCount = articles.length
  const [articlesDisplayed, setArticlesDisplayed] = useState(pageSize)
  const showLoadMoreBtn = articlesDisplayed < articlesCount

  return (
    <div className="articles">
      {noArticlesFound ? (
        <span className="articles__empty">No articles found</span>
      ) : (
        articles
          .sort(sortArticlesByDate)
          .slice(0, articlesDisplayed)
          .map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))
      )}
      {showLoadMoreBtn && (
        <button
          type="button"
          className="button articles__pagination-btn"
          onClick={() =>
            setArticlesDisplayed(
              articlesDisplayed => articlesDisplayed + pageSize
            )
          }
        >
          Show more
        </button>
      )}
    </div>
  )
}

function sortArticlesByDate(a1: Article, a2: Article): number {
  if (a1.publishDate > a2.publishDate) {
    return -1
  } else if (a1.publishDate < a2.publishDate) {
    return 1
  } else {
    return 0
  }
}
