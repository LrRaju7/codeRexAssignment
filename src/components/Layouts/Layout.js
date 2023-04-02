import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        <div className='container'>
                {props.children}
        </div>
        <Footer />
    </>
  )
}

export default Layout