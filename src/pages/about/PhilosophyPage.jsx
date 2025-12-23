import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Target, Shield, Users, Heart, 
  TrendingUp, Globe, Award, BookOpen,
  CheckCircle, ArrowRight, Sparkles,
  PieChart, BarChart, Star,
  Handshake, Lightbulb, Zap,
  Target as TargetIcon, Shield as ShieldIcon
} from "lucide-react";

// Import reusable components
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import TransparencySection from "../../components/sections/TransparencySection";
import sidebarLinksData from "../../data/sidebarLinksData";

const PhilosophyPage = () => {
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
    title: "Our Philosophy",
    subtitle: "Guided by core values of empowerment, accountability, equity, and resilience - the foundation of our mission to catalyze sustainable development across Africa.",
    establishedYear: "80%+ to Recipients",
    primaryCta: "Explore Our Values",
    secondaryCta: "View Transparency Report",
    backgroundImage: "/images/philosophy-banner.jpg",
    enableAnimations: true,
    particleCount: 15
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "80%+", 
        label: "Direct to Recipients", 
        description: "Of resources go directly to beneficiaries", 
        icon: <PieChart />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "500K+", 
        label: "People Empowered", 
        description: "Through our partnerships and initiatives", 
        icon: <Users />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "100%", 
        label: "Transparency", 
        description: "Rigorous audits and monitoring", 
        icon: <Shield />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "15+", 
        label: "Years of Integrity", 
        description: "Consistent ethical operations", 
        icon: <Award />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Philosophy of alignAfrica",
    content: "At alignAfrica, our philosophy is the cornerstone of our mission to catalyze sustainable development and empowerment across communities in Africa. It is deeply rooted in our core values, guiding every aspect of our operations with integrity, purpose, and impactful humanitarianism.",
    focusItems: [
      { 
        title: "Empowerment Focus", 
        icon: <Target />, 
        content: "Over 80% of resources directed straight to beneficiaries, fostering local leadership and capacity-building for sustainable change." 
      },
      { 
        title: "Humanitarian Accountability", 
        icon: <Shield />, 
        content: "Upholding rigorous standards of accountability, delivering quality services and maintaining transparency to all stakeholders." 
      }
    ],
    enableAnimations: true
  };

  const coreValuesData = {
    title: "Our Core Values",
    description: "The foundational principles that guide every aspect of our work and decision-making",
    pillars: [
      {
        title: "Empowerment",
        description: "alignAfrica is dedicated to empowering communities through local leadership and capacity-building for sustainable change. We believe in fostering local leadership to drive sustainable change from within.",
        icon: <Zap className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "Local Leadership Focus",
        progress: 90
      },
      {
        title: "Humanitarian Accountability",
        description: "We uphold rigorous standards of accountability, delivering quality services and maintaining transparency to all stakeholders through meticulous monitoring and audits.",
        icon: <Shield className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Rigorous Audits",
        progress: 95
      },
      {
        title: "Equity and Inclusion",
        description: "alignAfrica advocates for equity and inclusivity, striving to ensure marginalized populations have equitable access to opportunities and resources.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Inclusive Practices",
        progress: 85
      },
      {
        title: "Adaptability",
        description: "We integrate local cultures, knowledge, and lifestyles into our programs, ensuring relevance and responsiveness to community needs.",
        icon: <Lightbulb className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Local Integration",
        progress: 80
      }
    ],
    enableAnimations: true
  };



  const floatingCTAData = {
    text: "Join Our Mission",
    enableAnimations: true
  };

  // Philosophical Principles Data
  const principlesData = [
    {
      title: "Empowerment through Direct Impact",
      description: "Central to alignAfrica's philosophy is the principle of empowerment. We believe in fostering local leadership and capacity-building to drive sustainable change from within. Over 80% of our resources are directed straight to our beneficiaries, ensuring that communities have the tools and support they need to address their own challenges autonomously.",
      icon: "🚀",
      color: "bg-red-100",
      borderColor: "border-red-200"
    },
    {
      title: "Commitment to Humanitarian Accountability",
      description: "alignAfrica upholds stringent standards of accountability and transparency. We meticulously monitor our activities on the ground, conduct rigorous audits of financial statements, and evaluate the impact of each initiative.",
      icon: "📊",
      color: "bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Promoting Equity and Inclusion",
      description: "We deeply respect and value the cultural heritage and expertise of the communities we serve, actively engaging with local individuals, organizations, and community representatives to prioritize their unique needs and aspirations.",
      icon: "⚖️",
      color: "bg-green-100",
      borderColor: "border-green-200"
    },
    {
      title: "Adaptability and Local Relevance",
      description: "alignAfrica integrates local cultures, knowledge, and lifestyles into our programs, ensuring they are relevant and responsive to community needs. This adaptive approach is crucial to fostering sustainability and self-sufficiency.",
      icon: "🔄",
      color: "bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Building Resilience for Sustainable Futures",
      description: "Our philosophy of resilience-building involves empowering communities to tackle their own development challenges and fostering adaptive capacities. By promoting sustainable solutions, we aim to create enduring impacts.",
      icon: "🌳",
      color: "bg-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "Collaborative Impact",
      description: "Together, we have empowered over 500,000 people through our partnerships. Our collaborative approach ensures that we work hand-in-hand with communities to achieve meaningful and sustainable development outcomes.",
      icon: "🤝",
      color: "bg-teal-100",
      borderColor: "border-teal-200"
    }
  ];

  // Quote Section Component
  const QuoteSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="p-8 text-white shadow-xl bg-gradient-to-r from-red-600 to-red-700 rounded-2xl"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-2 mb-4 rounded-full bg-white/20">
          <Sparkles className="text-white" size={24} />
        </div>
        <blockquote className="mb-6 text-2xl italic font-semibold leading-relaxed md:text-3xl">
          "Together, we have empowered over 500,000 people through our partnerships."
        </blockquote>
        <div className="w-24 h-1 mx-auto mb-4 bg-white/50"></div>
        <p className="text-red-100">
          Our commitment to collaborative impact and sustainable development
        </p>
      </div>
    </motion.div>
  );

  // Resilience Section
  const ResilienceSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="p-8 border border-green-100 bg-gradient-to-br from-green-50 to-white rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-100 rounded-xl">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Building Community Resilience</h3>
          </div>
          <p className="mb-4 text-gray-600">
            alignAfrica focuses on enhancing community resilience against challenges like climate change and economic instability, fostering adaptive capacities and promoting sustainable solutions.
          </p>
          <ul className="space-y-3">
            {[
              "Climate change adaptation strategies",
              "Economic resilience programs",
              "Sustainable livelihood development",
              "Community-based disaster management"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 border border-blue-100 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Heart className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Humanitarian Excellence</h3>
          </div>
          <p className="mb-4 text-gray-600">
            Our philosophy of resilience-building involves empowering communities to tackle their own development challenges and fostering adaptive capacities.
          </p>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Program Efficiency</span>
                <span className="text-sm font-bold text-blue-600">94%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Community Satisfaction</span>
                <span className="text-sm font-bold text-blue-600">98%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Sustainability Index</span>
                <span className="text-sm font-bold text-blue-600">89%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

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

            {/* Quote Section */}
            <QuoteSection />

            {/* Core Values Section */}
            <CorePillars {...coreValuesData} />

            {/* Principles Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Philosophical Principles</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  The guiding principles that shape our approach to sustainable development and community empowerment
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {principlesData.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`bg-white rounded-xl shadow-sm border ${principle.borderColor} p-6 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${principle.color} text-2xl`}>
                        {principle.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">{principle.title}</h3>
                        <p className="text-gray-600">{principle.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Resilience Section */}
            <ResilienceSection />

            {/* Transparency Section */}
            <TransparencySection />

            {/* Final CTA Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="mb-4 text-3xl font-bold">Join Us in Our Mission</h2>
                  <p className="mb-8 text-lg text-gray-300">
                    In essence, alignAfrica's philosophy is a testament to our commitment to empowerment, accountability, equity, adaptability, resilience, and impactful humanitarianism. These principles guide our collaborative efforts with stakeholders globally, ensuring that together, we achieve meaningful and sustainable development outcomes.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 rounded-xl hover:shadow-xl">
                      Support Our Work
                    </button>
                    <button className="px-8 py-3 font-semibold text-gray-900 transition-all duration-300 bg-white rounded-xl hover:bg-gray-100">
                      Learn More About Us
                    </button>
                  </div>
                  <p className="mt-6 text-sm text-gray-400">
                    Join us at alignAfrica as we work towards a future where every community can flourish independently, supported by empowerment, transparency, inclusive growth, and humanitarian values.
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

              {/* Values Summary Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-purple-100 shadow-sm bg-gradient-to-br from-purple-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Our Values at a Glance</h3>
                <div className="space-y-3">
                  {[
                    { value: "Empowerment", color: "bg-red-100", text: "text-red-700" },
                    { value: "Accountability", color: "bg-blue-100", text: "text-blue-700" },
                    { value: "Equity", color: "bg-green-100", text: "text-green-700" },
                    { value: "Inclusion", color: "bg-yellow-100", text: "text-yellow-700" },
                    { value: "Adaptability", color: "bg-purple-100", text: "text-purple-700" },
                    { value: "Resilience", color: "bg-orange-100", text: "text-orange-700" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className={`text-sm font-medium ${item.text}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Resource Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Philosophy Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <BookOpen size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Detailed Framework</p>
                      <p className="text-sm text-gray-600">Our complete philosophy document</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <BarChart size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Impact Reports</p>
                      <p className="text-sm text-gray-600">See our philosophy in action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <Shield size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Accountability Standards</p>
                      <p className="text-sm text-gray-600">Our commitment to transparency</p>
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

export default PhilosophyPage;