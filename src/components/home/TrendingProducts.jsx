import React from 'react'

// img
import next from '../../img/home/next.svg'
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
        </div>
      </section>
    </>
  )
}

export default TrendingProducts