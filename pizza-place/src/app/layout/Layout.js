import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import './Layout.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">
        { children }
      </main>
      <Footer />
    </>
  )
}
