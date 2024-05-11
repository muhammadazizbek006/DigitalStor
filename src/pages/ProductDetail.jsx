import React from 'react'
import { useState } from 'react';
import { Trending } from '../data';

import { useParams } from 'react-router-dom';
const ProductDetail = () => {

  const { id } = useParams();

    const Trend = Trending.filter((e) => e.id == id);


    return (
    <>
        <section className='py-12'>
            <div className="containerb">
              <ul>
                {
                  Trend.map((e)=>{
                    return(
                      <li className='flex justify-between'>
                        {/* left */}
                        <div>
                          <img className='w-[498px] shadow-lg drop-shadow-lg bg-slate-50' src={e.img} alt={e.title} />
                        </div>
                        {/* right */}
                        <div className='flex flex-col justify-around'>
                          <h3 className='text-4xl font-bold '>{e.title}</h3>
                          <p className='text-xl font-semibold '>{e.brend} | {e.categoria}</p>
                          <div className='flex items-center'>
                           <p className='mr-3 text-gray-600 text-2xl line-through'>{e.narx}</p>
                          <p className='text-2xl font-bold '>{e.skidkanarx}</p>
                         </div>
                         <p className='text-base max-w-[440px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                          <button className='bg-logo py-4 rounded-md text-2xl font-bold text-white '>buy</button>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </section>
    </>
  )
}

export default ProductDetail