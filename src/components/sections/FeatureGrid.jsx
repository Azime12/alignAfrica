import React from "react";
import { motion } from "framer-motion";

const FeatureGrid = ({
  features,
  cardType = "gradient",
  enableAnimations = true,
  iconColor = "text-red-600",   // 🔹 reusable
  iconSize = 16                 // 🔹 reusable
}) => {
  return (
    <div className="">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={enableAnimations ? { opacity: 0, y: 8 } : false}
          whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04 }}
          className={`px-2 py-1 text-justify rounded-lg border border-gray-100 ${
            cardType === "gradient"
              ? feature.color || "bg-gradient-to-br from-gray-50 to-white"
              : cardType === "glass"
              ? "glass-morphism"
              : "bg-white"
          }`}
        >
          <div className="flex items-start gap-2">
            {feature.icon && (
              <span className={`flex-shrink-0 mt-[2px] ${iconColor}`}>
                {React.cloneElement(feature.icon, { size: iconSize })}
              </span>
            )}

            <p className="text-sm leading-snug text-gray-600">
              <span className="mr-1 font-medium text-gray-900">
                {feature.title}
              </span>
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
