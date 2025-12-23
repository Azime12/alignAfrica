import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../layout/AnimatedCard";
import GradientCard from "../layout/GradientCard";
import { Shield, PieChart, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const TransparencySection = ({
  title = "Maximizing Impact with Efficiency and Transparency",
  sections = [
    {
      title: "80% Direct Allocation",
      description:
        "We allocate 80% of our resources directly to support those in need, adhering to the high accountability standards set by CSO watchdogs.",
      icon: <PieChart className="text-green-600" size={24} />,
      value: "80%"
    },
    {
      title: "Rigorous Evaluation",
      description:
        "Our expert team rigorously evaluates programs for maximum impact while upholding transparency with accessible reports and strategic plans.",
      icon: <CheckCircle className="text-blue-600" size={24} />,
      value: "100%"
    },
    {
      title: "Accountability Standards",
      description:
        "Adhering to the highest accountability standards set by CSO watchdogs and international monitoring organizations.",
      icon: <Shield className="text-purple-600" size={24} />,
      value: "A+"
    }
  ],
  enableAnimations = true
}) => {
  return (
    <section className="mr-3 bg-white mb-7">
      <AnimatedCard delay={0.2} enableAnimations={enableAnimations}>
        <SectionHeader title={title} description={'At alignAfrica, we ensure every contribution makes a difference.'}/>
        <GradientCard gradient="">
          <div className="p-4 text-gray-900">
          

            {/* Sections */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={enableAnimations ? { opacity: 0, y: 20 } : false}
                  whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-gray-200 bg-gray-50 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      {section.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{section.value}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-sm text-gray-700">{section.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Our Reach */}
            <div className="p-6 mt-8 bg-gray-100 border border-gray-200 rounded-2xl">
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Our Reach</h4>
              <p className="text-gray-700">
                Since 2009, we've impacted over <span className="font-bold">706,781 people directly</span> and{" "}
                <span className="font-bold">7.5 million people indirectly</span> in Ethiopia through health, education,
                empowerment, and more—expanding soon to other African countries.
              </p>
            </div>
          </div>
        </GradientCard>
      </AnimatedCard>
    </section>
  );
};

export default TransparencySection;
