import { ArticlesProvider } from "./src/context/articlesContext"
import { CategoriesProvider } from "./src/context/categoriesContext"
import React from "react"
import { TagsProvider } from "./src/context/tagsContext"

export const wrapRootElement = ({ element }) => (
  <ArticlesProvider>
    <CategoriesProvider>
      <TagsProvider>{element}</TagsProvider>
    </CategoriesProvider>
  </ArticlesProvider>
)
