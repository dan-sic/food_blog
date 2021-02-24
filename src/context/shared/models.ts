import { FluidObject } from "gatsby-image"

export interface Image {
  childImageSharp: {
    fluid: FluidObject
  }
}
