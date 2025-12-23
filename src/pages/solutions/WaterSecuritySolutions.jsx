// src/pages/solutions/WaterSecuritySolutions.jsx
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
    icon: "Droplet",
    active: true // Current page
  },
  { 
    name: "Women Empowerment", 
    href: "/solutions/women-empowerment", 
    icon: "Users" 
  },
  { 
    name: "Sanitation & Hygiene", 
    href: "/solutions/sanitation-hygiene", 
    icon: "Shower" 
  }
];

function WaterSecuritySolutions() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/swater-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                WATER SECURITY SOLUTIONS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Providing Sustainable Water Solutions for Ethiopia
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
                brandColor="blue"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Water Security in Ethiopia</h1>
                    <p style={{ color: '#1c8a24' }} className="font-medium">Addressing Water Shortage and Building Sustainable Solutions</p>
                  </div>
                </div>
              </motion.section>

              {/* Two Column Layout */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - Introduction */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', border: '1px solid #1c8a2420' }}>
                      <h3 className="mb-4 text-xl font-bold text-gray-800">
                        Water Security: Addressing the Water Shortage in Ethiopia
                      </h3>
                      
                      <div className="space-y-4">
                        <p className="leading-relaxed text-gray-700">
                          If you have read about water scarcity in Ethiopia, you know how important it is to find ways of providing the people in the poorest regions of the country with water security. 
                        </p>
                        
                        <div className="p-4 bg-white rounded-lg">
                          <p className="font-semibold text-gray-800" style={{ color: '#1c8a24' }}>
                            Water security truly changes lives!
                          </p>
                        </div>
                        
                        <p className="leading-relaxed text-gray-700">
                          When communities are provided with a safe water supply, people's health improve, women have more time to focus on other things and don't have to set out in the dark on hours-long walks to polluted water sources, and girls are freed to attend school.
                        </p>
                      </div>
                    </div>

                    {/* Infrastructure Section */}
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#f0f9f0', border: '1px solid #1c8a2430' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                          <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">The Infrastructure Challenge</h4>
                      </div>
                      <p className="leading-relaxed text-gray-700">
                        There are enough water supplies in Ethiopia, but the infrastructure to get it to where it is needed is not in place. alignafrica is helping provide sustainable development solutions to the issue of water security. Each time a community receives the gift of water, lives are changed.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Solutions */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2405', border: '1px solid #1c8a2420' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Possible Solutions to Water Shortage in Ethiopia</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Solution 1 */}
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              1
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Develop water springs and deep wells for reliable water sources.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 2 */}
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              2
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Train, promote and support hand pump mechanisms for community members.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 3 */}
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              3
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Mobilize the community to generate fund to secure water for the community.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 4 */}
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              4
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Provide the community with sanitation and water preservation tools and mechanisms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 5 */}
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              5
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Improve latrines and other hygiene and sanitation facilities in schools.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Additional Solutions Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ 
                  background: 'linear-gradient(135deg, #1c8a2410 0%, #e8f5e9 100%)',
                  border: '1px solid #1c8a2430'
                }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Comprehensive Water Security Solutions</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      {/* Solution 6 */}
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              6
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Conduct hygiene and sanitation promotion campaigns across Ethiopia.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 7 */}
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              7
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Strengthen community management in order to develop, implement & maintain a community-managed sustainable water supply system and sanitation systems.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 8 */}
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              8
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Create community ownership by involving communities in decisions, construction and maintenance of the water supply and sanitation systems.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                      {/* Solution 9 */}
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              9
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Facilitate community learning opportunities to increase community knowledge and practice of proper hygiene and sanitation through participatory learning practices, training through local water & sanitation committees and community health workers.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution 10 */}
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                              10
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Capacity building trainings to strengthen the community's capacity to administer community development projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Impact Statistics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', border: '1px solid #1c8a2430' }}>
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">The Impact of Water Security</h3>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Improved Health</h4>
                      <p className="text-sm text-gray-600">
                        Reduced waterborne diseases and better community health
                      </p>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Women Empowerment</h4>
                      <p className="text-sm text-gray-600">
                        More time for education and economic activities
                      </p>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Girls' Education</h4>
                      <p className="text-sm text-gray-600">
                        Increased school attendance and educational opportunities
                      </p>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Economic Growth</h4>
                      <p className="text-sm text-gray-600">
                        Enhanced productivity and economic opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Water Sources Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f8f8', border: '1px solid #e0e0e0' }}>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Water Source Development</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Spring Development</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Natural water source protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Contamination prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Sustainable water collection</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Deep Wells</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Reliable water access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Year-round water supply</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Clean and safe drinking water</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                style={{ background: 'linear-gradient(to right, #1c8a24, #16681c)' }}
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Water Security Initiatives in Ethiopia
                </h3>
                <p className="mb-6 text-lg sm:text-xl" style={{ color: '#e0f7e1' }}>
                  Help bring clean water to communities and transform lives
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
                    Support Water Projects
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
            brandColor="blue"
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

export default WaterSecuritySolutions;