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
  return <div>Shop</div>;
};

export default Shop;
