  import  { useState, useEffect } from 'react';
  import HeaderLayout from './HeaderLayout';
  import Navigation from './Navigation/Navigation';
  import MobileNavigation from './Navigation/MobileNavigation';
  import Logo from './Logo';
  import DonateButton from './DonateButton';
  import { menuItems } from '../data/menuItems';

  const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [bgColor, setBgColor] = useState("bg-[#1A1A1A]/80");

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMenuHover = (menuId) => {
      if (!isMobile) {
        setActiveMenu(menuId);
        const found = menuItems.find((item) => item.id === menuId);
        if (found?.bgColor) {
          setBgColor(found.bgColor);
        }
      }
    };

    const handleMenuLeave = () => {
      if (!isMobile) {
        setActiveMenu(null);
      }
    };

    return (
      <HeaderLayout
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMobile={isMobile}
      >
        <Logo />
        
        <Navigation
          isMobile={isMobile}
          isMenuOpen={isMenuOpen}
          activeMenu={activeMenu}
          bgColor={bgColor}
          handleMenuHover={handleMenuHover}
          handleMenuLeave={handleMenuLeave}
          setIsMenuOpen={setIsMenuOpen}
        />

        <DonateButton isMobile={isMobile} />

        <MobileNavigation
          isMobile={isMobile}
          isMenuOpen={isMenuOpen}
          activeMenu={activeMenu}
          setIsMenuOpen={setIsMenuOpen}
          setActiveMenu={setActiveMenu}
        />
      </HeaderLayout>
    );
  };

  export default Header;