import React from "react"
import "../styles/index.css"
import { Layout } from "../components/Layout/Layout"
import { CategoriesGallery } from "../components/CategoriesGallery/CategoriesGallery"

export default function Home() {
  return (
    <Layout>
      <CategoriesGallery />
    </Layout>
  )
}
