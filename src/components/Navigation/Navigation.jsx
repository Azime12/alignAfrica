import React from 'react';
import MenuButton from './MenuButton';
import SecondaryMenu from './SecondaryMenu';
import NavigationMenu from './NavigationMenu';
import { menuItems } from '../../data/menuItems';

const Navigation = ({
  isMobile,
  isMenuOpen,
  activeMenu,
  bgColor,
  handleMenuHover,
  handleMenuLeave,
  setIsMenuOpen
}) => {
  return (
    <div 
      id="navigation-bar"
      className={`absolute top-0 right-[190px] left-[235px] h-[70px] z-10 transition-all duration-300 ${
        isMenuOpen ? 'bg-white shadow-lg' : ''
      }`}
    >
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SecondaryMenu />
      
      <NavigationMenu
        isMenuOpen={isMenuOpen}
        activeMenu={activeMenu}
        bgColor={bgColor}
        menuItems={menuItems}
        handleMenuHover={handleMenuHover}
        handleMenuLeave={handleMenuLeave}
      />
    </div>
  );
};

export default Navigation;