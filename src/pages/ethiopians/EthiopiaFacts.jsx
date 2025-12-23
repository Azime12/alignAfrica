// src/pages/ethiopians/EthiopiaFacts.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Ethiopians section
const ethiopiansSidebarLinks = [
  { 
    name: "Facts", 
    href: "/ethiopians/facts", 
    icon: "Info",
    active: true // Current page
  },
  { 
    name: "Agriculture", 
    href: "/ethiopians/agriculture", 
    icon: "Sprout" 
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
    icon: "School" 
  },
  { 
    name: "Art", 
    href: "/ethiopians/art", 
    icon: "Palette" 
  },
  { 
    name: "Cities", 
    href: "/ethiopians/cities", 
    icon: "Building" 
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
    icon: "PartyPopper" 
  },
  { 
    name: "Natural Resources", 
    href: "/ethiopians/natural-resources", 
    icon: "Mountain" 
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
  },
  { 
    name: "Quick Facts", 
    href: "/ethiopians/quick-facts", 
    icon: "Zap" 
  }
];

function EthiopiaFacts() {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/the-ethiopians-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#77124C]/70 to-[#5a0d39]/60"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                16 FACTS ABOUT ETHIOPIA
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-purple-100 sm:text-xl md:text-2xl"
              >
                Discover the Fascinating Wonders of Ethiopia
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
                title="Explore Ethiopia"
                links={ethiopiansSidebarLinks}
                brandColor="purple"
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
              {/* Main Header */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#77124C20' }}>
                    <svg className="w-8 h-8" style={{ color: '#77124C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">16 Facts About Ethiopia</h1>
                    <p style={{ color: '#77124C' }} className="font-medium">Discover the Unique Characteristics of this African Nation</p>
                  </div>
                </div>
              </motion.section>

              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#77124C10', borderLeft: '4px solid #77124C' }}>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    Ethiopia is a country which has its own distinct alphabet, located in Eastern Africa. It borders Kenya, South Sudan, Somali, Djibouti and Sudan. Here are interesting facts about this African nation:
                  </p>
                </div>
              </motion.section>

              {/* Two Column Layout for Facts */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column - Facts 1-6 */}
                  <div className="space-y-6">
                    {/* Fact 1 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            1
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Addis Ababa, the capital city, is the highest capital city in Africa, at 2,400 metres.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 2 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            2
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia is the second most-populous country in Africa, with a population of over 90 million people by 2015. It is second to Nigeria, which had a population of over 174 million people by 2013.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 3 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            3
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Over 80 languages are spoken in this country. The most widely spoken of these are Amharic and Oromo. The official language of Ethiopian Orthodox Church is Geez Luckily for foreign travelers; English and Arabic are also widely spoken. English is the language of instruction in institutions of higher learning.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 4 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            4
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            The Ark of the Covenant that holds the 10 Commandments of God is in an Orthodox Church in this country. However, only the guardians, most spiritual priests, are actually allowed to see the ark.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 5 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            5
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia is one of only two nations in the world never to have been occupied. This is despite the Italians twice trying and failing to take the country. In case you were wondering, Russia is the other country. It fought against the Scramble for Africa by the Europeans.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 6 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            6
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            The oldest fossil skeleton of a human was discovered in Ethiopia. So too was coffee, making Ethiopia the home of mankind and mankind's favorite wake-up drink. Coffee was discovered in this country, in Kaffa region. A shepherd discovered this famous beverage when his goats ate the leaves and became restless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Facts 7-16 */}
                  <div className="space-y-6">
                    {/* Fact 7 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            7
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia is the only country in Africa with its own distinct alphabet. Actually it uses an Abugida, also known as an alpha-syllabary, which consists of 209 symbols and 25 letter variants.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 8 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            8
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            An Ethiopian Abebe Bikila was the first African won Olympic gold medal, in 1960. He finished the marathon in first place after running the whole race barefoot.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 9 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            9
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            About 70% of the mountains of Africa are in this country.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 10 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            10
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Lake Tana, the largest lake in this country, supplies the Blue Nile River, which feeds the White Nile River before joining the Great Nile River.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 11 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            11
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            This country has been mentioned severally in the Bible and the Quran.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 12 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            12
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia has the most UNESCO World Heritage Sites in Africa. The nine sites are Aksum, Fasil Ghebbi, Harar, Konso Cultural Landscape, and Lower Valley of the Awash, Lower Valley of the Omo, Rock-Hewn Churches of Lalibela, Simien National Park, Tiya, Oromo Errecha Festivality and True Cross Finding Day of the Ethiopian Orthodox Church.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 13 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            13
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopian is the only country in the world who have a Calendar of 13 months and it is 7 ½ years behind the Gregorian calendar. New Year in Ethiopia starts on 11th September and a day later in a leap year, Pagumea which is 5 days in the 3 successive years of time and 6 days in the 4th year.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 14 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            14
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia is the diplomatic capital of the continent, since it hosts the headquarters of Kenya African and international organizations such as the African Union, UN Economic Commission for Africa, UNESCO & UNDP.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 15 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            15
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia's main exports are coffee, hides, oilseeds, beeswax and sugarcane. Ethiopia's main source of income comes from its agricultural economy that is often affected by drought.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fact 16 */}
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                            16
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700">
                            Ethiopia is one of the main destinations for tourists exploring the Horn of Africa. It has a beautiful blend of cultures and delicious exotic dishes. It has numerous airports to get you to any destination within the country. Among these key points of entry is Addis Ababa Airport, also known as Bole International Airport.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Highlights Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ 
                  background: 'linear-gradient(135deg, #77124C10 0%, #f5e8f2 100%)',
                  border: '1px solid #77124C30'
                }}>
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Key Highlights of Ethiopia</h3>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#77124C' }}>2nd</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Most Populous</div>
                      <div className="mt-1 text-sm text-gray-600">Country in Africa</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#77124C' }}>80+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Languages</div>
                      <div className="mt-1 text-sm text-gray-600">Spoken nationwide</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#77124C' }}>9</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">UNESCO Sites</div>
                      <div className="mt-1 text-sm text-gray-600">Most in Africa</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#77124C' }}>13</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Months</div>
                      <div className="mt-1 text-sm text-gray-600">Unique calendar</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Cultural Highlights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f8f8', border: '1px solid #e0e0e0' }}>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">Cultural and Historical Significance</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Unique Alphabet</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ethiopia is the only African country with its own distinct writing system
                      </p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Ancient Heritage</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Home to the oldest human fossils and biblical artifacts
                      </p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 text-white rounded-full" style={{ backgroundColor: '#77124C' }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">Tourism Hub</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Major destination with diverse cultures and UNESCO sites
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                style={{ background: 'linear-gradient(to right, #77124C, #5a0d39)' }}
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Explore More About Ethiopia
                </h3>
                <p className="mb-6 text-lg sm:text-xl" style={{ color: '#f0d8e8' }}>
                  Discover the rich culture, history, and traditions of this remarkable nation
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/ethiopians" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 sm:py-4 sm:px-8 sm:text-base"
                    style={{ color: '#77124C' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Explore Ethiopian Culture
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us for More
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
          className="flex items-center justify-center h-12 cursor-pointer rounded-t-2xl"
          style={{ background: 'linear-gradient(to right, #77124C, #5a0d39)' }}
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
            brandColor="purple"
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

export default EthiopiaFacts;