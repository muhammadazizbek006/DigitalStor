import React from 'react'
import Carusel from '../components/home/Carusel'
import Collections from '../components/home/Collections'
import TrendingProducts from '../components/home/TrendingProducts'
import Cta from '../components/home/Cta'
const Home = () => {
  return (
    <>
      <Carusel/>
       {/* <div className='bg-slate-50'> */}
      <Collections/>
      <TrendingProducts/>
      {/* </div> */}
      {/* <Cta/>  */}
    </>
  )
}

export default Home