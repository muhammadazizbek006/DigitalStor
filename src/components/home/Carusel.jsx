import React, { useRef, useState, } from 'react';
import { Link } from 'react-router-dom';
import {carusel} from '../../data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay } from 'swiper/modules';
const Carusel = () => {
  return (
    <>
        <section className='bg-[#f5f5f5]'>
            <div className="containerb">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
xz
  
        modules={[Autoplay ]}
        className="mySwiper"
      >
        {
            carusel.map((e)=>{
                return(
                    <SwiperSlide className='flex justify-between'>
                        {/* left */}
                        <div className='text-start'>
                            <h3 className='text-6xl font-extrabold mb-5'>{e.title}</h3>
                            <p className='text-base text-input mb-10'>{e.sharx}</p>
                            <Link className='bg-logo px-14 text-white rounded-lg py-2'>Next</Link>
                        </div>
                        {/* right */}
                        <img className='w-[733px]' src={e.img} alt={e.title} />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
            </div>
        </section>
    </>
  )
}

export default Carusel