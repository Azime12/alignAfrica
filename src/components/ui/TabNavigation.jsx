import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TabNavigation = ({ tabs, defaultTab, gradient = "from-red-600 to-red-700" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex p-1 mb-8 space-x-1 bg-gray-100 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {tabs.find(tab => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabNavigation;