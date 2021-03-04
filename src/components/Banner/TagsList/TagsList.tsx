import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  setTagFilter,
  useArticlesFiltersDispatch,
} from "../../../context/articlesFiltersContext"
import { Tag } from "../../../models/Tag"

export const TagsList = () => {
  const data = useStaticQuery(query)
  const dispatch = useArticlesFiltersDispatch()
  const tags: Tag[] = data.allStrapiTag.nodes

  return (
    <section className="banner__section tags">
      <h4 className="banner__heading">Tags</h4>
      <ul className="tags__list">
        {tags.map(tag => (
          <ul key={tag.strapiId}>
            <button
              className="article__tag tags__tag-btn"
              type="button"
              onClick={() => dispatch(setTagFilter(tag.strapiId))}
            >
              #{tag.name}
            </button>
          </ul>
        ))}
      </ul>
    </section>
  )
}

const query = graphql`
  {
    allStrapiTag {
      nodes {
        strapiId
        name
      }
    }
  }
`
