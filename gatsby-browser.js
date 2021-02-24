import { ArticlesProvider } from "./src/context/articlesContext"
import { CategoriesProvider } from "./src/context/categoriesContext"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ArticlesProvider>
    <CategoriesProvider>{element}</CategoriesProvider>
  </ArticlesProvider>
)
