import React from "react"

export const Banner = ({ children }) => {
  return <aside className="banner">{children}</aside>
}

export const WithBanner = ({ children }) => {
  return <main className="section-center mt-l with-banner">{children}</main>
}
