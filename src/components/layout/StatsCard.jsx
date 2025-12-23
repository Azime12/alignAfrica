import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({
  value,
  label,
  description,
  icon,
  gradient = "from-red-500 to-orange-500",
  delay = 0,
  showProgress = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <div className={`bg-gradient-to-br ${gradient} p-0.5 rounded-3xl shadow-2xl`}>
        <div className="p-6 bg-white rounded-3xl backdrop-blur-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-white">
              {React.cloneElement(icon, { className: "text-gray-700" })}
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-gray-900">{value}</div>
              <div className="text-xs font-medium tracking-wide text-gray-500">{label}</div>
            </div>
          </div>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
          {showProgress && (
            <div className="h-1 mt-4 overflow-hidden bg-gray-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5 + delay, duration: 1 }}
                className={`h-full bg-gradient-to-r ${gradient}`}
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl group-hover:opacity-100 blur-xl -z-10" />
    </motion.div>
  );
};

export default StatsCard;