import React from 'react';

const Logo = () => {
  return (
    <a 
      href="index.html" 
      id="logo"
      className="absolute left-0 top-[-100px] z-20 block w-[170px] h-[220px] bg-white border-[10px] border-[#953673] rounded-[50%] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-[#BC497D] overflow-hidden"
    >
      <img 
        src="/images/alignafrica.png" 
        alt="alignafrica" 
        className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-auto border-0"
      />
    </a>
  );
};

export default Logo;