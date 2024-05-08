import React from 'react'

// img
import cta from '../../img/home/cta.png'
const Cta = () => {
  return (
    <>
        <section className='py-24'>
            <div className="containerb flex justify-between">
                {/* left */}
                <img src={cta} alt="cta" />
                {/* right */}
                <div className='max-w-[589px]'>
                    <p className='text-sm font-bold text-logo mb-4'>Oferta especial</p>
                    <h2 className='text-5xl mb-5'>Air Jordan edição de colecionador</h2>
                    <p className='text-base mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cta