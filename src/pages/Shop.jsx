import React from 'react';
import { Link } from 'react-router-dom';
import { Trending } from '../data';

const Shop = () => {
  return (
    <>
      <section className='py-12'>
        <div className='containerb'>
          <h2 className='text-3xl font-bold mb-6'>Shop</h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Trending.map((product) => (
              <li key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <Link to={`/product/${product.id}`}>
                  <img className='w-full' src={product.img} alt={product.title} />
                  <div className='p-4'>
                    <h3 className='text-xl font-bold mb-2'>{product.title}</h3>
                    <p className='text-gray-700'>{product.brend} | {product.categoria}</p>
                    <div className='mt-2 flex items-center'>
                      <p className='text-gray-800 text-lg'>{product.skidkanarx}</p>
                      {product.narx && <p className='ml-2 text-gray-500 text-lg line-through'>{product.narx}</p>}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Shop;
