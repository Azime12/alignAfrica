// src/pages/success-stories/target-project/TargetProject.jsx
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

  // Main color #1e9e96 and variations
  const mainColor = '#1e9e96';
  const colorVariants = {
    light: '#e6f7f5',
    medium: '#1e9e96',
    dark: '#1a8a83'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fdfc' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/target-project-banner.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 158, 150, 0.7)' }}></div>
        <div className="relative flex items-center h-full">
          <div id="header-content" className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
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
                className="text-lg text-white/90 sm:text-xl md:text-2xl"
              >
                Transforming Education through Community Engagement
              </motion.p>
            </motion.div>
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
                brandColor="custom"
                customColor={mainColor}
                enableAnimations={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full pb-20 lg:w-3/4 sm:pb-24 lg:pb-0">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
              style={{ borderColor: colorVariants.light }}
            >
              {/* Main Title */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: colorVariants.light }}>
                    <svg className="w-8 h-8" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl" style={{ color: mainColor }}>
                      Days of Training Solves the School's Age Problem
                    </h2>
                    <p className="text-center" style={{ color: mainColor }}>Wibur Primary and Secondary School, Gambella Town</p>
                  </div>
                </div>
              </motion.section>

              <div className="column-group lg:flex lg:gap-8">
                {/* Left Column */}
                <div className="column column-left lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">PTSA Chairman's Perspective</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        I am the chairman of the Parents, Teachers and Students Association (PTSA) at Wibur Primary and Secondary School in Gambella Town Administration. For years we have had a problem with lack of fence in the school compound and the intruders have been coming into the school compound to commit crimes and it is difficult for teachers to control the students during the reporting times even when the gate is locked as they are coming from different directions.
                      </p>
                      
                      <p className="mb-4 text-gray-700">
                        Additionally, the school has been struggling with floods during the raining seasons for many years and it affects the operations and performance of the school since the school sits on a flat land. Furthermore, this school is one of the highly populated schools in Gambella Town but with limited resources. In the classrooms, 4 students sit on a single desk contrary to the requirement of 2 students per desk.
                      </p>
                      
                      <p className="text-gray-700">
                        Lack of enough desks makes it difficult for students to write and complete their assignments on time and it affects their performances. And even though the community was concerned with these problems in the school, there was no system of engaging the community to help alleviate the problems due to weak PTA in the school.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #f0f9f8, white)' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">The Challenge of Engagement</h3>
                      <p className="text-gray-700">
                        There was poor engagement of the school with the community and parents could not even attend to meetings called by the school and I was left alone as the chairman to deal with the principal and we have not been fruitful in solving any of these problems.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">The Intervention</h3>
                      <p className="mb-4 text-gray-700">
                        alignAfrica with the support of Education Development Trust and funds from FCDO held a series of meetings with our school leaders and Woreda Education Offices (WEOs) to discuss on the status of PTSAs in schools. From the discussions it was clear that the PTAs are not functional at all in all the schools.
                      </p>
                      
                      <p className="mb-4 text-gray-700">
                        As an immediate action point, it was agreed that all the schools to select new PTSA members with close supervision of the WEOs. In Wibur School, a PTSA of 6 members was established comprising of 3 parents, 2 teachers and 1 student and I retained the chairmanship.
                      </p>
                      
                      <p className="text-gray-700">
                        alignAfrica thereafter conducted several trainings for us and the members Kebele Education and Training Board (KETB) to build our capacities on how we can engage the communities to support the school and interface meeting held with us to increase our awareness on our roles and responsibilities and how we can participate in improving the quality of education in our school.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #f0f9f8, white)' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Remarkable Success</h3>
                      <p className="mb-4 text-gray-700">
                        Thanks to those trainings we have been very successful in organizing meetings with the parents in school and we have mobilized them to contribute funds and by the end of the first semester 2014 E.C. we have received ETB 95,875.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          <span className="font-bold" style={{ color: mainColor }}>Funds Utilization:</span> These funds will be used to fence the school, construct a drainage system and purchase 100 combined desks for students in classrooms.
                        </p>
                      </div>
                      
                      <p className="text-gray-700">
                        The mobilization is going on well and will continue in the second semester and we are hoping to raise more funds to support the school in other areas. The PTSAs have placed themselves strategically in the community, some members are based in Kebele Office and others in school while executing their daily activities of the school, and this will help in gaining the support of the community leaders whenever needed.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="mt-8 column column-right lg:w-1/2 lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Key Insight</h3>
                      <div className="p-4 italic text-center rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: `linear-gradient(to right, ${colorVariants.light}, #f0f9f8)` }}>
                        <p className="text-lg text-gray-700">
                          "For sure community is key in attaining quality education and schools should organize themselves especially through PTSAs before approaching the communities for support."
                        </p>
                      </div>
                      <p className="mt-4 text-gray-700">
                        Involving the community in the design and planning of School Improvement Programmes (SIP) will ensure that the community is engaged with the school from the beginning of the plan and will support the schools when there is need in implementing the plan.
                      </p>
                    </div>

                    {/* Image Gallery */}
                    <div className="space-y-6">
                      <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src="/images/target-project.jpg" 
                            alt="Meetings with school directors and education officials" 
                            className="w-full h-auto rounded-xl"
                          />
                        </div>
                        <p className="mt-3 text-center text-gray-600">
                          The above photo shows meetings held with the school directors and education officials to discuss on the status of PTSAs in schools
                        </p>
                      </div>

                      <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="overflow-hidden rounded-xl">
                            <img 
                              src="/images/target-project2.jpg" 
                              alt="Training session for PTSA members" 
                              className="object-cover w-full h-48 rounded-xl"
                            />
                          </div>
                          <div className="overflow-hidden rounded-xl">
                            <img 
                              src="/images/target-project3.jpg" 
                              alt="Capacity building training" 
                              className="object-cover w-full h-48 rounded-xl"
                            />
                          </div>
                        </div>
                        <p className="mt-3 text-center text-gray-600">
                          The photos show the PTSAs, KETBs and school management members who received the trainings in Gambella Town to build their capacity in community engagement
                        </p>
                      </div>
                    </div>

                    {/* Impact Statistics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: `linear-gradient(to right, ${colorVariants.light}, #e6f7f5)` }}
                    >
                      <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">TARGET Project Impact</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: mainColor }}>ETB 95,875</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Funds Raised</div>
                          <div className="mt-1 text-xs text-gray-600">First semester 2014 E.C.</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: mainColor }}>100+</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Desks to Purchase</div>
                          <div className="mt-1 text-xs text-gray-600">Combined desks for students</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: mainColor }}>6</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">PTSA Members</div>
                          <div className="mt-1 text-xs text-gray-600">3 parents, 2 teachers, 1 student</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: mainColor }}>3</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Key Projects</div>
                          <div className="mt-1 text-xs text-gray-600">Fence, drainage, desks</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Partners Section */}
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f8fdfc' }}>
                      <h3 className="mb-4 text-xl font-bold text-gray-800">Project Partners</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col items-center p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <div className="p-2 mb-2 rounded" style={{ backgroundColor: 'white' }}>
                            <svg className="w-8 h-8" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-center text-gray-800">alignAfrica</span>
                        </div>
                        
                        <div className="flex flex-col items-center p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <div className="p-2 mb-2 rounded" style={{ backgroundColor: 'white' }}>
                            <svg className="w-8 h-8" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-center text-gray-800">Education Development Trust</span>
                        </div>
                        
                        <div className="flex flex-col items-center p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <div className="p-2 mb-2 rounded" style={{ backgroundColor: 'white' }}>
                            <svg className="w-8 h-8" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-center text-gray-800">FCDO</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Key Achievements */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: `linear-gradient(to right, ${colorVariants.light}, #e6f7f5)` }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Project Achievements</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Functional PTSA Established</h4>
                          <p className="text-sm text-gray-600">6-member committee with clear roles and responsibilities</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Community Mobilized</h4>
                          <p className="text-sm text-gray-600">Parents actively participating and contributing funds</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Critical Funds Raised</h4>
                          <p className="text-sm text-gray-600">ETB 95,875 for school infrastructure improvements</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Capacity Building</h4>
                          <p className="text-sm text-gray-600">Training for PTSA and KETB members on community engagement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <div className="p-8 text-center text-white shadow-lg rounded-xl sm:rounded-2xl" style={{ background: `linear-gradient(to right, ${mainColor}, ${colorVariants.dark})` }}>
                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                    Support Education Transformation
                  </h3>
                  <p className="mb-6 text-lg text-white/90 sm:text-xl">
                    Help more schools engage their communities for better education outcomes
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:opacity-90 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                      style={{ color: mainColor }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Support TARGET Project
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
                </div>
              </motion.section>
            </motion.article>
          </main>
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
          style={{ background: `linear-gradient(to right, ${mainColor}, ${colorVariants.dark})` }}
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
            brandColor="custom"
            customColor={mainColor}
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