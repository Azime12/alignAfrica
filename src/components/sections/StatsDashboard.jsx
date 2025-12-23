import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../layout/AnimatedCard";
import GradientCard from "../layout/GradientCard";
import { BarChart3, ArrowRight } from "lucide-react";

const StatsDashboard = ({
  title = "Impact Dashboard",
  description = "Real-time metrics",
  stats = [
    { label: "Program Efficiency", value: "94%", color: "bg-red-500" },
    { label: "Community Satisfaction", value: "98%", color: "bg-red-600" },
    { label: "Project Success Rate", value: "92%", color: "bg-red-700" },
    { label: "Sustainability Index", value: "89%", color: "bg-red-800" }
  ],
  buttonText = "Download Full Report",
  enableAnimations = true
}) => {
  return (
    <AnimatedCard delay={0.3} animation="slideIn" enableAnimations={enableAnimations}>
      <GradientCard gradient="from-gray-900 to-black">
        {enableAnimations && (
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-500/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 delay-1000 rounded-full bg-red-600/10 blur-3xl animate-pulse"></div>
          </div>
        )}

        <div className="relative p-8 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <BarChart3 size={24} className="text-red-300" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold tracking-tight">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-xl font-bold">{item.value}</span>
                </div>
                <div className="h-2 overflow-hidden bg-gray-800 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ delay: enableAnimations ? index * 0.1 : 0, duration: 1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full gap-2 py-4 mt-8 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl hover:shadow-xl hover:shadow-red-500/20 group"
          >
            {buttonText}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </GradientCard>
    </AnimatedCard>
  );
};

export default StatsDashboard;