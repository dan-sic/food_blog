import React from "react"
import "../styles/index.css"
import { Layout } from "../components/Layout/Layout"
import { CategoriesGallery } from "../components/CategoriesGallery/CategoriesGallery"
import { ArticlesList } from "../components/ArticlesList/ArticlesList"
import { WithBanner } from "../components/Banner/Banner"

export default function Home() {
  return (
    <Layout navbarType="white">
      <CategoriesGallery />
      <WithBanner>
        <ArticlesList />
      </WithBanner>
    </Layout>
  )
}
