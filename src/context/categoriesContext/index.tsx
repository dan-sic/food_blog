import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { Category } from "./Category"

const CategoriesContext = React.createContext<[Category[]] | undefined>(
  undefined
)

export const CategoriesProvider = props => {
  const data = useStaticQuery(query)

  return (
    <CategoriesContext.Provider
      value={[data.allStrapiCategory.nodes]}
      {...props}
    />
  )
}

export const useCategories = () => {
  return useContext(CategoriesContext)
}

export const query = graphql`
  {
    allStrapiCategory {
      nodes {
        strapiId
        name
        description
        categoryImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
