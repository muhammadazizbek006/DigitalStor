import React, { useState } from 'react';
import { Trending } from '../data';
import { Link, NavLink } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

const Product = () => {
  const [filters, setFilters] = useState({
    brend: '',
    categoria: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
  };

  const filteredBrands = [...new Set(Trending.map(item => item.brend))];
  const filteredCategories = [...new Set(Trending.map(item => item.categoria))];
  const filteredCarts = Trending.filter((e) => {
    return (
      (filters.brend === '' || e.brend.toLowerCase() === filters.brend) &&
      (filters.categoria === '' || e.categoria.toLowerCase() === filters.categoria)
    );
  });

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <section className='py-8'>
            {/* products number */}
          <div className='flex containerb mb-8 items-center space-x-2'>
          <h3 className='text-sm sm:text-base font-bold text-input-bg'>Resultados para : </h3>
          <p> {Trending.length} products</p>
        </div>
        <div className="containerb flex items-start justify-between gap-0 md:gap-x-10 ">
          <div className='py-8 pl-8 pr-10 bg-white drop-shadow-lg shadow-xl space-y-5 w-[348px]  hidden md:block'>
            <div>
              <h3 className='mb-5 font-bold text-xl '>Filtrar por</h3>
              <hr className=' mb-5 ' />
            </div>
            {/* Marca */}
            <div>
              <h4 className='mb-3 text-base font-bold '>Marca</h4>
              <ul className='space-y-3'>
                {filteredBrands.map((brand, index) => (
                  <li key={index}>
                    <button onClick={() => handleFilterChange({ target: { name: 'brend', value: brand.toLowerCase() } })}>{brand}</button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categoría */}
            <div>
              <h4 className='mb-3 text-base font-bold '>Categoría</h4>
              <ul className='space-y-3'>
                {filteredCategories.map((category, index) => (
                  <li key={index}>
                    <button onClick={() => handleFilterChange({ target: { name: 'categoria', value: category.toLowerCase() } })} className=" text-base font-medium ">{category}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className='grid grid-cols-1 888:grid-cols-2  931:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 w-full justify-items-center '>
            {filteredCarts.map((e) => (
              <li key={e.id}>
                <Link to={`/Product/${e.id}`}>
                  <img className='bg-white drop-shadow-lg  shadow-lg pr-5 rounded-md mb-5 pb-8' src={e.img} alt={e.title} />
                  <span className=' '>{e.brend}</span>
                  <p>{e.title}</p>
                  <div className='flex items-center '>
                    <span className='text-lg font-normal text-narxi line-through mr-2 '>{e.narx}</span>
                    <p className='text-xl font-bold text-aksyaNarx'>{e.skidkanarx} </p>
                  </div>
                  <p></p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Drawer */}
        <div className='absolute'>
          <Drawer open={open} onClose={closeDrawer} className='bg-white pr-10 pt-5 pl-7 shadow-lg z-50'>
            <div className="mb-2 flex justify-between ">
              <h3>Páginas</h3>
              <IconButton className='-top-6 -right-4  text-2xl font-semibold' variant="text" onClick={closeDrawer}>
                X
              </IconButton>
            </div>
            <List>
              <ListItem className='flex flex-col space-y-4 items-start'>
                <ListItemPrefix id='sidebar'>
                  <NavLink className='text-base  font-normal ' to='/'>Home</NavLink>
                </ListItemPrefix>
                <ListItemPrefix id='sidebar'>
                  <NavLink to='/products'>products</NavLink>
                </ListItemPrefix>
                <ListItemPrefix id='sidebar'>
                  <NavLink to='/categoria'>categories</NavLink>
                </ListItemPrefix>
                <ListItemPrefix id='sidebar'>
                  <NavLink to='/meuspedidos'>Meus Pedidos</NavLink>
                </ListItemPrefix>
              </ListItem>
            </List>
          </Drawer>
        </div>

      </section>
    </>
  )
}

export default Product;
