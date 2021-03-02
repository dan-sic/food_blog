import React from "react"
// @ts-ignore
import logo from "../../assets/logo-primary-small.svg"
import { SocialLinks } from "../SocialLinks/SocialLinks"

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Site logo" />
      <SocialLinks linksPrimaryColor={true} />
      <p>© 2021. All rights reserved</p>
    </footer>
  )
}
