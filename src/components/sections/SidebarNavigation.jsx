import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import AnimatedCard from "../layout/AnimatedCard";
import GlassCard from "../layout/GlassCard";
import { ChevronRight } from "lucide-react";

const SidebarNavigation = ({
  title = "Navigation",
  links = [],
  brandColor = "red",
  enableAnimations = true
}) => {
  const location = useLocation(); // Get current location
  
  const colorMap = {
    red: {
      bgLight: "bg-red-100",
      text: "text-red-700",
      textLight: "text-red-500",
      bgGradient: "bg-gradient-to-r from-red-50 to-red-100",
      badgeBg: "bg-red-100",
      badgeText: "text-red-700",
      border: "border-l-4 border-red-500",
      iconBg: "bg-red-100"
    },
    blue: {
      bgLight: "bg-blue-100",
      text: "text-blue-700",
      textLight: "text-blue-500",
      bgGradient: "bg-gradient-to-r from-blue-50 to-blue-100",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      border: "border-l-4 border-blue-500",
      iconBg: "bg-blue-100"
    },
    green: {
      bgLight: "bg-green-100",
      text: "text-green-700",
      textLight: "text-green-500",
      bgGradient: "bg-gradient-to-r from-green-50 to-green-100",
      badgeBg: "bg-green-100",
      badgeText: "text-green-700",
      border: "border-l-4 border-green-500",
      iconBg: "bg-green-100"
    }
  };

  const colors = colorMap[brandColor] || colorMap.red;

  return (
    <AnimatedCard delay={0.2} animation="slideIn" enableAnimations={enableAnimations}>
      <GlassCard
        gradient="from-white to-gray-50"
        border="border-gray-100"
        shadow="shadow-xl"
        hoverable={true}
      >
        {title && (
          <div className="px-4 pt-4 pb-2">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
        )}
        
        <div className="overflow-y-auto max-h-[90vh] text-left sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] p-4 sm:px-3 w-full space-y-1">
          {links.map((link, index) => {
            // Dynamically check if current route matches link href
            const isCurrent = location.pathname === link.href;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: enableAnimations ? index * 0.05 : 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 2 }}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                    isCurrent
                      ? `shadow-sm`
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isCurrent ? colors.iconBg : "bg-gray-100"}`}>
                    {React.createElement(link.icon, {
                      className: isCurrent ? colors.textLight : "text-gray-700",
                      size: 18
                    })}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className={`font-medium text-sm sm:text-base ${isCurrent ? colors.text : "text-gray-700"}`}>
                      {link.name}
                    </span>
                  </div>

                  {isCurrent && (
                    <div className="flex items-center gap-2">
                      {/* <span className={`text-xs px-2 py-0.5 rounded-full ${colors.badgeBg} ${colors.badgeText} whitespace-nowrap`}>
                        Current
                      </span> */}
                      <ChevronRight 
                        size={16} 
                        className={`${colors.textLight}`}
                      />
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </AnimatedCard>
  );
};

export default SidebarNavigation;