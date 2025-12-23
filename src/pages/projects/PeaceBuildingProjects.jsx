// src/pages/projects/peace-building/PeaceBuilding.jsx
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

function PeaceBuilding() {
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/pc-building.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-green-900/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                PEACE BUILDING
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-emerald-100 sm:text-xl md:text-2xl"
              >
                Sport for Development and Peace Building
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
                brandColor="emerald"
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
              {/* Section 1: Main Title & Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Sport for Development and Peace Building</h2>
                    <p className="text-emerald-600">Promoting Health, Inclusion, and Peace Through Sports</p>
                  </div>
                </div>
              </motion.section>

              {/* Section 2: Benefits Grid */}
              <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Health Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-full p-6 border border-emerald-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Promoting Health and Preventing Disease</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Prevents and manages chronic disease</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Prevents and manages infectious disease</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Enhances mental health</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Reduces direct and indirect health care costs</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Disability Inclusion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="h-full p-6 border border-emerald-200 rounded-xl bg-gradient-to-br from-green-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Inclusion of Persons with Disabilities</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Reduces stigma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Enhances socialization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Enables independence and participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Contributes to empowerment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Fosters greater inclusion</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Peace Building */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="h-full p-6 border border-emerald-200 rounded-xl bg-gradient-to-br from-teal-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Building Social Inclusion and Peace</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-700">Promotes social inclusion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-700">Provides respite in periods of conflict</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-700">Builds trust between groups in conflict</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-700">Builds peace in post-conflict situations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-700">Promotes a culture of peace</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Section 3: Program Activities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 mb-6 border border-emerald-200 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-100">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">alignAfrica Peace Building, Cohesion & Reconciliation Program</h2>
                  </div>
                  <p className="text-gray-700">
                    alignAfrica uses the power of Sport to educate and empower students to overcome the effects of poverty, conflict, and disease in disadvantaged communities. alignAfrica's educational sport games engage students to participate in its programs through the Reflect-Connect-Apply approach. This approach encourages students to examine their experiences, relate those experiences to what they already know, and apply that learning to their daily lives.
                  </p>
                </div>
              </motion.section>

              {/* Section 4: Program Focus Areas */}
              <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-3">
                {[
                  {
                    title: "Enhancing Education Quality",
                    description: "alignAfrica uses sport as a primary teaching tool to engage students and improve learning outcomes. Teachers integrate the core principles of sport into the classroom, such as inclusion and child protection, breaking down exclusionary attitudes and behaviors over time.",
                    color: "emerald",
                    icon: "School"
                  },
                  {
                    title: "Transforming Health Practices",
                    description: "This program fosters the health and well-being of children and youth by equipping students with the knowledge and skills they need for positive behavior change related to HIV and AIDS, malaria, sexual and reproductive health, and water and sanitation health.",
                    color: "green",
                    icon: "Heart"
                  },
                  {
                    title: "Building Peaceful Communities",
                    description: "alignAfrica's sports programs foster increases in acceptance, peer support, and integration amongst groups that were previously in conflict by encouraging diverse children and youth to join together through peace-building activities.",
                    color: "teal",
                    icon: "Users"
                  }
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className={`h-full p-6 border border-${area.color}-200 rounded-xl bg-gradient-to-br from-${area.color}-50 to-white`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 bg-${area.color}-100 rounded-lg`}>
                          <svg className={`w-6 h-6 text-${area.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {area.icon === "School" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />}
                            {area.icon === "Heart" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                            {area.icon === "Users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />}
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-800">{area.title}</h3>
                      </div>
                      <p className="text-gray-700">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Section 5: Images Grid */}
              <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="overflow-hidden shadow-lg rounded-xl"
                >
                  <img 
                    src="/images/buildpc.jpg" 
                    alt="Peace Building Activities" 
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50">
                    <p className="text-sm font-medium text-center text-gray-700">Peace building and community cohesion activities</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="overflow-hidden shadow-lg rounded-xl"
                >
                  <img 
                    src="/images/peacebu.jpg" 
                    alt="Sports Events for Peace" 
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50">
                    <p className="text-sm font-medium text-center text-gray-700">Inclusive sports competitions promoting peace</p>
                  </div>
                </motion.div>
              </div>

              {/* Section 6: Additional Benefits */}
              <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
                {/* Child & Youth Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="h-full p-6 border border-emerald-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Strengthening Child & Youth Development</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Enhances physical health and development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Fosters psychosocial health and development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Builds life skills and positive values</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Helps recover from trauma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                        <span className="text-gray-700">Strengthens education</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Gender Equity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="h-full p-6 border border-emerald-200 rounded-xl bg-gradient-to-br from-green-50 to-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Promoting Gender Equity</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Enhances health and well-being</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Fosters self-esteem and empowerment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Facilitates social inclusion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Challenges gender norms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Provides leadership opportunities</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Section 7: Sport Protection Approach */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mb-12"
              >
                <div className="p-6 border border-emerald-200 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-100">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Sport for Protection Approach</h2>
                  </div>
                  <p className="mb-6 text-gray-700">
                    The Sport for Peace building approach is about much more than simply providing opportunities for exercise and recreation. It uses sport as a tool to support children and youth to develop life skills and capacities to protect themselves whilst providing opportunities for meaningful engagement with positive role models in a safe and inclusive space.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Child protection",
                        description: "Seeks to protect young people from harm and reduce the risk of abuse, neglect, exploitation and violence"
                      },
                      {
                        title: "Youth empowerment",
                        description: "Identifies and encourages the use of young people's assets and potential"
                      },
                      {
                        title: "Sport for development and peace",
                        description: "Provides an efficient, flexible and cost-effective way of promoting peace and development across societies"
                      }
                    ].map((sector, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/80">
                        <h4 className="mb-2 font-semibold text-gray-800">
                          <span className="text-emerald-600">•</span> {sector.title}:
                        </h4>
                        <p className="text-gray-700">{sector.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Section 8: Different Sports Events */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-12"
              >
                <div className="p-6 border border-emerald-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Different Sports Events</h2>
                  </div>
                  <p className="text-gray-700">
                    Facilitating access to playing sport games also means giving talented host communities and refugees the opportunity to compete in sport at the highest level. In the Gambella region, we have been able to see the contribution of sports to peace and development by participating in all-inclusive sports competition games.
                  </p>
                </div>
              </motion.section>

              {/* Section 9: Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-emerald-600 to-green-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Join Us in Building Peace Through Sports
                </h3>
                <p className="mb-6 text-lg text-emerald-100 sm:text-xl">
                  Help us promote peace, inclusion, and development through sports programs
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-emerald-700 hover:bg-emerald-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Support Our Mission
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Explore Other Projects
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-emerald-600 to-green-600 rounded-t-2xl"
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
            brandColor="emerald"
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

export default PeaceBuilding;