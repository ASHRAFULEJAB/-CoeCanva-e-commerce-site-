// auth-context.tsx

import React, { createContext, useContext, useState, ReactNode } from "react"
import { Customer } from "@medusajs/medusa"

interface AuthContextType {
  isLoggedIn: boolean
  currentUser: Omit<Customer, "password_hash"> | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<Omit<
    Customer,
    "password_hash"
  > | null>(null)

  const login = () => {
    setIsLoggedIn(true)
    // Replace this with actual login logic to fetch current user data
    // const dummyUser: Omit<Customer, "password_hash"> = {
    //   id: "1",
    //   email: "dummy@example.com",
    //   first_name: "Dummy",
    //   last_name: "User",
    //   // Add other user properties as needed
    // }
    // setCurrentUser(dummyUser)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null) // Clear current user on logout
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
