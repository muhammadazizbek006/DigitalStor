import React from 'react'
import { Link } from 'react-router-dom'
// img

import logo from '../img/logo.svg'
import search from '../img/Search.svg'
import shop from '../img/shop.svg'
const Header = () => {
  return (
    <>
      <section className='py-10'>
        <div className="containerb flex items-center justify-between ">
          {/* left */}
          <div className='flex '>
            <Link to='/' className='flex items-center mr-7 '>
                <img className='mr-1' src={logo} alt="" />
                <p className='text-logo text-4xl font-semibold inline-block'>Digital Store</p>
            </Link>
              {/* input */}
              <div className='flex  items-center relative'>
                <input className='bg-slate-200 py-4  pl-6 w-[549px] rounded-lg' type="search"  placeholder='Pesquisar produto...'/>
                <img className='absolute right-[12px]' src={search} alt='search' />
              </div>

          </div>
          {/* right */}
          <div className='flex items-center'>
            <button className='text-base font-medium bg-logo px-8 py-3 text-white rounded-lg mr-12'>Register</button>
            <button className='relative'>
                <img className='w-10 ' src={shop} alt="shop" />
                <span className='bg-logo px-2 -top-1 -right-2 absolute rounded-full text-white'>0</span>
            </button> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Header