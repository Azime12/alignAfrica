// src/pages/projects/youth-voice-ethiopia/YouthVoiceEthiopia.jsx
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

function YouthVoiceEthiopia() {
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
        style={{ backgroundImage: 'url(/images/youthvoice.jpg)' }}
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
                YOUTH VOICE ETHIOPIA
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Empowering Youth for Socioeconomic Entitlements and Policy Dialogue
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
              {/* Phase 1 Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - Phase 1 Content */}
                  <div className="space-y-6">
                    {/* Main Image */}
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/youthmgam.jpg" 
                        alt="Youth Voice Ethiopia Phase 1 Activities"
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <p className="text-sm font-medium text-center text-gray-700">
                          Youth engagement activities in Gambella Region
                        </p>
                      </div>
                    </div>

                    {/* Phase 1 Title */}
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">
                        Youth Voice Ethiopia Phase 1: Youth Engagement for Women's Socioeconomic Entitlements and Policy Dialogue in the Developing Regions of Ethiopia Project
                      </h2>
                      
                      <p className="text-gray-700">
                        This is a youth development program implemented throughout Ethiopia by 5 Ethiopian CSOs with Talent Youth Association (TaYA) as the lead partner. alignAfrica is implementing in Lare Woreda, Nuer Zone, Gambella Region for a period of 18 months which commenced in November 2019 and is expected to be completed in April 2021. This project is fully funded by Civil Society Support Programme Phase 2 (CSSP2).
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Project Details */}
                  <div className="space-y-6">
                    {/* Project Objective */}
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Project Objective</h3>
                      </div>
                      
                      <p className="text-gray-700">
                        The objective of the program is to augment the active participation of youth; youth lead CSOs on an inclusive democracy, good governance and peaceful co-existence processes in the Developing Regions of Ethiopia.
                      </p>
                    </div>

                    {/* Beneficiaries */}
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Phase 1 Beneficiaries</h3>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          The project has so far benefited <span className="font-bold text-blue-600">2,640 young people</span> living in Lare Woreda (1,478 are females and 1,462 males) which includes government officials.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Phase 1 Results Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="overflow-hidden shadow-lg rounded-xl">
                  <img 
                    src="/images/youthgam.jpg" 
                    alt="Youth Voice Ethiopia Phase 1 Results"
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105 sm:h-72 md:h-80"
                  />
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <p className="text-sm font-medium text-center text-gray-700">
                      Youth-led initiatives and community engagement activities
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phase 2 Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="p-6 mb-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Venerating Youth Voice Ethiopia Project Phase 2</h2>
                  </div>
                  
                  <p className="text-gray-700">
                    alignAfrica was implementing a project titled 'Youth Voice Ethiopia: Youth Engagement for women's socioeconomic entitlements and Policy Dialogue in the developing regions of Ethiopia' as a co-applicant along with other four CSOs where Talent Youth Association was a lead. alignAfrica's implementation area was at Lare Woreda in Nuer Zone of Gambella regional state.
                  </p>
                </div>
              </motion.section>

              {/* Achievements and Implementation */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - Project Structure */}
                  <div className="space-y-6">
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Youth Structures and Institutions</h3>
                      <p className="mb-4 text-gray-700">
                        The strategic grant project that was implemented for 18 months from November 2019 to April 2021 resulted in strong youth structures in Lare Woreda including youth centres and structured such as Lare youth association.
                      </p>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-gray-700">
                          The intervention supported by CSSP2, partnership and collaboration among citizens and youth-led /focused institutions are fostered; Moreover, youth and youth-led institutions engaged in social accountability process to claim inclusive democracy, good governance, and social entitlements.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Social Accountability Framework</h3>
                      <p className="text-gray-700">
                        These youth institutions in the Lare Woreda were strengthened to claim inclusive democracy, good governance, and social entitlements collectively – so that collaboration among youth and their institutions; and with government strengthened, social accountability framework exercised to ensure youth participation in making sure proper delivery of basic services to youth and other community members; and also make service providers accountable to citizens.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Committees and Clubs */}
                  <div className="space-y-6">
                    <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Committee and Club Establishment</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg">
                          <h4 className="mb-2 font-semibold text-gray-800">Social Accountability Committee (SAC):</h4>
                          <p className="text-gray-700">
                            Established and trained members on social accountability and Human Rights Based Approach (HRBA) in development. Other youth and government officials also trained on same to facilitate inclusion and promotion of rights for hard to reach people including women, youth with disability, and minorities such as Anuak clans residing in Lare Woreda.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-white rounded-lg">
                          <h4 className="mb-2 font-semibold text-gray-800">Peace and Co-existence Clubs:</h4>
                          <p className="text-gray-700">
                            The project has also established 5 youth-led peace and co-existence clubs which comprise of 40 members drawn from 28 kebeles of Lare Woreda were established and have been meeting monthly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Impact and Results */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50">
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Project Impact and Results</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        As a result of the interventions of the clubs, there has been increased awareness on the concepts of active citizenship and social cohesion among the community members throughout Lare woreda, and peace and social cohesion has been fostered.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Indigenous Conflict Resolution:</h4>
                      <p className="text-gray-700">
                        The project was able to adapt and facilitate use of indigenous conflict resolution, mediation, and alternative dispute resolution mechanisms to resolve various youth issues. These mechanisms were used for facilitation of youth-led inter-ethnic dialogue and partnership conferences, dialogue sessions, youth-led art, culture and sport events for peaceful co-existence and inter-regional experience exchange sessions.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-800">Election Participation:</h4>
                      <p className="text-gray-700">
                        Efforts were made to make sure that youth in the target Woreda, as part of an emerging region, take part in the 2021 Ethiopian National election and be active participants. For this, election promoter youth training provided, voters' education for election awareness raising sessions and youth led debate sessions organized.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Expansion Plans */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Project Expansion and Future Plans</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        All these enable the project to strengthen nation-building and peaceful co-existence. However; additional efforts are need in the same Woreda to deepen the results scored so far and ensure sustainably strengthened youth structures in Lare Woreda.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        It is also crucial to spread these efforts to other Woredas of Nuer Zone so that that can be a very good input to undertake regional level advocacy on youth issues and promote youth voice with proper participation as well inclusion of women youth and youth with various forms of disabilities.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        Hence, alignAfrica envisioned scaling up these changes in other four Woredas in Nuer Zone of Gambella regional state and deepening the results that have been achieved in the previous target Woreda, Lare. This is with the intention to test the mechanisms and then move up to engage with regional level concerned government offices and governing bodies to improve proper engagement as well as policy advocacy to promote fulfilment of rights and services for youth in the entire region including women, youth disabilities and social minorities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Project Goal and Targets */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Overall Goal */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Overall Project Goal</h3>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        The <span className="font-bold text-blue-600">overall goal of the project</span> is to enhance engagement and participation of youth and their structures and/or institutions on their own socio economic issues through promoting inclusiveness of women, youth with disabilities, and youth from social minorities; strengthened dialogue among youth and with government through sustainable platforms to value voices of youth for meaningful level of engagement on socioeconomic and good governance in Nuer Zone of Gambella National Regional State of Ethiopia.
                      </p>
                    </div>
                  </div>

                  {/* Targets and Beneficiaries */}
                  <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Project Targets</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-indigo-600">Phase 1:</span> Reached 7,910 young boys and girls (50% young women)
                        </p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-indigo-600">Phase 2:</span> Target additional 5,455 young boys and girls (45% young women) – total targets for 18 months being 13,365 young boys and girls (48% young women)
                        </p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-indigo-600">Youth with Disabilities:</span> 90 addressed in first 6 months, 110 in later 12 months
                        </p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-indigo-600">Total Beneficiaries:</span> 13,040 (48% young women) in first phase, 19,610 in later phase
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
                transition={{ delay: 1.0 }}
                className="mb-12"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Project Impact Statistics</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">2,640</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Phase 1 Beneficiaries</div>
                      <div className="mt-1 text-sm text-gray-600">Lare Woreda youth reached</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">5</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Peace Clubs</div>
                      <div className="mt-1 text-sm text-gray-600">Youth-led co-existence clubs</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">28</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Kebeles Covered</div>
                      <div className="mt-1 text-sm text-gray-600">Across Lare Woreda</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-blue-600">18</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Months Duration</div>
                      <div className="mt-1 text-sm text-gray-600">Nov 2019 - Apr 2021</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Amplify Youth Voices in Ethiopia
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Support youth engagement in democracy, governance, and socioeconomic development
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Youth Empowerment
                  </a>
                  <a 
                    href="/projects/youth-empowerment" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

export default YouthVoiceEthiopia;