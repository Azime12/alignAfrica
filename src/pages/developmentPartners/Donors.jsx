// src/pages/development-partners/Donors.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  HandHeart, 
  Building2,
  ChevronUp,
  Award,
  Globe,
  Heart,
  Shield,
  DollarSign,
  Building,
  GraduationCap,
  Users2,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  Star,
  Target,
  Leaf,
  Microscope,
  BookOpen,
  Activity,
  Pill,
  Stethoscope,
  Network,
  HelpCircle
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

// Donor organizations
const donorOrganizations = [
  {
    name: "Christian Aid Ethiopia",
    description: "Committed to ending poverty in Ethiopia through impactful initiatives across the nation",
    focus: "Food security, agricultural productivity, community health, clean water access",
    icon: Heart,
    color: "red",
    initiatives: [
      "Addressing food insecurity and cyclical disasters",
      "HIV/AIDS prevention and treatment",
      "Rural development and clean water access",
      "Community health programs"
    ]
  },
  {
    name: "Foreign, Commonwealth & Development Office - GOV.UK",
    description: "Vital role in reducing child mortality, enhancing education, and combating hunger",
    focus: "Sustainable development outcomes through government collaboration",
    icon: Building,
    color: "blue",
    initiatives: [
      "Reducing child mortality rates",
      "Enhancing education systems",
      "Combating hunger and food insecurity",
      "Climate change adaptation"
    ]
  },
  {
    name: "Civil Society Support Programme (CSSP)",
    description: "Multi-donor initiative enhancing capacity of Ethiopian CSOs",
    focus: "National development, poverty reduction, and good governance",
    icon: Network,
    color: "purple",
    initiatives: [
      "Capacity building for CSOs",
      "Poverty reduction programs",
      "Good governance initiatives",
      "International cooperation support"
    ]
  },
  {
    name: "British Council in Ethiopia",
    description: "Fostering educational opportunities and cultural exchange since 1943",
    focus: "Empowering youth through education and skills development",
    icon: GraduationCap,
    color: "blue",
    initiatives: [
      "Educational attainment support",
      "Career skills development",
      "Youth voice amplification",
      "Cultural exchange programs"
    ]
  },
  {
    name: "Global Giving",
    description: "501 non-profit providing global crowdfunding for grassroots projects",
    focus: "Crowdfunding platform for charitable projects worldwide",
    icon: DollarSign,
    color: "green",
    achievements: [
      "$530+ million in donations",
      "1.1+ million donors",
      "28,000+ projects",
      "175+ countries"
    ]
  },
  {
    name: "The United States President's Emergency Plan for AIDS Relief (PEPFAR)",
    description: "Comprehensive HIV/AIDS services in Ethiopia",
    focus: "HIV detection, treatment, and prevention",
    icon: Stethoscope,
    color: "red",
    initiatives: [
      "Antiretroviral treatment (ART)",
      "Voluntary medical male circumcision",
      "HIV testing and counseling",
      "Laboratory system strengthening"
    ]
  },
  {
    name: "US Department of State's Bureau of Population, Refugees and Migration (PRM)",
    description: "Humanitarian bureau providing protection and assistance to displaced people",
    focus: "Humanitarian policy, life-sustaining assistance, global partnerships",
    icon: Globe,
    color: "blue",
    initiatives: [
      "Humanitarian policy coordination",
      "Life-sustaining assistance",
      "Global partnership building",
      "Best practices in humanitarian response"
    ]
  },
  {
    name: "Consortium of Christian Relief and Development Associations (CCRDA)",
    description: "Pioneering umbrella organization of NGOs and CSOs in Ethiopia",
    focus: "Coordination, capacity building, and strategic networking",
    icon: Shield,
    color: "purple",
    initiatives: [
      "Development coordination",
      "Good governance promotion",
      "Capacity building",
      "Strategic networking"
    ]
  },
  {
    name: "The Global Fund",
    description: "Global solidarity initiative combating AIDS, tuberculosis, and malaria",
    focus: "Disease prevention, treatment, and health system strengthening",
    icon: Activity,
    color: "green",
    achievements: [
      "$60+ billion deployed",
      "59 million lives saved",
      "Death rates reduced by >50%",
      "Global health impact"
    ]
  },
  {
    name: "Youth Network for Sustainable Development (YNSD)",
    description: "Locally registered NGO empowering Ethiopian youth",
    focus: "Youth empowerment, training, and sustainable development",
    icon: Users2,
    color: "orange",
    initiatives: [
      "Youth training programs",
      "Partnership development",
      "Sustainable development efforts",
      "Self-reliance fostering"
    ]
  }
];

// Donor rights
const donorRights = [
  "To be informed of alignAfrica's mission and how donated resources are utilized",
  "To know the identity of alignAfrica's governing trustees and expect prudent stewardship",
  "To access alignAfrica's recent financial statements",
  "To be assured donations are used as intended",
  "To receive appropriate acknowledgment and recognition",
  "To expect professional conduct from alignAfrica representatives",
  "To request removal from mailing lists",
  "To inquire freely and receive prompt, truthful answers"
];

// Impact statistics
const impactStats = [
  { label: "Total Funding", value: "$60B+", description: "Global health investments" },
  { label: "Lives Impacted", value: "59M+", description: "Through donor support" },
  { label: "Projects Funded", value: "28K+", description: "Worldwide initiatives" },
  { label: "Partner Countries", value: "175+", description: "Global reach" }
];

