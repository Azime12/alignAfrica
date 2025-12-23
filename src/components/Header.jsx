import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, X, Menu, Home as HomeIcon, Heart } from 'lucide-react';
import { menuItems } from '../data/menuItems';
import { ProjectorIcon, Contact, DatabaseZap } from 'lucide-react';

const HeaderLayout = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

     <header className="fixed top-0 left-0 z-50 w-full bg-[#7b3400] shadow-lg">
  <div
    className="
      mx-auto
      h-[70px]
      max-w-[1200px]
      px-4
      grid
      grid-cols-[auto_1fr_auto]
      items-center
      gap-3
    "
  >
    {children}
  </div>
</header>

    </>
  );
};

const MenuButton = ({ isMenuOpen, setIsMenuOpen, onMenuButtonClick, isMobile }) => {
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

const SecondaryMenu = ({ isMobile }) => {
  const menuLinks = [
    { href: "/faqs", text: "Get involved", icon: ProjectorIcon },
    { href: "/contactsUs", text: "Contact", icon: Contact },
    { href: "/resource", text: "Resources", icon: DatabaseZap },
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
        <ul className="flex items-center justify-end h-full m-0 space-x-4 list-none">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="flex items-center gap-2 h-full px-4 text-white transition-colors duration-300 hover:bg-white/20 hover:rounded-full whitespace-nowrap"
              >
                {link.icon && <link.icon className="w-5 h-5" />}
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile version - Simplified */}
      {isMobile && (
        <div className="absolute top-0 left-[165px] right-0 h-[70px] z-20">
          <div className="flex items-center justify-end h-full pr-4">
            <Link
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
              to={'/donate'}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const NavigationItem = ({ item, activeMenu, handleMenuHover, closeMenu, isMenuOpen }) => {
  const itemRef = useRef(null);
  const submenuRef = useRef(null);
  const [openDirection, setOpenDirection] = useState("down");

  const isActive = activeMenu === item.id;

  useEffect(() => {
    if (!isActive || !itemRef.current || !submenuRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    const submenuHeight = submenuRef.current.scrollHeight;

    if (spaceBelow >= submenuHeight) {
      setOpenDirection("down");
    } else if (spaceAbove >= submenuHeight) {
      setOpenDirection("up");
    } else if (spaceBelow >= spaceAbove) {
      setOpenDirection("down");
    } else {
      setOpenDirection("up");
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
        transition-all duration-300
        ${isActive ? "z-30" : ""}
      `}
      onMouseEnter={() => handleMenuHover(item.id)}
    >
      {/* Main Menu Item */}
      <div className={`
        relative transition-all duration-300
        ${item.bgColor}
        ${isActive ? "md:border-r-4 border-white" : "md:border-r-4 border-transparent"}
      `}>
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
            py-4 pl-[28px] pr-4
            text-white no-underline
            font-['EB_Garamond'] text-[22px]
            transition-all duration-300
            w-full
          "
        >
          {item.icon && (
            <div className="flex-shrink-0 opacity-90">
              {item.icon}
            </div>
          )}
          <span className="flex-1">{item.title}</span>

          {item.submenu && item.submenu.length > 0 && (
            <ChevronRight
              size={18}
              className={`flex-shrink-0 transition-transform duration-300 ${
                isActive ? "md:rotate-90 opacity-100" : "opacity-60"
              }`}
            />
          )}
        </Link>
      </div>

      {/* Submenu Container - Auto height based on content */}
      <div
        ref={submenuRef}
        className={`
          relative md:absolute
          left-0
          w-full md:w-[458px] md:pr-[40px] box-border
          bg-right bg-cover bg-no-repeat
          transition-all duration-300 ease-in-out
          ${isActive 
            ? "opacity-100 visible z-40" 
            : "opacity-0 invisible"
          }
          md:left-[300px]
          md:top-0
          md:top-full
        `}
        style={{
          top: openDirection === "down" ? "0" : "auto",
          bottom: openDirection === "up" ? "0" : "auto",
          height: isActive ? "auto" : "0",
          backgroundColor: isActive ? "transparent" : "transparent",
          backgroundImage: isActive ? item.menuBgImage : "none"
        }}
      >
        {/* Submenu Background Layer */}
        <div 
          className={`
            absolute inset-0
            transition-opacity duration-300
            ${isActive ? "opacity-100" : "opacity-0"}
            ${item.menuBgColor}
          `}
        />
        
        {/* Submenu Background Image */}
        <div 
          className={`
            absolute inset-0 bg-right bg-cover bg-no-repeat
            transition-opacity duration-300
            ${isActive ? "opacity-100" : "opacity-0"}
            ${item.menuBgImage}
          `}
        />

        {/* Submenu Content - Auto height */}
        <div className="relative z-10">
          <ul className="p-0 m-0 list-none">
            {item.submenu && item.submenu.map((subItem, index) => (
              <li key={index} className="mb-1">
                {subItem.external ? (
                  <a
                    href={subItem.external}
                    onClick={(e) => handleLinkClick(e, subItem.external, true)}
                    className="
                      flex items-center gap-3
                      py-3 px-4 md:py-2 md:pl-[30px] md:pr-4
                      text-white no-underline
                      whitespace-normal md:whitespace-nowrap overflow-hidden
                      transition-all duration-200
                      hover:bg-white/20
                      cursor-pointer
                      text-base md:text-inherit
                      relative z-10
                    "
                    title={subItem.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.icon && (
                      <div className="flex-shrink-0 opacity-80">
                        {subItem.icon}
                      </div>
                    )}
                    <span className="truncate">{subItem.title}</span>
                  </a>
                ) : (
                  <Link
                    to={subItem.path}
                    onClick={handleInternalLinkClick}
                    className="
                      flex items-center gap-3
                      py-3 px-4 md:py-2 md:pl-[30px] md:pr-4
                      text-white/90 no-underline
                      whitespace-normal md:whitespace-nowrap overflow-hidden
                      transition-all duration-200
                      hover:bg-white/20 hover:text-white
                      cursor-pointer
                      text-base md:text-[15px]
                      relative z-10
                    "
                    title={subItem.title}
                  >
                    {subItem.icon && (
                      <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        {subItem.icon}
                      </div>
                    )}
                    <span className="truncate">{subItem.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
        overflow-y-auto md:overflow-y-visible
        max-h-[calc(100vh-70px)]
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
        {menuItems?.map((item) => (
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
      {
        isMobile?'':<MenuButton 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuButtonClick={onMenuButtonClick}
        isMobile={isMobile}
      />
      }
      <SecondaryMenu isMobile={isMobile} />
      
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

const MobileNavigationItem = ({ item, activeMenu, setActiveMenu, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const submenuRef = useRef(null);

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
    <div className={`relative w-auto ${item.bgColor}`}>
      <button
        className="flex items-center gap-3 w-full text-left pl-[25px] pr-12 py-4 text-white no-underline font-['EB_Garamond'] text-[20px] relative border-none bg-transparent cursor-pointer"
        onClick={handleClick}
      >
        <span className="absolute left-[10px] top-1/2 transform -translate-y-1/2">•</span>
        
        {item.icon && (
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-90">
            {item.icon}
          </div>
        )}
        
        <span className="ml-10 block flex-1">{item.title}</span>
        {item.submenu && item.submenu.length > 0 && (
          <ChevronRight
            size={16}
            className={`flex-shrink-0 absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        )}
      </button>

      {/* Mobile Submenu - Auto height based on content */}
      {item.submenu && item.submenu.length > 0 && (
        <div
          ref={submenuRef}
          className={`
            overflow-hidden transition-all duration-300
            bg-gradient-to-r ${item.menuBgColor} to-transparent
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            height: isOpen ? submenuRef.current?.scrollHeight + 'px' : '0px'
          }}
        >
          <ul className="list-none m-0 p-0">
            {item.submenu.map((subItem, index) => (
              <li key={index}>
                {subItem.external ? (
                  <a
                    href={subItem.external}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-3 px-12 text-white no-underline transition-colors duration-300 hover:bg-white/20 text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.icon && (
                      <div className="opacity-80">
                        {subItem.icon}
                      </div>
                    )}
                    <span>{subItem.title}</span>
                  </a>
                ) : (
                  <Link
                    to={subItem.path}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-3 px-12 text-white no-underline transition-colors duration-300 hover:bg-white/20 text-base"
                  >
                    {subItem.icon && (
                      <div className="opacity-80">
                        {subItem.icon}
                      </div>
                    )}
                    <span>{subItem.title}</span>
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

const MobileSecondaryMenu = ({ closeMenu }) => {
  const menuLinks = [
    { href: "https://alignafrica.org/FQAS.html", text: "Get involved", icon: ProjectorIcon },
    { href: "Contact alignafrica.html", text: "Contact", icon: Contact },
    { href: "resources.html", text: "Resources", icon: DatabaseZap }
  ];

  return (
    <div className="relative h-auto mt-4 px-4">
      <ul className="gap-2 p-0 m-0 text-left list-none">
        {menuLinks.map((link, index) => (
          <li key={index} className='mt-1'>
            <a
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-3 py-3 px-4 text-white bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e] no-underline rounded-lg transition-colors duration-300 hover:bg-white/20 text-base"
            >
              {link.icon && <link.icon className="w-5 h-5" />}
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
      className={`fixed top-0 left-0 w-full max-w-[320px] h-full bg-[#1A1A1A] shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-auto z-40 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Mobile Header with Logo and Close Button */}
      <div className="sticky top-0 z-50 p-4 bg-[#1A1A1A] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="/images/alignafrica.png" 
              alt="Align Africa Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/32x32?text=AA";
              }}
            />
          </div>
          <span className="text-white font-bold text-lg">Align Africa</span>
        </div>
        <button
          onClick={closeMenu}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 border-none outline-none"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Mobile Donate Section */}
      <div className="p-4 bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e]">
        <Link
          to="/donate"
          onClick={closeMenu}
          className="
            flex items-center justify-center
            h-12
            bg-[#91bc36]
            text-white
            rounded-full
            font-bold text-lg
            transition-all duration-300
            hover:bg-[#a7d447]
            border-none outline-none
            shadow-lg
          "
        >
          <Heart size={20} className="mr-2" />
          Donate Now
        </Link>
        
        {/* Donate Message */}
        <div className="mt-2 text-center text-white/90 text-sm">
          <span className="font-['EB_Garamond'] text-lg font-normal">
            80%+
          </span>{' '}
          goes directly to recipients
        </div>
      </div>

      <nav className="py-2">
        {menuItems?.map((item) => (
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

   
    </div>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [bgColor, setBgColor] = useState("bg-[#1A1A1A]/80");
  const location = useLocation();

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

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

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
        className="
          absolute left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none
          top-[-60px] md:top-[-100px]
          w-[100px] h-[100px] md:w-[170px] md:h-[220px]
          bg-white border-[6px] md:border-[10px] border-[#953673]
          rounded-[50%] shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          transition-colors duration-300 hover:border-[#BC497D]
          overflow-hidden z-20 block
        "
        onClick={closeMenu}
      >
        <img 
          src="/images/alignafrica.png" 
          alt="Align Africa" 
          className="absolute left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[60px] md:w-[110px] h-auto border-0"
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
              className="text-[13px] mt-1"
            >
              <strong className="font-['EB_Garamond'] text-[16px] font-normal">
                80%+  
              </strong>{' '}
              goes to recipients
            </span>
          </span>
        </Link>

        {/* Mobile Donate Info Bar - Fixed at bottom */}
        {isMobile && (
          <div
            id="mobile-donate-info"
            className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#36a3bc] to-[#1e7e9e] text-white z-30 text-center py-2 px-4 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-xs opacity-90">Your donation makes a difference</div>
                <div className="font-['EB_Garamond'] text-sm font-normal">
                  <strong className="text-lg">80%+</strong> goes to recipients
                </div>
              </div>
              <Link
                to="/donate"
                onClick={closeMenu}
                className="
                  bg-[#91bc36] text-white
                  px-4 py-2
                  rounded-full
                  font-medium text-sm
                  transition-all duration-300
                  hover:bg-[#a7d447]
                  whitespace-nowrap
                  border-none outline-none
                "
              >
                Donate
              </Link>
            </div>
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

      {/* Mobile Menu Toggle Button - Fixed position for mobile */}
      {isMobile && (
        <button
          className="
            absolute left-4 top-1/2 transform -translate-y-1/2 z-30 md:hidden
            w-12 h-12 flex items-center justify-center
            bg-[#f7bc47] rounded-full
            shadow-lg
            hover:bg-[#FCDC9A]
            transition-colors duration-300
          "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>
      )}
    </HeaderLayout>
  );
};

export default Header;