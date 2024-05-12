import React from 'react'

// img
import cta from '../../img/home/cta.png'
const Cta = () => {
  return (
    <>
        <section className='py-24'>
            <div className="containerb flex flex-col items-center md:items-start md:flex-row text-center md:text-start  md:justify-between">
                {/* left */}
                <img className='mr-0 md:mr-5 w-96 mb-8 md:mb-0 md:w-[460px] lg:w-[600px] ' src={cta} alt="cta" />
                {/* right */}
                <div className='max-w-[459px]'>
                    <p className='text-sm font-bold text-logo mb-1 md:mb-4'>Oferta especial</p>
                    <h2 className=' text-4xl md:text-3xl lg:text-5xl mb-5'>Air Jordan edição de colecionador</h2>
                    <p className='text-base mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cta