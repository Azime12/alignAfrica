import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

const CallToAction = ({
  title = "Join Our Mission",
  description = "Be part of creating sustainable change across Africa",
  primaryButton = "Donate Now",
  secondaryButton = "Volunteer",
  enableAnimations = true
}) => {
  return (
    <section className="py-16">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={enableAnimations ? { opacity: 0, y: 30 } : false}
          whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 border rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-sm border-red-500/30">
            <Heart size={20} className="text-red-400" />
            <span className="text-lg font-semibold text-white">
              Make a Difference
            </span>
          </div>

          <h2 className="mb-6 text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white">
              Join us
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              {" "}in creating a brighter future
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
            {description} - whether by supporting our cause!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-500 group bg-gradient-to-r from-red-600 to-red-700 rounded-2xl hover:rounded-3xl hover:shadow-2xl hover:shadow-red-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                {primaryButton}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-red-700 to-red-800 group-hover:opacity-100"></div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 group bg-white/10 backdrop-blur-sm rounded-2xl border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                {secondaryButton}
                <Sparkles size={16} className="transition-transform group-hover:rotate-180" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;