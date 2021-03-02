import React, { useState } from "react"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Navbar/Sidebar/Sidebar"

type LayoutProps = {
  navbarType?: "primary" | "white"
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  navbarType = "primary",
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Navbar
        navbarType={navbarType}
        openSidebar={() => setIsSidebarOpen(true)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      {children}
      <Footer />
    </>
  )
}
