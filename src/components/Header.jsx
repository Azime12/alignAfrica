import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, Menu } from 'lucide-react';
import { menuItems } from '../data/menuItems';

// HeaderLayout Component
const HeaderLayout = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <section className="fixed top-0 left-0 z-50 h-[70px] w-full bg-[#7b3400] shadow-lg">
        <div className="relative mx-auto h-full max-w-full px-4 md:max-w-[1000px] md:px-0">
          {children}
        </div>
      </section>
    </>
  );
};

// MenuButton Component - Responsive with close icon
const MenuButton = ({ isMenuOpen, setIsMenuOpen, onMenuButtonClick }) => {
  const handleClick = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuButtonClick) {
      onMenuButtonClick(newState);
    }
  };

  return (
    <button
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
        z-10
        flex items-center justify-center gap-2
        border-none outline-none
        md:w-[200px]
      "
      onClick={handleClick}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      {isMenuOpen ? (
        <>
          <X size={24} className="md:hidden" />
          <span className="hidden md:inline">☰</span>
          <span className="md:hidden">Close</span>
          <span className="hidden md:inline">Menu</span>
        </>
      ) : (
        <>
          <Menu size={24} className="md:hidden" />
          <span className="hidden md:inline">☰</span>
          <span>Menu</span>
        </>
      )}
    </button>
  );
};

