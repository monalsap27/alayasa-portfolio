import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
        <h3>Oooopppss......</h3>
        <p>Halaman yang anda tuju tidak ditemukan.</p>
    </div>
    <Footer/>
    </>
  )
}

export default PageNotFound
