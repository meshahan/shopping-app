"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "TRENDING VIEW",
      mainTitle: "MEN'S LATEST FASHION SALE",
      price: "$80.99",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "TRENDING ACCESSORIES",
      mainTitle: "MODERN SUITS NEW ARRIVAL",
      price: "$125.99",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "BIG SALE!",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$85.99",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
