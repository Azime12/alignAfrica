// src/pages/solutions/partnership/PartnershipSolutions.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Solutions section
const solutionsSidebarLinks = [
  { 
    name: "Education", 
    href: "/solutions/education", 
    icon: "Book" 
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
    icon: "CloudRain" 
  },
  { 
    name: "Women Empowerment", 
    href: "/solutions/women-empowerment", 
    icon: "UserPlus" 
  },
  { 
    name: "Sanitation & Hygiene", 
    href: "/solutions/sanitation-hygiene", 
    icon: "Droplet" 
  }
];

function PartnershipSolutions() {
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

  // Purple color scheme for Partnership
  const colorVariants = {
    light: '#f3e8ff',
    medium: '#8b5cf6',
    dark: '#7c3aed'
  };

  const RDAs = [
    {
      region: "Gambella Region",
      associations: [
        {
          name: "Anywaa Community Development Association (ACDA)",
          description: "Focused on community development and empowerment in the Anywaa community"
        },
        {
          name: "Ethiopian Nuer Development Association (ENDA)",
          description: "Dedicated to Nuer community development and socio-economic advancement"
        }
      ]
    },
    {
      region: "Benshangulgumuz Regional State",
      associations: [
        {
          name: "Tikuret Legumuz Hizib Development Association (TLDA)",
          description: "Working for the development of Tikuret Legumuz Hizib community"
        },
        {
          name: "Benshangul Development Association (BDA)",
          description: "Promoting development initiatives across Benshangul communities"
        }
      ]
    }
  ];

  const programComponents = [
    {
      title: "Rapid Institutional Capacity Assessment",
      description: "Self-assessment and in-depth evaluation of organizational capacities",
      activities: ["Organizational structure analysis", "Financial management review", "Human resource assessment"]
    },
    {
      title: "Consultative Meeting & Experience Sharing",
      description: "Facilitating knowledge exchange and collaborative learning",
      activities: ["Stakeholder workshops", "Best practice sharing", "Learning tours"]
    },
    {
      title: "Strategic Plan Development",
      description: "Creating actionable roadmaps for sustainable development",
      activities: ["Goal setting", "Resource planning", "Monitoring framework"]
    }
  ];

  const capacityAreas = [
    "Financial Management",
    "Monitoring and Evaluation",
    "Organizational Structure",
    "Human Resource Management",
    "Resource Mobilization",
    "Fundraising Strategies",
    "Documentation Systems"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf5ff' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/partner-banner.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(139, 92, 246, 0.7)' }}></div>
        <div className="relative flex items-center h-full">
          <div id="header-content" className="container px-4 mx-auto">
            <div id="intro" className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
                >
                  PARTNERSHIP SOLUTIONS
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-white/90 sm:text-xl md:text-2xl"
                >
                  Building Strong Collaborations for Sustainable Development
                </motion.p>
              </motion.div>
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
                brandColor="custom"
                customColor={colorVariants.medium}
                enableAnimations={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full pb-20 lg:w-3/4 sm:pb-24 lg:pb-0">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
              style={{ borderColor: colorVariants.light }}
            >
              {/* Partnership Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: colorVariants.light }}>
                    <svg className="w-8 h-8" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Partnership and Coordination
                    </h2>
                    <p className="text-gray-600">Collaborating for Greater Impact</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#faf5ff' }}>
                  <p className="mb-4 text-gray-700">
                    alignAfrica is grateful for the strong partnerships we have with our donor partners. alignAfrica's vision realizes the value of collaboration and we look forward to developing new partnerships as we play our part in working towards realization of the goal of the organization.
                  </p>
                  
                  <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                    <p className="text-lg font-semibold text-center" style={{ color: colorVariants.dark }}>
                      Whether you are an individual, Community Based Organization, NGO, business owner, club or government agency, everyone can play a part in achieving our goals.
                    </p>
                  </div>
                  
                  <p className="text-gray-700">
                    One of the partnership and coordination program implemented in 2015/2016 is Institutional capacity building intervention program in two developing regions of Ethiopia.
                  </p>
                </div>
              </motion.section>

              {/* Institutional Capacity Building Program */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #f3e8ff, white)' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                      <svg className="w-6 h-6" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Institutional Capacity Building Intervention Program</h2>
                  </div>

                  <p className="mb-6 text-gray-700">
                    Institutional capacity building intervention program has three components. These are rapid institutional capacity assessment (self-assessment and in-depth assessment), consultative meeting, experience sharing and learning tour and strategic plan development.
                  </p>

                  {/* Program Components */}
                  <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
                    {programComponents.map((component, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                            <span className="font-bold" style={{ color: colorVariants.dark }}>{index + 1}</span>
                          </div>
                          <h3 className="font-bold text-gray-800" style={{ color: colorVariants.dark }}>{component.title}</h3>
                        </div>
                        <p className="mb-3 text-sm text-gray-600">{component.description}</p>
                        <ul className="space-y-1">
                          {component.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colorVariants.medium }}></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mb-6 text-gray-700">
                    The institutional capacity assessment is implemented in 4 Regional Development Associations (RDAs) of Gambella region and Benshangulgumuz regional states. These are Anywaa Community Development Association (ACDA) and Ethiopian Nuer Development Association (ENDA) of Gambella region and Tikuret Legumuz Hizib Development Association (TLDA) and Benshangul Development Association (BDA) of Benshangulgumuz regional state.
                  </p>

                  <div className="p-4 my-6 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                    <p className="text-gray-700">
                      <span className="font-bold" style={{ color: colorVariants.dark }}>Program Objectives:</span> This capacity building intervention has been implemented with the objectives of identifying institutional gaps of RDAs, to enhance the governance and leadership of RDAs and to ensure informed and strategic engagement and contribution of RDAs. As of our agreement with Christian Aid Ethiopia, alignAfrica has completed all the three activities successfully.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Regional Development Associations */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#faf5ff' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Regional Development Associations Supported</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {RDAs.map((regionData, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded" style={{ backgroundColor: colorVariants.light }}>
                            <svg className="w-5 h-5" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-gray-800" style={{ color: colorVariants.dark }}>{regionData.region}</h4>
                        </div>
                        
                        <div className="space-y-4">
                          {regionData.associations.map((association, idx) => (
                            <div key={idx} className="p-3 rounded-lg" style={{ border: `1px solid ${colorVariants.light}` }}>
                              <h5 className="mb-1 font-bold text-gray-800">{association.name}</h5>
                              <p className="text-sm text-gray-600">{association.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Capacity Areas Assessment */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #f3e8ff, white)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Capacity Areas Assessed and Strengthened</h3>
                  
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                    {capacityAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        className="p-3 text-center bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-5 h-5" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="p-4 mt-6 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                    <p className="text-gray-700">
                      The technical support and facilitation part of the intervention has been conducted by alignAfrica and the RDAs themselves within the RDAs so that it is possible to assess the gaps of the RDAs in their financial management, monitoring and evaluation, organizational structure, human resource management, resource mobilization, fundraising and documentation. These all activities have been facilitated by alignAfrica with financial support from Christian Aid Ethiopia.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Partners Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#faf5ff' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Our Valued Partners</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-8 h-8" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-800">Christian Aid Ethiopia</h4>
                        <p className="text-gray-600">Financial and technical support partner for institutional capacity building programs</p>
                      </div>
                    </div>
                    
                    <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-8 h-8" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-800">Regional Development Associations</h4>
                        <p className="text-gray-600">4 key RDAs in Gambella and Benshangulgumuz regions implementing community development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Program Impact */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #f3e8ff, #e9d5ff)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Program Impact and Outcomes</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Enhanced Governance",
                        value: "4 RDAs",
                        description: "Improved leadership and decision-making structures"
                      },
                      {
                        title: "Capacity Strengthened",
                        value: "7 Areas",
                        description: "Key organizational areas assessed and developed"
                      },
                      {
                        title: "Strategic Planning",
                        value: "100%",
                        description: "All RDAs developed actionable strategic plans"
                      }
                    ].map((impact, index) => (
                      <div key={index} className="p-4 text-center bg-white rounded-lg">
                        <div className="mb-2 text-3xl font-bold" style={{ color: colorVariants.dark }}>{impact.value}</div>
                        <h4 className="mb-1 font-bold text-gray-800">{impact.title}</h4>
                        <p className="text-sm text-gray-600">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="p-8 text-center text-white shadow-lg rounded-xl sm:rounded-2xl" style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}>
                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                    Partner With Us
                  </h3>
                  <p className="mb-6 text-lg text-white/90 sm:text-xl">
                    Join our network of partners working towards sustainable development in Ethiopia
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:opacity-90 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                      style={{ color: colorVariants.dark }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Become a Partner
                    </a>
                    <a 
                      href="/solutions" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      Explore More Solutions
                    </a>
                  </div>
                </div>
              </motion.section>
            </motion.article>
          </main>
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
          style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
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
            brandColor="custom"
            customColor={colorVariants.medium}
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

export default PartnershipSolutions;