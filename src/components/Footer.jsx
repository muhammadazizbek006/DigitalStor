import React from 'react'
// img
import facebook from '../img/home/facebook.svg'
import instagram from '../img/home/instagram.svg'
import twitter from '../img/home/twitter.svg'

import logofooter from '../img/home/logofooter.svg'
const Footer = () => {
  return (
    <>
      <section className='pt-20 pb-24 bg-[#1F1F1F] '>
        <div className="containerb">
          <ul className='text-white'>
            {/* left */}
            <li>
              {/* logo */}
                <div className='flex items-center mb-9'>
                  <img className='mr-2' src={logofooter} alt="logofooter" />
                  <h2 className='text-4xl font-semibold '>Digital Store</h2>
                </div>
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
          </ul>
        </div>
      </section>
    </>
  )
}

export default Footer