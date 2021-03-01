import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from "../../../context/shared/models"
import Img from "gatsby-image"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

export const About = () => {
  const data: { file: Image } = useStaticQuery(query)
  return (
    <section className="banner__section about">
      <article className="about">
        <h4 className="banner__heading">About me</h4>
        <Img className="about__image" fluid={data.file.childImageSharp.fluid} />
        <p className="about__description">
          Food stylist & photographer. Loves nature and healthy food, and good
          coffee. Don't hesitate to come for say a small "hello!"
        </p>
        <div className="about__social">
          <AiFillFacebook />
          <AiFillTwitterCircle />
          <AiOutlineInstagram />
        </div>
      </article>
    </section>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "person.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 220) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
