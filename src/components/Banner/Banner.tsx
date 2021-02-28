import React from "react"
import { About } from "./About/About"
import { Subscribe } from "./Subscribe/Subscribe"

export const Banner = () => {
  return (
    <aside className="banner">
      <About />
      <Subscribe />
    </aside>
  )
}
