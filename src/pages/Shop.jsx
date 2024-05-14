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
                <li className="mb-4">
                <div className="flex items-start justify-between drop-shadow-lg border-b-logo border-b-2 border-dashed pb-4 pt-5 px-5">
                {/* left */}
                <div className="flex  ">
                
                <div className="bg-[#E2E3FF] w-40 pr-3 rounded mr-6">
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
