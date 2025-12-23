// src/pages/ethio-spirulina/SpirulinaAbout.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Info, 
  Heart, 
  Package, 
  Award, 
  HelpCircle, 
  FileText, 
  Mail,
  ChevronUp,
  Target,
  Eye,
  Users,
  Globe
} from 'lucide-react';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Ethio-Spirulina section
const spirulinaSidebarLinks = [
  { 
    name: "Home", 
    href: "/ethio-spirulina", 
    icon: Home 
  },
  { 
    name: "About Us", 
    href: "/ethio-spirulina/about", 
    icon: Info 
  },
  { 
    name: "Spirulina Benefits", 
    href: "/ethio-spirulina/benefits", 
    icon: Heart 
  },
  { 
    name: "Products", 
    href: "/ethio-spirulina/products", 
    icon: Package 
  },
  { 
    name: "Our Certificates", 
    href: "/ethio-spirulina/certificates", 
    icon: Award 
  },
  { 
    name: "FQA", 
    href: "/ethio-spirulina/fqa", 
    icon: HelpCircle 
  },
  { 
    name: "Terms & Conditions", 
    href: "/ethio-spirulina/terms", 
    icon: FileText 
  },
  { 
    name: "Contact Us", 
    href: "/ethio-spirulina/contact", 
    icon: Mail 
  }
];

