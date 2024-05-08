import React from 'react'
import { Link } from 'react-router-dom'
// img
import next from '../../img/home/next.svg'
import { Trending } from '../../data'
const TrendingProducts = () => {
  return (
    <>
      <section className='py-24'>
        <div className="containerb">
          {/* top */}
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold mb-5'>Trending products</h2>  
            <div className='flex items-center'>
              <span className='text-logo text-lg mr-2'>See more</span>
              <img src={next} alt="see more" />
            </div>
          </div>
          {/* trending footwear map */}
          <ul className='grid grid-cols-4 gap-x-6 gap-y-10'>
            {
              Trending.map((e)=>{
                return(
                  <li>
                    <Link>
                      <img className=' bg-white drop-shadow-lg pr-9 pb-7 mb-4 rounded' src={e.img} alt={e.brend} />
                      <span className='text-sm font-bold text-input'>{e.brend}</span>
                      <p className='text-2xl font-normal mb-1'>{e.title}</p>
                      <div className='flex items-center'>
                        <p className='mr-3 text-gray-600 text-2xl line-through'>{e.narx}</p>
                        <p className='text-2xl font-bold '>{e.skidkanarx}</p>
                      </div>
                    </Link>
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

export default TrendingProducts