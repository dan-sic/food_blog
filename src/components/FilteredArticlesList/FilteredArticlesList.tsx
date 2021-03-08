import React, { useEffect } from "react"
import { useCategories } from "../../context/categoriesContext/index"
import { ArticlesList } from "../ArticlesList/ArticlesList"
import { useArticles } from "../../context/articlesContext/index"
import { Article } from "../../context/articlesContext/Article"
import {
  ArticlesFiltersState,
  setCategoryFilter,
  setTextFilter,
  useArticlesFiltersDispatch,
  useArticlesFiltersState,
} from "../../context/articlesFiltersContext/index"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { setTagFilter } from "../../context/articlesFiltersContext/index"
import { useTags } from "../../context/tagsContext"

export const FilteredArticlesList = () => {
  const [categories] = useCategories()
  const [tags] = useTags()
  const [articles] = useArticles()
  const articlesFilters = useArticlesFiltersState()
  const dispatch = useArticlesFiltersDispatch()
  const location = useLocation()

  useEffect(() => {
    if (!location.search) return

    const queryParams = queryString.parse(location.search)

    if (queryParams.categoryId) {
      dispatch(setCategoryFilter(Number(queryParams.categoryId)))
    }

    if (queryParams.tagId) {
      dispatch(setTagFilter(Number(queryParams.tagId)))
    }
  }, [])

  const getFilterLabel = () => {
    if (articlesFilters.text) {
      return `Displaying articles by phrase: ${articlesFilters.text}`
    } else if (articlesFilters.categoryId) {
      const categoryName = categories.find(
        c => c.strapiId === articlesFilters.categoryId
      ).name
      return `Displaying articles by category: ${categoryName}`
    } else if (articlesFilters.tagId) {
      const tagName = tags.find(t => t.strapiId === articlesFilters.tagId).name
      return `Displaying articles by tag: #${tagName}`
    } else {
      return "Displaying all articles"
    }
  }

  return (
    <section className="filtered-articles-list">
      <div className="filtered-articles-list__filter">
        <ul className="filtered-articles-list__categories">
          <li>
            <button
              type="button"
              className="article__category filtered-articles-list__category-btn"
              onClick={() => dispatch(setCategoryFilter(null))}
            >
              ALL
            </button>
          </li>
          {categories.map(category => (
            <li key={category.strapiId}>
              <button
                type="button"
                className="article__category filtered-articles-list__category-btn"
                onClick={() => dispatch(setCategoryFilter(category.strapiId))}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        <label className="sr-only" htmlFor="articleSearch">
          Article search
        </label>
        <input
          id="articleSearch"
          className="input"
          type="text"
          value={articlesFilters.text}
          onChange={e => dispatch(setTextFilter(e.target.value))}
          placeholder="Type to filter articles..."
        />
      </div>
      <h3 className="page-heading">{getFilterLabel()}</h3>
      <ArticlesList articles={filterArticles(articlesFilters, articles)} />
    </section>
  )
}

function filterArticles(
  articlesFilters: ArticlesFiltersState,
  articles: Article[]
) {
  const { text, tagId, categoryId } = articlesFilters
  return articles.filter(article => {
    const titleMatch = new RegExp(text, "gi").test(article.title)
    const tagMatch =
      tagId !== null ? article.tags.some(tag => tag.id === tagId) : true
    const categoryMatch =
      categoryId !== null ? article.category.id === categoryId : true

    return titleMatch && tagMatch && categoryMatch
  })
}
