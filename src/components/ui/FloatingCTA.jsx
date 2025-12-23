import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const FloatingCTA = ({
  text = "Get Involved",
  enableAnimations = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: enableAnimations ? 0.6 : 0 }}
      viewport={{ once: true }}
      className="fixed z-50 bottom-7 left-5"
    >
      <button className="flex items-center gap-3 px-6 py-4 font-semibold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-red-600 to-red-700 rounded-2xl hover:shadow-3xl hover:shadow-red-500/30">
        <Sparkles size={20} />
        <span>{text}</span>
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

export default FloatingCTA;