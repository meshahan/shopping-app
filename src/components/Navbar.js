import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-20 mx-auto font-medium py-4 text-amber-800">
          <div className="navbar__link relative cursor-pointer">HOME</div>
          <div className="navbar__link relative cursor-pointer">CATEGORIES</div>
          <div className="navbar__link relative cursor-pointer">{`MEN'S`}</div>
          <div className="navbar__link relative cursor-pointer">{`WOMEN'S`}</div>
          <div className="navbar__link relative cursor-pointer">JEWELRY</div>
          <div className="navbar__link relative cursor-pointer">PERFUME</div>
          <div className="navbar__link relative cursor-pointer">BLOG</div>
          <div className="navbar__link relative cursor-pointer">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;