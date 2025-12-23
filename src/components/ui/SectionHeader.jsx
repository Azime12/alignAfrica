import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  description,
  center = true,
  className = "",
  enableAnimations = true
}) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} ${className}`}>
    
      
      {title && (
        <motion.h2
          initial={enableAnimations ? { opacity: 0, y: 20 } : false}
          whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-2xl font-black text-gray-900"
        >
          {title}
        </motion.h2>
      )}
      
     
      
      {description && (
        <motion.p
          initial={enableAnimations ? { opacity: 0 } : false}
          whileInView={enableAnimations ? { opacity: 1 } : false}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-gray-600 text-justify max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;