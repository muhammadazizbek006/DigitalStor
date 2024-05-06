import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
        <section className='py-8'>
            <ul className='containerb'>
                <li id="sidebar"  className='space-x-8'>
                    <NavLink to='/' className=''>Home</NavLink>
                    <NavLink to='/product' >Products</NavLink>
                    {/* <NavLink >Categorias</NavLink>
                    <NavLink  >Meus Pedidos</NavLink> */}
                </li>
        </ul>
        </section>
    </>
  )
}

export default Nav