function SpirulinaAbout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about-spirulina-superfood.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero content */}
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                About Ethio-Spirulina
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 text-lg text-yellow-100 sm:text-xl md:text-2xl sm:mb-6"
              >
                Pioneering Organic Spirulina Production in Ethiopia
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 mx-auto sm:py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-8">
              <SidebarNavigation 
                title="Ethio-Spirulina"
                links={spirulinaSidebarLinks}
                brandColor="yellow"
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
              {/* Main Title */}
              <div className="mb-8 text-center sm:mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
                >
                  About Us
                </motion.h1>
                <div className="w-24 h-1 mx-auto bg-yellow-500 rounded-full"></div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                {/* Left Column */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
                        Ethio-Spirulina is one of the leading producers in Ethiopia, with 40,000 square meters of growing pond area in a serene atmosphere and having all necessary certifications. The pioneering founders are Mr. Yonas Mamo, Ms. Nancy Chebet and Mr. Ephrame Berhanu. The total manufacturing process maintains very high standards from the stages of cultivating, harvesting, water filtering, spray drying and checking the material as per quality standards, packing and forwarding as per the requirement of the customers.
                      </p>

                      {/* Vision Section */}
                      <div className="p-5 mb-6 border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="p-3 bg-yellow-100 rounded-lg">
                              <Target className="text-yellow-600" size={24} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <img 
                                src="/images/vision-sprilina.png" 
                                alt="Vision" 
                                className="w-16 h-16"
                              />
                              <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">Our Vision</h3>
                            </div>
                            <p className="text-gray-700">
                              To focus on the business of human wellness through Health Supplements and Functional Foods, by offering high quality products backed by science, addressing the National as well as the global market.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mission Section */}
                      <div className="p-5 mb-6 border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="p-3 bg-yellow-100 rounded-lg">
                              <Eye className="text-yellow-600" size={24} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <img 
                                src="/images/mission-spiriluna.png" 
                                alt="Mission" 
                                className="w-16 h-16"
                              />
                              <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">Our Mission</h3>
                            </div>
                            <p className="text-gray-700">
                              To continue to surpass customer satisfaction, by keeping pace with changing trends in the market to become a National and a world class player.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Team Management */}
                      <div>
                        <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-2xl">
                          <Users className="inline-block mr-2" size={24} />
                          Ethio-Spirulina Management
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                          A team of dedicated, passionate, well-qualified and experienced professionals for R&D, production & Quality Control/Quality Assurance with the sole commitment to develop quality products makes up the backbone of our organization. Our team believes in Planning, Doing, Checking and Acting to ensure Total Quality Management at all Levels.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                          Our personal involvement in procurement, inspection, quality control, storage, processes and distribution give us an edge over others to provide variety, quality and better services. Our achievement reflects strongly in the professional and personal relations developed at all levels with our stakeholders and associates.
                        </p>
                        <div className="p-4 mt-4 border-l-4 border-yellow-500 rounded-lg bg-yellow-50">
                          <p className="italic font-medium text-gray-800">
                            "Doing Right First Time, Every Time is our path at all levels."
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="p-5 border border-yellow-300 shadow-sm bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl sm:p-6">
                      <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-yellow-500 sm:text-2xl">
                        OUR MISSION
                      </h2>
                      
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          The desire to dedicate ourselves with care and passion to Spirulina was born after having discovered and thoroughly studied the countless benefits and great properties of this Micro-alga. Numerous medical and scientific studies have shown that spirulina, as an alkaline product, is able to improve people's lives, preventing various diseases including degenerative ones of the nervous system.
                        </p>

                        <div className="p-4 rounded-lg bg-white/70">
                          <p className="text-gray-700">
                            Spirulina, already in use among the ancient pre-Colombian civilizations, has been declared by FAO the 'food of the future' and, due to the value and properties of its numerous nutrients, even in small quantities it would be able to alleviate the suffering of the populations of the Third World.
                          </p>
                        </div>

                        <p className="text-gray-700">
                          The production of this algae is in perfect harmony with the environment because its cultivation, in addition to reducing damage from pollution, allows to use less water and land than traditional crops, while maintaining an equal nutritional and energy supply.
                        </p>

                        <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50">
                          <div className="flex items-start gap-3">
                            <Globe className="flex-shrink-0 mt-1 text-yellow-600" size={20} />
                            <p className="text-gray-700">
                              Furthermore, we understand the great benefit of making a similar choice, if we consider that 1/100 of the water used in beef farms or 1/10 of that used in corn and soybean crops is used for algal aquaculture. A huge benefit for the environment and a great saving of water.
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-700">
                          The desire to help people, suggesting different food choices to improve their daily life, combined with our healthy, balanced and environmentally sensitive lifestyle has allowed us to create the type of company we had in mind. A place in which to recognize ourselves, us first, and in which to find a sense of 'home' and familiarity, where genuineness and Eco-sustainability are its essential features and the hallmark of our Farm.
                        </p>

                        <p className="text-gray-700">
                          Curiosity, the desire to improve the world by putting respect for Mother Earth first and attention to people's health, has led us to adopt ethical and green measures, opening the doors of Ethio-Spirulina Farm to you.
                        </p>
                      </div>
                    </div>

                    {/* Founders Section */}
                    <div className="p-5 bg-white border border-yellow-200 shadow-sm rounded-xl sm:p-6">
                      <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">Our Founding Team</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50">
                          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                            <span className="font-bold text-yellow-700">YM</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Mr. Yonas Mamo</h4>
                            <p className="text-sm text-gray-600">Co-founder & Visionary</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50">
                          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                            <span className="font-bold text-yellow-700">NC</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Ms. Nancy Chebet</h4>
                            <p className="text-sm text-gray-600">Co-founder & Operations Lead</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50">
                          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                            <span className="font-bold text-yellow-700">EB</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Mr. Ephrame Berhanu</h4>
                            <p className="text-sm text-gray-600">Co-founder & Technical Director</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Environmental Commitment */}
                    <div className="p-5 border border-green-200 shadow-sm bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:p-6">
                      <h3 className="mb-3 text-lg font-bold text-gray-800 sm:text-xl">Environmental Commitment</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <span>40,000 m² of eco-friendly growing ponds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <span>99% less water usage than traditional farming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <span>All necessary environmental certifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <span>Carbon-neutral production process</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 mt-8 text-center text-white shadow-lg sm:mt-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">Join Our Journey Towards Better Health</h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  Discover the power of pure, organic Ethiopian spirulina produced with care for people and planet
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <a 
                    href="/ethio-spirulina/products" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    View Our Products
                  </a>
                  <a 
                    href="/ethio-spirulina/contact" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    Contact Our Team
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Sidebar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow-2xl lg:hidden rounded-t-2xl"
           style={{ 
             transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(calc(100% - 60px))',
             maxHeight: '85vh'
           }}>
        
        {/* Handle to open/close */}
        <div 
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-yellow-500 to-amber-600 rounded-t-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <ChevronUp 
              size={20} 
              className={`text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            />
            <span className="font-semibold text-white">
              {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </span>
            <ChevronUp 
              size={20} 
              className={`text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 48px)' }}>
          <SidebarNavigation 
            title="Ethio-Spirulina"
            links={spirulinaSidebarLinks}
            brandColor="yellow"
            enableAnimations={false}
          />
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default SpirulinaAbout;