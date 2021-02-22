import React, { useState } from "react"
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Navbar/Sidebar/Sidebar"

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Navbar openSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      {children}
    </>
  )
}
