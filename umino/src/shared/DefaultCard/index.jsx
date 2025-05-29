import Cards from "../Cards";
import { useEffect, useState } from "react";

export default function DefaultCard() {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
          fetch("http://localhost:3000/product").then((res) => res.json())
          .then((data) => setProducts(data))

  },[]);
  return (
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px]">
        {products.slice(0,6).map((product) => (
            <Cards key={product.id}
              image={product.image}
              hovimage={product.hovimage}
              text={product.text}
              price={product.price}
              disprice={product.disprice}
            />
        ))}
      </div>
        
        );
}
