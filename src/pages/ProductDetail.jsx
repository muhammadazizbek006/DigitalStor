import React from "react";
import { useState } from "react";
import { Trending, addCard, headerRender } from "../data";

import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <section className="py-12">
        <div className="containerb">
          <ul>
            {Trending.map((e) => {
              if (e.id == id) {
                return (
                  <li
                    key={e.id}
                    className="flex flex-col items-center 900:flex-row 900:items-start justify-between"
                  >
                    {/* left */}
                    <div>
                      <img
                        className=" md:w-[408px] mb-6 900:mb-0 lg:w-[498px] shadow-lg drop-shadow-lg bg-slate-50"
                        src={e.img}
                        alt={e.title}
                      />
                    </div>
                    {/* right */}
                    <div className="flex flex-col items-center text-center 900:items-start 900:text-start justify-around">
                      <h3 className=" md:text-3xl lg:text-4xl font-bold ">
                        {e.title}
                      </h3>
                      <p className="text-xl font-semibold ">
                        {e.brend} | {e.categoria}
                      </p>
                      <div className="flex items-center">
                        <p className="mr-3 text-gray-600 text-2xl line-through">
                          {e.narx}
                        </p>
                        <p className="text-2xl font-bold ">{e.skidkanarx}</p>
                      </div>
                      <p className="text-base max-w-[440px] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                      <button
                        onClick={() => {
                          headerRender.count = !headerRender.count;
                          addCard(e);
                          console.log(Trending);
                        }}
                        className="bg-logo py-4 rounded-md w-52 text-2xl font-bold text-white "
                      >
                        buy
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
