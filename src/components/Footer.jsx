import React from 'react'
// img
import facebook from '../img/home/facebook.svg'
import instagram from '../img/home/instagram.svg'
import twitter from '../img/home/twitter.svg'

import logofooter from '../img/home/logofooter.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <section className='pt-20 pb-24 bg-[#1F1F1F] '>
        
          <ul className='text-white grid grid-cols-4 containerb '>
            {/* left */}
            <li className='mr-12'>
              {/* logo */}
                <Link to='/' className='flex items-center mb-9'>
                  <img className='mr-2' src={logofooter} alt="logofooter" />
                  <h2 className='text-4xl font-semibold '>Digital Store</h2>
                </Link>
                <p className='text-base max-w-72 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className='flex items-center space-x-9'>
                  <a href="">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
            </li>
            {/* center links */}
            <li className=' flex flex-col space-y-3 text-lg font-semibold '>
              <Link to='/Shirts'>Shirts</Link>
              <Link to='/Pants'>Pants</Link>
              <Link to='/Headphones'>Headphones</Link>

            </li>

            <li className=' flex flex-col space-y-3 text-lg font-semibold '>
          
              <Link to='/Footwear'>Footwear</Link>
              <Link to='/product'>Product</Link>
              <Link to='Shop'>Shop</Link>
            </li>

            <li className='max-w-60 '>
              <h3 className='text-xl font-semibold mb-6'>Contato</h3>
              <p className='text-base mb-3'>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <a className='text-base' href="tel+998914750612">+998-91-475-06-12</a>
            </li>
          </ul>

      </section>
    </>
  )
}

export default Footer