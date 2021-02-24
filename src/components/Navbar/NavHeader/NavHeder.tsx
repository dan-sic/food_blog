import React from "react"
import { Link } from "gatsby"
import { StaticRoutes } from "../../../utils/constants/routes"

interface NavHeaderProps {
  logo: string
}

export const NavHeder: React.FunctionComponent<NavHeaderProps> = ({
  children,
  logo,
}) => {
  return (
    <div className="navheader">
      <Link to={StaticRoutes.HOMEPAGE}>
        <img src={logo} alt="Site logo" />
      </Link>
      {children}
    </div>
  )
}
