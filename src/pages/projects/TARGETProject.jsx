// src/pages/projects/target-project/TargetProject.jsx
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

function TargetProject() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/projects-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-sky-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                TARGET PROJECT
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Protect Hope of Addicted and Vulnerable Youth
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
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Protect Hope of Addicted and Vulnerable Youth CSSP/British Council Project
                    </h2>
                    <p className="text-blue-600">Empowering Youth Against Substance Abuse</p>
                  </div>
                </div>
              </motion.section>

              {/* Project Overview Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - Project Description */}
                  <div className="space-y-6">
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                      <p className="text-gray-700">
                        Protect Hope of Addicted and Vulnerable Youth Project addresses the needs of Addis Ababa children and youth in Kirkos woreda 10 and Lidetsa Sub-City woreda 06, who are at risk of using illicit drugs, khats and also their families.
                      </p>
                    </div>

                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-sky-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Project Focus</h3>
                      <p className="mb-4 text-gray-700">
                        The focus is utilizing a community outreach and cross-training strategy to target this high risk population, the project goals were:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">Culturally appropriate substance abuse education and prevention efforts geared to Addis Ababa children, youth and families</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">To develop and share, with community partners, an effective collaboration model between human service systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Project Objectives */}
                  <div className="space-y-6">
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Project Objectives</h3>
                      <p className="mb-3 font-semibold text-gray-800">The Project objectives were two-fold:</p>
                      <ul className="space-y-3">
                        <li className="p-3 bg-white rounded-lg">
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 p-1 mt-1 bg-blue-100 rounded">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">To increase awareness of substance abuse and its prevention within the Addis Ababa community</span>
                          </div>
                        </li>
                        <li className="p-3 bg-white rounded-lg">
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 p-1 mt-1 bg-blue-100 rounded">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">To develop a collaborative and strengths-based solution to illicit drug use among Addis Ababa youth</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Target Population Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Target Population</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      The primary target group for this project was Addis Ababa youth and their families. It was anticipated that during the project period, approximately 500 parents would attend parent education sessions and 350 youth would attend education sessions geared towards the youth.
                    </p>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Secondary Beneficiaries:</h4>
                      <p className="text-gray-700">
                        The secondary beneficiaries of this project were Addis Ababa youth & community workers and addiction prevention service providers. Their direct involvement in the cross-training strategy, the education sessions, and outreach & referral, was designed to expand their capacity to serve Addis Ababa youth and families.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Achievements Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Achievements List */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Hope of Addicted & Vulnerable Youth Project Achievement</h2>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        "Developed drug abuse prevention manual & conducted 2.5 days of drug abuse prevention training for service providers and alignAfrica staffs",
                        "Pilot substance abuse prevention education sessions conducted for the target youth and their parents",
                        "Conducted substance abuse prevention education sessions for 350 Lideta and Kirkos Sub-City youth and 500 parents",
                        "Developed and distributed 4 culturally appropriate youth drug abuse prevention fact sheets in Amharic & Develop 5 culturally appropriate youth drug abuse prevention public billboard and hosted one drug free festival awareness program for Addis Ababa community",
                        "Promoted project at key conferences",
                        "Conducted presentation on project accomplishments, evaluation findings and recommendations for stakeholders"
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                          <div className="flex-shrink-0 p-1 mt-1">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-sky-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-sky-100">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Protect Hope of the Addicted and Vulnerable Youth</h2>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        This was a youth empowerment program implemented by alignAfrica from October 2014 to July 2016 in Addis Ababa City's Kirkos Sub City (Woredas 10 & 6) and Lideta Sub City (Woreda 6) funded by Civil Society Support Program (CSSP) through Organization of Prevention, Rehabilitation and Integration of Female Street Children (OPRIFS). 150 youth who previously were vulnerable to drugs addiction benefited from trainings in Technical and Vocational Institutions and gained skills for employment and some started their own businesses in different sectors to earn income.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Gallery Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Image 1 */}
                  <div className="overflow-hidden shadow-xl rounded-xl">
                    <img 
                      src="/images/gal1.jpg" 
                      alt="Ato Yonas Mamo, Executive director of alignAfrica, giving award for graduated students"
                      className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-50">
                      <p className="text-sm italic text-center text-gray-700">
                        Ato Yonas Mamo, Executive director of alignAfrica, giving award for graduated students.
                      </p>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="overflow-hidden shadow-xl rounded-xl">
                    <img 
                      src="/images/gal3.jpg" 
                      alt="Training of Income Generating Activities"
                      className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-50">
                      <p className="text-sm italic text-center text-gray-700">
                        Training of Income Generating Activities
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Statistics Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Project Impact at a Glance</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">150</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Youth Trained</div>
                      <div className="mt-1 text-sm text-gray-600">Technical & Vocational training</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">500</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Parents Educated</div>
                      <div className="mt-1 text-sm text-gray-600">Parent education sessions</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">350</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Youth Educated</div>
                      <div className="mt-1 text-sm text-gray-600">Substance abuse prevention</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">22</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Months Duration</div>
                      <div className="mt-1 text-sm text-gray-600">Oct 2014 - July 2016</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Funding & Partners Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-sky-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Funding & Strategic Partnerships</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Primary Funder:</h4>
                      <p className="text-blue-100">Civil Society Support Program (CSSP)</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Implementation Partner:</h4>
                      <p className="text-blue-100">British Council</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Implementing Organization:</h4>
                      <p className="text-blue-100">alignAfrica</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10">
                      <h4 className="mb-2 font-semibold">Partner Organization:</h4>
                      <p className="text-blue-100">OPRIFS (Organization of Prevention, Rehabilitation and Integration of Female Street Children)</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="my-12"
              >
                <hr className="h-1 rounded-full bg-gradient-to-r from-blue-200 to-sky-200" />
              </motion.div>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-sky-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Youth Empowerment and Substance Abuse Prevention
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Help us protect vulnerable youth from substance abuse and build better futures
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-blue-600 to-sky-600 rounded-t-2xl"
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

export default TargetProject;