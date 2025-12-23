import React from "react";

const SecondaryMenu = () => {
  const menuLinks = [
    { href: "https://alignafrica.org/FQAS.html", text: "Get involved" },
    { href: "Contact alignafrica.html", text: "Contact" },
    { href: "resources.html", text: "Resources" },
  ];

  return (
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
  );
};

export default SecondaryMenu;
