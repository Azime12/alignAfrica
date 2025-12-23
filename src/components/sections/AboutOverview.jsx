import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../layout/AnimatedCard";
import GradientCard from "../layout/GradientCard";
import { TargetIcon, Rocket } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const Overview = ({
  title = "Redefining Development in Africa",
  content = "Born from the vision of founder Yonas Mamo in 2009, alignAfrica represents a transformative approach to sustainable development. We've evolved from local empowerment initiatives in Ethiopia to a pan-African force driving systemic change.",
  focusItems = [
    { title: "Our Focus", icon: <TargetIcon />, content: "Health, education, economic empowerment, climate resilience, and peacebuilding across multiple African nations." },
    { title: "Our Approach", icon: <Rocket />, content: "Innovation-driven, community-centered solutions with measurable impact and sustainable outcomes." }
  ],
  enableAnimations = true
}) => {
  return (
    <AnimatedCard delay={0.1} enableAnimations={enableAnimations}>
      <SectionHeader title={title} className="mt-5 text-2xl"/>
      <GradientCard>
        <div className="justify-center p-6">
          {/* <h2 className="mb-6 font-sans text-4xl font-black tracking-tight text-gray-900">
            {title}
          </h2> */}
          <div className="">
       <p className="font-sans text-lg leading-relaxed text-justify text-gray-700">
  {content}
</p>

            <div className="grid gap-6 md:grid-cols-2">
            
            </div>
          </div>
        </div>
      </GradientCard>
    </AnimatedCard>
  );
};

export default Overview;