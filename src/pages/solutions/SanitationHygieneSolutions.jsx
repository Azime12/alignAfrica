// src/pages/solutions/SanitationHygieneSolutions.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Solutions section
const solutionsSidebarLinks = [
  { 
    name: "Education", 
    href: "/solutions/education", 
    icon: "School" 
  },
  { 
    name: "Health", 
    href: "/solutions/health", 
    icon: "Heart" 
  },
  { 
    name: "Livelihood", 
    href: "/solutions/livelihood", 
    icon: "Briefcase" 
  },
  { 
    name: "Partnership", 
    href: "/solutions/partnership", 
    icon: "Handshake" 
  },
  { 
    name: "Water Security", 
    href: "/solutions/water-security", 
    icon: "Droplet" 
  },
  { 
    name: "Women Empowerment", 
    href: "/solutions/women-empowerment", 
    icon: "Users" 
  },
  { 
    name: "Sanitation & Hygiene", 
    href: "/solutions/sanitation-hygiene", 
    icon: "Shower",
    active: true // Current page
  }
];

function SanitationHygieneSolutions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-emerald-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/swater-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-emerald-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                SANITATION & HYGIENE SOLUTIONS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-teal-100 sm:text-xl md:text-2xl"
              >
                Promoting Health and Dignity Through Better Sanitation
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 mx-auto sm:py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-8">
              <SidebarNavigation
                title="Our Solutions"
                links={solutionsSidebarLinks}
                brandColor="teal"
                enableAnimations={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full pb-20 lg:w-3/4 sm:pb-24 lg:pb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
            >
              {/* Main Header */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#1c8a2420' }}>
                    <svg className="w-8 h-8" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Sanitation & Hygiene Solutions</h1>
                    <p style={{ color: '#1c8a24' }} className="font-medium">Building Infrastructure and Promoting Health</p>
                  </div>
                </div>
              </motion.section>

              {/* Section Header */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', borderLeft: '4px solid #1c8a24' }}>
                  <h2 className="text-2xl font-bold text-gray-800">
                    The Beginning of Sanitation & Hygiene Solutions
                  </h2>
                </div>
              </motion.section>

              {/* Critical Statistic */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 text-center text-white rounded-xl" style={{ background: 'linear-gradient(135deg, #1c8a24, #16681c)' }}>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-white/20">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      About half of all girls worldwide attend schools without toilets!
                    </h3>
                  </div>
                  <p className="text-lg opacity-90">
                    This critical issue highlights the urgent need for sanitation infrastructure
                  </p>
                </div>
              </motion.section>

              {/* Infrastructure Solutions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                      <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Infrastructure Solutions</h3>
                  </div>
                  
                  <div className="p-4 mb-6 bg-white rounded-lg">
                    <p className="leading-relaxed text-gray-700">
                      One of the solutions is to build infrastructure designed to extract water from subsoil, thereby making it easily accessible to Ethiopians. The problem is insufficient material, human, and financial resources.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#1c8a2405', border: '1px solid #1c8a2420' }}>
                    <p className="leading-relaxed text-gray-700">
                      Still, the government continues to work hard on developing an ambitious program that promotes 100 percent water accessibility. However, there is a huge gap between the demands and needs of Ethiopians and the ability of the government to support these needs.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Government Initiatives */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', border: '1px solid #1c8a2430' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                      <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Multi-Sectoral Support</h3>
                  </div>
                  
                  <div className="p-4 mb-6 bg-white rounded-lg">
                    <p className="leading-relaxed text-gray-700">
                      The good news is that several sectors are helping the government realize the goals of its hygiene and sanitation programs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="leading-relaxed text-gray-700">
                      The government aims to promote a decentralized decision-making process and to encourage participation of stakeholders, while also raising cost-recovery levels and incorporating hygiene promotion activities, sanitation, and water supply into their programs.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Ministry of Health Initiatives */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ 
                  background: 'linear-gradient(135deg, #1c8a2415 0%, #f0f9f0 100%)',
                  border: '1px solid #1c8a2430'
                }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#1c8a2420' }}>
                      <svg className="w-8 h-8" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Ministry of Health Leadership</h3>
                      <p style={{ color: '#1c8a24' }} className="font-medium">Strategic Sanitation and Hygiene Promotion</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg">
                    <p className="leading-relaxed text-gray-700">
                      Ethiopia's Ministry of Health is taking charge of all policies linked to hygiene and sanitation promotion. In fact, it has started to adopt the Sanitation and Hygiene Promotion Strategy, which aims at re-focusing the resources of the government in promoting low-cost practices designed to meet the needs of the poor.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Key Strategies Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f8f8', border: '1px solid #e0e0e0' }}>
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Key Strategic Approaches</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Infrastructure Development</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Water extraction systems</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>School sanitation facilities</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Community water points</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Community Engagement</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Decentralized decision-making</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Stakeholder participation</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Cost-recovery initiatives</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Low-Cost Solutions</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Affordable practices</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Resource optimization</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span>Poverty-focused approaches</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Challenges and Solutions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Challenges */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#fff8f8', border: '1px solid #ffebee' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#ff444420' }}>
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Current Challenges</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Insufficient material resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Limited human resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Financial constraints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Gap between needs and capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">50% of girls lack school toilets</span>
                      </li>
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f0f9f0', border: '1px solid #1c8a2430' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Ongoing Solutions</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                        <span className="text-gray-700">100% water accessibility program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                        <span className="text-gray-700">Multi-sectoral collaboration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                        <span className="text-gray-700">Sanitation & Hygiene Promotion Strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                        <span className="text-gray-700">Low-cost practice promotion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                        <span className="text-gray-700">Ministry of Health leadership</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                style={{ background: 'linear-gradient(to right, #1c8a24, #16681c)' }}
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Sanitation & Hygiene Initiatives in Ethiopia
                </h3>
                <p className="mb-6 text-lg sm:text-xl" style={{ color: '#e0f7e1' }}>
                  Help build toilets in schools and improve community sanitation
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 sm:py-4 sm:px-8 sm:text-base"
                    style={{ color: '#1c8a24' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Sanitation Projects
                  </a>
                  <a 
                    href="/solutions" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Explore All Solutions
                  </a>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow-2xl lg:hidden rounded-t-2xl"
           style={{ 
             transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(calc(100% - 60px))',
             maxHeight: '85vh'
           }}>
        <div 
          className="flex items-center justify-center h-12 cursor-pointer rounded-t-2xl"
          style={{ background: 'linear-gradient(to right, #1c8a24, #16681c)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="font-semibold text-white">
              {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </span>
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 48px)' }}>
          <SidebarNavigation 
            title="Our Solutions"
            links={solutionsSidebarLinks}
            brandColor="teal"
            enableAnimations={false}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default SanitationHygieneSolutions;