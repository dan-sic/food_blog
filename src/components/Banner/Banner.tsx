import React from "react"
import { About } from "./About/About"
import { Subscribe } from "./Subscribe/Subscribe"
import { BannerArticlesList } from "./BannerArticlesList/BannerArticlesList"

export const Banner = () => {
  return (
    <aside className="banner">
      <About />
      <Subscribe />
      <BannerArticlesList />
    </aside>
  )
}
