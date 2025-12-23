// src/pages/problems/education/EducationProblems.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Problems section
const problemsSidebarLinks = [
  { 
    name: "Education", 
    href: "/problems/education", 
    icon: "Book" 
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
    icon: "Droplet" 
  },
  { 
    name: "Water Security", 
    href: "/problems/water-security", 
    icon: "CloudRain" 
  },
  { 
    name: "Gender Inequality", 
    href: "/problems/gender-inequality", 
    icon: "Users" 
  },
  { 
    name: "Youth Issues", 
    href: "/problems/youth-issues", 
    icon: "User" 
  }
];

function EducationProblems() {
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

  // Yellow color scheme
  const colorVariants = {
    light: '#fefce8',
    medium: '#fbbf24',
    dark: '#d97706'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fffdf4' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/educat-banner.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(251, 191, 36, 0.7)' }}></div>
        <div className="relative flex items-center h-full">
          <div id="header-content" className="container px-4 mx-auto">
            <div id="intro" className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
                >
                  EDUCATION CHALLENGES
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-white/90 sm:text-xl md:text-2xl"
                >
                  Addressing Barriers to Quality Education in Ethiopia
                </motion.p>
              </motion.div>
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
                title="Key Issues"
                links={problemsSidebarLinks}
                brandColor="custom"
                customColor={colorVariants.dark}
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
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: colorVariants.light }}>
                      <svg className="w-8 h-8" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-center" style={{ color: colorVariants.dark }}>
                    EDUCATION CHALLENGES IN ETHIOPIA
                  </h2>
                  <div className="w-24 h-1 mt-4 rounded-full" style={{ backgroundColor: colorVariants.medium }}></div>
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
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/childreneducation.jpg" 
                        alt="Children in Ethiopia attending school" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#fffdf4' }}>
                      <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-lg font-semibold text-center" style={{ color: colorVariants.dark }}>
                          Every child has the right to access safe, quality education.
                        </p>
                      </div>

                      <p className="mb-4 text-gray-700">
                        However, in Ethiopia approximately <span className="font-bold" style={{ color: colorVariants.dark }}>2.6 million children</span> of primary school age are not in school, of which 43 percent are boys and 57 percent girls. Only <span className="font-bold" style={{ color: colorVariants.dark }}>25 per cent</span> of secondary school aged children are enrolled in secondary school.
                      </p>

                      <p className="mb-4 text-gray-700">
                        Girls, children with disabilities, those from minority groups and children living in poor and remote areas are most often denied access to education. This has far-reaching consequences on their futures and those of their families, communities and the country.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #fefce8, white)' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Our Mission</h3>
                      <p className="mb-4 text-gray-700">
                        We promote free, equal access to{' '}
                        <a 
                          href="/pdf/THE RIGHT TO INCLUSIVE EDUCATION-converted.pdf" 
                          className="font-bold hover:underline"
                          style={{ color: colorVariants.dark }}
                        >
                          quality education for all children
                        </a>
                        {' '}– from early learning to secondary education. We work with children, their families, communities, wider society and governments, and advocate at both local and international levels, so that all children are able to get an education.
                      </p>

                      <p className="mb-4 text-gray-700">
                        When you support alignafrica you are helping to build stronger education systems that will provide education to everyone. You are also giving people who missed out on school the chance to gain the skills and knowledge they want and need.
                      </p>

                      <p className="text-gray-700">
                        Everyone deserves an education regardless of age or gender, religion or physical capacity, ethnic group or displacement through conflict. Education is essential if people are to participate in the life of their own communities.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/educationCH.jpg" 
                        alt="Education challenges in Ethiopia" 
                        className="w-full h-auto rounded-xl"
                      />
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
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#fffdf4' }}>
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">Gender Inequality in Ethiopia</h2>
                      <p className="text-gray-700">
                        There is a long history of gender inequality in Ethiopia, with poorer women and girls especially facing multiple disadvantages. The status of women and girls is curtailed when looking at empowerment, gender-based violence, and opportunities for employment. Within the home, preference for male children has been found in regards to education and employment opportunities.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Girls are often faced with the burden of household chores, which for poor families includes many hours each day collecting water, as well as cooking meals and tending younger children – all hindering their ability to attend and perform successfully in school.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #fefce8, white)' }}>
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">Education Situation for Girls</h2>
                      <p className="mb-4 text-gray-700">
                        Ethiopia has made remarkable progress towards girls' education, increasing net primary enrolment rates from 51 per cent in 2003/04 to 95 per cent in 2016/17. However, only 53 per cent complete primary school, 25 per cent of secondary school-aged girls are attending secondary school, and an estimated 10 per cent go on to enroll in college.
                      </p>

                      <p className="mb-4 font-semibold text-gray-800" style={{ color: colorVariants.dark }}>
                        Girls face several challenges in attending safe schools with quality education:
                      </p>

                      <ul className="space-y-3">
                        {[
                          "Too often families favor boys when investing in education. Poverty compounds factors that keep girls out of schools, such as early pregnancy, child labor, house work, and cost and distance to school.",
                          "Girls face harmful social norms. Child marriage rates in the country are some of the highest in the world, impeding girls' chances of completing school.",
                          "Some schools do not meet the needs of girls in terms of safety, available WASH facilities, and quality of education.",
                          "Gender-based violence robs girls of education. Schools have the opportunity to be a safe haven and place to learn about rights against abuse and find help. However, too often cases of school related, gender-based violence occur, including corporal punishment and sexual abuse from peers and authorities.",
                          "Pastoralist, refugee, displaced and poverty-stricken girls face even greater challenges, where their complex circumstances make educational services even more difficult to provide."
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full" style={{ backgroundColor: colorVariants.medium }}>
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#fffdf4' }}>
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">Investing in Girls' Education</h2>
                      <p className="mb-4 text-gray-700">
                        Girls are part of a vibrant new generation in Ethiopia poised to take on their future. Investing in their education allows them to achieve their dreams. It lets them build better lives for themselves and contribute to the health, safety and prosperity of their families and communities.
                      </p>
                      <div className="p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-lg font-semibold text-center" style={{ color: colorVariants.dark }}>
                          Investing in girls' education can bring change in a generation, giving girls opportunities to enjoy the benefits of this education.
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/africhildes.jpg" 
                        alt="African children in school" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    {/* Statistics Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #fefce8, #fef3c7)' }}
                    >
                      <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Education Statistics in Ethiopia</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: colorVariants.dark }}>2.6M</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Out of School</div>
                          <div className="mt-1 text-xs text-gray-600">Primary school age children</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: colorVariants.dark }}>25%</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Secondary Enrollment</div>
                          <div className="mt-1 text-xs text-gray-600">Of secondary school aged children</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: colorVariants.dark }}>57%</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Girls Out of School</div>
                          <div className="mt-1 text-xs text-gray-600">Higher percentage than boys</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold" style={{ color: colorVariants.dark }}>53%</div>
                          <div className="mt-2 text-sm font-semibold text-gray-800">Primary Completion</div>
                          <div className="mt-1 text-xs text-gray-600">Girls completing primary school</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                      style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
                    >
                      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                        Support Education for All
                      </h3>
                      <p className="mb-6 text-lg text-white/90 sm:text-xl">
                        Help us break barriers to education for Ethiopian children
                      </p>
                      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:opacity-90 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                          style={{ color: colorVariants.dark }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Support Education Programs
                        </a>
                        <a 
                          href="/pdf/THE RIGHT TO INCLUSIVE EDUCATION-converted.pdf" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Read Our Report
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Key Issues Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #fefce8, #fef3c7)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Key Barriers to Education</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      {
                        title: "Poverty",
                        description: "Families cannot afford school fees, uniforms, or materials",
                        icon: "CurrencyDollar"
                      },
                      {
                        title: "Distance",
                        description: "Long distances to schools in rural areas",
                        icon: "MapPin"
                      },
                      {
                        title: "Child Labor",
                        description: "Children needed for household or farm work",
                        icon: "Briefcase"
                      },
                      {
                        title: "Early Marriage",
                        description: "Girls forced into marriage before completing education",
                        icon: "Heart"
                      }
                    ].map((issue, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                            <svg className="w-5 h-5" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {issue.icon === "CurrencyDollar" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              {issue.icon === "MapPin" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                              {issue.icon === "Briefcase" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                              {issue.icon === "Heart" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800" style={{ color: colorVariants.dark }}>{issue.title}</h4>
                            <p className="text-sm text-gray-600">{issue.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
          style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
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
            title="Key Issues"
            links={problemsSidebarLinks}
            brandColor="custom"
            customColor={colorVariants.dark}
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

export default EducationProblems;