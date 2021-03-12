import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
  title: string
  description?: string
}

export const SEO: React.FunctionComponent<SEOProps> = ({
  title,
  description,
}) => {
  const data = useStaticQuery(query)

  const {
    author,
    description: siteDescription,
    image,
    siteUrl,
    title: siteTitle,
    twitterUsername,
  } = data.site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content={author} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        twitterUsername
        description
        image
        siteUrl
        title
      }
    }
  }
`
