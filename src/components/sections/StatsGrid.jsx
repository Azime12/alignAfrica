import React from "react";
import StatsCard from "../layout/StatsCard";
import { Users, Globe, PieChart, Layers } from "lucide-react";

const StatsGrid = ({ stats = [], columns = 4 }) => {
  const defaultStats = [
    { value: "706,781+", label: "Lives Transformed", icon: <Users />, gradient: "from-red-500 to-orange-500" },
    { value: "7.5M+", label: "Indirect Impact", icon: <Globe />, gradient: "from-orange-500 to-yellow-500" },
    { value: "80%", label: "Direct Allocation", icon: <PieChart />, gradient: "from-yellow-500 to-red-500" },
    { value: "15+", label: "Sectors", icon: <Layers />, gradient: "from-red-600 to-pink-500" }
  ];

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "lg:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {(stats.length > 0 ? stats : defaultStats).map((stat, index) => (
        <StatsCard
          key={index}
          value={stat.value}
          label={stat.label}
          description={stat.description}
          icon={stat.icon}
          gradient={stat.gradient}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default StatsGrid;