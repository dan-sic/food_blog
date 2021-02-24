import React from "react"
import { NavLinks } from "./NavLinks/NavLinks"
import { AiOutlineMenu } from "react-icons/ai"
import { NavHeder } from "./NavHeader/NavHeder"
// @ts-ignore
import logoLarge from "../../assets/logo-white-large.svg"

type NavbarProps = {
  openSidebar: () => void
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  openSidebar,
}) => {
  return (
    <section className="navbar section-center">
      <NavHeder logo={logoLarge}>
        <button onClick={() => openSidebar()} className="navbar__menu-btn">
          <AiOutlineMenu />
        </button>
      </NavHeder>
      <nav className="navbar__nav">
        <NavLinks className={"navbar__links"} />
      </nav>
    </section>
  )
}
