import React from 'react'
import { Link } from 'react-router-dom'
// data
import {Collection} from '../../data'
const Collections = () => {
  return (
    <>
        <section className='py-12'>
            <div className="containerb">
                <h2 className='text-2xl font-bold mb-8 text-center'>Featured Collections</h2>
                {/* collections */}
                <ul className='grid grid-cols-4  '>
                    {
                        Collection.map((e)=>{
                            return(
                                <li className='flex justify-center' key={e.id}>
                                    <Link className='flex flex-col items-center' to={e.url}>
                                      <img className='bg-white shadow-xl p-5 mb-3   rounded-[10px]' src={e.img} alt={e.title} />

                                        <p>{e.title}</p>
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

export default Collections