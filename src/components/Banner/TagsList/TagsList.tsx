import React from "react"
import {
  setTagFilter,
  useArticlesFiltersDispatch,
} from "../../../context/articlesFiltersContext"
import { useTags } from "../../../context/tagsContext"

export const TagsList = () => {
  const dispatch = useArticlesFiltersDispatch()
  const [tags] = useTags()

  return (
    <section className="banner__section tags">
      <h4 className="banner__heading">Tags</h4>
      <ul className="tags__list">
        {tags.map(tag => (
          <li key={tag.strapiId}>
            <button
              className="article__tag tags__tag-btn"
              type="button"
              onClick={() => dispatch(setTagFilter(tag.strapiId))}
            >
              #{tag.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