// SecondaryMenu Component
const SecondaryMenu = () => {
  const menuLinks = [
    { href: "https://alignafrica.org/FQAS.html", text: "Get involved" },
    { href: "Contact alignafrica.html", text: "Contact" },
    { href: "resources.html", text: "Resources" },
  ];

  return (
    <>
      {/* Desktop version */}
      <div
        className="
          absolute top-0 left-[165px] right-0 h-[70px]
          bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e]
          rounded-l-full
          z-20
          text-center text-[18px]
          hidden md:flex
          pr-5
        "
      >
        <ul className="flex items-center justify-end h-full m-0 space-x-2 list-none">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="flex items-center h-full px-3 text-white transition-colors duration-300 hover:bg-white/20 hover:rounded-full whitespace-nowrap"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile version */}
      <div className="absolute top-0 left-[165px] right-0 h-[70px] z-20 md:hidden">
        <div className="flex items-center justify-end h-full pr-4">
          <button
            className="
              flex items-center justify-center
              h-10 px-4
              bg-[#91bc36]
              text-white
              rounded-full
              font-medium
              transition-all duration-300
              hover:bg-[#a7d447]
              whitespace-nowrap
              text-sm
              border-none outline-none
            "
            onClick={() => document.getElementById('donate-link')?.click()}
          >
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

// NavigationItem Component - Responsive
const NavigationItem = ({ item, activeMenu, handleMenuHover, closeMenu, isMenuOpen }) => {
  const itemRef = useRef(null);
  const submenuRef = useRef(null);
  const [openDirection, setOpenDirection] = useState("down");
  const [submenuMaxHeight, setSubmenuMaxHeight] = useState("auto");

  const getSubmenuPadding = () => {
    const paddingMap = {
      "nav-ethiopians": "15px",
      "nav-projects": "40px",
      "nav-heroes": "100px",
      "nav-success-stories": "160px",
      "nav-solutions": "160px",
      "nav-about": "60px",
      "nav-problems": "60px",
      default: "20px"
    };
    return paddingMap[item.id] || paddingMap.default;
  };

  const isActive = activeMenu === item.id;
  const Icon = item.icon;

  useEffect(() => {
    if (!isActive || !itemRef.current || !submenuRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    const submenuHeight = submenuRef.current.scrollHeight;

    if (spaceBelow >= submenuHeight) {
      setOpenDirection("down");
      setSubmenuMaxHeight(submenuHeight);
    } else if (spaceAbove >= submenuHeight) {
      setOpenDirection("up");
      setSubmenuMaxHeight(submenuHeight);
    } else if (spaceBelow >= spaceAbove) {
      setOpenDirection("down");
      setSubmenuMaxHeight(spaceBelow - 20);
    } else {
      setOpenDirection("up");
      setSubmenuMaxHeight(spaceAbove - 20);
    }
  }, [isActive]);

  const handleLinkClick = (e, linkPath, external) => {
    if (external) {
      e.preventDefault();
      window.open(linkPath, '_blank');
    }
    closeMenu();
  };

  const handleInternalLinkClick = () => {
    closeMenu();
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    handleMenuHover(item.id);
  };

  return (
    <div
      ref={itemRef}
      className={`
        relative group w-full md:w-[300px] box-border
        border-r-0 md:border-r-4 border-white
        ${item.bgColor}
        ${isActive ? "z-30 md:border-r-transparent" : ""}
        min-h-[70px]
      `}
      onMouseEnter={() => handleMenuHover(item.id)}
    >
      <div className="absolute inset-0 transition-all duration-300 bg-white/5 group-hover:bg-white/15" />

      <Link
        to={item.path}
        onClick={(e) => {
          if (item.submenu && item.submenu.length > 0) {
            handleItemClick(e);
          } else {
            handleInternalLinkClick();
          }
        }}
        className="
          relative flex items-center gap-3
          py-1 pl-[28px] pr-4
          text-white no-underline
          font-['EB_Garamond'] text-[22px]
          transition-all duration-300
          w-full
          h-full
          min-h-[70px]
          items-center
        "
      >
        {Icon && <Icon size={20} className="opacity-90 shrink-0" />}
        <span className="flex-1">{item.title}</span>

        {item.submenu && item.submenu.length > 0 && (
          <ChevronRight
            size={18}
            className={`transition-transform duration-300 ${
              isActive ? "md:translate-x-1 opacity-100" : "opacity-60"
            }`}
          />
        )}
      </Link>

      {item.submenu && item.submenu.length > 0 && (
        <div
          ref={submenuRef}
          className={`
            absolute left-0
            w-full md:w-[458px] md:pr-[40px] box-border
            bg-right bg-cover bg-no-repeat
            ${item.menuBgColor} ${item.menuBgImage}
            transition-all duration-300
            ${isActive ? "opacity-100 visible z-40" : "opacity-0 invisible"}
            md:left-[300px]
            md:top-0
            top-full
          `}
          style={{
            top: openDirection === "down" ? "0" : "auto",
            bottom: openDirection === "up" ? "0" : "auto",
            maxHeight: submenuMaxHeight,
            paddingTop: getSubmenuPadding(),
            overflowY: "auto"
          }}
        >
          <ul className="p-0 m-0 list-none">
            {item.submenu.map((subItem, index) => (
              <li key={index} className="mb-1">
                {subItem.external ? (
                  <a
                    href={subItem.external}
                    onClick={(e) => handleLinkClick(e, subItem.external, true)}
                    className="
                      block
                      py-2 px-4 md:py-1 md:pl-[30px] md:pr-4
                      text-white no-underline
                      whitespace-normal md:whitespace-nowrap overflow-hidden truncate
                      transition-all duration-200
                      hover:bg-white/20
                      cursor-pointer
                      text-base md:text-inherit
                    "
                    title={subItem.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  <Link
                    to={subItem.path}
                    onClick={handleInternalLinkClick}
                    className="
                      block
                      py-2 px-4 md:py-1 md:pl-[30px] md:pr-4
                      text-white no-underline
                      whitespace-normal md:whitespace-nowrap overflow-hidden truncate
                      transition-all duration-200
                      hover:bg-white/20
                      cursor-pointer
                      text-base md:text-inherit
                    "
                    title={subItem.title}
                  >
                    {subItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// NavigationMenu Component - Responsive
const NavigationMenu = ({
  isMenuOpen,
  activeMenu,
  bgColor,
  menuItems,
  handleMenuHover,
  handleMenuLeave,
  closeMenu
}) => {
  return (
    <div
      id="main-navigation"
      className={`
        absolute top-[70px] left-0
        w-full md:w-[758px]
        shadow-[0_2px_10px_rgba(0,0,0,0.4)]
        z-50
        transition-all duration-300
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        max-h-[calc(100vh-70px)] overflow-y-auto md:max-h-none md:overflow-y-visible
      `}
      onMouseLeave={handleMenuLeave}
    >
      <div
        className="
          absolute inset-y-0 right-0 left-[300px]
          bg-[url(/images/home-nav-bg.jpg)]
          bg-cover bg-right bg-[#6A321E]
          hidden md:block
        "
      />

      <nav
        className={`
          relative
          transition-all duration-300
          ${bgColor}
          flex flex-col md:block
        `}
      >
        {menuItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            activeMenu={activeMenu}
            handleMenuHover={handleMenuHover}
            closeMenu={closeMenu}
            isMenuOpen={isMenuOpen}
          />
        ))}
      </nav>
    </div>
  );
};

// Navigation Component - Responsive positioning
const Navigation = ({
  isMobile,
  isMenuOpen,
  activeMenu,
  bgColor,
  handleMenuHover,
  handleMenuLeave,
  setIsMenuOpen,
  onMenuButtonClick
}) => {
  return (
    <div 
      id="navigation-bar"
      className={`absolute top-0 right-0 md:right-[190px] left-0 md:left-[235px] h-[70px] z-10 transition-all duration-300 ${
        isMenuOpen ? 'bg-white shadow-lg' : ''
      }`}
    >
      <MenuButton 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuButtonClick={onMenuButtonClick}
      />
      <SecondaryMenu />
      
      <NavigationMenu
        isMenuOpen={isMenuOpen}
        activeMenu={activeMenu}
        bgColor={bgColor}
        menuItems={menuItems}
        handleMenuHover={handleMenuHover}
        handleMenuLeave={handleMenuLeave}
        closeMenu={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

// MobileNavigationItem Component - Improved
const MobileNavigationItem = ({ item, activeMenu, setActiveMenu, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    setIsOpen(activeMenu === item.id);
  }, [activeMenu, item.id]);

  const handleClick = () => {
    if (item.submenu && item.submenu.length > 0) {
      setActiveMenu(activeMenu === item.id ? null : item.id);
    } else {
      closeMenu();
    }
  };

  return (
    <div
      className={`relative w-auto ${item.bgColor} bg-[url(/images/nav-pattern-right.png)] bg-right-top bg-repeat-y bg-[length:21px_auto]`}
    >
      <button
        className="block w-full text-left pl-[25px] pr-12 py-4 text-white no-underline font-['EB_Garamond'] text-[20px] relative border-none bg-transparent cursor-pointer"
        onClick={handleClick}
      >
        <span className="absolute left-[10px] top-1/2 transform -translate-y-1/2">•</span>
        {Icon && <Icon size={18} className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-90" />}
        <span className="ml-10 block">{item.title}</span>
        {item.submenu && item.submenu.length > 0 && (
          <ChevronRight
            size={16}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        )}
      </button>

      {item.submenu && item.submenu.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <ul className="list-none m-0 p-0">
            {item.submenu.map((subItem, index) => (
              <li key={index}>
                {subItem.external ? (
                  <a
                    href={subItem.external}
                    onClick={closeMenu}
                    className="block py-3 px-12 text-white no-underline transition-colors duration-300 hover:bg-white/20 text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  <Link
                    to={subItem.path}
                    onClick={closeMenu}
                    className="block py-3 px-12 text-white no-underline transition-colors duration-300 hover:bg-white/20 text-base"
                  >
                    {subItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// MobileSecondaryMenu Component
const MobileSecondaryMenu = ({ closeMenu }) => {
  const menuLinks = [
    { href: "https://alignafrica.org/FQAS.html", text: "Get involved" },
    { href: "Contact alignafrica.html", text: "Contact" },
    { href: "resources.html", text: "Resources" }
  ];

  return (
    <div className="relative h-auto mt-4 px-4">
      <ul className="gap-2 p-0 m-0 text-left list-none">
        {menuLinks.map((link, index) => (
          <li key={index} className='mt-1'>
            <a
              href={link.href}
              onClick={closeMenu}
              className="block py-3 px-4 text-white bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e] no-underline rounded-lg transition-colors duration-300 hover:bg-white/20 text-base"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// MobileNavigation Component
const MobileNavigation = ({
  isMobile,
  isMenuOpen,
  activeMenu,
  setIsMenuOpen,
  setActiveMenu
}) => {
  if (!isMobile) return null;

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <div
      id="mobile-navigation"
      className={`fixed top-0 left-0 w-full max-w-[280px] h-full bg-[#1A1A1A] shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-auto z-40 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Mobile Header with Close Button */}
      <div className="sticky top-0 z-50 p-4 bg-[#1A1A1A] border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f7bc47] flex items-center justify-center">
              <span className="text-black font-bold">A</span>
            </div>
            <span className="text-white font-bold text-lg">Menu</span>
          </div>
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 border-none outline-none"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <nav className="py-2">
        {menuItems.map((item) => (
          <MobileNavigationItem
            key={item.id}
            item={item}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            closeMenu={closeMenu}
          />
        ))}

        <MobileSecondaryMenu closeMenu={closeMenu} />
      </nav>

      {/* Mobile Footer */}
      <div className="sticky bottom-0 p-4 bg-[#1A1A1A] border-t border-white/10">
        <div className="text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Align Africa
        </div>
      </div>
    </div>
  );
};

// Main Header Component
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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  const handleMenuButtonClick = (isOpening) => {
    if (!isMobile && isOpening && menuItems.length > 0) {
      // When opening menu on desktop, show the first menu item
      const firstMenuItem = menuItems[0];
      setActiveMenu(firstMenuItem.id);
      if (firstMenuItem?.bgColor) {
        setBgColor(firstMenuItem.bgColor);
      }
    } else if (!isMobile && !isOpening) {
      // When closing menu on desktop
      setActiveMenu(null);
    }
  };

  return (
    <HeaderLayout
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      {/* Logo Component - Responsive */}
      <Link
        to="/" 
        id="logo"
        className="absolute left-4 md:left-0 top-[-80px] md:top-[-100px] z-20 block w-[120px] md:w-[170px] h-[150px] md:h-[220px] bg-white border-[6px] md:border-[10px] border-[#953673] rounded-[50%] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-[#BC497D] overflow-hidden"
        onClick={closeMenu}
      >
        <img 
          src="/images/alignafrica.png" 
          alt="alignafrica" 
          className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[80px] md:w-[110px] h-auto border-0"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/110x110?text=Align+Africa";
          }}
        />
      </Link>
      
      <Navigation
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        activeMenu={activeMenu}
        bgColor={bgColor}
        handleMenuHover={handleMenuHover}
        handleMenuLeave={handleMenuLeave}
        setIsMenuOpen={setIsMenuOpen}
        onMenuButtonClick={handleMenuButtonClick}
      />

      {/* DonateButton Component - Responsive */}
      <div id="donate-button">
        <Link
          to="/donate"
          id="donate-link"
          className="absolute right-0 top-0 w-[210px] h-[70px] overflow-hidden z-30"
          onClick={closeMenu}
        >
          <span
            id="donate-link-button"
            className="
              absolute left-0 top-[-60px]
              w-[190px] h-[190px]
              bg-[#91bc36]
              shadow-[inset_0_0_80px_#759e1e]
              text-white
              rounded-full
              border-[10px] border-[#b0624c]
              transition-all duration-300
              hover:border-[#CF7E67]
              hover:bg-[#a7d447]
              hover:shadow-[inset_0_0_80px_#7eba00]
              cursor-pointer
              flex flex-col items-center justify-center
              text-center
              hidden md:flex
            "
          >
            <span
              id="donate-link-label"
              className="font-bold text-[30px] leading-tight"
            >
              Donate
            </span>
            <span
              id="donate-link-message"
              className="text-[13px]"
            >
              <strong className="font-['EB_Garamond'] text-[16px] font-normal">
                80%+  
              </strong>{' '}
              goes to recipients
            </span>
          </span>
        </Link>

        {isMobile && (
          <div
            id="donate-link-message-narrow"
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e] text-white z-30 text-center py-2 px-4"
          >
            <strong className="font-['EB_Garamond'] text-[16px] md:text-[20px] font-normal">
              80%+
            </strong>{' '}
            goes to recipients
          </div>
        )}
      </div>

      <MobileNavigation
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        activeMenu={activeMenu}
        setIsMenuOpen={setIsMenuOpen}
        setActiveMenu={setActiveMenu}
      />

      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      )}
    </HeaderLayout>
  );
};

export default Header;