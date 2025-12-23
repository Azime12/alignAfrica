// src/pages/development-partners/Membership.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  HandHeart, 
  Building2,
  ChevronUp,
  Award,
  Shield,
  Globe,
  Heart,
  Target,
  Leaf,
  Recycle,
  Trash2,
  Cpu,
  Shirt,
  Users2,
  Network,
  FileText,
  Mail,
  Phone
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

// Membership organizations
const membershipOrganizations = [
  {
    name: "Consortium of Christian Relief and Development Associations (CCRDA)",
    acronym: "CCRDA",
    established: "1973/74",
    focus: "Pioneering umbrella organization for NGOs and CSOs",
    initiatives: [
      "Agricultural development & food security",
      "Urban and rural development",
      "HIV/AIDS prevention",
      "Environmental protection",
      "Gender mainstreaming"
    ],
    icon: Shield,
    color: "blue"
  },
  {
    name: "Youth Network for Sustainable Development (YNSD)",
    acronym: "YNSD",
    established: "2003",
    focus: "Empowering Ethiopian youth as agents of sustainable development",
    initiatives: [
      "Youth training and capacity building",
      "Partnership development",
      "Networking and collaboration",
      "Community leadership"
    ],
    icon: Users2,
    color: "green"
  },
  {
    name: "Non-State Actors Coalition (NSAC)",
    acronym: "NSAC",
    focus: "Uniting Ethiopian charities for dialogue and cooperation",
    initiatives: [
      "Policy advocacy",
      "Partnership development",
      "Sustainable development dialogue",
      "Non-state actor rights"
    ],
    icon: Network,
    color: "purple"
  },
  {
    name: "Consortium of Reproductive Health Associations (CORHA)",
    acronym: "CORHA",
    established: "1995",
    focus: "Coordinating population and reproductive health activities",
    initiatives: [
      "Reproductive health information",
      "Health service access",
      "Quality of life improvement",
      "Equitable healthcare"
    ],
    icon: Heart,
    color: "pink"
  },
  {
    name: "Consortium of Youth Development Organizations in Ethiopia (CoYDOE)",
    acronym: "CoYDOE",
    focus: "National network of youth-led organizations",
    initiatives: [
      "Youth engagement in development",
      "Youth leadership promotion",
      "National development contributions",
      "Positive change initiatives"
    ],
    icon: Target,
    color: "orange"
  }
];

// WasteAid focus areas
const wasteAidFocusAreas = [
  {
    name: "Plastics",
    description: "Combatting plastic pollution through effective recycling and waste reduction strategies",
    icon: Recycle,
    color: "blue"
  },
  {
    name: "Organic Waste",
    description: "Implementing sustainable composting and waste management practices",
    icon: Leaf,
    color: "green"
  },
  {
    name: "Textiles",
    description: "Reducing textile waste via recycling and reuse initiatives",
    icon: Shirt,
    color: "purple"
  },
  {
    name: "Electronics (WEEE)",
    description: "Promoting safe recycling and disposal of electronic waste",
    icon: Cpu,
    color: "yellow"
  }
];

// WasteAid approach pillars
const wasteAidApproach = [
  {
    title: "Locally-Tailored",
    description: "Customizing solutions to meet local needs and contexts"
  },
  {
    title: "Evidence-Based",
    description: "Utilizing proven, data-driven strategies for effective waste management"
  },
  {
    title: "Inclusive",
    description: "Ensuring our solutions address diverse community needs"
  }
];

// WasteAid support areas
const wasteAidSupport = [
  "Community Empowerment",
  "Policy Engagement",
  "Circular Economy Innovation"
];

