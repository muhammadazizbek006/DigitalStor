import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <main className='grow'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout