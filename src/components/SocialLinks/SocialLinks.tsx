import React from "react"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

interface SociialLinksProps {
  linksPrimaryColor?: boolean
}

export const SocialLinks: React.FunctionComponent<SociialLinksProps> = ({
  linksPrimaryColor = false,
}) => {
  const classes = [
    "social-links",
    linksPrimaryColor ? "social-links--primary" : "",
  ]
  return (
    <div className={classes.join(" ")}>
      <AiFillFacebook />
      <AiFillTwitterCircle />
      <AiOutlineInstagram />
    </div>
  )
}
