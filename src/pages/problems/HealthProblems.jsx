// src/pages/problems/health/HealthProblems.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Problems section
const problemsSidebarLinks = [
  { 
    name: "Education", 
    href: "/problems/education", 
    icon: "School" 
  },
  { 
    name: "Health", 
    href: "/problems/health", 
    icon: "Heart" 
  },
  { 
    name: "Livelihood", 
    href: "/problems/livelihood", 
    icon: "Briefcase" 
  },
  { 
    name: "Sanitation", 
    href: "/problems/sanitation", 
    icon: "Droplets" 
  },
  { 
    name: "Water Security", 
    href: "/problems/water-security", 
    icon: "FlaskRound" 
  },
  { 
    name: "Gender Inequality", 
    href: "/problems/gender-inequality", 
    icon: "Users2" 
  },
  { 
    name: "Youth Issues", 
    href: "/problems/youth-issues", 
    icon: "Target" 
  }
];

function HealthProblems() {
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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/problems-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-amber-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                HEALTH CHALLENGES
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Addressing Maternal and Neonatal Health in Ethiopia
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
                title="Key Challenges"
                links={problemsSidebarLinks}
                brandColor="yellow"
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
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Health Challenges in Ethiopia</h1>
                    <p className="text-yellow-600">Focus on Reproductive, Neonatal and Maternal Health (RMNH)</p>
                  </div>
                </div>

                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50">
                  <p className="text-lg font-semibold text-gray-700">
                    Health especially Neonatal and Maternal Health (RMNH) services in Ethiopia face significant challenges in pastoralist and developing regions.
                  </p>
                </div>
              </motion.section>

              {/* Introduction Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white">
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">The Context</h2>
                  <p className="text-gray-700">
                    Contributing factors like the pastoralist and other developing regions of Ethiopia's population and backward economy with low performance, the welfare of its people is at stake. Maternal & neonatal deaths in the regions are very high due to the reproductive health service coverage being very poor if any.
                  </p>
                </div>
              </motion.section>

              {/* Supply and Demand Factors */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Supply Side Factors */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Supply Side Factors</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-700">Poorly equipped health institutions</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-700">Low quality of service by health service providers</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-700">Limited healthcare infrastructure in remote areas</span>
                      </li>
                    </ul>
                  </div>

                  {/* Demand Side Factors */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-amber-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-amber-100">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Demand Side Factors</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700">Lack of awareness on benefits of professionally attended health services</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700">Socio-cultural barriers discouraging women from using health services</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                        <span className="text-gray-700">Geographic barriers limiting access to available RMNH services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="my-12"
              >
                <hr className="h-1 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200" />
              </motion.div>

              {/* Statistics Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Health Statistics in Developing Regions</h2>
                  </div>
                  
                  <div className="p-4 mb-4 bg-white rounded-lg">
                    <p className="text-gray-700">
                      Due to these and other major factors, the maternal health situation in the regions are much lagging behind the national average, where:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">11%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">First ANC Visit</div>
                      <div className="mt-1 text-sm text-gray-600">Women during pregnancy</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">19%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">4+ ANC Visits</div>
                      <div className="mt-1 text-sm text-gray-600">Minimum recommended care</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">34%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Skilled ANC Provider</div>
                      <div className="mt-1 text-sm text-gray-600">At least once during pregnancy</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">10%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Health Facility Delivery</div>
                      <div className="mt-1 text-sm text-gray-600">Professional assistance</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">75%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Home Delivery</div>
                      <div className="mt-1 text-sm text-gray-600">Without professional care</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">7%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Postnatal Check-up</div>
                      <div className="mt-1 text-sm text-gray-600">Within 2 days of birth</div>
                    </div>
                  </div>
                  
                  <div className="p-4 mt-6 text-sm text-center bg-white rounded-lg">
                    <p className="text-gray-600">Source: Ethiopian Demographic Health Survey (EDHS 2011)</p>
                  </div>
                </div>
              </motion.section>

              {/* RIF Program Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* RIF Program */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">The RIF Program Solution</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Neonatal and Maternal Health (RMNH) Services Innovative Fund (RIF) program is an important program that minimizes maternal & neonatal deaths, maximizes the reproductive health service coverage and better awareness of the community in using reproductive services, contraceptives, family planning and HIV/AIDS controlling and prevention activities.
                      </p>
                    </div>
                  </div>

                  {/* Implementation Details */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-amber-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-amber-100">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">alignAfrica's Implementation</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        alignAfrica is implementing RIF project in 14 districts of Afar region in partnership with Afar Development Association (AFDA) and Semera Health Science College (SHSC) since June 1, 2015. Tremendous results have been registered in these 14 districts of Afar region on RMNH.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Intervention Districts */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50">
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Districts of RMNH Intervention</h3>
                  
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[
                      "Semera-Logiya town",
                      "Adaar",
                      "Aysaita", 
                      "Chifra",
                      "Dubti",
                      "Elida'ar",
                      "Afambo",
                      "Awra",
                      "Ewa",
                      "Gulina",
                      "Teru",
                      "Delifage",
                      "Dewe",
                      "Telalek",
                      "Samara logiya"
                    ].map((district, index) => (
                      <div key={index} className="p-3 text-center bg-white rounded-lg shadow-sm">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="font-medium text-gray-700">{district}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 mt-6 text-center bg-white rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">Total:</span> 14 districts in Afar region benefiting from RMNH interventions
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-yellow-600 to-amber-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Maternal and Child Health in Ethiopia
                </h3>
                <p className="mb-6 text-lg text-yellow-100 sm:text-xl">
                  Help us improve RMNH services and reduce maternal & neonatal mortality
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-yellow-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-yellow-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Health Programs
                  </a>
                  <a 
                    href="/problems" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Explore Other Challenges
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-yellow-600 to-amber-600 rounded-t-2xl"
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
            title="Key Challenges"
            links={problemsSidebarLinks}
            brandColor="yellow"
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

export default HealthProblems;