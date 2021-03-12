import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { Tag } from "./Tag"

const TagsContext = React.createContext<Tag[] | undefined>(undefined)

export const TagsProvider = props => {
  const data = useStaticQuery(query)
  return <TagsContext.Provider value={data.allStrapiTag.nodes} {...props} />
}

export const useTags = () => {
  return useContext(TagsContext)
}

export const query = graphql`
  {
    allStrapiTag {
      nodes {
        strapiId
        name
      }
    }
  }
`
