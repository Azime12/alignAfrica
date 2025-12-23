import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  backgroundImage = "/images/about-banner.png",
  enableAnimations = true,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: enableAnimations ? 0.8 : 0 }}
      className="relative w-full overflow-hidden"
    >
      {/* Image Only */}
      <img
        src={backgroundImage}
        alt="Hero"
        className="object-contain w-full h-auto"
      />
    </motion.section>
  );
};

export default HeroSection;
