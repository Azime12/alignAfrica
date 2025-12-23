import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({
  children,
  delay = 0,
  className = "",
  animation = "fadeIn",
  hoverAnimation = true
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slideIn: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay, type: "spring" }
    }
  };

  const selectedAnim = animations[animation] || animations.fadeIn;

  return (
    <motion.div
      {...selectedAnim}
      whileHover={hoverAnimation ? { y: -5 } : {}}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;