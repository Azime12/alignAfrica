// src/pages/ethiopians/agriculture/AgricultureEthiopia.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Ethiopians section
const ethiopiansSidebarLinks = [
  { 
    name: "Quick Facts", 
    href: "/ethiopians/quick-facts", 
    icon: "Info" 
  },
  { 
    name: "Facts", 
    href: "/ethiopians/facts", 
    icon: "FileText" 
  },
  { 
    name: "Agriculture", 
    href: "/ethiopians/agriculture", 
    icon: "Tree" 
  },
  { 
    name: "Calendar", 
    href: "/ethiopians/calendar", 
    icon: "Calendar" 
  },
  { 
    name: "Coffee", 
    href: "/ethiopians/coffee", 
    icon: "Coffee" 
  },
  { 
    name: "Education", 
    href: "/ethiopians/education", 
    icon: "Book" 
  },
  { 
    name: "Art", 
    href: "/ethiopians/art", 
    icon: "Palette" 
  },
  { 
    name: "Cities", 
    href: "/ethiopians/cities", 
    icon: "MapPin" 
  },
  { 
    name: "Foods", 
    href: "/ethiopians/foods", 
    icon: "Utensils" 
  },
  { 
    name: "Ethnic Groups", 
    href: "/ethiopians/ethnic-groups", 
    icon: "Users" 
  },
  { 
    name: "Holidays", 
    href: "/ethiopians/holidays", 
    icon: "Gift" 
  },
  { 
    name: "Natural Resources", 
    href: "/ethiopians/natural-resources", 
    icon: "Droplet" 
  },
  { 
    name: "Rural Life", 
    href: "/ethiopians/rural-life", 
    icon: "Home" 
  },
  { 
    name: "Sports", 
    href: "/ethiopians/sports", 
    icon: "Trophy" 
  },
  { 
    name: "Traditional Dress", 
    href: "/ethiopians/traditional-dress", 
    icon: "Shirt" 
  },
  { 
    name: "Lalibela", 
    href: "/ethiopians/lalibela", 
    icon: "Church" 
  }
];

