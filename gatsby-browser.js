import { ArticlesProvider } from "./src/context/articlesContext"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ArticlesProvider>{element}</ArticlesProvider>
)
