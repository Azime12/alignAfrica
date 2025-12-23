// src/pages/projects/social-action-gambella/SocialActionGambella.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Projects section
const projectsSidebarLinks = [
  { name: "Projects Home", href: "/projects", icon: "Home" },
  { name: "One Health", href: "/projects/one-health", icon: "Activity" },
  { name: "Dance4Life", href: "/projects/dance4life", icon: "Heart" },
  { name: "Capacity Building", href: "/projects/capacity-building", icon: "Users" },
  { name: "Youth Empowerment", href: "/projects/youth-empowerment", icon: "Target" },
  { name: "RMNH", href: "/projects/rmnh", icon: "Award" },
  { name: "Multi-purpose Village", href: "/projects/multi-purpose-village", icon: "Building" },
  { name: "Spirulina Program", href: "/projects/spirulina-program", icon: "Leaf" },
  { name: "Gender Equality", href: "/projects/gender-equality", icon: "Users2" },
  { name: "HIV Project", href: "/projects/hiv-project", icon: "AlertTriangle" },
  { name: "Nutrition Project", href: "/projects/nutrition-project", icon: "Book" },
  { name: "Peace Building", href: "/projects/peace-building", icon: "Shield" },
  { name: "Social Action Gambella", href: "/projects/social-action-gambella", icon: "Globe" },
  { name: "TARGET Project", href: "/projects/target-project", icon: "Crosshair" },
  { name: "Youth Voice Ethiopia", href: "/projects/youth-voice-ethiopia", icon: "MessageCircle" }
];

function SocialActionGambella() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/ttcgam.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                SOCIAL ACTION GAMBELLA
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Empowering Youth Through Active Citizenship and Social Enterprise
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
                title="Projects"
                links={projectsSidebarLinks}
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
              {/* Main Title Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                    Social Action Project in Gambella Region
                  </h1>
                </div>
                <div className="h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 w-28"></div>
              </motion.section>

              {/* Overview Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Project Overview */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Addressing socio-economic challenges through active citizenship</h2>
                    </div>
                    <p className="text-gray-700">
                      This is a youth empowerment project through training on social enterprise and active citizenship concept implemented by alignAfrica in Gambella Town. The project is implemented in a consortium of 7 Local CSOs with Redeem the Generation Organization as the lead partner. The project started in October 2018 and closed in April 2023. British Council provided trainings to Master Facilitators and financed the project implementation. The project benefited 10,270 young people.
                    </p>
                  </div>

                  {/* Trash to Cash Initiative */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Social Action Project: Trash to Cash (TTC) Initiative in Gambella Town</h2>
                    </div>
                    <p className="text-gray-700">
                      This is a continuation of Active Citizenship by the trained 125 Youth (86 male, 39 female) in Gambella Town as a response to the social problems they identified in their communities. This project is a proposed solution to environmental pollution in the town and along River Baro and to youth unemployment.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Image Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="overflow-hidden shadow-xl rounded-2xl">
                  <img 
                    src="/images/ttc-gam.jpg" 
                    alt="Trash to Cash Initiative in Gambella" 
                    className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105 sm:h-72 md:h-80 lg:h-96"
                  />
                  <div className="p-4 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
                    <p className="font-medium text-gray-700">
                      Community mobilization and environmental cleanup activities in Gambella Town
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Implementation Details Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Process Details */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <svg className="text-blue-600 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Project Implementation Process</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="mb-2 font-semibold text-gray-800">Community Mobilization:</h4>
                        <p className="text-gray-700">
                          The master facilitators trained by the British Council and Gambella Town Administration facilitated collection of garbage in communities and along River Baro. A 1-day event was held to mobilize the communities on this initiative.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="mb-2 font-semibold text-gray-800">Waste Management:</h4>
                        <p className="text-gray-700">
                          The collected garbage is sorted and those recyclable are recycled and reused while the rest are safely disposed. The recycled products will be sold by the youth to generate income in youth centre.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Youth Empowerment Details */}
                  <div className="p-6 border border-indigo-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <svg className="text-indigo-600 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Youth Enterprise Development</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="mb-2 font-semibold text-gray-800">Business Management:</h4>
                        <p className="text-gray-700">
                          The youth will also be registered in social enterprise associations and mentored on business management. They will be organized to participate in trade bursars to showcase their entrepreneurial products.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <h4 className="mb-2 font-semibold text-gray-800">Income Generation:</h4>
                        <p className="text-gray-700">
                          The recycled products from collected waste materials are transformed into marketable goods, creating sustainable income streams for participating youth while addressing environmental challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Statistics Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Project Impact Statistics</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">10,270</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Young People Benefited</div>
                      <div className="mt-1 text-sm text-gray-600">Direct beneficiaries</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">125</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Trained Youth Leaders</div>
                      <div className="mt-1 text-sm text-gray-600">86 male, 39 female</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">7</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Local CSO Partners</div>
                      <div className="mt-1 text-sm text-gray-600">Consortium collaboration</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">5</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Years Duration</div>
                      <div className="mt-1 text-sm text-gray-600">Oct 2018 - Apr 2023</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Objectives and Outcomes */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Objectives */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Project Objectives</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700">Address environmental pollution in Gambella Town and along River Baro</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700">Combat youth unemployment through social enterprise development</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700">Promote active citizenship among youth through practical community engagement</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700">Build sustainable waste management systems through community participation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Expected Outcomes */}
                  <div className="p-6 border border-indigo-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Expected Outcomes</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-700">Reduced environmental pollution through community waste collection initiatives</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-700">Sustainable income generation for youth through recycling enterprises</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-700">Enhanced youth leadership and entrepreneurship skills</span>
                      </li>
                      <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-700">Strengthened community participation in environmental conservation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Partnership Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Strategic Partnerships</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Lead Partner:</h4>
                      <p className="text-blue-100">Redeem the Generation Organization</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Funding & Training:</h4>
                      <p className="text-blue-100">British Council</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Local Implementation:</h4>
                      <p className="text-blue-100">Gambella Town Administration</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Consortium Partners:</h4>
                      <p className="text-blue-100">7 Local CSOs</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Youth Empowerment and Environmental Conservation
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Join us in transforming waste into opportunities for Gambella's youth
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Our Mission
                  </a>
                  <a 
                    href="/projects/youth-empowerment" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Explore Youth Projects
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl"
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
            title="Projects"
            links={projectsSidebarLinks}
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

export default SocialActionGambella;