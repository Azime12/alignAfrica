// src/pages/problems/sanitation/SanitationProblems.jsx
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

function SanitationProblems() {
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
        style={{ backgroundImage: 'url(/images/ssanit-banner.jpg)' }}
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
                SANITATION CHALLENGES
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Addressing Sanitation and Hygiene Issues in Ethiopia
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
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Sanitation & Hygiene in Ethiopia</h1>
                    <p className="text-yellow-600">Addressing a Critical Development Challenge</p>
                  </div>
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
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">The Global Sanitation Crisis</h2>
                  <p className="text-gray-700">
                    Poor sanitation and hygiene is one of the major causes of diseases and infections all around the world. But sanitation and hygiene impact more than just health. A lack of sanitation takes dignity away and can keep people locked in the cycle of poverty.
                  </p>
                </div>
              </motion.section>

              {/* Ethiopia Statistics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Ethiopia's Sanitation Challenge</h3>
                  </div>
                  
                  <div className="p-4 mb-6 bg-white rounded-lg">
                    <p className="text-gray-700">
                      In Ethiopia, only <span className="font-bold text-yellow-600">52% of the population</span> has access to sanitation facilities. The water and sanitation crisis in Ethiopia and other countries must be addressed.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-5xl font-bold text-yellow-600">52%</div>
                      <div className="mt-3 text-lg font-semibold text-gray-800">Population with Sanitation Access</div>
                      <div className="mt-2 text-sm text-gray-600">Ethiopia national average</div>
                      <div className="mt-4">
                        <div className="h-3 overflow-hidden bg-yellow-100 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '52%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-600">
                          <span>0%</span>
                          <span>Access to Sanitation</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-5xl font-bold text-yellow-600">33%</div>
                      <div className="mt-3 text-lg font-semibold text-gray-800">Global Toilet Access</div>
                      <div className="mt-2 text-sm text-gray-600">Less than 1 in 3 people worldwide</div>
                      <div className="mt-4">
                        <div className="h-3 overflow-hidden bg-yellow-100 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-600">
                          <span>0%</span>
                          <span>Global Access</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Gender Impact Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Female Impact */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Impact on Women and Girls</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          This is hardest on females. In many countries, women must wait until nightfall to relieve themselves and girls attending schools without toilets must drop out after reaching puberty because they have no privacy and therefore hard for them to concentrate on their studies.
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-amber-100">
                        <p className="font-semibold text-gray-800">
                          About half of all girls worldwide attend schools without toilets. The lack of privacy causes many girls to drop out when they reach puberty.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education Impact */}
                  <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-amber-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-amber-100">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Education Consequences</h3>
                    </div>
                    
                    <div className="p-4 mb-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Without education, they are not able to earn any income due to lack of skills. It is therefore clear that poor sanitation and hygiene only contributes to keeping the people destitute.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Cycle of Poverty:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                          <span className="text-gray-700">Lack of school sanitation facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                          <span className="text-gray-700">Girls drop out at puberty</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                          <span className="text-gray-700">Limited education opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                          <span className="text-gray-700">Reduced income potential</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 rounded-full bg-amber-400"></div>
                          <span className="text-gray-700">Perpetuates poverty cycle</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Statistics Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Key Sanitation Statistics</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">52%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Ethiopia Access</div>
                      <div className="mt-1 text-sm text-gray-600">Sanitation facilities</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">33%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Global Access</div>
                      <div className="mt-1 text-sm text-gray-600">Toilet access worldwide</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">50%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Girls Affected</div>
                      <div className="mt-1 text-sm text-gray-600">Schools without toilets</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-yellow-600">48%</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Population Lacks</div>
                      <div className="mt-1 text-sm text-gray-600">Basic sanitation in Ethiopia</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Health Impacts */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 border border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Health Consequences of Poor Sanitation</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Disease Transmission:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Waterborne diseases (cholera, typhoid)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Parasitic infections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Gastrointestinal illnesses</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Social Impacts:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Loss of human dignity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Reduced school attendance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700">Limited economic productivity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="my-12"
              >
                <hr className="h-1 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200" />
              </motion.div>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-yellow-600 to-amber-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Sanitation and Hygiene Improvements
                </h3>
                <p className="mb-6 text-lg text-yellow-100 sm:text-xl">
                  Help us provide sanitation facilities and break the cycle of poverty
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-yellow-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-yellow-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Sanitation Programs
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

              {/* Additional Spacing */}
              <div className="space-y-8">
                <div className="h-8"></div>
                <div className="h-8"></div>
                <div className="h-8"></div>
                <div className="h-8"></div>
              </div>
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

export default SanitationProblems;