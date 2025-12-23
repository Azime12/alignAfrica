import React from "react";

const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      id="menu-button"
      className="
        absolute top-0 left-0
        w-[200px] h-[70px]
        bg-[#f7bc47]
        shadow-[inset_0_0_35px_#e89c03]
        font-bold uppercase text-[20px]
        text-center leading-[70px]
        cursor-pointer
        transition-all duration-300
        hover:bg-[#FCDC9A]
        hover:shadow-[inset_0_0_50px_#ffb82a]
        z-10    /* ⬅ below SecondaryMenu */
      "
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰ Menu
    </div>
  );
};

export default MenuButton;
