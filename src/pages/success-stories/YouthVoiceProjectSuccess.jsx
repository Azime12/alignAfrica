// src/pages/success-stories/youth-voice/YouthVoiceProjectSuccess.jsx
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

function YouthVoiceProjectSuccess() {
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
        style={{ backgroundImage: 'url(/images/larewereda-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-emerald-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                YOUTH VOICE SUCCESS STORY
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-teal-100 sm:text-xl md:text-2xl"
              >
                Voices of Youth Amplified in Lare Woreda
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Voices of Youth Amplified in Lare Woreda
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
                  </div>
                </div>
              </motion.section>

              {/* Before the Project Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">The Challenge: Before Youth Voice Ethiopia</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        In Lare Woreda, Gambella Region, the participation of youth in decision making was very minimal. You could find that in every 10 officials only 1 was youth. The cabinet was dominantly comprised of the older officials and the few youth who managed to get a position was a junior officer despite their educational backgrounds.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Clan-Based Leadership System:</h4>
                      <p className="text-gray-700">
                        Selection of leaders was based on clans, connections and favoritisms. You could find a very old person leading a certain office not because he has vast experience in executing the office's duties and mandates but because his clan is the strongest/powerful at the time and he is favored by the clan.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        And if the winds of power change, the new clan in power will immediately dismiss him and install their favorite from their clan. This system of leadership selection has curtailed many young people with great potential to bring change in their communities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Two Column Layout - Problem and Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - The Consequence */}
                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">The Cost of Exclusion</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Many youth have been shut out and many more have resorted to cross the river and join the rebels in South Sudan despite their educational achievements.
                      </p>
                    </div>
                    
                    <div className="p-4 mt-4 rounded-lg bg-gradient-to-r from-teal-100 to-emerald-100">
                      <p className="font-semibold text-gray-800">
                        Youth Voice Ethiopia Project came as a blessing to the youth in Lare Woreda at a time when divine intervention was much needed.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - The Intervention */}
                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">The Intervention</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        With the generous support from CSSP2, the project established different platforms which were strengthened to work towards contributing to good governance, inclusive democracy and social accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Platform Establishment */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Platforms Established by Youth Voice Project</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-teal-100 rounded">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800">Youth-led Social Accountability Committee (SAC)</h4>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-teal-100 rounded">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800">Lare Woreda Youth and Community Volunteer Coalition Support Group</h4>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-teal-100 rounded">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800">Lare Woreda Peace and Co-existence Clubs</h4>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-teal-100 rounded">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800">Permanent Platform of Citizens (Youth) and State</h4>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-teal-100 rounded">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800">Social Media Group of Youth</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Activities Conducted */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Project Activities and Interventions</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Inter-Ethnic Dialogue and Partnership Conferences:</h4>
                      <p className="text-gray-700">
                        Conducted to identify the causes of conflicts and their solutions through dialogues with youth and elders on tradition reconciliation mechanisms with the adaptation of alternative mechanisms of conflict resolution.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Cultural and Sports Events:</h4>
                      <p className="text-gray-700">
                        Conducted to create awareness in the community on peaceful co-existence with different clans.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Policy Dialogue Sessions:</h4>
                      <p className="text-gray-700">
                        Conducted critiques on policies relating to youth, women, health, education and job creation.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Social Accountability Training:</h4>
                      <p className="text-gray-700">
                        Both the youth and government officials were trained on social accountability and evaluation done using community score card on education, health, employment, youth and women sectors in the woreda.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Results Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Significant Results */}
                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Significant Results Achieved</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Significant results have been seen in the woreda. One is that the woreda is ready to embrace inclusive democracy and good governance by giving the opportunity to youth to participate in the upcoming general elections.
                      </p>
                    </div>
                    
                    <div className="p-4 mt-4 rounded-lg bg-gradient-to-r from-teal-100 to-emerald-100">
                      <p className="font-semibold text-gray-800">
                        It has been decided that in the upcoming elections at least 10 of the candidates for the Prosperity Party must be youth in each kebele. 10 youths in each kebele is a very big change!
                      </p>
                    </div>
                  </div>

                  {/* The Impact */}
                  <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">The Impact</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          The youth now have the chance to voice their concerns and at least the youth with relevant education will get the chance to lead their communities for positive sustainable change.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-semibold">"Youth have great potential if given the chance to participate in communities."</span>
                        </p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          Information is power. The older regime of clans acted out of ignorance, through the project interventions they understood their place in the society as advisors and to leave the active participation for youth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Gallery Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="overflow-hidden shadow-lg rounded-xl">
                    <img 
                      src="/images/larewereda.jpg" 
                      alt="Youth activities in Lare Woreda"
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50">
                      <p className="text-sm text-center text-gray-700">
                        Youth engagement activities in Lare Woreda
                      </p>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden shadow-lg rounded-xl">
                    <img 
                      src="/images/larewereda2.jpg" 
                      alt="Community meetings in Lare Woreda"
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50">
                      <p className="text-sm text-center text-gray-700">
                        Community dialogue and partnership conferences
                      </p>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden shadow-lg rounded-xl">
                    <img 
                      src="/images/larewereda3.jpg" 
                      alt="Youth leadership training in Lare Woreda"
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50">
                      <p className="text-sm text-center text-gray-700">
                        Youth leadership and capacity building
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Before vs After Comparison */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-12"
              >
                <div className="p-6 border border-teal-200 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Transformation in Lare Woreda</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-xl">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">Before Youth Voice Project</h4>
                      </div>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-700">Only 1 youth in every 10 officials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-700">Clan-based leadership selection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-700">Youth excluded from decision-making</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-700">Limited youth participation in governance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">After Youth Voice Project</h4>
                      </div>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-700">10 youth candidates per kebele in elections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-700">Multiple youth platforms established</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-700">Social accountability mechanisms in place</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-700">Active youth participation in governance</span>
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
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Youth Participation in Governance
                </h3>
                <p className="mb-6 text-lg text-teal-100 sm:text-xl">
                  Help us amplify youth voices and promote inclusive democracy
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-teal-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-teal-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Youth Empowerment
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

export default YouthVoiceProjectSuccess;