function AgricultureEthiopia() {
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

  // Green/Brown color scheme for Agriculture
  const colorVariants = {
    light: '#d9f7be',
    medium: '#389e0d',
    dark: '#237804'
  };

  const agricultureStats = [
    { label: "GDP Contribution", value: "50%", description: "Agriculture's contribution to Ethiopia's GDP" },
    { label: "Employment", value: "75%", description: "Jobs in agriculture sector" },
    { label: "Coffee Workforce", value: "25%", description: "Ethiopians working in coffee" }
  ];

  const mainCrops = [
    {
      category: "Coffee",
      description: "Largest agricultural export, consumed domestically and internationally",
      importance: "Economic backbone, major export crop",
      icon: "Coffee"
    },
    {
      category: "Cereals",
      description: "Teff (for injera), wheat, barley, millet, sorghum, and corn",
      importance: "Staple food crops, varies by elevation",
      icon: "Wheat"
    },
    {
      category: "Oilseeds",
      description: "Niger seed, sesame seeds, flax seeds, and other oilseeds",
      importance: "Important for orthodox Christians during fasting",
      icon: "Droplet"
    },
    {
      category: "Other Crops",
      description: "Pulses, vegetables, sugarcane, flowers, and cotton",
      importance: "Domestic consumption and export",
      icon: "Leaf"
    }
  ];

  const livestockTypes = [
    { name: "Cattle", icon: "Cow" },
    { name: "Goats", icon: "Goat" },
    { name: "Sheep", icon: "Sheep" },
    { name: "Donkeys", icon: "Donkey" },
    { name: "Camels", icon: "Camel" },
    { name: "Poultry", icon: "Chicken" }
  ];

  const challenges = [
    {
      title: "Drought & Climate",
      description: "Frequent droughts affecting crop yields and causing famines",
      impact: "Economic threat and food security issue"
    },
    {
      title: "Regional Vulnerability",
      description: "Afar and Ethiopian Somalia regions particularly susceptible to drought",
      impact: "Requires specialized irrigation solutions"
    },
    {
      title: "Economic Dependence",
      description: "Heavy reliance on coffee exports makes economy vulnerable",
      impact: "Price fluctuations affect national economy"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f6ffed' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/agri-banner.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(56, 158, 13, 0.7)' }}></div>
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
                  ETHIOPIAN AGRICULTURE
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-white/90 sm:text-xl md:text-2xl"
                >
                  The Backbone of Ethiopia's Economy and Culture
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
                title="Explore Ethiopia"
                links={ethiopiansSidebarLinks}
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
                      <svg className="w-8 h-8" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-center" style={{ color: colorVariants.dark }}>
                    Ethiopian Agriculture
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
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f6ffed' }}>
                      <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: colorVariants.light, borderLeft: `4px solid ${colorVariants.medium}` }}>
                        <p className="text-lg font-semibold" style={{ color: colorVariants.dark }}>
                          Agriculture is critically important to the livelihood of the Ethiopian people. Many people grow their own food and the vast majority of jobs are in agriculture. It is also the largest contributor to the country's economy, making up about half of the country's GDP.
                        </p>
                      </div>
                    </div>

                    {/* Agriculture Statistics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #d9f7be, #b7eb8f)' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Agriculture in Numbers</h3>
                      
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {agricultureStats.map((stat, index) => (
                          <div key={index} className="p-4 text-center bg-white rounded-lg shadow-sm">
                            <div className="mb-2 text-3xl font-bold" style={{ color: colorVariants.dark }}>{stat.value}</div>
                            <div className="mb-1 text-sm font-semibold text-gray-800">{stat.label}</div>
                            <div className="text-xs text-gray-600">{stat.description}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f6ffed' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Coffee - The Economic Backbone</h3>
                      
                      <p className="mb-4 text-gray-700">
                        Coffee is the biggest crop produced, with about one quarter of Ethiopians working in the coffee sector. Coffee is consumed within the nation and is a major export.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="font-semibold text-gray-700">
                          Because coffee is the biggest agricultural export, droughts are an economic threat as well as devastating for the poorest of the poor.
                        </p>
                      </div>
                      
                      <p className="text-gray-700">
                        Other crops include cereals, oilseeds, pulses, vegetables, and sugarcane. Flowers and cotton are grown and exported. Grains are very important crops, especially teff, which is used to make injera. Wheat, barley, millet, sorghum, and corn are grown as well, depending on elevation.
                      </p>
                    </div>

                    {/* Main Crops */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #d9f7be, #b7eb8f)' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Main Agricultural Crops</h3>
                      
                      <div className="space-y-4">
                        {mainCrops.map((crop, index) => (
                          <div key={index} className="p-4 bg-white rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                                <svg className="w-5 h-5" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  {crop.icon === "Coffee" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />}
                                  {crop.icon === "Wheat" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />}
                                  {crop.icon === "Droplet" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />}
                                  {crop.icon === "Leaf" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                                </svg>
                              </div>
                              <div>
                                <h4 className="mb-1 font-bold text-gray-800" style={{ color: colorVariants.dark }}>{crop.category}</h4>
                                <p className="mb-1 text-sm text-gray-600">{crop.description}</p>
                                <p className="text-xs text-gray-500">{crop.importance}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="mt-8 column column-right lg:w-1/2 lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f6ffed' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Oilseeds and Cultural Significance</h3>
                      
                      <p className="mb-4 text-gray-700">
                        Oilseeds are very important to orthodox Christians in Ethiopia because they cannot eat fat made from animals on fasting days. They grow the Niger seed, sesame seeds, and flax seeds, as well as several other oilseeds.
                      </p>
                    </div>

                    {/* Livestock */}
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #d9f7be, white)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Livestock in Ethiopian Agriculture</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        Agriculture includes raising livestock but most livestock is not exported or sold; people raise livestock to provide themselves with meat and milk.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          Livestock includes cattle, goats, sheep, donkeys, camels, horses, mules, and poultry. Leather, leather goods, and hides are manufactured on a relatively small scale for export.
                        </p>
                      </div>

                      <div className="mt-6">
                        <h4 className="mb-3 font-semibold text-gray-800">Common Livestock Types</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {livestockTypes.map((animal, index) => (
                            <div key={index} className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center justify-center w-8 h-8 mb-1 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                                <span className="text-xs font-bold" style={{ color: colorVariants.dark }}>
                                  {animal.name.charAt(0)}
                                </span>
                              </div>
                              <span className="text-xs text-center text-gray-700">{animal.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f6ffed' }}
                    >
                      <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Challenges and Solutions</h3>
                      
                      <div className="space-y-4">
                        {challenges.map((challenge, index) => (
                          <div key={index} className="p-4 bg-white rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                                <div className="text-sm font-bold" style={{ color: colorVariants.dark }}>{index + 1}</div>
                              </div>
                              <div>
                                <h4 className="mb-1 font-bold text-gray-800" style={{ color: colorVariants.dark }}>{challenge.title}</h4>
                                <p className="mb-1 text-sm text-gray-600">{challenge.description}</p>
                                <p className="text-xs text-gray-500">{challenge.impact}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 mt-6 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          Developing its agriculture sector is one way Ethiopia can improve its economy and the living conditions of the poor. But there are many challenges to doing this, especially frequent droughts. When agricultural production drops due to drought, famine occurs. We saw this in the 1980s and are seeing it again in 2016.
                        </p>
                      </div>
                    </motion.div>

                    {/* Our Work */}
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #d9f7be, white)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Our Agricultural Development Work</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        The Afar and Ethiopian Somalia Regions are particularly susceptible to drought. That's why alignAfrica partners with Support for Sustainable Development in Ethiopia to implement irrigation-based, integrated development projects.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="font-semibold text-center text-gray-700">
                          These developments allow people to produce crops, vegetables, and fruits so they have food security and can sell the excess.
                        </p>
                      </div>
                      
                      <p className="text-lg font-semibold text-center text-gray-800">
                        It is exciting to see the impact sustainable agriculture can have!
                      </p>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                      style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
                    >
                      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                        Support Sustainable Agriculture
                      </h3>
                      <p className="mb-6 text-lg text-white/90 sm:text-xl">
                        Help Ethiopian farmers build resilience against drought and improve food security
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
                          Support Agriculture Projects
                        </a>
                        <a 
                          href="/ethiopians" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Explore Ethiopian Culture
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Sustainable Agriculture Initiatives */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #d9f7be, #b7eb8f)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Sustainable Agriculture Initiatives</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Irrigation Projects",
                        description: "Implementing water management systems in drought-prone regions",
                        icon: "Droplet",
                        region: "Afar & Somali Regions"
                      },
                      {
                        title: "Crop Diversification",
                        description: "Promoting varied crops to reduce dependency on single exports",
                        icon: "Layers",
                        region: "Nationwide"
                      },
                      {
                        title: "Food Security",
                        description: "Ensuring communities can produce enough food for themselves",
                        icon: "ShieldCheck",
                        region: "Vulnerable Regions"
                      }
                    ].map((initiative, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                            <svg className="w-6 h-6" style={{ color: colorVariants.dark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {initiative.icon === "Droplet" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />}
                              {initiative.icon === "Layers" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
                              {initiative.icon === "ShieldCheck" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                            </svg>
                          </div>
                          <h4 className="mb-2 font-semibold text-gray-800" style={{ color: colorVariants.dark }}>{initiative.title}</h4>
                          <p className="mb-2 text-sm text-gray-600">{initiative.description}</p>
                          <div className="px-2 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: colorVariants.light, color: colorVariants.dark }}>
                            {initiative.region}
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
            title="Explore Ethiopia"
            links={ethiopiansSidebarLinks}
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

export default AgricultureEthiopia;