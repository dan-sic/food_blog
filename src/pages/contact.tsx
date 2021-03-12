import React from "react"
import { About } from "../components/Banner/About/About"
import { WithBanner, Banner } from "../components/Banner/Banner"
import { Subscribe } from "../components/Banner/Subscribe/Subscribe"
import { Layout } from "../components/Layout/Layout"
import { BannerArticlesList } from "../components/Banner/BannerArticlesList/BannerArticlesList"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { SEO } from "../components/SEO/SEO"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Contact form" />
      <h3 className="page-heading">
        Questions? Comments? Fill the form below to send me a message!
      </h3>
      <WithBanner>
        <ContactForm />
        <Banner>
          <About />
          <Subscribe />
          <BannerArticlesList />
        </Banner>
      </WithBanner>
    </Layout>
  )
}
