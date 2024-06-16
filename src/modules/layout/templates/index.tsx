import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { AuthProvider } from "@lib/context/auth-context"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default Layout
