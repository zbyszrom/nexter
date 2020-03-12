import React from "react"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  
  return (
        
        <main>
          <Sidebar/>
          {children}
          <Footer/>
        </main>
  )
}

export default Layout
