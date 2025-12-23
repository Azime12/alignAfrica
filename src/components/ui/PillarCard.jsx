import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const PillarCard = ({
  title,
  description,
  icon,
  gradient = "from-red-50 to-white",
  border = "border-red-100/50",
  stats,
  statLabel = "Impact",
  progress = 25,
  progressGradient = "from-red-500 to-red-600", // 🔹 reusable
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`bg-gradient-to-br ${gradient} rounded-3xl border ${border} p-5 shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-3 bg-white shadow-sm rounded-xl">
          {icon}
        </div>

        <div className="text-right">
          <div className="text-xs font-semibold tracking-wider text-red-600 uppercase">
            {statLabel}
          </div>
          <div className="text-lg font-bold text-gray-900">
            {stats}
          </div>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      <ProgressBar
        percentage={progress}
        gradient={progressGradient}
        delay={0.4}
      />
    </motion.div>
  );
};

export default PillarCard;
