import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Target, BookOpen, Shield, Users, 
  TrendingUp, Award, Globe, PieChart,
  Layers, Rocket, Cpu, Star, BarChart3,
  ArrowRight, Sparkles, Sparkle,
  ChevronRight, Handshake, CheckCircle,
  Heart, Link as LinkIcon
} from "lucide-react";

// Import all reusable components
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import WhyAlignAfrica from "../../components/sections/WhyAlignAfrica";
import VIPStrategy from "../../components/sections/VIPStrategy";
import CorePillars from "../../components/sections/CorePillars";
import TransparencySection from "../../components/sections/TransparencySection";
import CallToAction from "../../components/sections/CallToAction";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import StatsDashboard from "../../components/sections/StatsDashboard";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import { ArrowUp } from "lucide-react";
import { FileText } from "lucide-react";
import sidebarLinksData from "../../data/sidebarLinksData";

const AboutPage = () => {
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
    title: "About alignAfrica",
    subtitle: "Pioneering sustainable development through innovation, collaboration, and community empowerment across Africa.",
    establishedYear: "2009",
    primaryCta: "Explore Our Mission",
    secondaryCta: "Watch Story",
    backgroundImage: "/images/about-banner.png",
    enableAnimations: true,
    particleCount: 20
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "706,781+", 
        label: "Lives Transformed", 
        description: "Direct beneficiaries since 2009", 
        icon: <Users />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "7.5M+", 
        label: "Indirect Impact", 
        description: "Community-wide influence", 
        icon: <Globe />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "80%", 
        label: "Direct Allocation", 
        description: "Resources to programs", 
        icon: <PieChart />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "15+", 
        label: "Sectors", 
        description: "Areas of operation", 
        icon: <Layers />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "What is alignAfrica?",
    content: "Formerly known as Tiruzer Ethiopia for Africa(TEA) , alignAfrica is a local nonprofit organization dedicated to driving sustainable development and creating positive change across Africa. Founded in 2009 by Yonas Mamo, alignAfrica initially focused on empowering communities in Ethiopia through sustainable development, with an emphasis on health, education, youth and women's empowerment, and peace-building. Today, we operate across key sectors, including health and HIV/AIDS, education, nutrition, economic empowerment, humanitarian relief, peacebuilding, and climate resilience. Our goal is to empower marginalized communities by fostering opportunities for growth through innovation, collaboration, and advocacy.",
    focusItems: [
      { 
        title: "Our Focus", 
        icon: <Target />, 
        content: "Health, education, economic empowerment, climate resilience, and peacebuilding across multiple African nations." 
      },
      { 
        title: "Our Approach", 
        icon: <Rocket />, 
        content: "Innovation-driven, community-centered solutions with measurable impact and sustainable outcomes." 
      }
    ],
    enableAnimations: true
  };

  const whyAlignAfricaData = {
    title: "Why alignAfrica?",
    subtitle: "Uniting efforts for sustainable progress across Africa",
    mainDescription: "The name alignAfrica reflects our mission to unite efforts, resources, and stakeholders for sustainable progress across the African continent.",
    sections: [
      {
        title: "Alignment with Local Needs",
        description: "We tailor initiatives to meet the unique priorities of local communities, ensuring impact and relevance.",
        icon: <Target />,
        color: "from-red-50 to-white"
      },
      {
        title: "Alignment with Global Goals",
        description: "By focusing on livelihoods, health, education, emergency response, gender equality, peacebuilding, and environmental sustainability, alignAfrica aligns its interventions with Sustainable Development Goals (SDG's) aimed at creating a more equitable, resilient, and sustainable world.",
        icon: <Globe />,
        color: "from-red-100 to-red-50"
      },
      {
        title: "Empowerment through Unity",
        description: "We bring together communities, governments, and donors to address Africa's pressing challenges, amplifying the impact of aligned efforts.",
        icon: <Users />,
        color: "from-red-200 to-red-100"
      },
      {
        title: "Commitment to Sustainability",
        description: "Our focus is on evolving, long-term solutions that meet communities' changing needs and ensure lasting change.",
        icon: <TrendingUp />,
        color: "from-red-300 to-red-200"
      }
    ],
    enableAnimations: true
  };

  const vipStrategyData = {
    title: "How We Work",
    subtitle: "The alignAfrica Community-Driven Strategy",
    description: "Our strategy focuses on Village Ownership, Knowledge Sharing, and Partnerships. It creates lasting change by empowering grassroots communities to lead their own development and collaborate for greater impact.",
    strategyItems: [
      {
        letter: "V",
        title: "Village Ownership: Empowering Communities to Lead",
        subtitle: "At the heart of the VIP Strategy",
        description: "Ensuring that communities are actively involved in every step of their development. By empowering local leaders and residents, the strategy ensures that projects are not only community-driven but also sustainable in the long term.",
        icon: <Users className="text-white" size={24} />,
        gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        features: ["Community-driven development", "Local leadership", "Sustainable ownership"],
        detailedContent: [
          "Projects are designed and implemented with community participation",
          "Local leaders are trained to manage and sustain initiatives",
          "Decision-making power rests with community members"
        ]
      },
      {
        letter: "I",
        title: "Impartation, Learning, and Sharing Knowledge",
        subtitle: "Building Capacity for Sustainable Change",
        description: "Focusing on building local capacity through education and knowledge exchange. By equipping communities with the skills and tools they need, this approach fosters innovation and ensures independent problem-solving.",
        icon: <BookOpen className="text-white" size={24} />,
        gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
        features: ["Capacity building", "Knowledge exchange", "Skill development"],
        detailedContent: [
          "Scalable Solutions: Knowledge shared across communities ensures replicable solutions and broader impact.",
          "Empowered Communities: Skilled individuals contribute to a culture of self-reliance and innovation.",
          "Long-Term Results: Capacity building ensures the ability to manage and grow projects sustainably."
        ]
      },
      {
        letter: "P",
        title: "Partnership and Teamwork",
        subtitle: "Collaborative Action for Greater Impact",
        description: "Key to ensuring that all stakeholders—local communities, governments, NGOs, and the private sector—work together toward shared goals.",
        icon: <Handshake className="text-white" size={24} />,
        gradient: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)",
        features: ["Multi-sector collaboration", "Resource optimization", "Collective impact"],
        detailedContent: [
          "Resource Optimization: Partnerships maximize the effective use of funding, expertise, and technical support.",
          "Collaborative Impact: Working together leads to more efficient and comprehensive solutions.",
          "Sustainability: Strong partnerships create the foundation for ongoing development and growth."
        ]
      }
    ],
    enableAnimations: true
  };

  const corePillarsData = {
    title: "Our Pillars: Educate | Advocate | Engage | Empower",
    description: "Our work is guided by four core principles that drive sustainable impact across Africa",
    pillars: [
      {
        title: "Educate",
        description: "Empowering individuals with the knowledge and skills to improve health, education, nutrition, immunization, and livelihoods, thereby breaking the cycle of poverty and injustice.",
        icon: <BookOpen className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "50K+ Trained",
        progress: 25
      },
      {
        title: "Advocate",
        description: "Driving systemic change by influencing policies and raising awareness on issues like economic empowerment, gender equality, and sustainable development.",
        icon: <Shield className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "100+ Policies",
        progress: 50
      },
      {
        title: "Engage",
        description: "Partnering with communities, leaders, and stakeholders to co-create solutions for development, humanitarian needs, and climate challenges.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "500+ Partners",
        progress: 75
      },
      {
        title: "Empower",
        description: "Building local capacity, fostering innovation, and strengthening resilience to create long-term, impactful change.",
        icon: <TrendingUp className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "1M+ Empowered",
        progress: 100
      }
    ],
    enableAnimations: true
  };

 




  const floatingCTAData = {
    text: "Get Involved",
    enableAnimations: true
  };

  

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
        {/* Mobile Sidebar - First on mobile, hidden on larger screens */}
        <div className="block mb-8 lg:hidden">
          <SidebarNavigation
            title="Navigation"
            description="Explore our organization"
            links={sidebarLinksData}
            enableAnimations={true}
          />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Content - 2/3 for desktop, full width for mobile */}
          <div className="space-y-6 lg:w-3/4">
            {/* About Overview Section */}
            <AboutOverview {...aboutOverviewData} />

            {/* Why alignAfrica Section */}
            <WhyAlignAfrica {...whyAlignAfricaData} />

            {/* VIP Strategy Section */}
            <VIPStrategy {...vipStrategyData} />

            {/* Core Pillars Section */}
            <CorePillars {...corePillarsData} />

            {/* Transparency Section */}
            <TransparencySection />

            {/* Call to Action Section */}
            {/* <CallToAction {...callToActionData} /> */}
          </div>

          {/* Desktop Sidebar - Hidden on mobile, shows on larger screens */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky space-y-4 top-16">
              {/* Sidebar Navigation */}
              <SidebarNavigation
                title="Navigation"
                description="Explore our organization"
                links={sidebarLinksData}
                enableAnimations={true}
              />

              {/* Stats Dashboard */}
              {/* <StatsDashboard {...statsDashboardData} /> */}
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
  className="fixed z-50 bottom-4 right-4"
>
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="p-3 text-white transition-shadow rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:shadow-xl"
  >
    <ArrowUp size={20} />
  </button>
</motion.div>
    </div>
  );
};

export default AboutPage;