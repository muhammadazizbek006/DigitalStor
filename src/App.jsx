import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Shirts from './pages/shirts/Shirts'
import Pants from './pages/pants/Pants'
import HeadPhones from './pages/headphones/Headphones'
import FootWear from './pages/footwear/Footwear'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Product/:id' element={<ProductDetail/>}/>
        <Route path='/Shirts' element={<Shirts/>}/>
        <Route path='/Pants' element={<Pants/>}/>
        <Route path='/Headphones' element={<HeadPhones/>}/>
        <Route path='/Footwear' element={<FootWear/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App