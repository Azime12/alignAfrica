import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Globe, Target, Users, Shield,
  TrendingUp, Heart, BookOpen, Award,
  ArrowRight, ChevronRight, Star,
  Zap, BarChart, PieChart, MapPin,
  Lightbulb, Settings, CheckCircle,
  FileText, Download, Share2
} from "lucide-react";

// Import reusable components with updated paths
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import sidebarLinksData from "../../data/sidebarLinksData";

const OverviewPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for each component
  const heroData = {
    title: "Overview of alignAfrica",
    subtitle: "A comprehensive look at our mission, strategies, governance, and impact in driving sustainable development across Ethiopia and Africa.",
    establishedYear: "2009",
    primaryCta: "Explore Our Programs",
    secondaryCta: "View Impact Reports",
    backgroundImage: "/images/history-banner.jpg",
    enableAnimations: true,
    particleCount: 15
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "15+", 
        label: "Years of Service", 
        description: "Since founding in 2009", 
        icon: <Award />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "5", 
        label: "Regions Served", 
        description: "Across Ethiopia", 
        icon: <MapPin />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "8", 
        label: "Core Programs", 
        description: "Comprehensive development areas", 
        icon: <Target />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "500K+", 
        label: "Lives Impacted", 
        description: "Women, youth, and communities", 
        icon: <Heart />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Our Comprehensive Mission",
    content: "alignAfrica was founded with a steadfast commitment to advancing community well-being through targeted interventions in health, education, One Health (Human, Animal, and Environmental Health), and livelihood enhancement. Over the past seven years, we have meticulously designed programs to empower women, youth, and small-holder farmers from marginalized backgrounds, catalyzing sustainable improvements in their lives and livelihoods.",
    focusItems: [
      { 
        title: "Community Focus", 
        icon: <Users />, 
        content: "Prioritizing empowerment of women, children, and ethnic minorities who face heightened vulnerability to poverty, discrimination, and rights violations." 
      },
      { 
        title: "Geographic Reach", 
        icon: <Globe />, 
        content: "Expanded from roots in Amhara region to operations in Afar, Gambella, Benishangul-Gumuz, and Harere regions across Ethiopia." 
      }
    ],
    enableAnimations: true
  };

  const coreStrategiesData = {
    title: "Our Core Development Strategies",
    description: "Integrated approaches that drive sustainable community transformation",
    pillars: [
      {
        title: "Village Ownership",
        description: "Promoting community-driven solutions by equipping local actors with skills and knowledge to tackle development challenges autonomously.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "Community-Led",
        progress: 90
      },
      {
        title: "Knowledge Sharing",
        description: "Fostering a culture of learning and exchange among communities and volunteers to accelerate growth and innovation.",
        icon: <BookOpen className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Learning Culture",
        progress: 85
      },
      {
        title: "Partnership & Teamwork",
        description: "Collaborating with diverse stakeholders—including government bodies, private sector, academia, and civil society—to leverage resources.",
        icon: <Shield className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Multi-Stakeholder",
        progress: 88
      },
      {
        title: "Sustainable Impact",
        description: "Building resilient communities through integrated programs that address root causes of poverty and inequality.",
        icon: <TrendingUp className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Long-term Results",
        progress: 92
      }
    ],
    enableAnimations: true
  };

 

  const floatingCTAData = {
    text: "Learn More About Us",
    enableAnimations: true
  };

  // Program Focus Areas Data
  const programAreasData = [
    {
      title: "Health and Nutrition",
      description: "Advocating for accessible healthcare services and nutrition to enhance community well-being and health outcomes.",
      icon: "❤️",
      objectives: ["Health service uptake", "Gender equality", "Nutrition improvement"]
    },
    {
      title: "Education",
      description: "Breaking the cycle of poverty through improved educational opportunities and inclusive quality education programs.",
      icon: "📚",
      objectives: ["Access to education", "Quality learning", "Youth empowerment"]
    },
    {
      title: "Livelihood Enhancement",
      description: "Promoting economic independence and resilience among those facing extreme poverty through sustainable income generation.",
      icon: "💼",
      objectives: ["Economic empowerment", "Skill development", "Market access"]
    },
    {
      title: "One Health Integration",
      description: "Integrating human, animal, and environmental health professionals to improve overall community wellbeing.",
      icon: "🌍",
      objectives: ["Integrated health", "Environmental care", "Animal welfare"]
    },
    {
      title: "Gender Equality",
      description: "Championing gender equality within impoverished communities and reducing inequality among women and girls.",
      icon: "⚖️",
      objectives: ["Women empowerment", "Equal rights", "Social inclusion"]
    },
    {
      title: "Peace Building",
      description: "Fostering stability, reconciliation, and conflict resolution to enhance community cohesion and harmony.",
      icon: "🕊️",
      objectives: ["Conflict resolution", "Social cohesion", "Community harmony"]
    }
  ];

  // Governance & Management Data
  const governanceData = [
    {
      title: "Board of Directors",
      description: "Seasoned professionals and experts providing strategic oversight, ensuring alignment with organizational goals and values.",
      components: ["Strategic guidance", "Financial stewardship", "Mission alignment"]
    },
    {
      title: "Executive Leadership",
      description: "Under Founder and Executive Director Yonas Mamo Zewudie, driving day-to-day operations and strategic initiatives.",
      components: ["Operational management", "Strategic planning", "Team leadership"]
    },
    {
      title: "Financial Oversight",
      description: "Robust financial mechanisms ensuring transparency, accountability, and adherence to international standards.",
      components: ["Regular audits", "Transparent reporting", "Donor accountability"]
    },
    {
      title: "MERL Framework",
      description: "Comprehensive Monitoring, Evaluation, Research, and Learning systems for evidence-based decision making.",
      components: ["Impact assessment", "Continuous learning", "Program improvement"]
    }
  ];

  // Core Values Data
  const coreValuesData = [
    {
      title: "Empowerment",
      description: "Empowering communities through local leadership and capacity-building for sustainable change.",
      color: "bg-red-100",
      textColor: "text-red-700"
    },
    {
      title: "Humanitarian Accountability",
      description: "Upholding rigorous standards of accountability, transparency, and quality service delivery.",
      color: "bg-blue-100",
      textColor: "text-blue-700"
    },
    {
      title: "Equity and Inclusion",
      description: "Advocating for equity and inclusivity to ensure marginalized populations have equal access to opportunities.",
      color: "bg-green-100",
      textColor: "text-green-700"
    },
    {
      title: "Adaptability",
      description: "Integrating local cultures, knowledge, and lifestyles into programs for relevance and effectiveness.",
      color: "bg-yellow-100",
      textColor: "text-yellow-700"
    },
    {
      title: "Resilience",
      description: "Enhancing community resilience against socio-economic and environmental challenges through sustainable solutions.",
      color: "bg-purple-100",
      textColor: "text-purple-700"
    }
  ];

  // Policies Data
  const policiesData = [
    "Gender Inclusion Policy",
    "Child Protection Policy",
    "Governance, Ethics, and Standards of Operation",
    "Human Resources Policy",
    "Financial Accountability and Transparency",
    "Environmental Responsibility Policy",
    "Data Protection and Privacy Policy",
    "Safety and Security Policy",
    "Crisis Management and Emergency Response",
    "Donor Relations and Compliance",
    "Code of Conduct",
    "Stakeholder Engagement Policy",
    "Monitoring and Evaluation Policy",
    "Anti-Corruption and Whistleblower",
    "Partnership and Collaboration Policy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Animated Background */}
      <AnimatedBackground enableAnimations={true} />

      {/* Hero Section */}
      <HeroSection {...heroData} />

      {/* Impact Metrics Section */}
      <ImpactMetrics {...impactMetricsData} />

      {/* Main Content Area */}
      <div className="container px-3 pt-4 mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Content - 3/4 */}
          <div className="space-y-6 lg:w-3/4">
            {/* About Overview Section */}
            <AboutOverview {...aboutOverviewData} />

            {/* Founding Journey Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-blue-100 bg-gradient-to-r from-blue-50 to-white rounded-2xl"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <BookOpen className="text-blue-600" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Founding Journey</h2>
                  <p className="text-lg text-gray-600">From humble beginnings to nationwide impact</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                Founded in April 2009 in Debre Berhan town under the visionary leadership of Yonas Mamo Zewudie, 
                alignAfrica began with personal contributions and initial support from former Ethiopian President 
                Girma Wolde-Giyorgies.
              </p>
              <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Geographic Expansion</h3>
                  <ul className="space-y-2">
                    {["Amhara Region", "Afar Region", "Gambella Region", "Benishangul-Gumuz", "Harere Region"].map((region, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-500" />
                        <span className="text-gray-700">{region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive Approach</h3>
                  <p className="text-gray-700">
                    Our work spans Health and Nutrition, One Health integration, Emergency Response, Inclusive Quality Education, 
                    Women and Youth Empowerment, Policy Advocacy, Livelihood Enhancement, and Peace Building.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Strategies Section */}
            <CorePillars {...coreStrategiesData} />

            {/* Program Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Program Focus Areas</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Comprehensive interventions addressing the most pressing community needs
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programAreasData.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="mb-4 text-3xl">{area.icon}</div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{area.title}</h3>
                    <p className="mb-4 text-gray-600">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Objectives:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.objectives.map((objective, objIndex) => (
                          <span
                            key={objIndex}
                            className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                          >
                            {objective}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Governance & Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 border border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-red-100 rounded-xl">
                    <Shield className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Governance & Management</h2>
                    <p className="text-lg text-gray-600">Robust systems ensuring accountability and impact</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {governanceData.map((gov, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-gray-900">{gov.title}</h3>
                      <p className="mb-4 text-gray-600">{gov.description}</p>
                      <ul className="space-y-2">
                        {gov.components.map((component, compIndex) => (
                          <li key={compIndex} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-gray-700">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Core Values</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Fundamental principles that guide every aspect of our work
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                {coreValuesData.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${value.color} rounded-xl p-6 text-center`}
                  >
                    <h3 className={`text-lg font-bold ${value.textColor} mb-3`}>{value.title}</h3>
                    <p className="text-sm text-gray-700">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Policies & Systems */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-2xl">
                <div className="max-w-4xl mx-auto">
                  <h2 className="mb-6 text-3xl font-bold">Policies & Systems</h2>
                  <p className="mb-6 text-lg text-red-100">
                    TEA adheres to a comprehensive suite of policies and Standard Operating Procedures, continuously updated to optimize organizational efficiency and support for staff.
                  </p>
                  <div className="p-6 bg-white/10 rounded-xl">
                    <h3 className="mb-4 text-xl font-semibold">Key Policy Areas:</h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                      {policiesData.map((policy, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                          <span className="text-sm text-red-100">{policy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Mission Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="mb-6 text-3xl font-bold">Our Vision for the Future</h2>
                  <p className="mb-8 text-lg text-gray-300">
                    alignAfrica aspires to cultivate vibrant, self-sustaining communities across Africa by integrating innovation and empowerment into our development approach. We aim to inspire impoverished communities towards sustainable progress and prosperity.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 rounded-xl hover:shadow-xl">
                      Support Our Mission
                    </button>
                    <button className="px-8 py-3 font-semibold text-white transition-all duration-300 border-2 border-white rounded-xl hover:bg-white/10">
                      Download Overview
                    </button>
                  </div>
                  <p className="mt-6 text-sm text-gray-400">
                    For more information about TEA's governance, management, and impact, please contact us at tiruzerethiopia@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - 1/4 width */}
          <div className="lg:w-1/4">
            <div className="sticky space-y-4 top-16">
              {/* Sidebar Navigation */}
              <SidebarNavigation
                title="About alignAfrica"
                description="Explore our organization"
                links={sidebarLinksData}
                enableAnimations={true}
              />

              {/* Quick Facts Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Founded</p>
                      <p className="text-sm text-gray-600">April 2009</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-sm text-gray-600">Debre Berhan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Focus Groups</p>
                      <p className="text-sm text-gray-600">Women, Youth, Farmers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Registration</p>
                      <p className="text-sm text-gray-600">No. 2717</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Resources Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Overview Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <FileText size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Full Overview</p>
                      <p className="text-sm text-gray-600">Complete organizational profile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <BarChart size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Impact Reports</p>
                      <p className="text-sm text-gray-600">Latest results and achievements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <Download size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Download Brochure</p>
                      <p className="text-sm text-gray-600">Printable overview document</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <FloatingCTA {...floatingCTAData} />

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 top-4 right-4"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 text-sm font-semibold text-white transition-shadow rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:shadow-xl"
        >
          Back to Top
        </button>
      </motion.div>
    </div>
  );
};

export default OverviewPage;