import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// img

import logo from '../img/logo.svg'
import search from '../img/Search.svg'
import shop from '../img/shop.svg'
const Header = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [menu, setMenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
  }

  const closeModal = () => {
    setMenu(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  return (
    <>
      <header className='py-10'>
        <div className="containerb flex items-center justify-between ">
          {/* left */}
          <div className='flex '>
            <Link to='/' className='flex items-center mr-7 '>
                <img className='mr-1' src={logo} alt="" />
                <p className='text-logo text-4xl font-semibold inline-block'>Digital Store</p>
            </Link>
              {/* input */}
              <div className='flex  items-center relative'>
                <input className='bg-slate-200 py-4  pl-6 md:max-w-[460px] xl:w-[549px] rounded-lg' type="search"  placeholder='Pesquisar produto...'/>
                <img className='absolute right-[12px]' src={search} alt='search' />
              </div>

          </div>
          {/* right */}
          <div className='flex items-center'>
            <button className='text-base font-medium bg-logo px-8 py-3 text-white rounded-lg mr-12'>Register</button>
            <button onClick={toggleMenu} className='relative'>
                <img className='w-10 ' src={shop} alt="shop" />
                <span className='bg-logo px-2 -top-1 -right-2 absolute rounded-full text-white'>0</span>
            </button> 
          </div>
        </div>
      </header>
           {/* modal */}
          {
            menu && (
              <>

              <div  className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 " onClick={closeModal} ></div>
              
              <div className='drop-shadow-modal bg-white max-w-80 absolute p-8 right-28 top-24 z-50 shadow-lg rounded-md '>
              <div className='flex justify-between'>
                <h3 className='text-base font-bold text-input-bg mb-5'>Meu Carrinho</h3>
                <button onClick={closeModal} className='text-lg font-bold absolute right-3 top-1'>X</button>
              </div>
              
              <hr className='w-64 mb-5'/>
              
              <div>
                {/* Modal body content */}
              </div>
              
              <hr className=''/>
              
              <div className='flex justify-between items-center mb-5'>
                <b className='text-base font-bold'>Total amount:</b>
                <p className='text-logo text-base font-bold'>{}</p>
              </div>
              
              <div className='flex justify-between items-center'>
                <span className='text-sm font-medium text-input-bg'>Esvaziar</span>
                <Link to='/Shop' className='text-base text-white font-bold bg-logo px-4 py-2 rounded-lg' onClick={closeModal}>Ver Carrinho</Link>
              </div>
            </div>
              </>
            )
          } 
    </>
  )
}

export default Header