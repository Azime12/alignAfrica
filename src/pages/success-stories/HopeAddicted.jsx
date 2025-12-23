// src/pages/success-stories/hope-addicted/HopeAddicted.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Success Stories section
const successStoriesSidebarLinks = [
  { 
    name: "Success Stories Home", 
    href: "/success-stories", 
    icon: "Home" 
  },
  { 
    name: "Hope of Addicted", 
    href: "/success-stories/hope-addicted", 
    icon: "Heart" 
  },
  { 
    name: "RIF Project", 
    href: "/success-stories/rif-project", 
    icon: "Activity" 
  },
  { 
    name: "Dance for Life", 
    href: "/success-stories/dance-for-life", 
    icon: "Music" 
  },
  { 
    name: "TARGET Project", 
    href: "/success-stories/target-project", 
    icon: "Target" 
  },
  { 
    name: "Youth Voice", 
    href: "/success-stories/youth-voice", 
    icon: "MessageCircle" 
  }
];

function HopeAddicted() {
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
        style={{ backgroundImage: 'url(/images/sucsess.png)' }}
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
                SUCCESS STORIES
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-teal-100 sm:text-xl md:text-2xl"
              >
                Transforming Lives: Hope of Addicted & Vulnerable Youth Project
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
                title="Success Stories"
                links={successStoriesSidebarLinks}
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
              {/* Story Header */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-xl">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Hope of Addicted & Vulnerable Youth Project
                    </h2>
                    <p className="text-teal-600">A Story of Transformation and Empowerment</p>
                  </div>
                </div>
              </motion.section>

              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-800">Project Details:</h3>
                        <div className="p-3 bg-white rounded-lg">
                          <p className="text-gray-700">
                            <span className="font-semibold">Location:</span> Lideta and Kirkos Sub-City, Addis Ababa
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-800">Focus Areas:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                            <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                            <span className="text-gray-700">Addiction prevention education</span>
                          </li>
                          <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                            <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                            <span className="text-gray-700">Vocational skill training</span>
                          </li>
                          <li className="flex items-start gap-2 p-3 bg-white rounded-lg">
                            <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                            <span className="text-gray-700">Youth empowerment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h3 className="mb-3 text-lg font-bold text-gray-800">Funding Partner:</h3>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-50">
                        <div className="p-2 bg-teal-100 rounded">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-800">CSSP/British Council</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Story Content */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - The Beginning */}
                  <div className="space-y-6">
                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Meet Atnkut Temesgen</h3>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-teal-600">Atnkut Temesgen</span> is a dynamic 28 year old man living in Addis Ababa, Ethiopia. When alignAfrica first met him on the street, he was unemployed and had no type of training to qualify him for jobs.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">The Program</h3>
                      <p className="text-gray-700">
                        alignAfrica introduced the Hope of Addicted and Vulnerable Youth project funded by CSSP/British Council. The program consists of numerous initiatives, including educating youth in various vocational training programs. The overall goal of the program is to increase opportunities for at-risk youth to get off the streets by ensuring an alternative and productive lifestyle.
                      </p>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">The Transformation</h3>
                      <p className="text-gray-700">
                        With the support of the CSSP/British Council program, Atnkut embraced learning all there was to know about how to become a renowned tailor. He quickly became a leader in his classroom—it was obvious that Atnkut was a student that others admired and respected.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - The Impact */}
                  <div className="space-y-6">
                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">In His Own Words</h3>
                      </div>
                      
                      <div className="p-5 italic text-center border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl">
                        <p className="text-lg text-gray-700">
                          "If it was not for alignAfrica's Hope of Addicted and Vulnerable Youth Program, I would still have been wandering around, unemployed and living on the street. Now I can proudly say that because of alignAfrica & CSSP/British Council, I am employed and working towards a career."
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Dreams and Aspirations</h3>
                      <p className="text-gray-700">
                        Apart from owning his own metal and wood workshop, Atnkut has many other hopes and dreams. Not forgetting where he came from, Atnkut desires to eventually give back and help other unemployed youth still living on the streets who have not had the chance to receive addiction counseling and vocational skill training.
                      </p>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Giving Back</h3>
                      <p className="text-gray-700">
                        Atnkut wants to offer them the opportunity to come and learn with him at his metal & wood workshop. By doing so, he will complete the circle and accomplish the ultimate goal of giving back to his community the way alignAfrica was able to give to him.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Quote Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-8 text-center text-white shadow-lg bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl sm:rounded-2xl">
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto text-white/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className="max-w-2xl mx-auto">
                    <p className="mb-4 text-xl italic">
                      "I deeply thank alignAfrica's Program for helping me. I am really pleased, proud, and satisfied."
                    </p>
                    <footer className="font-semibold">— Atnkut Temesgen</footer>
                  </blockquote>
                </div>
              </motion.section>

              {/* Journey Timeline */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Atnkut's Journey</h3>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 right-0 h-0.5 bg-teal-200 top-1/2 transform -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                      {[
                        {
                          title: "Before",
                          description: "Unemployed, living on the streets with no skills",
                          color: "red"
                        },
                        {
                          title: "Encounter",
                          description: "Met by alignAfrica team, enrolled in program",
                          color: "yellow"
                        },
                        {
                          title: "Training",
                          description: "Excelled in tailoring, became classroom leader",
                          color: "blue"
                        },
                        {
                          title: "After",
                          description: "Employed, working towards career goals",
                          color: "green"
                        }
                      ].map((step, index) => (
                        <div key={index} className="relative z-10">
                          <div className="flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                              step.color === 'red' ? 'bg-red-100 text-red-600' :
                              step.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                              step.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />}
                                {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                                {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              </svg>
                            </div>
                            <h4 className="mb-2 font-bold text-gray-800">{step.title}</h4>
                            <p className="text-sm text-center text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Impact Statistics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Project Impact</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-teal-600">150</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Youth Trained</div>
                      <div className="mt-1 text-sm text-gray-600">Vocational skills</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-teal-600">500</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Parents Reached</div>
                      <div className="mt-1 text-sm text-gray-600">Education sessions</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-teal-600">350</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Youth Educated</div>
                      <div className="mt-1 text-sm text-gray-600">Addiction prevention</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-teal-600">2</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Sub-Cities</div>
                      <div className="mt-1 text-sm text-gray-600">Lideta & Kirkos</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support More Stories Like Atnkut's
                </h3>
                <p className="mb-6 text-lg text-teal-100 sm:text-xl">
                  Help transform lives through addiction prevention and vocational training
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-teal-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-teal-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Our Work
                  </a>
                  <a 
                    href="/success-stories" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    More Success Stories
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-teal-600 to-emerald-600 rounded-t-2xl"
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
            title="Success Stories"
            links={successStoriesSidebarLinks}
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

export default HopeAddicted;