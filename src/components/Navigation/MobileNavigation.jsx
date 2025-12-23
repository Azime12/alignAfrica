import React from 'react';
import { menuItems } from '../../data/menuItems';

const MobileNavigation = ({
  isMobile,
  isMenuOpen,
  activeMenu,
  setIsMenuOpen,
  setActiveMenu
}) => {
  if (!isMobile) return null;

  return (
    <div
      id="mobile-navigation"
      className={`fixed top-0 left-0 w-[270px] h-full bg-black shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-auto z-40 transition-transform duration-800 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-[280px]'
      }`}
    >
      <nav className="visible opacity-100">
        {menuItems.map((item) => (
          <MobileNavigationItem
            key={item.id}
            item={item}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        ))}

        <MobileSecondaryMenu />
      </nav>
    </div>
  );
};

const MobileNavigationItem = ({ item, activeMenu, setActiveMenu }) => {
  const getPaddingBottom = () => {
    const paddingMap = {
      'nav-about': '50px',
      'nav-development-partners': '50px',
      'nav-projects': '50px',
      'nav-heroes': '100px',
      'nav-ethiopians': '60px',
      default: '10px'
    };
    return paddingMap[item.id] || paddingMap.default;
  };

  return (
    <div
      className={`relative overflow-y-auto w-auto ${item.bgColor} bg-[url(/images/nav-pattern-right.png)] bg-right-top bg-repeat-y bg-[length:21px_auto]`}
    >
      <a
        href={item.href}
        className="block  pl-[25px] text-white no-underline font-['EB_Garamond'] text-[22px] relative"
        onClick={(e) => {
          if (item.submenu.length > 0) {
            e.preventDefault();
            setActiveMenu(activeMenu === item.id ? null : item.id);
          }
        }}
      >
        <span className="absolute left-[10px]">•</span>
        {item.title}
      </a>

      {item.submenu.length > 0 && (
        <div
          className={`relative w-auto bg-cover bg-right-bottom bg-no-repeat bg-transparent overflow-hidden transition-all duration-500 ${
            activeMenu === item.id ? 'max-h-[1000px] pb-3' : 'max-h-0'
          }`}
          style={{
            backgroundImage: item.menuBgImage.includes('url') 
              ? item.menuBgImage 
              : `url(${item.menuBgImage})`,
            paddingBottom: activeMenu === item.id ? getPaddingBottom() : '0'
          }}
        >
          <ul className="list-none m-0 p-0 pr-[25px]">
            {item.submenu.map((subItem, index) => (
              <li key={index}>
                <a
                  href={subItem.href}
                  className="block  px-0 pl-[30px] pr-[22px] text-white no-underline transition-colors duration-300 hover:bg-white/20"
                  onClick={() => setActiveMenu(null)}
                >
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MobileSecondaryMenu = () => {
  const menuLinks = [
    { href: "https://alignafrica.org/FQAS.html", text: "Get involved" },
    { href: "Contact alignafrica.html", text: "Contact" },
    { href: "resources.html", text: "Resources" }
  ];

  return (
    <div className="relative h-auto mt-4">
      <ul className="gap-2 p-0 m-0 text-left list-none">
        {menuLinks.map((link, index) => (
          <li key={index} className='mt-1'>
            <a
              href={link.href}
              className="block py-3 pl-[25px] text-white bg-blue-600 no-underline border-none rounded-none transition-colors duration-300 hover:bg-white/20"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;