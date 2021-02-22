import React from "react"
import { Link } from "gatsby"
import { StaticRoutes } from "../../../utils/constants/routes"
// @ts-ignore
import logo from "../../../assets/logo.svg"

export const NavHeder = ({ children }) => {
  return (
    <div className="navheader">
      <Link to={StaticRoutes.HOMEPAGE}>
        <img src={logo} alt="Site logo" />
      </Link>
      {children}
    </div>
  )
}
