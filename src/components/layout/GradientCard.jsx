import React from "react";
import { motion } from "framer-motion";

const GradientCard = ({ 
  children, 
  gradient = "",
  className = "",
  innerClassName = "",
  padding = "p-1",
  hoverEffect = true
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      className={`
        bg-gradient-to-br ${gradient}
        rounded-3xl
        ${padding}
        shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      <div className={`
        bg-white
        rounded-3xl
        ${innerClassName}
      `}>
        {children}
      </div>
    </motion.div>
  );
};

export default GradientCard;