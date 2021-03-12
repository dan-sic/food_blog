import { Link } from "gatsby"
import React from "react"
import { StaticRoutes } from "../../utils/constants/routes"

export const NotFound = () => {
  return (
    <section className="section-center not-found">
      <h2 className="not-found__header">Page not found</h2>
      <h4 className="not-found__header">
        Go back to <Link to={StaticRoutes.HOMEPAGE}>Home</Link>
      </h4>
    </section>
  )
}
