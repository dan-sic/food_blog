import { Link } from "gatsby"
import React from "react"
import { StaticRoutes } from "../../../utils/constants/routes"

type NavLinksProps = {
  className?: string
}

export const NavLinks: React.FunctionComponent<NavLinksProps> = ({
  className,
}) => {
  let pathname: string
  if (typeof window !== `undefined`) {
    pathname = window.location.pathname
  }

  const classes = ["nav-links", className].join(" ")

  return (
    <ul className={classes}>
      <li
        className={
          pathname === StaticRoutes.HOMEPAGE ? "nav-links__active-link" : ""
        }
      >
        <Link to={StaticRoutes.HOMEPAGE}>home</Link>
      </li>
      <li
        className={
          pathname === StaticRoutes.ARTICLES ? "nav-links__active-link" : ""
        }
      >
        <Link to={StaticRoutes.ARTICLES}>articles</Link>
      </li>
      <li
        className={
          pathname === StaticRoutes.CONTACT ? "nav-links__active-link" : ""
        }
      >
        <Link to={StaticRoutes.CONTACT}>contact</Link>
      </li>
    </ul>
  )
}
