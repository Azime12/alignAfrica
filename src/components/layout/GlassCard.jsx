import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ 
  children, 
  className = "", 
  hoverable = false,
  gradient = "from-white/10 to-white/5",
  border = "border-white/20",
  shadow = "shadow-lg",
  padding = "p-8",
  animate = true
}) => {
  const MotionDiv = animate ? motion.div : "div";
  
  return (
    <MotionDiv
      whileHover={hoverable ? { scale: 1.02, y: -5 } : {}}
      className={`
        bg-gradient-to-br ${gradient}
        backdrop-blur-lg
        border ${border}
        ${shadow}
        ${padding}
        rounded-3xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </MotionDiv>
  );
};

export default GlassCard;