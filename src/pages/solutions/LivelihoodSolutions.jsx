// src/pages/solutions/LivelihoodSolutions.jsx
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
    icon: "Briefcase",
    active: true // Current page
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
    icon: "Shower" 
  }
];

function LivelihoodSolutions() {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/live-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-orange-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                LIVELIHOOD SOLUTIONS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-amber-100 sm:text-xl md:text-2xl"
              >
                Building Resilience and Food Security in Ethiopia
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
                brandColor="amber"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Livelihood Challenges in Ethiopia</h1>
                    <p style={{ color: '#1c8a24' }} className="font-medium">Addressing Insecure Livelihoods and Food Security</p>
                  </div>
                </div>
              </motion.section>

              {/* Highlight Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2415', borderLeft: '4px solid #1c8a24' }}>
                  <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
                    Insecure livelihood in Ethiopia: How Ethiopians in Rural Areas are unsecured
                  </h2>
                </div>
              </motion.section>

              {/* Introduction Paragraph */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Ethiopia is one of the many countries in Africa severely affected by insecure livelihood. It is estimated that there are more than 3 million people in the country who do not have secure sources of income. This means that, in a particular year roughly 1 out of 10 Ethiopians faces difficulty in accessing safe, nutritious, and sufficient food for themselves and their families.
                  </p>
                </div>
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="my-12"
              >
                <hr style={{ backgroundColor: '#1c8a2440' }} className="h-1 rounded-full" />
              </motion.div>

              {/* Two Column Layout Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Climate Challenges</h3>
                    </div>
                    <p className="leading-relaxed text-gray-700">
                      One of the major factors contributing to whether or not the Ethiopians will have enough food to feed their families is the harsh climatic conditions experienced in most parts of the country.
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Geographic Constraints</h3>
                    </div>
                    <p className="leading-relaxed text-gray-700">
                      Ethiopia also being a landlocked country detached from the sea by Somalia, Djibouti, and Eritrea, holds a population of over 96 million.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Main Content Paragraph */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2405', border: '1px solid #1c8a2420' }}>
                  <p className="leading-relaxed text-gray-700">
                    Most of them relying on rain-fed agriculture such as livestock and crops to sustain their basic needs for survival, including food and income. With the unpredictable weather patterns in the country, most people, including the government, are continuously looking for ways to build resilience and help millions of families gain easier access to food and stable sources of income. They are searching for ways to survive unpredictable emergencies such as the hunger crisis that happened in 2011, impacting Ethiopia as well as several other countries in the region.
                  </p>
                </div>
              </motion.section>

              {/* Statistics Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', border: '1px solid #1c8a2430' }}>
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Livelihood Statistics in Ethiopia</h3>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold" style={{ color: '#1c8a24' }}>3M+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">People Affected</div>
                      <div className="mt-1 text-sm text-gray-600">Without secure income sources</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold" style={{ color: '#1c8a24' }}>1 in 10</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Food Insecurity</div>
                      <div className="mt-1 text-sm text-gray-600">Ethiopians face food access difficulties</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold" style={{ color: '#1c8a24' }}>96M+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Population</div>
                      <div className="mt-1 text-sm text-gray-600">Most rely on rain-fed agriculture</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Factors Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f8f8', border: '1px solid #e0e0e0' }}>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Key Factors Affecting Livelihood Security</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Climate Conditions</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Unpredictable weather patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Harsh climatic conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Rain-fed agriculture dependency</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Geographic Limitations</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Landlocked country</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Detached from sea access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Regional isolation challenges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Resilience Building Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ 
                  background: 'linear-gradient(135deg, #1c8a2415 0%, #f0f9f0 100%)',
                  border: '1px solid #1c8a2430'
                }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#1c8a2420' }}>
                      <svg className="w-8 h-8" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Building Resilience</h3>
                      <p style={{ color: '#1c8a24' }} className="font-medium">Sustainable Solutions for Food Security</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Access to Food</h4>
                      <p className="text-sm text-gray-600">
                        Helping millions of families gain easier access to food
                      </p>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Stable Income</h4>
                      <p className="text-sm text-gray-600">
                        Creating stable sources of income for communities
                      </p>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: '#1c8a2420' }}>
                        <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-gray-800">Emergency Preparedness</h4>
                      <p className="text-sm text-gray-600">
                        Surviving unpredictable emergencies and crises
                      </p>
                    </div>
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
                  Support Livelihood Development in Ethiopia
                </h3>
                <p className="mb-6 text-lg sm:text-xl" style={{ color: '#e0f7e1' }}>
                  Help build resilience and food security for millions of Ethiopians
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
                    Support Livelihood Programs
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
            brandColor="amber"
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

export default LivelihoodSolutions;