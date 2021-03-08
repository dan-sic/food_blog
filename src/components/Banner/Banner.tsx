import React from "react"

interface WithBannerProps {
  className?: string
}

export const Banner = ({ children }) => {
  return <aside className="banner">{children}</aside>
}

export const WithBanner: React.FunctionComponent<WithBannerProps> = ({
  children,
  className = "",
}) => {
  const classes = ["section-center", "with-banner", className]
  return <main className={classes.join(" ")}>{children}</main>
}
