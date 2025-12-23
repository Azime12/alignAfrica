import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../layout/AnimatedCard";
import GradientCard from "../layout/GradientCard";
import { Star, Users, BookOpen, Handshake } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const VIPStrategy = ({
  title = "The VIP Strategy",
  description = "The alignAfrica Community-Driven Strategy focuses on Village Ownership, Knowledge Sharing, and Partnerships. It creates lasting change by empowering grassroots communities to lead their own development and collaborate for greater impact.",
  strategyItems = [
    {
      letter: "V",
      title: "Village Ownership",
      subtitle: "Community-Driven Development",
      description:
        "Empowering grassroots leadership through participatory decision-making and local governance structures.",
      icon: <Users className="text-white" size={24} />,
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      features: ["Local Governance", "Participatory Design", "Sustainable Ownership"]
    },
    {
      letter: "I",
      title: "Impartation & Knowledge",
      subtitle: "Capacity Building Ecosystem",
      description:
        "Creating sustainable knowledge transfer systems through training, mentorship, and digital learning platforms.",
      icon: <BookOpen className="text-white" size={24} />,
      gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      features: ["Digital Learning", "Skill Development", "Knowledge Sharing"]
    },
    {
      letter: "P",
      title: "Partnership & Synergy",
      subtitle: "Collaborative Impact Networks",
      description:
        "Building strategic alliances across sectors to amplify resources, expertise, and collective impact.",
      icon: <Handshake className="text-white" size={24} />,
      gradient: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)",
      features: ["Multi-Sector Alliances", "Resource Optimization", "Collective Impact"]
    }
  ],
  enableAnimations = true
}) => {
  return (
    <section className="mb-16 space-y-2">
      <SectionHeader title={title} description={description} />

      {strategyItems.map((strategy, index) => (
  <GradientCard key={index}>
    <div className="p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full shadow-lg -top-2 -right-2">
            <span className="text-2xl font-black text-red-500">
              {strategy.letter}
            </span>
          </div>
        </motion.div>

        {/* ONE paragraph */}
        <p className="leading-relaxed text-justify text-gray-700">
          <span className="text-lg font-bold tracking-tight text-gray-900">
            {strategy.title}
          </span>
          <p className="ml-2 font-medium text-red-600">
            {strategy.subtitle}
          </p>
          <span className="block mt-2">
            {strategy.description}
          </span>
        </p>
      </div>
    </div>
  </GradientCard>
))}

    </section>
  );
};

export default VIPStrategy;
