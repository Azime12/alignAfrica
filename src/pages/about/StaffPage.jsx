import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, User, Briefcase, Mail, 
  Phone, Award, Target, Globe,
  ArrowRight, ChevronRight, Star,
  Shield, Zap, BookOpen,
  MapPin, Heart, TrendingUp,
  MessageSquare, Download, Share2
} from "lucide-react";

import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import sidebarLinksData from "../../data/sidebarLinksData";
// import TeamGallery from "../../components/sections/TeamGallery";

const StaffPage = () => {
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
    title: "Our Team",
    subtitle: "Dedicated professionals and volunteers working together to empower communities and drive sustainable development across Ethiopia and Africa.",
    establishedYear: "2009",
    primaryCta: "Meet Our Team",
    secondaryCta: "View Open Positions",
    backgroundImage: "/images/history-banner.jpg",
    enableAnimations: true,
    particleCount: 15
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "15+", 
        label: "Team Members", 
        description: "Dedicated professionals", 
        icon: <Users />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "80%+", 
        label: "Field Focus", 
        description: "Resources to programs", 
        icon: <Target />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "500K+", 
        label: "Lives Impacted", 
        description: "Through our initiatives", 
        icon: <Heart />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "15+", 
        label: "Years of Service", 
        description: "Since 2009", 
        icon: <Award />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Our Dedicated Team",
    content: "alignAfrica is supported by a dedicated team of experienced and qualified staff who play crucial oversight roles in our organization and its initiatives. Comprising both full-time professionals and committed part-time volunteers, our team's tireless efforts have significantly propelled alignAfrica's growth over the years. We prioritize the effective utilization of our human resources to fulfill our organizational mandate.",
    focusItems: [
      { 
        title: "Professional Excellence", 
        icon: <Briefcase />, 
        content: "Experienced and qualified staff providing crucial oversight and driving organizational growth." 
      },
      { 
        title: "Volunteer Commitment", 
        icon: <Users />, 
        content: "Committed part-time volunteers complementing our full-time professionals in achieving our mission." 
      }
    ],
    enableAnimations: true
  };

  const teamValuesData = {
    title: "Our Team Values",
    description: "Core principles that guide our team's work and collaboration",
    pillars: [
      {
        title: "Dedication",
        description: "Unwavering commitment to our mission of empowering communities and driving sustainable development.",
        icon: <Heart className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "15+ Years Service",
        progress: 100
      },
      {
        title: "Expertise",
        description: "Bringing specialized skills and knowledge to address complex development challenges effectively.",
        icon: <Award className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Qualified Professionals",
        progress: 95
      },
      {
        title: "Collaboration",
        description: "Working together across departments and with communities to achieve shared goals.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Team Synergy",
        progress: 90
      },
      {
        title: "Innovation",
        description: "Continuously seeking new approaches and solutions to enhance our impact and effectiveness.",
        icon: <Zap className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Innovative Approaches",
        progress: 88
      }
    ],
    enableAnimations: true
  };

 

  const floatingCTAData = {
    text: "Join Our Team",
    enableAnimations: true
  };

  // Leadership Messages Data
  const leadershipMessages = [
    {
      name: "H.E. Thomas Tut Puk",
      title: "State Minister of Mines & Petroleum, Ethiopia",
      role: "Patron",
      image: "/images/hhe.jpg",
      message: "Established in 2009 and subsequently re-registered under Proclamation 1113/2019, alignAfrica stands as a prominent non-profit Civil Society Organization (CSO) committed to cultivating thriving communities throughout Ethiopia.",
      details: [
        "Our mandate is to elevate the quality of life for youth, women, and men",
        "Advancing livelihoods and enhancing social services",
        "Innovative and empowering methodologies",
        "Vital funding from YNSD, Christian Aid-Ethiopia, and other partners"
      ]
    },
    {
      name: "Yonas Mamo Zewudie",
      title: "Founder & Executive Director",
      role: "Leadership",
      image: "/images/ypho.jpg",
      message: "Since its inception in 2009, alignAfrica has been driven by the unwavering belief that Ethiopia's true development hinges on empowering its rural communities to lead transformative lives.",
      details: [
        "Mission to empower half a million lives within three years",
        "Comprehensive development initiatives across multiple sectors",
        "Establishing scalable models for nationwide change",
        "Fostering partnerships and collaborative efforts"
      ]
    }
  ];

  // Board Members Data
  const boardMembers = [
    {
      name: "Professor Diriba Muleta Yadetie",
      role: "Board Chairman",
      image: "/images/diribam.jpg",
      contact: ""
    },
    {
      name: "Professor Alemayehu Mengesha",
      role: "Vice Board Chairman",
      image: "/images/alemayehuM.jpg",
      contact: ""
    },
    {
      name: "Mr. Gatnet Hunde",
      role: "Board Member",
      image: "/images/getenet.jpg",
      contact: ""
    },
    {
      name: "Professor Anteneh Tesfaye",
      role: "Board Member",
      image: "/images/antenehT.jpg",
      contact: ""
    }
  ];

  // Staff Members Data
  const staffMembers = [
    {
      name: "Mr. Yonas Mamo",
      role: "Executive Director",
      image: "/images/ypho.jpg",
      contact: "Mobile: +25193392066 | E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Ms. Genet Gemechu",
      role: "Finance and Admin Head",
      image: "/images/genetG.jpg",
      contact: "Email: tea4africa@gmail.com"
    },
    {
      name: "Mr. Amanuel Mulugeta",
      role: "Program Advisor",
      image: "/images/amanuelM.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Ms. Manalebish Aschale",
      role: "Administration Assistant",
      image: "/images/manalebeshA.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Mr. Bayu Alemayehu",
      role: "Driver & Safety Officer",
      image: "/images/bayuA.jpg",
      contact: ""
    },
    {
      name: "Ms. Nancy Chebet Rotich",
      role: "Gambella Field Office Manager",
      image: "/images/nancyC.jpg",
      contact: "E-mail: tiruzerethiopiag@gmail.com"
    },
    {
      name: "Mr. Wondmeneh Getnet",
      role: "Program Officer",
      image: "/images/wondemenehG.jpg",
      contact: "Email: tea4africa@gmail.com"
    },
    {
      name: "Mr. David Buay Lual",
      role: "Youth Program Coordinator",
      image: "/images/david.jpg",
      contact: "E-mail: tea4africa@gmail.com"
    },
    {
      name: "Professor Tesfaye Sisay",
      role: "One Health Program Advisor",
      image: "/images/tesfayeS.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "TEA - US Branch Director",
      role: "US Branch Director",
      image: "/images/tea-usbranch.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Hailu Kassaye Bogale",
      role: "MEARL Adviser",
      image: "/images/HailuK.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Menelik Negussu Retta",
      role: "Program Advisor",
      image: "/images/Menelikn.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Tefera Biteye Tefera",
      role: "Health Program Manager",
      image: "/images/TeferaB.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Nahom Tesfaye",
      role: "Program Manager",
      image: "/images/nahom.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
    },
    {
      name: "Defar Ergudo Olalendo",
      role: "Resource Mobilization Expert",
      image: "/images/Defar Erigedo.jpg",
      contact: "E-mail: tiruzerethiopia@gmail.com"
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

            {/* Leadership Messages Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Leadership Messages</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Insights and vision from our leadership team guiding our mission forward
                </p>
              </div>

              <div className="space-y-8">
                {leadershipMessages.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl"
                  >
                    <div className="md:flex">
                      <div className="flex flex-col items-center justify-center p-6 md:w-1/3 bg-gray-50">
                        <div className="w-48 h-48 mb-4 overflow-hidden border-4 border-white rounded-full shadow-lg">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                          <p className="font-medium text-red-600">{leader.title}</p>
                          <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-red-700 bg-red-100 rounded-full">
                            {leader.role}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                          <MessageSquare className="text-red-600" size={24} />
                          <h4 className="text-xl font-semibold text-gray-900">Message</h4>
                        </div>
                        <p className="mb-6 text-gray-700">{leader.message}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">Key Points:</h5>
                          <ul className="space-y-2">
                            {leader.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Values Section */}
            <CorePillars {...teamValuesData} />

            {/* Board Members Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Board of Directors</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Experienced leaders providing governance and strategic direction
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden border-4 border-gray-100 rounded-full">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-3 font-medium text-red-600">{member.role}</p>
                    {member.contact && (
                      <p className="text-sm text-gray-600">{member.contact}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Staff Members Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Staff Members</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Dedicated professionals driving our programs and operations forward
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {staffMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 overflow-hidden border-2 border-gray-200 rounded-full">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-bold text-gray-900">{member.name}</h3>
                        <p className="mb-3 font-medium text-red-600">{member.role}</p>
                        {member.contact && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail size={14} />
                            <span>{member.contact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Join Our Team Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-2xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="mb-6 text-3xl font-bold">Join Our Team</h2>
                  <p className="mb-8 text-lg text-red-100">
                    We are always looking for passionate individuals who want to make a difference in communities across Ethiopia and Africa.
                  </p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Briefcase className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Career Opportunities</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Explore current job openings and professional development opportunities.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        View Openings
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Heart className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Volunteer Program</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Join our volunteer network and contribute your skills to meaningful projects.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Volunteer Now
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Users className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Internships</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Gain valuable experience through our internship programs in various departments.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Apply for Internship
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

              {/* Team Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Team Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Total Staff</span>
                    <span className="font-bold text-blue-600">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Departments</span>
                    <span className="font-bold text-blue-600">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Field Offices</span>
                    <span className="font-bold text-blue-600">2+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Volunteers</span>
                    <span className="font-bold text-blue-600">50+</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Directory Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Directory</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <Mail size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">General Inquiry</p>
                      <p className="text-sm text-gray-600">tiruzerethiopia@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <Phone size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Main Office</p>
                      <p className="text-sm text-gray-600">+251 933 920 666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <MapPin size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-sm text-gray-600">P.O.Box: 102030</p>
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

export default StaffPage;