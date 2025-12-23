import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, PieChart, Layers } from "lucide-react";

const ImpactMetrics = ({
  metrics = [
    { value: "706,781+", label: "Lives Transformed", description: "Direct beneficiaries since 2009", icon: <Users />, color: "from-red-500 to-orange-500" },
    { value: "7.5M+", label: "Indirect Impact", description: "Community-wide influence", icon: <Globe />, color: "from-orange-500 to-yellow-500" },
    { value: "80%", label: "Direct Allocation", description: "Resources to programs", icon: <PieChart />, color: "from-yellow-500 to-red-500" },
    { value: "15+", label: "Sectors", description: "Areas of operation", icon: <Layers />, color: "from-red-600 to-pink-500" }
  ],
  enableAnimations = true
}) => {
  return (
    <section className="relative z-20 mt-10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: enableAnimations ? index * 0.1 : 0, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${metric.color} p-0.5 rounded-3xl shadow-2xl`}>
                <div className="p-6 bg-white rounded-3xl backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-white">
                      {React.cloneElement(metric.icon, { className: "text-gray-700" })}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-gray-900">{metric.value}</div>
                      <div className="text-xs font-medium tracking-wide text-gray-500">{metric.label}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                  <div className="h-1 mt-4 overflow-hidden bg-gray-100 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 1 }}
                      className={`h-full bg-gradient-to-r ${metric.color}`}
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl group-hover:opacity-100 blur-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;