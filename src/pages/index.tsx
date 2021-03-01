import React from "react"
import "../styles/index.css"
import { Layout } from "../components/Layout/Layout"
import { CategoriesGallery } from "../components/CategoriesGallery/CategoriesGallery"
import { ArticlesList } from "../components/ArticlesList/ArticlesList"
import { Banner } from "../components/Banner/Banner"

export default function Home() {
  return (
    <Layout>
      <CategoriesGallery />
      <section className="section-center index-page__main">
        <ArticlesList />
        <Banner />
      </section>
    </Layout>
  )
}
