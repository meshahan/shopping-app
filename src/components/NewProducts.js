import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Full-Zip Jacket",
    rating: 4,
    price: "45.99",
  },
  {
    img: "/skirt-1.jpg",
    title: "Sweater",
    desc: "BLack & Green Color",
    rating: 5,
    price: "55.99",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Leather Shoes",
    desc: " Office Use",
    rating: 3,
    price: "25.99",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirts",
    desc: "Pure Garment Cotton Shirt",
    rating: 4,
    price: "45.99",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Running Shoes - Metalic",
    rating: 3,
    price: "58.99",
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.99",
  },
  {
    img: "/watch-3.jpg",
    title: "Fashion set",
    desc: "gift for younger",
    rating: 4,
    price: "190.99",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch",
    rating: 4,
    price: "120.99",
  },
  
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-4xl pb-4 bg-stone-800 text-center text-font-extrabold text-white py-3">NEW ARRIVAL</h2>

        <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 py-5">
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
