import React from "react";

const AnimatedBackground = ({ enableAnimations = true }) => {
  if (!enableAnimations) return null;
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-red-500/5 blur-3xl animate-pulse"></div>
      <div className="absolute delay-1000 rounded-full top-1/3 -left-40 w-80 h-80 bg-red-600/5 blur-3xl animate-pulse"></div>
      <div className="absolute delay-500 rounded-full bottom-40 right-1/4 w-60 h-60 bg-red-700/5 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;