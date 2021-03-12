import React from "react"
import "../styles/index.css"
import { Layout } from "../components/Layout/Layout"
import { CategoriesGallery } from "../components/CategoriesGallery/CategoriesGallery"
import { ArticlesList } from "../components/ArticlesList/ArticlesList"
import { WithBanner, Banner } from "../components/Banner/Banner"
import { About } from "../components/Banner/About/About"
import { BannerArticlesList } from "../components/Banner/BannerArticlesList/BannerArticlesList"
import { Subscribe } from "../components/Banner/Subscribe/Subscribe"
import { useArticles } from "../context/articlesContext/index"
import { SEO } from "../components/SEO/SEO"

export default function Home() {
  const [articles] = useArticles()

  return (
    <Layout navbarType="white">
      <SEO title="Home" />
      <CategoriesGallery />
      <h3 className="page-heading">Recent articles</h3>
      <WithBanner>
        <ArticlesList articles={articles} />
        <Banner>
          <About />
          <Subscribe />
          <BannerArticlesList />
        </Banner>
      </WithBanner>
    </Layout>
  )
}
