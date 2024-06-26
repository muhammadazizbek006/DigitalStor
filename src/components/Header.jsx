import React, { useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// img

import logo from "../img/logo.svg";
import search from "../img/Search.svg";
import shop from "../img/shop.svg";
import menyu from "../img/menu.svg";
import { Trending, headerRender } from "../data";
const Header = () => {
  // draw
  const [render, setRender] = useState(true);

  const [open, setOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeModal = () => {
    setMenu(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    const filteredCardItems = Trending.filter((product) => {
      return product.iscart;
    });
    setRender((prev) => !prev);
    setCardItems(filteredCardItems);
  }, [menu, headerRender.count]);
  // useEffect(() => {
  // }, [headerRender.count]);
  return (
    <>
      <header className="py-10 z-30">
        <div className="containerb flex items-center justify-between ">
          <>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
              <div className="mb-6 flex items-start  justify-between">
                <Typography variant="h5" color="blue-gray">
                  Menue
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <Typography color="gray" className="mb-8 pr-4 font-medium flex-col flex">
                    <NavLink onClick={closeDrawer} to='/' className=''>Home</NavLink>
                    <NavLink onClick={closeDrawer} to='/product' >Products</NavLink>
                    <NavLink onClick={closeDrawer} to='/Shop' >Shop</NavLink>

              </Typography>

            </Drawer>
          </>

          {/* gamburger */}
          <div className="block md:hidden">
            <button onClick={openDrawer}>
              <img src={menyu} alt="" />
            </button>
          </div>
          {/* left */}
          <div className="flex ">
            <Link
              to="/"
              className="flex justify-center items-center md:mr-3 lg:mr-7 "
            >
              <img className="mr-1" src={logo} alt="" />
              <p className="text-logo text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-semibold inline-block">
                Digital Store
              </p>
            </Link>
            {/* input */}
            <div className="  flex  items-center relative">
              <input
                className=" hidden md:block bg-slate-200  py-4 md:pr-32 lg:pr-52 xl:pr-96   pl-6 rounded-lg"
                type="search"
                placeholder="Pesquisar produto..."
              />
              <img
                className="absolute right-[12px]"
                src={search}
                alt="search"
              />
            </div>
          </div>
          {/* right */}
          <div className="flex items-center">
            <button className=" hidden sm:block text-base font-medium bg-logo px-8 py-3 text-white rounded-lg mr-10 md:mr-1 lg:mr-12">
              Register
            </button>
            <button onClick={toggleMenu} className="relative">
              <img className="w-10 " src={shop} alt="shop" />
              <span className="bg-logo px-2 -top-1 -right-2 absolute rounded-full text-white">
                {cardItems.length}
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* modal */}
      {menu && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-green-900 opacity-50 z-50 "
            onClick={closeModal}
          ></div>

          <div className="drop-shadow-modal bg-white max-w-72 md:max-w-80 absolute p-8 right-3 md:right-[570px] top-24 z-50 shadow-lg rounded-md ">
            <div className="flex justify-between">
              <h3 className="text-base font-bold text-input-bg mb-5">
                Meu Carrinho
              </h3>
              <button
                onClick={closeModal}
                className="text-lg font-bold absolute right-3 top-1"
              >
                X
              </button>
            </div>

            <hr className="w-64 mb-5" />

            <div>
              {/* Modal body content */}
              {cardItems &&
                cardItems.length > 0 &&
                cardItems.map((product) => {
                  return(
                    <li key={product.id} className="flex mb-3">
                      
                    <div className="w-20 bg-[#E2E3FF]  mr-5">
                      <img src={product.img} alt="" />
                    </div>
                      <div>
                        <h4 className="text-base font-bold">{product.brend}</h4>
                        <p className="text-sm font-semibold">{product.title}</p>
                      </div>
                    </li>
                  ) ;
                  
                })}
            </div>

            <hr className="" />

            <div className="flex justify-between items-center mb-5">
              <b className="text-base font-bold">Total amount:</b>
              <p className="text-logo text-base font-bold">{}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-input-bg">
                Esvaziar
              </span>
              <Link
                to="/Shop"
                className="text-base text-white font-bold bg-logo px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Ver Carrinho
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
