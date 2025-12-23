// src/pages/solutions/women-empowerment/WomenEmpowermentSolutions.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Solutions section
const solutionsSidebarLinks = [
  { 
    name: "Education", 
    href: "/solutions/education", 
    icon: "Book" 
  },
  { 
    name: "Health", 
    href: "/solutions/health", 
    icon: "Heart" 
  },
  { 
    name: "Livelihood", 
    href: "/solutions/livelihood", 
    icon: "Briefcase" 
  },
  { 
    name: "Partnership", 
    href: "/solutions/partnership", 
    icon: "Handshake" 
  },
  { 
    name: "Water Security", 
    href: "/solutions/water-security", 
    icon: "CloudRain" 
  },
  { 
    name: "Women Empowerment", 
    href: "/solutions/women-empowerment", 
    icon: "UserPlus" 
  },
  { 
    name: "Sanitation & Hygiene", 
    href: "/solutions/sanitation-hygiene", 
    icon: "Droplet" 
  }
];

function WomenEmpowermentSolutions() {
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

  // Green color scheme based on #1c8a24 (same as Education Solutions)
  const mainColor = '#1c8a24';
  const colorVariants = {
    light: '#dcfce7',
    medium: '#1c8a24',
    dark: '#16681d'
  };

  const genderGapBenefits = [
    {
      title: "Increase Food Security",
      description: "Closing the gender yield gap could increase food availability and household level of food security.",
      icon: "ShieldCheck"
    },
    {
      title: "Boost Agricultural Output",
      description: "Increase agricultural output by 2.5-4%, with higher gains in areas where women are more involved.",
      icon: "TrendingUp"
    },
    {
      title: "Reduce Malnutrition",
      description: "Could reduce the number of malnourished people by 12-17%, progressing towards MDG goals.",
      icon: "Heart"
    },
    {
      title: "Improve Resource Access",
      description: "Unlock productivity potential by improving access to land, productive resources and services.",
      icon: "Key"
    },
    {
      title: "Enhance Child Well-being",
      description: "When women control additional income, they spend more on food, health, and education for children.",
      icon: "Users"
    },
    {
      title: "Economic Growth",
      description: "Positive implications for long-term human capital formation and economic growth.",
      icon: "ChartBar"
    }
  ];

  const agricultureStats = [
    { label: "GDP Contribution", value: "45%", description: "Agriculture contribution to overall GDP" },
    { label: "Export Earnings", value: "75%", description: "Generated from agricultural exports" },
    { label: "Raw Material Supply", value: "70%", description: "To secondary activities" }
  ];

  const faoBenefits = [
    "Closing the gender yield gap could increase food availability and household level of food security.",
    "Closing the gender gap in access to and use of land, productive resources and services will unlock the productivity potential of women and could substantially increase the output and ensure sustainability of food production.",
    "Closing the gap could increase agricultural output by 2.5-4%, on average, with higher gains as women are more involved in agriculture and the gender gap is wider.",
    "Increasing agricultural production by this magnitude could reduce the number of malnourished people by 12-17% and would imply significant progress towards achieving the number one Millennium Development Goal.",
    "When women control additional income, they spend more of it than men do on food, health, clothing and education for their children. This has positive implication for immediate well-being as well as long term human capital formation and economic growth through improved health, nutrition and educational outcomes."
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0fdf4' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/womenp1-banner.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 138, 36, 0.7)' }}></div>
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
                  WOMEN'S EMPOWERMENT
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-white/90 sm:text-xl md:text-2xl"
                >
                  Empowering Women for Sustainable Development in Ethiopia
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
                title="Our Solutions"
                links={solutionsSidebarLinks}
                brandColor="custom"
                customColor={colorVariants.medium}
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
                      <svg className="w-8 h-8" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 1.5l-5-5m0 0l-5 5m5-5v12" />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-center" style={{ color: mainColor }}>
                    Women's Empowerment for Sustainable Development
                  </h1>
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
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Agriculture's Role in Ethiopian Economy</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        Agriculture plays an important role in Ethiopian economy. The cycle of destitution will continue until we pull hands and work toward ending gender inequality and empowering women so they can have a brighter future.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-lg font-semibold text-center" style={{ color: mainColor }}>
                          The empowerment of women through provision of activities that can bring them income is a key strategy in the sustainable development of Ethiopia.
                        </p>
                      </div>
                    </div>

                    {/* Agriculture Statistics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Ethiopian Agriculture Statistics (2011)</h3>
                      
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {agricultureStats.map((stat, index) => (
                          <div key={index} className="p-4 text-center bg-white rounded-lg shadow-sm">
                            <div className="mb-2 text-3xl font-bold" style={{ color: mainColor }}>{stat.value}</div>
                            <div className="mb-1 text-sm font-semibold text-gray-800">{stat.label}</div>
                            <div className="text-xs text-gray-600">{stat.description}</div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="mt-6 text-gray-700">
                        According to central statistics agency (2011) agriculture contributes about 45% to the overall gross domestic product (GDP), generates 75% of export earnings and supplies about 70% of the country's raw material to the secondary activities.
                      </p>
                    </motion.div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <p className="mb-4 text-gray-700">
                        Policy makers have acknowledged the importance of smallholder women farmers, in both crop production and livestock sector, by putting in place appropriate policies to improve the situation for women farmers.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="font-semibold text-center text-gray-700">
                          However, there is a gap in tangible evidence that shows the actual contribution women are making to Ethiopian agriculture.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #dcfce7, white)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Change the Situation!</h3>
                      </div>
                      
                      <div className="p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-lg font-bold text-center" style={{ color: mainColor }}>
                          Close the gender gap in access to and use of productive resources and services!
                        </p>
                      </div>
                      
                      <p className="mt-4 text-lg font-semibold text-center text-gray-800">
                        Untouched power of women is poverty alleviators.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="mt-8 column column-right lg:w-1/2 lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Why Close the Gender Gap?</h3>
                      </div>
                      
                      <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          The need and reasons for closing the gender gap have well been documented by the Food and Agriculture Organization of the United Nations (FAO, 2011).
                        </p>
                      </div>

                      {/* FAO Benefits List */}
                      <div className="space-y-4">
                        {faoBenefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg"
                          >
                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                              <div className="text-xs font-bold" style={{ color: mainColor }}>{index + 1}</div>
                            </div>
                            <p className="text-gray-700">{benefit}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Key Benefits of Closing the Gender Gap</h3>
                      
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {genderGapBenefits.map((benefit, index) => (
                          <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                                <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  {benefit.icon === "ShieldCheck" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                                  {benefit.icon === "TrendingUp" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                                  {benefit.icon === "Heart" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                                  {benefit.icon === "Key" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />}
                                  {benefit.icon === "Users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 00-9-5.197m13.5 1.5l-5-5m0 0l-5 5m5-5v12" />}
                                  {benefit.icon === "ChartBar" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-1 font-bold text-gray-800" style={{ color: mainColor }}>{benefit.title}</h4>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Impact Statistics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Potential Impact of Gender Equality</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="mb-2 text-2xl font-bold" style={{ color: mainColor }}>2.5-4%</div>
                          <div className="text-sm font-semibold text-gray-800">Agricultural Output Increase</div>
                          <div className="text-xs text-gray-600">Potential growth from closing gender gap</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="mb-2 text-2xl font-bold" style={{ color: mainColor }}>12-17%</div>
                          <div className="text-sm font-semibold text-gray-800">Reduction in Malnutrition</div>
                          <div className="text-xs text-gray-600">Fewer malnourished people</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="mb-2 text-2xl font-bold" style={{ color: mainColor }}>70%</div>
                          <div className="text-sm font-semibold text-gray-800">Women's Income Allocation</div>
                          <div className="text-xs text-gray-600">Spent on family well-being</div>
                        </div>
                        
                        <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                          <div className="mb-2 text-2xl font-bold" style={{ color: mainColor }}>MDG #1</div>
                          <div className="text-sm font-semibold text-gray-800">Progress Towards</div>
                          <div className="text-xs text-gray-600">Millennium Development Goals</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                      style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
                    >
                      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                        Empower Women, Transform Communities
                      </h3>
                      <p className="mb-6 text-lg text-white/90 sm:text-xl">
                        Join us in closing the gender gap for sustainable development in Ethiopia
                      </p>
                      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:opacity-90 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                          style={{ color: mainColor }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 1.5l-5-5m0 0l-5 5m5-5v12" />
                          </svg>
                          Support Women's Empowerment
                        </a>
                        <a 
                          href="/solutions" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                          Explore More Solutions
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Our Approach Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Our Approach to Women's Empowerment</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Economic Empowerment",
                        description: "Providing income-generating activities and access to productive resources",
                        icon: "CurrencyDollar"
                      },
                      {
                        title: "Agricultural Training",
                        description: "Skills development for women in crop production and livestock management",
                        icon: "Truck"
                      },
                      {
                        title: "Policy Advocacy",
                        description: "Working with policymakers to implement gender-sensitive agricultural policies",
                        icon: "DocumentText"
                      }
                    ].map((approach, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                            <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {approach.icon === "CurrencyDollar" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              {approach.icon === "Truck" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM12 8h4l2 4h2a2 2 0 012 2v4a2 2 0 01-2 2h-8a2 2 0 01-2-2V8z" />}
                              {approach.icon === "DocumentText" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                            </svg>
                          </div>
                          <h4 className="mb-2 font-semibold text-gray-800" style={{ color: mainColor }}>{approach.title}</h4>
                          <p className="text-sm text-gray-600">{approach.description}</p>
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
            title="Our Solutions"
            links={solutionsSidebarLinks}
            brandColor="custom"
            customColor={colorVariants.medium}
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

export default WomenEmpowermentSolutions;