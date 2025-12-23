import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({
  percentage,
  gradient = "from-red-500 to-red-600",
  showLabel = false,
  label,
  height = "h-2",
  delay = 0,
  className = ""
}) => {
  return (
    <div className={`${className}`}>
      {showLabel && label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-700">{percentage}%</span>
        </div>
      )}
      <div className={`${height} bg-gray-100 rounded-full overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ delay, duration: 1 }}
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;