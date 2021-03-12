import React from "react"
import { Layout } from "../components/Layout/Layout"
import { NotFound } from "../components/NotFound/NotFound"
import { SEO } from "../components/SEO/SEO"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <NotFound />
    </Layout>
  )
}
