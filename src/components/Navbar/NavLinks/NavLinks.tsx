import { Link } from "gatsby"
import React from "react"
import { StaticRoutes } from "../../../utils/constants/routes"

type NavLinksProps = {
  className?: string
}

export const NavLinks: React.FunctionComponent<NavLinksProps> = ({
  className,
}) => {
  const classes = ["nav-links", className].join(" ")
  return (
    <ul className={classes}>
      <li>
        <Link to={StaticRoutes.HOMEPAGE}>home</Link>
      </li>
      <li>
        <Link to={StaticRoutes.ARTICLES}>articles</Link>
      </li>
      <li>
        <Link to={StaticRoutes.CONTACT}>contact</Link>
      </li>
    </ul>
  )
}