function Membership() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(0);

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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' }
    };
    return colorMap[color] || colorMap.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/development-banner.png)' }}
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
                alignAfrica Membership
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-green-100 sm:text-xl md:text-2xl"
              >
                Partnering for Sustainable Development and Impact
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
                className="mb-8 sm:mb-12"
              >
                <div className="text-center">
                  <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                    alignAfrica Membership
                  </h1>
                  
                  <div className="w-24 h-1 mx-auto mb-6 bg-green-500 rounded-full"></div>
                </div>
                
                <p className="max-w-3xl mx-auto text-base text-center text-gray-700 sm:text-lg">
                  alignAfrica proudly holds membership in esteemed Associations and Consortia committed to fostering sustainable development and societal transformation.
                </p>
              </motion.div>

              {/* Membership Organizations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                {/* Organization Selector for Mobile */}
                <div className="mb-6 lg:hidden">
                  <select 
                    value={activeMember}
                    onChange={(e) => setActiveMember(parseInt(e.target.value))}
                    className="w-full p-3 border border-green-300 rounded-lg bg-green-50"
                  >
                    {membershipOrganizations.map((org, index) => (
                      <option key={index} value={index}>
                        {org.acronym || org.name.split('(')[1]?.replace(')', '') || org.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Organization Navigation for Desktop */}
                <div className="hidden mb-8 lg:block">
                  <div className="flex flex-wrap gap-2">
                    {membershipOrganizations.map((org, index) => {
                      const colors = getColorClasses(org.color);
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveMember(index)}
                          className={`px-4 py-2 rounded-lg transition-all ${activeMember === index ? `${colors.bg} ${colors.text} font-semibold` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {org.acronym || org.name.split('(')[1]?.replace(')', '') || org.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Organization Details */}
                <div className="space-y-8">
                  {membershipOrganizations.map((org, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: index === activeMember ? 1 : 0, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`p-6 rounded-xl ${index === activeMember ? 'block' : 'hidden lg:block'}`}
                    >
                      <div className="flex flex-col gap-6 md:flex-row">
                        <div className="flex-shrink-0">
                          <div className={`p-4 rounded-xl ${getColorClasses(org.color).bg} ${getColorClasses(org.color).border} border`}>
                            {React.createElement(org.icon, { size: 32, className: getColorClasses(org.color).text })}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                              {index + 1}. {org.name}
                            </h3>
                            {org.acronym && (
                              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getColorClasses(org.color).bg} ${getColorClasses(org.color).text}`}>
                                {org.acronym}
                              </span>
                            )}
                          </div>
                          
                          {org.established && (
                            <div className="mb-3">
                              <span className="text-sm font-semibold text-gray-600">Established: </span>
                              <span className="text-sm text-gray-700">{org.established}</span>
                            </div>
                          )}
                          
                          <p className="mb-4 text-gray-700">
                            {org.focus}
                          </p>
                          
                          <div>
                            <h4 className="mb-2 font-semibold text-gray-800">Key Initiatives:</h4>
                            <ul className="space-y-2">
                              {org.initiatives.map((initiative, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 mt-2 rounded-full ${getColorClasses(org.color).bg}`}></div>
                                  <span className="text-gray-700">{initiative}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-6 mt-8 text-center bg-green-50 rounded-xl"
                >
                  <p className="text-lg text-gray-800">
                    These partnerships reflect alignAfrica's commitment to collaborative efforts that enhance community well-being and foster sustainable development across Ethiopia.
                  </p>
                </motion.div>
              </motion.div>

              {/* WasteAid Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                {/* WasteAid Header */}
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Award className="text-white" size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">alignAfrica: Proud Member of WasteAid</h2>
                      <p className="mt-2 text-green-100">Charity number 1160263</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    At alignAfrica, we are proud to be an official member organization of WasteAid, working together to improve access to clean water and sanitation around the world.
                  </p>
                </div>

                {/* WasteAid Mission */}
                <div className="p-6 mb-8 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                  <h3 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
                    WasteAid: Tackling Global Waste Challenges
                  </h3>
                  <p className="mb-6 text-gray-700">
                    As a registered charity in England and Wales, WasteAid is dedicated to addressing critical waste management issues in low and middle-income countries.
                  </p>
                  
                  {/* Focus Areas */}
                  <h4 className="mb-4 text-lg font-semibold text-gray-800">Comprehensive Focus Areas:</h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {wasteAidFocusAreas.map((area, index) => {
                      const colors = getColorClasses(area.color);
                      return (
                        <div key={index} className="p-4 bg-white border rounded-xl">
                          <div className={`p-3 mb-3 rounded-lg ${colors.bg}`}>
                            {React.createElement(area.icon, { className: colors.text, size: 24 })}
                          </div>
                          <h5 className="mb-2 font-semibold text-gray-800">{area.name}</h5>
                          <p className="text-sm text-gray-700">{area.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mb-8">
                  <h3 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl">Our Approach:</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {wasteAidApproach.map((approach, index) => (
                      <div key={index} className="p-5 border border-green-200 rounded-xl bg-gradient-to-b from-white to-green-50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Target className="text-green-600" size={20} />
                          </div>
                          <h4 className="font-bold text-gray-800">{approach.title}</h4>
                        </div>
                        <p className="text-gray-700">{approach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support and Collaboration */}
                <div className="p-6 mb-8 border border-green-200 rounded-xl">
                  <h3 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">Support and Collaboration:</h3>
                  <div className="space-y-4">
                    {wasteAidSupport.map((support, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 mt-1 bg-green-100 rounded-lg">
                          <Shield className="text-green-600" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{support}</h4>
                          <p className="mt-1 text-gray-700">
                            {support === "Community Empowerment" && "Supporting local communities and entrepreneurs in waste management."}
                            {support === "Policy Engagement" && "Partnering with policymakers to develop and implement effective waste management policies."}
                            {support === "Circular Economy Innovation" && "Fostering innovations for a sustainable, circular economy."}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Section */}
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl sm:rounded-2xl">
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">Impact:</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Heart className="text-green-200" size={20} />
                        <h4 className="font-semibold">Livelihood Improvement</h4>
                      </div>
                      <p className="text-green-100">Enhancing the lives of marginalized and impoverished communities.</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Leaf className="text-green-200" size={20} />
                        <h4 className="font-semibold">Health and Environment</h4>
                      </div>
                      <p className="text-green-100">Contributing to a cleaner, healthier environment and promoting sustainable development.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 mt-6 bg-white/10 rounded-xl">
                    <p className="text-center text-green-100">
                      WasteAid's holistic approach not only tackles immediate waste challenges but also supports long-term sustainability and economic growth.
                    </p>
                  </div>
                </div>

                {/* WasteAid Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="text-center"
                >
                  <img 
                    src="/images/wasteaid.jpg" 
                    alt="WasteAid Partnership" 
                    className="mx-auto rounded-xl shadow-lg max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
                  />
                  <p className="mt-4 text-sm text-gray-600">Official WasteAid Partnership Certification</p>
                </motion.div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Interested in Membership?
                </h3>
                <p className="mb-6 text-lg text-green-100 sm:text-xl sm:mb-8">
                  Learn more about our membership benefits and partnership opportunities
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/development-partners/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-emerald-700 hover:bg-green-100 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Mail size={20} />
                    Contact Membership Team
                  </a>
                  <a 
                    href="/development-partners/donors" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <HandHeart size={20} />
                    View Donor Opportunities
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

export default Membership;