import React, { useEffect, useState } from "react";
import { Trending } from "../data";

const Shop = () => {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    const filteredCardItems = Trending.filter((product) => {
      return product.iscart == true;
    });
    setCardItems(filteredCardItems);
  }, []);
  console.log(cardItems);
  return(
   <>
    <section className="py-12">
      <div className="containerb">
        {
          cardItems.map((e)=>{
            return(
              <ul className="">
                <li className="mb-4  flex flex-col items-center sm:items-start text-center sm:text-start">
                <div className="flex flex-col sm:flex-row  sm:items-start drop-shadow-lg border-b-logo border-b-2 border-dashed pb-4 pt-5 px-5">
                {/* left */}
                <div className="flex flex-col sm:flex-row mb-5 sm:mb-0 sm:mr-[100px] mg:mr-[300px] lg:mr-[450px]  xl:mr-[650px] ">
                
                <div className="bg-[#E2E3FF] w-40 pr-3 mb-3 sm:mb-0 rounded sm:mr-6">
                  <img src={e.img} alt={e.title} />
                </div>
                  
                  <div>
                    <p className="text-base font-bold">{e.title}</p>
                    <p className="text-sm font-medium">Categoria: {e.categoria}</p>
                    <p className="text-base font-medium"> R {e.skidkanarx}</p>
                  </div>
                </div>
                {/* right */}
                <button className="bg-logo text-white px-10 py-3 rounded-md ">Purchase</button>
              </div>
                </li>
              </ul>

          
            )
          })
        }
      </div>
    </section>
   </>
  );  
};

export default Shop;
