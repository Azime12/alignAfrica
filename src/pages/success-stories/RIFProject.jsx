// src/pages/success-stories/rif-project/RIFProject.jsx
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

function RIFProject() {
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
        style={{ backgroundImage: 'url(/images/sucses.png)' }}
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
                Inspiring Success Stories: How RIF Project Transformed Women's Lives
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
                className="mb-12 text-center"
              >
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 rounded-xl">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Inspiring Success Stories of How RIF Project Changed This Woman's Life
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
                  </div>
                </div>

                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <h3 className="text-xl font-bold text-gray-800">W/r Mayrem Mohammed</h3>
                  <p className="mt-2 text-teal-600">A Story of Healing, Hope, and Community Transformation</p>
                </div>
              </motion.section>

              {/* Story Content */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - The Problem */}
                  <div className="space-y-6">
                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">The Context</h3>
                      </div>
                      
                      <p className="text-gray-700">
                        During monitoring and supportive supervision on our Reproductive Innovative Fund (RIF) project in Afar Region, community mobilization group activities – Be Model Woman (BMW), a group of volunteer women organized to raise knowledge and awareness in the pastoral community on the benefits of Reproductive Maternal and Neonatal Health (RMNH) services using different approaches.
                      </p>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">The Discovery</h3>
                      </div>
                      
                      <p className="text-gray-700">
                        The group invited us to visit a woman who has lived with prolapsed uterus for 12 years. The story deals directly with problem of home delivery by Traditional Birth Attendants (TBAs) and the impact RIF project has had in changing the pastoral communities' attitudes toward RMNH issues and related health services.
                      </p>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Mayrem's Story</h3>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          This is the story of w/r Mayrem Mohammed who has lived with prolapsed uterus for the past twelve years, hiding her problem undisclosed to her villagers. She said: "I was prolapsed during the birth of my second child; the TBA who assisted me didn't help or advise me on where to get the proper treatment, she only told me that my prolapsed uterus will recover after sometime, but it hasn't."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - The Solution */}
                  <div className="space-y-6">
                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">The Community</h3>
                      </div>
                      
                      <p className="text-gray-700">
                        She said that she had asked her husband repeatedly to take her for treatment but he refused and abandoned her with their two children and married another woman. Mayrem lives in Ayssaita 01 kebele where alignAfrica and AFDA RIF's partnership project is being implemented.
                      </p>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">The Coffee Ceremony</h3>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          BMW group members organize coffee ceremonies to raise awareness on RMNH and related issues - fistula and harmful traditional practices (HTP). Mayrem had the opportunity to attend village coffee ceremony prepared by W/r Zehara Ali, BMW group member, she then disclosed her problem to W/r Zehara.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">The Intervention</h3>
                      </div>
                      
                      <p className="text-gray-700">
                        W/r Zehara consulted her husband in regard to her treatment and asked his support which he refused. She then took her to Ayssaita Hospital where she was successfully treated, and brought the case of her husband's neglect of his wife treatment for decade long, to Afar Traditional Governance System "Fe'ema" in their constituency.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Resolution Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Justice and Reconciliation</h3>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700">
                      The 'Fe'ema' punished the husband and decided to pay moral compensation to his wife and they reconciled. At the time of this report, Mayrem was four months pregnant and attending ANC and leading a happy life.
                    </p>
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
                      "I did not know about reproductive health services and related issues – like my case, which for a long time I thought was a curse, but I have learned that it won't happen again to any woman in my village."
                    </p>
                    <footer className="font-semibold">— Mayrem Mohammed</footer>
                  </blockquote>
                </div>
              </motion.section>

              {/* Reflection Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Gratitude and Hope</h3>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        She is grateful for the awareness and knowledge she gained by attending W/r Zehara's coffee ceremony. "My miserable life would have continued as it was in the past 12 years, if it wasn't for W/r Zehara's awareness raising events and dedication to stop pastoral women reproductive health problems."
                      </p>
                    </div>
                  </div>

                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Project Impact</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Through addressing the misconceptions and lack of knowledge on the benefits of RMNH services, stigma related to fistula and prolapsed uterus and increasing awareness through social mobilization using the existing pastoral social networks called Dagu.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Elements Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Key Project Elements</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-teal-100 rounded-lg">
                          <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="mb-2 font-bold text-gray-800">Be Model Woman (BMW)</h4>
                      <p className="text-sm text-gray-600">Volunteer women raising RMNH awareness</p>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-teal-100 rounded-lg">
                          <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="mb-2 font-bold text-gray-800">Coffee Ceremonies</h4>
                      <p className="text-sm text-gray-600">Community awareness events</p>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-teal-100 rounded-lg">
                          <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="mb-2 font-bold text-gray-800">Traditional Governance</h4>
                      <p className="text-sm text-gray-600">Afar "Fe'ema" system for justice</p>
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
                  Support Women's Health and Empowerment
                </h3>
                <p className="mb-6 text-lg text-teal-100 sm:text-xl">
                  Help us reach more women like Mayrem with reproductive health services and education
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-teal-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-teal-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support RMNH Programs
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

export default RIFProject;