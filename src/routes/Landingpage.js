import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Landingpage = () => {
  return (
    <>
        <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-white-100">
            <Header/>
                <main id="page-content" className="flex flex-auto flex-col max-w-full">
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    </>
  )
}

export default Landingpage