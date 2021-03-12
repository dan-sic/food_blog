import React from "react"
import { NavLinks } from "./NavLinks/NavLinks"
import { AiOutlineMenu } from "react-icons/ai"
import { NavHeder } from "./NavHeader/NavHeder"
// @ts-ignore
import logoLargePrimary from "../../assets/logo-primary-large.svg"
// @ts-ignore
import logoLargeWhite from "../../assets/logo-white-large.svg"

type NavbarProps = {
  openSidebar: () => void
  navbarType: "primary" | "white"
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  openSidebar,
  navbarType,
}) => {
  return (
    <section className="navbar section-center">
      <NavHeder
        logo={navbarType === "primary" ? logoLargePrimary : logoLargeWhite}
      >
        <button
          aria-label="Open sidebar"
          aria-controls="nav"
          aria-haspopup="true"
          onClick={() => openSidebar()}
          className={
            navbarType === "primary"
              ? "navbar__menu-btn--primary"
              : "navbar__menu-btn--white"
          }
        >
          <AiOutlineMenu />
        </button>
      </NavHeder>
      <nav className="navbar__nav">
        <NavLinks
          className={
            navbarType === "primary"
              ? "navbar__links--primary"
              : "navbar__links--white"
          }
        />
      </nav>
    </section>
  )
}
