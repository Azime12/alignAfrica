// src/pages/development-partners/DevelopmentPartners.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  HandHeart, 
  Building2,
  ChevronUp,
  Globe,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  FileText,
  Heart,
  Target,
  Star,
  Users2,
  Building
} from 'lucide-react';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Development Partners section
const developmentPartnersSidebarLinks = [
  { 
    name: "Home", 
    href: "/development-partners", 
    icon: Home 
  },
  { 
    name: "Membership", 
    href: "/development-partners/membership", 
    icon: Users 
  },
  { 
    name: "Donors", 
    href: "/development-partners/donors", 
    icon: HandHeart 
  }
];

// Partner types and categories
const partnerCategories = [
  {
    name: "Community Development",
    icon: Users,
    description: "Local NGOs focused on integrated community development",
    partners: ["BDA", "AFDA", "TLGHLM", "ENDA", "HADA", "ACDA"]
  },
  {
    name: "Educational Institutions",
    icon: Award,
    description: "Universities and colleges advancing education and research",
    partners: ["Samara University", "Assosa University", "Samara Health Science College"]
  },
  {
    name: "International Partners",
    icon: Globe,
    description: "Global organizations supporting sustainable development",
    partners: ["PRIDE"]
  }
];

// Key initiatives
const keyInitiatives = [
  {
    title: "WASH Programs",
    description: "Water, Sanitation and Hygiene initiatives",
    impact: "7 woredas in Assosa zone"
  },
  {
    title: "Education Support",
    description: "Educational programs and capacity building",
    impact: "Multiple regional states"
  },
  {
    title: "Healthcare Training",
    description: "Training healthcare professionals",
    impact: "Sole health science college in Afar"
  },
  {
    title: "Agriculture & Livelihood",
    description: "Sustainable farming and income generation",
    impact: "Poverty alleviation programs"
  },
  {
    title: "Women Empowerment",
    description: "Supporting women's economic participation",
    impact: "Multiple community programs"
  },
  {
    title: "Conflict Resolution",
    description: "Peace building and community dialogue",
    impact: "Regional stability efforts"
  }
];

// Impact statistics
const impactStats = [
  { label: "Regional States", value: "6+", description: "Active partner coverage" },
  { label: "Woredas Covered", value: "40+", description: "Districts reached" },
  { label: "Years Combined", value: "50+", description: "Development experience" },
  { label: "Program Areas", value: "8+", description: "Key development sectors" }
];

function DevelopmentPartners() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/dparteners.jpg)' }}
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
                Development Partners
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-green-100 sm:text-xl md:text-2xl"
              >
                Collaborative Impact Through Trusted Partnerships
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
                title="Development Partners"
                links={developmentPartnersSidebarLinks}
                brandColor="green"
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
              {/* Introduction Section */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 text-center sm:mb-12"
              >
                <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                  alignAfrica Local Partners
                </h1>
                
                <div className="w-24 h-1 mx-auto mb-6 bg-green-500 rounded-full"></div>
                
                <p className="max-w-3xl mx-auto text-base text-gray-700 sm:text-lg">
                  alignAfrica collaborates with organizations that we have deeply vetted and trust implicitly. Our mandate ensures that projects are not only successful but also prioritize directing the majority of entrusted funds to those in need rather than administrative and fundraising costs.
                </p>
              </motion.div>

              {/* Impact Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4 sm:gap-6 sm:mb-12"
              >
                {impactStats.map((stat, index) => (
                  <div key={index} className="p-4 text-center bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-700 sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">{stat.label}</div>
                    <div className="text-xs text-gray-600 sm:text-sm">{stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {/* Meet Our Partners Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-10 sm:mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users2 className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Meet Our Partners</h2>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === "all" 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Partners
                  </button>
                  {partnerCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category.name 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Partners List */}
                <div className="space-y-6">
                  {/* Partner 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-5 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                          <Building className="text-green-600" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">1. Benshangul Development Association (BDA)</h3>
                        <p className="mb-3 text-gray-700">
                          BDA is dedicated to community-based integrated development programs across Assosa's disadvantaged communities. Their initiatives focus on WASH, education, and agriculture/livelihood, supported by comprehensive assessments in 7 woredas of the Assosa zone.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">WASH</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Education</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Agriculture</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Partner 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                          <Heart className="text-green-600" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">2. Afar Development Association (AFDA)</h3>
                        <p className="mb-3 text-gray-700">
                          AFDA, established in July 2011, aims to provide integrated development services to Afar pastoralist communities. Their efforts span health, education, water sanitation, and sustainable pastoral and agro-pastoral production systems across 5 zones and 32 woredas in Afar.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Health</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Pastoral Development</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Water Sanitation</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Partner 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="p-5 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                          <Target className="text-green-600" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">3. Tikuret Le Gumuz Hizb Lemat Mahiber (TLGHLM)</h3>
                        <p className="mb-3 text-gray-700">
                          TLGHLM, a local NGO since November 2001, focuses on the economic and social advancement of the Gumuz people. Their programs include capacity-building, food production, poverty alleviation, environmental conservation, and eradication of harmful traditional practices in the Benishangul Gumuz Regional State.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Capacity Building</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Poverty Alleviation</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Environmental Conservation</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Partner 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-5 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                          <Shield className="text-green-600" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">4. Ethiopian Nuer Development Association (ENDA)</h3>
                        <p className="mb-3 text-gray-700">
                          ENDA, re-established in 2012, supports regional efforts in poverty alleviation and development in Gambella. Their initiatives include education, health services, local entrepreneurship, women's empowerment, policy advocacy, and community-level peace building.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Peace Building</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Women Empowerment</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Policy Advocacy</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Partner 5 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-5 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                          <Building2 className="text-green-600" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">5. Harari Abadir Development Association (HADA)</h3>
                        <p className="mb-3 text-gray-700">
                          HADA, founded in 2009, focuses on improving socio-economic conditions in Harari through community and regional development initiatives. They are registered under the Harari People's Regional State Bureau of Justice and Security Affairs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Community Development</span>
                          <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Regional Initiatives</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Key Initiatives Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-10 sm:mb-12"
              >
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">Our Key Initiatives</h2>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {keyInitiatives.map((initiative, index) => (
                    <div key={index} className="p-5 border border-green-200 rounded-xl bg-gradient-to-b from-white to-green-50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Star className="text-green-600" size={20} />
                        </div>
                        <h3 className="font-bold text-gray-800">{initiative.title}</h3>
                      </div>
                      <p className="mb-2 text-sm text-gray-700">{initiative.description}</p>
                      <div className="text-xs font-semibold text-green-700">Impact: {initiative.impact}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Partner With Us
                </h3>
                <p className="mb-6 text-lg text-green-100 sm:text-xl sm:mb-8">
                  For further inquiries about our partners or collaboration opportunities, please contact us. Together with our partners, alignAfrica strives to make a lasting impact on communities across Ethiopia.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="mailto:partnerships@alignafrica.org" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-emerald-700 hover:bg-green-100 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Mail size={20} />
                    Contact Partnerships Team
                  </a>
                  <a 
                    href="/development-partners/membership" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Users size={20} />
                    Learn About Membership
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 rounded-t-2xl"
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
            title="Development Partners"
            links={developmentPartnersSidebarLinks}
            brandColor="green"
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

export default DevelopmentPartners;