import React from "react";
import PillarCard from "../ui/PillarCard";
import { BookOpen, Shield, Users, TrendingUp } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const CorePillars = ({
  title = "Our Core Pillars",
  description = "Four interconnected dimensions driving sustainable impact",
  pillars = [
    {
      title: "Educate",
      description: "Transforming lives through knowledge transfer and skill development.",
      icon: <BookOpen className="text-red-600" size={24} />,
      gradient: "from-red-50 to-white",
      stats: "50K+ Trained",
      progress: 25
    },
    {
      title: "Advocate",
      description: "Influencing policy and driving systemic change for sustainable development.",
      icon: <Shield className="text-red-600" size={24} />,
      gradient: "from-red-100 to-red-50",
      stats: "100+ Policies",
      progress: 50
    },
    {
      title: "Engage",
      description: "Building inclusive partnerships for community-led solutions.",
      icon: <Users className="text-red-600" size={24} />,
      gradient: "from-red-200 to-red-100",
      stats: "500+ Partners",
      progress: 75
    },
    {
      title: "Empower",
      description: "Creating self-sustaining communities through capacity building.",
      icon: <TrendingUp className="text-red-600" size={24} />,
      gradient: "from-red-300 to-red-200",
      stats: "1M+ Empowered",
      progress: 100
    }
  ],
  enableAnimations = true
}) => {
  return (
    <section className="pt-3">

      <SectionHeader title={title} description={description}/>
     

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <PillarCard
          
            key={index}
            title={pillar.title}
            description={pillar.description}
            icon={pillar.icon}
            gradient={pillar.gradient}
            stats={pillar.stats}
            progress={pillar.progress}
            delay={enableAnimations ? index * 0.1 : 0}
          />
        ))}
      </div>
    </section>
  );
};

export default CorePillars;