function Donors() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

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
      red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' }
    };
    return colorMap[color] || colorMap.green;
  };

  const filteredDonors = donorOrganizations.filter(donor => {
    if (activeFilter === "all") return true;
    if (activeFilter === "health") {
      return donor.name.includes("AIDS") || donor.name.includes("Global Fund") || donor.name.includes("PEPFAR");
    }
    if (activeFilter === "development") {
      return donor.name.includes("Aid") || donor.name.includes("CSSP") || donor.name.includes("CCRDA");
    }
    if (activeFilter === "education") {
      return donor.name.includes("British Council") || donor.name.includes("Youth");
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/donner.png)' }}
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
                alignAfrica Donors
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-green-100 sm:text-xl md:text-2xl"
              >
                Partners in Sustainable Development and Impact
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
                  alignAfrica Donors
                </h1>
                
                <div className="w-24 h-1 mx-auto mb-6 bg-green-500 rounded-full"></div>
                
                <p className="max-w-3xl mx-auto text-base text-gray-700 sm:text-lg">
                  alignAfrica is grateful for the generous support from the following esteemed organizations who partner with us to create sustainable impact across Ethiopia.
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
                  <div key={index} className="p-4 text-center border border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                    <div className="text-2xl font-bold text-green-700 sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">{stat.label}</div>
                    <div className="text-xs text-gray-600 sm:text-sm">{stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {/* Donor Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeFilter === "all" 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Donors
                  </button>
                  <button
                    onClick={() => setActiveFilter("health")}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeFilter === "health" 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Health & Medical
                  </button>
                  <button
                    onClick={() => setActiveFilter("development")}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeFilter === "development" 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Development
                  </button>
                  <button
                    onClick={() => setActiveFilter("education")}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeFilter === "education" 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Education & Youth
                  </button>
                </div>
              </motion.div>

              {/* Donors Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {filteredDonors.map((donor, index) => {
                    const colors = getColorClasses(donor.color);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className={`p-6 border rounded-xl ${colors.border} bg-gradient-to-b from-white to-${colors.bg.split('-')[1]}-50`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg ${colors.bg}`}>
                            {React.createElement(donor.icon, { className: colors.text, size: 24 })}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{donor.name}</h3>
                            <div className="mt-1">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}>
                                {donor.focus.split(',').slice(0, 1).join(',')}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="mb-4 text-gray-700">{donor.description}</p>
                        
                        {(donor.initiatives || donor.achievements) && (
                          <div>
                            <h4 className="mb-2 font-semibold text-gray-800">
                              {donor.initiatives ? 'Key Initiatives:' : 'Key Achievements:'}
                            </h4>
                            <ul className="space-y-1">
                              {(donor.initiatives || donor.achievements)?.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 mt-2 rounded-full ${colors.bg.split(' ')[0]}`}></div>
                                  <span className="text-sm text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Donor Rights Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Shield className="text-white" size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">Rights of alignAfrica Donors & Supporters</h2>
                      <p className="mt-2 text-green-100">Our commitment to transparency and accountability</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {donorRights.map((right, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                        <div className="flex-shrink-0 p-1 mt-1">
                          <CheckCircle className="text-green-300" size={18} />
                        </div>
                        <span className="text-green-100">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                  <p className="mb-6 text-lg text-center text-gray-800">
                    Your engagement with alignAfrica is valued, and we welcome your involvement in our shared journey toward sustainable development in Ethiopia.
                  </p>
                  
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a 
                      href="mailto:tiruzerethiopia@gmail.com" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white border border-green-300 rounded-lg text-emerald-700 hover:bg-green-50 hover:scale-105"
                    >
                      <Mail size={18} />
                      tiruzerethiopia@gmail.com
                    </a>
                    <span className="text-gray-600">or</span>
                    <a 
                      href="/development-partners/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-green-600 rounded-lg hover:bg-green-700"
                    >
                      <HelpCircle size={18} />
                      Contact Form
                    </a>
                  </div>
                  
                  <p className="mt-6 text-sm text-center text-gray-600">
                    For inquiries, clarifications, or access to documents related to our donors and supporters
                  </p>
                </div>
              </motion.div>

              {/* Funding Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mb-8 border border-green-200 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">Funding Opportunities & Information</h3>
                    <p className="text-gray-600">Access official resources and partnership information</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-lg bg-blue-50">
                    <h4 className="mb-2 font-semibold text-gray-800">FCDO Resources</h4>
                    <p className="mb-3 text-sm text-gray-700">
                      For detailed information on FCDO's initiatives in Ethiopia and funding opportunities, please visit their official website or contact the British Embassy in Addis Ababa.
                    </p>
                    <a 
                      href="https://www.gov.uk/government/organisations/foreign-commonwealth-development-office" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Visit Official Website →
                    </a>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-purple-50">
                    <h4 className="mb-2 font-semibold text-gray-800">Global Giving Platform</h4>
                    <p className="mb-3 text-sm text-gray-700">
                      Explore grassroots charitable projects and crowdfunding opportunities through the Global Giving platform.
                    </p>
                    <a 
                      href="https://www.globalgiving.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:text-purple-800"
                    >
                      Explore Projects →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 text-center text-white shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Become a Donor Partner
                </h3>
                <p className="mb-6 text-lg text-green-100 sm:text-xl sm:mb-8">
                  Join our network of esteemed organizations making a lasting impact in Ethiopia
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/development-partners/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-emerald-700 hover:bg-green-100 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Mail size={20} />
                    Contact Donor Relations
                  </a>
                  <a 
                    href="/development-partners/membership" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Users size={20} />
                    View Membership
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

export default Donors;