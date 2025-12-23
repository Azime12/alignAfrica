import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../layout/AnimatedCard";
import GradientCard from "../layout/GradientCard";
import FeatureGrid from "../sections/FeatureGrid";
import SectionHeader from "../ui/SectionHeader";
import { Target, Globe, Users, TrendingUp, Link as LinkIcon, Zap, Heart, Award } from "lucide-react";

const WhyAlignAfrica = ({
  title = "Why alignAfrica?",
  subtitle = "Uniting efforts for sustainable progress across Africa",
  mainDescription = "The name alignAfrica reflects our mission to unite efforts, resources, and stakeholders for sustainable progress across the African continent.",
  sections = [
    {
      title: "Alignment with Local Needs",
      description: "We tailor initiatives to meet the unique priorities of local communities, ensuring impact and relevance.",
      icon: <Target className="text-red-600" size={24} />,
      color: "from-red-50 to-white"
    },
    {
      title: "Alignment with Global Goals",
      description: "By focusing on livelihoods, health, education, emergency response, gender equality, peacebuilding, and environmental sustainability, alignAfrica aligns its interventions with Sustainable Development Goals (SDG's) aimed at creating a more equitable, resilient, and sustainable world.",
      icon: <Globe className="text-red-600" size={24} />,
      color: "from-red-100 to-red-50"
    },
    {
      title: "Empowerment through Unity",
      description: "We bring together communities, governments, and donors to address Africa's pressing challenges, amplifying the impact of aligned efforts.",
      icon: <Users className="text-red-600" size={24} />,
      color: "from-red-200 to-red-100"
    },
    {
      title: "Commitment to Sustainability",
      description: "Our focus is on evolving, long-term solutions that meet communities' changing needs and ensure lasting change.",
      icon: <TrendingUp className="text-red-600" size={24} />,
      color: "from-red-300 to-red-200"
    }
  ],
  enableAnimations = true
}) => {
  return (
    <section className="mb-16">
      <AnimatedCard delay={0.1} enableAnimations={enableAnimations}>
        <GradientCard>
          <div className="px-5 py-4">
            <SectionHeader
              title={title}
              subtitle={subtitle}
              description={mainDescription}
              badge={true}
              badgeText="Our Mission"
              icon={<LinkIcon />}
              center={true}
              enableAnimations={enableAnimations}
            />
            
            <div className="mt-8">
              <FeatureGrid
                features={sections}
                columns={2}
                cardType="gradient"
                enableAnimations={enableAnimations}
              />
            </div>
          </div>
        </GradientCard>
      </AnimatedCard>
    </section>
  );
};

export default WhyAlignAfrica;