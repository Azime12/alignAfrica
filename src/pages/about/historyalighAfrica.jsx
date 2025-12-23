import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Clock, Calendar, Users, Target, 
  Globe, TrendingUp, Heart, ArrowRight, 
  ChevronRight, Star, Award,
  Handshake, CheckCircle, Shield,
  BookOpen, MapPin, Lightbulb,
  BarChart, PieChart, Layers
} from "lucide-react";

// Import reusable components
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import PillarCard from "../../components/ui/PillarCard";
import SectionHeader from "../../components/ui/SectionHeader";
// import TimelineComponent from "../../components/sections/TimelineComponent";
import sidebarLinksData from "../../data/sidebarLinksData";

const HistoryPage = () => {
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
    title: "Our History",
    subtitle: "Founded in April 2009 by Yonas Mamo, driven by a profound commitment to addressing critical social issues and empowering communities across Africa.",
    establishedYear: "2009",
    primaryCta: "Learn About Our Founder",
    secondaryCta: "View Our Timeline",
    backgroundImage: "/images/history-banner.jpg",
    enableAnimations: true,
    particleCount: 15
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "2009", 
        label: "Year Founded", 
        description: "In Debre Berhan, Amhara region", 
        icon: <Calendar />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "15+", 
        label: "Years of Service", 
        description: "Dedicated to sustainable development", 
        icon: <Clock />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "8+", 
        label: "Key Focus Areas", 
        description: "From health to peace building", 
        icon: <Target />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "1000+", 
        label: "Volunteers Engaged", 
        description: "Including global contributors", 
        icon: <Users />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Our Founding Story",
    content: "alignAfrica was founded in April 2009 by Yonas Mamo, driven by a profound commitment to addressing critical social issues. Drawing on extensive experience in grassroots social mobilization, Yonas envisioned alignAfrica as a platform to leverage his insights gained from working directly with underserved communities. Established in Debre Berhan, Amhara region—where Yonas spent significant portions of his career—alignAfrica focuses on key areas including Health and Nutrition, One Health integration (human, animal, and environmental health), Emergency Response, Inclusive Quality Education, Women and Youth Empowerment, Policy Advocacy, Livelihood Enhancement, and Peace Building and Conflict Resolution.",
    focusItems: [
      { 
        title: "Our Founder", 
        icon: <Users />, 
        content: "Yonas Mamo, with extensive grassroots experience, established alignAfrica in 2009 to address critical social issues through sustainable development." 
      },
      { 
        title: "Our Philosophy", 
        icon: <Lightbulb />, 
        content: "Focused on capacity-building rather than direct aid, recognizing and developing existing potential within individuals, families, and communities." 
      }
    ],
    enableAnimations: true
  };


 const corePillarsData = {
  title: "Our Development Approach",
  description:
    "Building sustainable communities through targeted interventions and capacity development",
  pillars: [
    {
      title: "Capacity Building",
      description:
        "TEA is dedicated to sustainable development through capacity-building rather than direct aid. The organization emphasizes recognizing and developing the existing potential within individuals, families, and communities.",
      icon: <TrendingUp className="text-red-600" size={24} />,
      gradient: "from-red-100 to-gray-300",
      stats: "Self-Reliance Focus",
      progress: 85,
    },
    {
      title: "Peace Building",
      description:
        "Our peace-building initiatives address and resolve conflicts, promoting social cohesion and stability within communities across Ethiopia and Africa.",
      icon: <Shield className="text-red-600" size={24} />,
      gradient: "from-red-100 to-orange-100",
      stats: "Conflict Resolution",
      progress: 75,
    },
    {
      title: "Health Integration",
      description:
        "Implementing One Health approach integrating human, animal, and environmental health for comprehensive community wellbeing.",
      icon: <Heart className="text-red-600" size={24} />,
      gradient: "from-red-200 to-red-100",
      stats: "Holistic Health",
      progress: 90,
    },
    {
      title: "Community Empowerment",
      description:
        "Fostering self-reliance and long-term growth through inclusive quality education, women and youth empowerment initiatives.",
      icon: <Users className="text-red-600" size={24} />,
      gradient: "from-orange-300 to-yellow-200",
      stats: "Empowered Communities",
      progress: 80,
    },
  ],
  enableAnimations: true,
};



  const floatingCTAData = {
    text: "Join Our History",
    enableAnimations: true
  };

 

  // Focus areas data
  const focusAreasData = [
    {
      title: "Health and Nutrition",
      description: "Comprehensive health programs including One Health integration for human, animal, and environmental wellbeing.",
      icon: "❤️",
      count: "50+ Programs"
    },
    {
      title: "Education",
      description: "Inclusive quality education initiatives focusing on marginalized communities and youth empowerment.",
      icon: "📚",
      count: "100+ Schools"
    },
    {
      title: "Women & Youth Empowerment",
      description: "Programs designed to build leadership skills, economic independence, and social participation.",
      icon: "🌟",
      count: "10,000+ Empowered"
    },
    {
      title: "Peace Building",
      description: "Conflict resolution and social cohesion initiatives promoting stability and community harmony.",
      icon: "🕊️",
      count: "20+ Communities"
    },
    {
      title: "Livelihood Enhancement",
      description: "Sustainable economic development programs focusing on skills training and income generation.",
      icon: "💼",
      count: "5,000+ Beneficiaries"
    },
    {
      title: "Emergency Response",
      description: "Rapid response initiatives for humanitarian crises and disaster management.",
      icon: "🆘",
      count: "15+ Responses"
    }
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Key Focus Areas</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Since our founding, we've developed comprehensive programs addressing critical needs across eight key areas
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ">
                {focusAreasData.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="p-2 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      
                      <div className="flex-1">
                       <span className="text-2xl">{area.icon}</span> <span className="mb-2 text-xl font-semibold text-gray-900">{area.title}</span>
                        <p className="mb-3 text-gray-600">{area.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-red-600">{area.count}</span>
                          <ArrowRight size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="p-4 border border-blue-100 shadow-sm bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl"
>
  <div className="flex flex-col items-start gap-4">
    {/* Icon + Title inline on small screens */}
   <div className="flex items-center justify-center w-full gap-3">
  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
    <Users className="text-blue-600" size={24} />
  </div>
  <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
    Volunteer Testimonial
  </h3>
</div>


    {/* Testimonial content */}
   <blockquote className="mb-4 text-sm italic leading-relaxed text-gray-700 sm:text-lg sm:text-justify">
  "As a volunteer with alignAfrica, I experienced firsthand the organization's dedication to thoughtful and effective program implementation. The Dance4Life program, aimed at creating adolescent sexual and reproductive health services, was meticulously planned to ensure it was ethical, culturally appropriate, and sustainable."
</blockquote>


    {/* Volunteer Info */}
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
      <div>
        <p className="font-medium text-gray-900">Vasti Putnam</p>
        <p className="text-xs text-gray-600 sm:text-sm">
          alignAfrica Volunteer, Dance4Life Project, April 2015
        </p>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-xs font-medium text-blue-600 sm:text-sm">April 2015</p>
        <p className="text-[10px] sm:text-xs text-gray-500">
          Dance4Life Project Volunteer
        </p>
      </div>
    </div>
  </div>
</motion.div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              <div className="p-6 border border-red-100 bg-gradient-to-br from-red-50 to-white rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Geographic Focus</h3>
                
                </div>
                <p className="text-gray-600">
                  Established in Debre Berhan, Amhara region—where our founder spent significant portions of his career—alignAfrica has expanded its reach across multiple regions while maintaining deep roots in local communities.
                </p>
                <div className="p-3 mt-4 bg-white border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>Primary Operating Region: Amhara Region</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-orange-100 bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Handshake className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Community Relationships</h3>
                </div>
                <p className="text-gray-600">
                  alignAfrica's approach to empowering school students and local communities, coupled with its strong relationships with stakeholders, underscores its commitment to meaningful development.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-orange-600">
                  <CheckCircle size={14} />
                  <span>Strong stakeholder relationships built over 15+ years</span>
                </div>
              </div>
            </motion.div>

            <CorePillars {...corePillarsData} />

       
          </div>

          <div className="lg:w-1/4">
            <div className="sticky space-y-4 top-16">
              {/* Sidebar Navigation */}
              <SidebarNavigation
                title="About alignAfrica"
                description="Explore our organization"
                links={sidebarLinksData}
                enableAnimations={true}
              />

              {/* Key Dates Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-yellow-100 shadow-sm bg-gradient-to-br from-yellow-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Key Historical Dates</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="mt-1 text-yellow-600" />
                    <div>
                      <p className="font-medium text-gray-900">April 2009</p>
                      <p className="text-sm text-gray-600">Organization Founded</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="mt-1 text-yellow-600" />
                    <div>
                      <p className="font-medium text-gray-900">2015</p>
                      <p className="text-sm text-gray-600">International Volunteer Program</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="mt-1 text-yellow-600" />
                    <div>
                      <p className="font-medium text-gray-900">Present</p>
                      <p className="text-sm text-gray-600">Multi-Region Operations</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Historical Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Program Expansion</span>
                      <span className="text-sm font-bold text-red-600">800%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-red-600 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Community Reach</span>
                      <span className="text-sm font-bold text-red-600">100+</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-600 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Years of Service</span>
                      <span className="text-sm font-bold text-red-600">15+</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '100%' }}></div>
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

export default HistoryPage;