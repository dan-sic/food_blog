import React from "react"
import { About } from "../components/Banner/About/About"
import { WithBanner, Banner } from "../components/Banner/Banner"
import { Subscribe } from "../components/Banner/Subscribe/Subscribe"
import { Layout } from "../components/Layout/Layout"
import { TagsList } from "../components/Banner/TagsList/TagsList"
import { FilteredArticlesList } from "../components/FilteredArticlesList/FilteredArticlesList"
import { ArticlesFiltersProvider } from "../context/articlesFiltersContext"
import { SEO } from "../components/SEO/SEO"

export default function Articles() {
  return (
    <Layout>
      <SEO
        title="Articles"
        description="Find articles by title, category or tag"
      />
      <WithBanner className="mt-md">
        <ArticlesFiltersProvider>
          <FilteredArticlesList />
          <Banner>
            <About />
            <Subscribe />
            <TagsList />
          </Banner>
        </ArticlesFiltersProvider>
      </WithBanner>
    </Layout>
  )
}
