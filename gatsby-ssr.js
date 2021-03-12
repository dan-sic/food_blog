import { ArticlesProvider } from "./src/context/articlesContext"
import { CategoriesProvider } from "./src/context/categoriesContext"
import { TagsProvider } from "./src/context/tagsContext"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ArticlesProvider>
    <CategoriesProvider>
      <TagsProvider>{element}</TagsProvider>
    </CategoriesProvider>
  </ArticlesProvider>
)
