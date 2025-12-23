// src/components/Navigation/NavigationMenu.jsx
import NavigationItem from "./NavigationItem";

const NavigationMenu = ({
  isMenuOpen,
  activeMenu,
  bgColor,
  menuItems,
  handleMenuHover,
  handleMenuLeave,
  closeMenu // Add this prop
}) => {
  return (
    <div
      id="main-navigation"
      className={`
        absolute top-[70px] left-0
        w-[758px]
        shadow-[0_2px_10px_rgba(0,0,0,0.4)]
        z-50
        transition-all duration-300
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      onMouseLeave={handleMenuLeave}
    >
      <div
        className="
          absolute inset-y-0 right-0 left-[300px]
          bg-[url(/images/home-nav-bg.jpg)]
          bg-cover bg-right bg-[#6A321E]
        "
      />

      <nav
        className={`
          relative
          transition-all duration-300
          ${bgColor}
        `}
      >
        {menuItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            activeMenu={activeMenu}
            handleMenuHover={handleMenuHover}
            closeMenu={closeMenu} // Pass closeMenu prop
          />
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;