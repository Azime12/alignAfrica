// src/components/Navigation/NavigationItem.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NavigationItem = ({ item, activeMenu, handleMenuHover, closeMenu }) => {
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

  // Function to handle external links (for PDFs)
  const handleLinkClick = (e, linkPath, external) => {
    if (external) {
      e.preventDefault();
      window.open(linkPath, '_blank');
    }
    closeMenu(); // Close menu when clicking any link
  };

  // Function to handle internal link clicks
  const handleInternalLinkClick = () => {
    closeMenu(); // Close menu when clicking internal links
  };

  return (
    <div
      ref={itemRef}
      className={`
        relative group w-[300px] box-border h-full
        border-r-4 border-white
        ${item.bgColor}
        ${isActive ? "z-30 border-r-transparent" : ""}
      `}
      onMouseEnter={() => handleMenuHover(item.id)}
    >
      <div className="absolute inset-0 transition-all duration-300 bg-white/5 group-hover:bg-white/15" />

      {/* MAIN ITEM LINK */}
      <Link
        to={item.path}
        onClick={handleInternalLinkClick}
        className="
          relative flex items-center gap-3
          py-1 pl-[28px] pr-4
          text-white no-underline
          font-['EB_Garamond'] text-[22px]
          transition-all duration-300
        "
      >
        {Icon && <Icon size={20} className="opacity-90 shrink-0" />}
        <span className="flex-1">{item.title}</span>

        {item.submenu && item.submenu.length > 0 && (
          <ChevronRight
            size={18}
            className={`transition-transform duration-300 ${
              isActive ? "translate-x-1 opacity-100" : "opacity-60"
            }`}
          />
        )}
      </Link>

      {/* SUBMENU */}
      {item.submenu && item.submenu.length > 0 && (
        <div
          ref={submenuRef}
          className={`
            absolute left-[300px]
            w-[458px] pr-[40px] box-border
            bg-right bg-cover bg-no-repeat
            ${item.menuBgColor} ${item.menuBgImage}
            transition-all duration-300
            ${isActive ? "opacity-100 visible z-40" : "opacity-0 invisible"}
          `}
          style={{
            top: openDirection === "down" ? 0 : "auto",
            bottom: openDirection === "up" ? 0 : "auto",
            maxHeight: submenuMaxHeight,
            paddingTop: getSubmenuPadding(),
            overflowY: "auto"
          }}
        >
          <ul className="p-0 m-0 list-none">
            {item.submenu.map((subItem, index) => (
              <li key={index} className="mb-1">
                {subItem.external ? (
                  // External link (for PDFs)
                  <a
                    href={subItem.external}
                    onClick={(e) => handleLinkClick(e, subItem.external, true)}
                    className="
                      block
                      py-1 pl-[30px] pr-4
                      text-white no-underline
                      whitespace-nowrap overflow-hidden truncate
                      transition-all duration-200
                      hover:bg-white/20
                      cursor-pointer
                    "
                    title={subItem.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  // Internal link
                  <Link
                    to={subItem.path}
                    onClick={handleInternalLinkClick}
                    className="
                      block
                      py-1 pl-[30px] pr-4
                      text-white no-underline
                      whitespace-nowrap overflow-hidden truncate
                      transition-all duration-200
                      hover:bg-white/20
                      cursor-pointer
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

export default NavigationItem;