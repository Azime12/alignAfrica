import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Shield, Settings, CheckCircle,
  FileText, Users, Target, Award,
  ArrowRight, Zap, Star, Globe,
  Lock, Eye, Download, Share2,
  BarChart, PieChart, Clock,
  FolderOpen, Layout, Grid
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
// import ProtocolGallery from "../../components/sections/ProtocolGallery";

const InHouseProtocolsPage = () => {
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
    title: "In-house Protocols",
    subtitle: "Our comprehensive guidelines and operational standards that ensure excellence, consistency, and integrity across all our programs and initiatives.",
    establishedYear: "Internal Standards",
    primaryCta: "View Protocol Guidelines",
    secondaryCta: "Download PDF",
    backgroundImage: "/images/protocol-banner.png",
    enableAnimations: true,
    particleCount: 10
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "12+", 
        label: "Protocol Categories", 
        description: "Comprehensive coverage areas", 
        icon: <BookOpen />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "100%", 
        label: "Compliance Rate", 
        description: "Across all departments", 
        icon: <CheckCircle />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "15+", 
        label: "Years Refined", 
        description: "Continuously improved standards", 
        icon: <Clock />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "500+", 
        label: "Staff Trained", 
        description: "On protocol implementation", 
        icon: <Users />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Our Operational Framework",
    content: "alignAfrica In-house Protocols are our comprehensive guidelines and operational standards that ensure excellence, consistency, and integrity across all our programs and initiatives. These protocols represent our commitment to professional excellence and serve as the foundation for our daily operations, program implementation, and organizational development.",
    focusItems: [
      { 
        title: "Quality Assurance", 
        icon: <Shield />, 
        content: "Ensuring consistent quality and standards across all our programs and field operations through rigorous protocols." 
      },
      { 
        title: "Operational Excellence", 
        icon: <Settings />, 
        content: "Streamlined processes and standardized procedures that enhance efficiency and effectiveness in all our work." 
      }
    ],
    enableAnimations: true
  };

  const protocolPrinciplesData = {
    title: "Protocol Principles",
    description: "Core principles that guide our operational standards and protocol development",
    pillars: [
      {
        title: "Consistency",
        description: "Ensuring uniform implementation of standards across all programs, locations, and teams to maintain quality and reliability.",
        icon: <CheckCircle className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "Uniform Standards",
        progress: 95
      },
      {
        title: "Transparency",
        description: "Clear, documented procedures that are accessible and understandable to all stakeholders, promoting accountability.",
        icon: <Eye className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Full Documentation",
        progress: 92
      },
      {
        title: "Adaptability",
        description: "Protocols designed to be flexible and responsive to changing contexts while maintaining core standards.",
        icon: <Settings className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Context Responsive",
        progress: 88
      },
      {
        title: "Sustainability",
        description: "Procedures that support long-term impact and environmental responsibility in all our operations.",
        icon: <Globe className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Long-term Focus",
        progress: 90
      }
    ],
    enableAnimations: true
  };

 

  const floatingCTAData = {
    text: "Access Protocols",
    enableAnimations: true
  };

  // Protocol Categories Data
  const protocolCategoriesData = [
    {
      title: "Program Implementation",
      description: "Standard operating procedures for project planning, execution, monitoring, and evaluation across all program areas.",
      icon: "📋",
      protocols: ["Project planning", "Implementation guidelines", "Monitoring frameworks", "Evaluation protocols"]
    },
    {
      title: "Financial Management",
      description: "Comprehensive financial protocols covering budgeting, accounting, reporting, and audit procedures.",
      icon: "💰",
      protocols: ["Budget management", "Financial reporting", "Audit procedures", "Expense tracking"]
    },
    {
      title: "Human Resources",
      description: "Protocols for recruitment, staff development, performance management, and workplace standards.",
      icon: "👥",
      protocols: ["Recruitment procedures", "Staff training", "Performance reviews", "Workplace policies"]
    },
    {
      title: "Safety & Security",
      description: "Comprehensive safety protocols for field operations, office environments, and emergency situations.",
      icon: "🛡️",
      protocols: ["Field safety", "Emergency response", "Risk assessment", "Security protocols"]
    },
    {
      title: "Quality Assurance",
      description: "Standards and procedures for maintaining and improving quality across all organizational activities.",
      icon: "⭐",
      protocols: ["Quality standards", "Process improvement", "Compliance checks", "Continuous monitoring"]
    },
    {
      title: "Communication",
      description: "Protocols for internal and external communication, reporting, and stakeholder engagement.",
      icon: "📢",
      protocols: ["Internal communications", "External reporting", "Stakeholder engagement", "Media protocols"]
    }
  ];

  // Protocol Gallery Images
  const protocolImages = [
    { src: "/images/tea01.jpg", alt: "Protocol Documentation 1", title: "Standard Operating Procedures" },
    { src: "/images/tea02.jpg", alt: "Protocol Documentation 2", title: "Financial Management Guidelines" },
    { src: "/images/tea03.jpg", alt: "Protocol Documentation 3", title: "Program Implementation Standards" },
    { src: "/images/tea04.jpg", alt: "Protocol Documentation 4", title: "Quality Assurance Framework" },
    { src: "/images/tea05.jpg", alt: "Protocol Documentation 5", title: "Safety Protocols" },
    { src: "/images/tea06.jpg", alt: "Protocol Documentation 6", title: "Human Resources Standards" },
    { src: "/images/tea07.jpg", alt: "Protocol Documentation 7", title: "Monitoring & Evaluation" },
    { src: "/images/tea08.jpg", alt: "Protocol Documentation 8", title: "Communication Protocols" },
    { src: "/images/tea09.jpg", alt: "Protocol Documentation 9", title: "Training Materials" },
    { src: "/images/tea10.jpg", alt: "Protocol Documentation 10", title: "Compliance Documentation" },
    { src: "/images/tea11.jpg", alt: "Protocol Documentation 11", title: "Operational Guidelines" },
    { src: "/images/tea12.jpg", alt: "Protocol Documentation 12", title: "Implementation Framework" }
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

            {/* Protocol Categories Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Protocol Categories</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Comprehensive coverage areas ensuring excellence across all organizational functions
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {protocolCategoriesData.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">{category.title}</h3>
                        <p className="mb-4 text-gray-600">{category.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Protocols:</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.protocols.map((protocol, protoIndex) => (
                              <span
                                key={protoIndex}
                                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                              >
                                {protocol}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Protocol Principles */}
            <CorePillars {...protocolPrinciplesData} />

            {/* Protocol Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Protocol Documentation</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Visual documentation of our comprehensive protocol materials and implementation guidelines
                </p>
              </div>

              {/* <ProtocolGallery
                images={protocolImages}
                enableAnimations={true}
                columns={2}
              /> */}
            </motion.div>

            {/* Implementation Framework */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 border border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-red-100 rounded-xl">
                    <Layout className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Implementation Framework</h2>
                    <p className="text-lg text-gray-600">How our protocols translate into daily operations</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Training & Capacity Building</h3>
                        <p className="text-gray-600">
                          Comprehensive training programs ensuring all staff understand and can effectively implement our protocols.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <BarChart className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Monitoring & Evaluation</h3>
                        <p className="text-gray-600">
                          Regular assessment of protocol implementation to ensure compliance and identify areas for improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Settings className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Continuous Improvement</h3>
                        <p className="text-gray-600">
                          Regular review and updating of protocols based on feedback, experience, and changing contexts.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <FolderOpen className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Documentation & Access</h3>
                        <p className="text-gray-600">
                          Centralized, accessible documentation ensuring protocols are available to all relevant stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-2xl">
                <div className="max-w-4xl mx-auto">
                  <h2 className="mb-6 text-3xl font-bold">Protocol Resources</h2>
                  <p className="mb-8 text-lg text-red-100">
                    Access our complete protocol documentation and implementation guidelines
                  </p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Download className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Download Protocols</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Complete protocol documentation in PDF format for offline access and reference.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Download PDF
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <BookOpen className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Online Access</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Interactive online portal with searchable protocol documentation and implementation guides.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Access Portal
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Share2 className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Training Materials</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Comprehensive training resources for protocol implementation and staff development.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        View Training
                      </button>
                    </div>
                  </div>
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

              {/* Quick Access Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Access</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <FileText size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Protocol Handbook</p>
                      <p className="text-sm text-gray-600">Complete reference guide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lock size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Secure Portal</p>
                      <p className="text-sm text-gray-600">Staff access only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Compliance Checklist</p>
                      <p className="text-sm text-gray-600">Implementation guide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Compliance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Staff Training</span>
                      <span className="text-sm font-bold text-red-600">98%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Protocol Implementation</span>
                      <span className="text-sm font-bold text-red-600">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Audit Compliance</span>
                      <span className="text-sm font-bold text-red-600">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full" style={{ width: '100%' }}></div>
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

export default InHouseProtocolsPage;