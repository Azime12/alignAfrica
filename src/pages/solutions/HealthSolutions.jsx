// src/pages/solutions/HealthSolutions.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Solutions section - Updated based on your routes
const solutionsSidebarLinks = [
  { 
    name: "Education", 
    href: "/solutions/education", 
    icon: "School" 
  },
  { 
    name: "Health", 
    href: "/solutions/health", 
    icon: "Heart",
    active: true // Current page
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
    icon: "Shower" 
  }
];

function HealthSolutions() {
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      {/* Hero Banner Section - Using your provided image */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/sohealth-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-green-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                HEALTH SOLUTIONS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-emerald-100 sm:text-xl md:text-2xl"
              >
                Improving Health Services in Ethiopia's Developing Regions
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
                brandColor="emerald"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Health Solutions for Ethiopia</h1>
                    <p style={{ color: '#1c8a24' }} className="font-medium">Partnering for Better Health Services</p>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', borderColor: '#1c8a2430' }}>
                  <p className="text-gray-700">
                    For better health service provision to the people, especially those living in developing regions of Ethiopia, government takes the lion share of the contribution and NGOs, like alignAfrica, have their own share of contribution in support to the government.
                  </p>
                </div>
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="my-12"
              >
                <hr style={{ backgroundColor: '#1c8a2440' }} className="h-1 rounded-full" />
              </motion.div>

              {/* Recommendations Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2405', border: '1px solid #1c8a2420' }}>
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">
                    Recommended Health Service Improvements for Pastoralist and Agro-Pastoralist Communities
                  </h2>
                  
                  <div className="p-4 mb-6 bg-white rounded-lg">
                    <p className="text-gray-700">
                      For better health service provision to pastoralist and agro-pastoralist communities and regions of Ethiopia the following are highly recommended activities:
                    </p>
                  </div>

                  {/* Recommendations List */}
                  <div className="space-y-6">
                    {/* Item a */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            a
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Increase Demand for RMNH Services</h3>
                          <p className="text-gray-700">
                            Increase demand for RMNH services and modern contraceptive methods, especially by poor women in rural areas and sexually-active adolescents (for instance through behavior change communication to increase the cultural acceptability of family planning and desire for smaller families, or through support for the "home delivery-free kebele and woreda" strategy). This will result in preventing unintended pregnancies and ensuring safe pregnancy and childbirth through the use of modern contraceptives, Antenatal Care (ANC), Skilled Birth Assistance (SBA) and Postnatal Care (PNC), in Ethiopia.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item b */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            b
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Enhance Women and Girls Empowerment</h3>
                          <p className="text-gray-700">
                            Enhance the empowerment of women and girls to seek information and services like RMNH, FP and RH services. These interventions should aim to empower women and girls in every aspect including, but not limited to, economic and social empowerment; approaches should include building their skills to negotiate and make decisions with regard to their RMNH services.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item c */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            c
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Reduce Geographic and Financial Barriers</h3>
                          <p className="text-gray-700">
                            Reduce the geographic and financial barriers that prevent women and girls utilizing RMNH services for instance through outreach and comprehensive mobile clinics.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item d */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            d
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Increase Demand for Newborn and Postnatal Care</h3>
                          <p className="text-gray-700">
                            Increase demand for newborn care and postnatal care especially in the pastoralist communities like Afar, Ethiopian Somali, Benishangul-Gumuz, and Gambella regions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item e */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            e
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Overcome Service Delivery Barriers</h3>
                          <p className="text-gray-700">
                            Overcome barriers and bottlenecks related to provision of quality RMNH, FP and SRHR services to the community for example, ensure 24/7 service delivery; support provision of youth-friendly RMNH, FP and SRHR services; strengthen infection disease prevention practices through One Health (Human, animal and Environmental health) professionals integration approach; mobile health care services etc.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item f */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            f
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Generate Evidence Through Research</h3>
                          <p className="text-gray-700">
                            Generate evidence of what works for instance through operational research on cultural influences and barriers, effective interventions to increase use of services, testing of modalities of care to reach pastoralist and agro-pastoralist communities. In Afar region, looking for alternative health service modalities and in Gambella and Benishangul-Gumuz Regions, identifying the barriers for RMNH, FP and SRH services uptake and modality of services.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item g */}
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#1c8a24' }}>
                            g
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-gray-800">Strengthen Coordination and Partnership</h3>
                          <p className="text-gray-700">
                            Strengthen coordination and partnership between communities, health facilities, train community volunteer health workers, and improve ability of governments to deliver effective RMNH, FP and SRHR services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Regional Focus */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#1c8a2410', border: '1px solid #1c8a2420' }}>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Target Regions for Health Interventions</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                          <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Pastoralist Communities</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Afar Region</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Ethiopian Somali Region</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Benishangul-Gumuz Region</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Gambella Region</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#1c8a2420' }}>
                          <svg className="w-6 h-6" style={{ color: '#1c8a24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Service Approaches</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Mobile Health Clinics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">24/7 Service Delivery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Community Health Workers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#1c8a24' }}></div>
                          <span className="text-gray-700">Youth-Friendly Services</span>
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
                transition={{ delay: 0.8 }}
                className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                style={{ background: 'linear-gradient(to right, #1c8a24, #16681c)' }}
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Health Initiatives in Ethiopia
                </h3>
                <p className="mb-6 text-lg sm:text-xl" style={{ color: '#e0f7e1' }}>
                  Partner with us to improve health services in developing regions
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
                    Support Health Programs
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
            brandColor="emerald"
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

export default HealthSolutions;