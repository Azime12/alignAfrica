// src/pages/projects/multi-purpose-village/MultiPurposeVillage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Activity,
  Heart,
  Users,
  Target,
  Award,
  Calendar,
  MapPin,
  BarChart,
  ChevronUp,
  CheckCircle,
  FileText,
  Building,
  Globe,
  Shield,
  Music,
  BookOpen,
  Users2,
  Star,
  Award as Trophy,
  Book,
  Lightbulb,
  TrendingUp,
  Brain,
  Microscope,
  Stethoscope,
  Leaf,
  AlertTriangle,
  Crosshair,
  MessageCircle,
  Mail,
  School,
  Volume2,
  Megaphone,
  GraduationCap,
  Shield as ShieldIcon,
  BookMarked,
  Briefcase,
  DollarSign,
  Map as MapIcon,
  BarChart3,
  Settings,
  RefreshCw,
  Target as TargetIcon,
  ClipboardCheck,
  PieChart,
  Network,
  Baby,
  TrendingDown,
  Users as UsersIcon,
  Gift,
  Headphones,
  Smartphone,
  Film,
  Shirt,
  FileMusic,
  UsersRound,
  Trees,
  Flower2,
  Bird,
  Palette,
  Sprout,
  MapPin as MapPinIcon
} from 'lucide-react';
import SidebarNavigation from '../../components/sections/SidebarNavigation';
import { Beef } from 'lucide-react';

// Sidebar links for Projects section
const projectsSidebarLinks = [
  { 
    name: "Projects Home", 
    href: "/projects", 
    icon: Home 
  },
  { 
    name: "One Health", 
    href: "/projects/one-health", 
    icon: Activity 
  },
  { 
    name: "Dance4Life", 
    href: "/projects/dance4life", 
    icon: Heart 
  },
  { 
    name: "Capacity Building", 
    href: "/projects/capacity-building", 
    icon: Users 
  },
  { 
    name: "Youth Empowerment", 
    href: "/projects/youth-empowerment", 
    icon: Target 
  },
  { 
    name: "RMNH", 
    href: "/projects/rmnh", 
    icon: Award 
  },
  { 
    name: "Multi-purpose Village", 
    href: "/projects/multi-purpose-village", 
    icon: Building 
  },
  { 
    name: "Spirulina Program", 
    href: "/projects/spirulina-program", 
    icon: Leaf 
  },
  { 
    name: "Gender Equality", 
    href: "/projects/gender-equality", 
    icon: Users2 
  },
  { 
    name: "HIV Project", 
    href: "/projects/hiv-project", 
    icon: AlertTriangle
  },
  { 
    name: "Nutrition Project", 
    href: "/projects/nutrition-project", 
    icon: Book 
  },
  { 
    name: "Peace Building", 
    href: "/projects/peace-building", 
    icon: Shield 
  },
  { 
    name: "Social Action Gambella", 
    href: "/projects/social-action-gambella", 
    icon: Globe 
  },
  { 
    name: "TARGET Project", 
    href: "/projects/target-project", 
    icon: Crosshair
  },
  { 
    name: "Youth Voice Ethiopia", 
    href: "/projects/youth-voice-ethiopia", 
    icon: MessageCircle
  }
];

// Project objectives
const projectObjectives = [
  "To create awareness for art and culture",
  "Rehabilitation and preservation of environment",
  "Help to reduce the gap between our cultural heritage and technology",
  "To promote beekeeping and honey production that transforms resources currently left idling to productive system in form of innovative and modern business model of farming which is also a good eco-friendly",
  "The project harness full time labor of 100 unemployed youth & other members per annum within the communities and ensure the food security of the households"
];

// Key features
const keyFeatures = [
  {
    title: "Environmental Protection",
    icon: Trees,
    description: "46 hectares of forested land suitable for beekeeping and refreshment"
  },
  {
    title: "Cultural Preservation",
    icon: Palette,
    description: "Integration of cultural heritage with modern community development"
  },
  {
    title: "Educational Hub",
    icon: School,
    description: "Learning center for students, community members, and researchers"
  },
  {
    title: "Apiculture Development",
    icon: Beef,
    description: "Beekeeping and honey production in forest-rich environment"
  }
];

// Local attractions
const localAttractions = [
  "Old monasteries and historical sites",
  "Ambo stone (locally Dhagaa Amboo)",
  "Beautiful traditional dressing styles",
  "Gada systems (cultural based peace building approach)",
  "Traditional healing methods",
  "Folk music and dances",
  "Cultural heritages and historical sites"
];

// Project statistics
const projectStats = [
  { label: "Total Area", value: "46 ha", description: "Forested land", icon: MapIcon },
  { label: "Distance from Addis", value: "112 km", description: "West of Addis Ababa", icon: MapPinIcon },
  { label: "Youth Employment", value: "100+", description: "Unemployed youth per annum", icon: Users },
  { label: "Woreda Location", value: "Ambo", description: "Oromia Regional State", icon: Building }
];

// Village benefits
const villageBenefits = [
  "Refreshment and recreational picnic sites",
  "Research and plant nursery site for forest diversification",
  "International visitor destination for cultural learning",
  "Community-based multi-purpose facilities and services",
  "Environmental protection and sustainability",
  "Cultural and agricultural learning activities"
];

function MultiPurposeVillage() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/alignafrica-multi.png)' }}
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
                Ambo Multi Purpose Village
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Tiruzer Ethiopia - Integration of Culture, Environment, and Development
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
                title="Projects"
                links={projectsSidebarLinks}
                brandColor="blue"
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
              {/* Project Statistics */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4 sm:gap-6 sm:mb-12"
              >
                {projectStats.map((stat, index) => (
                  <div key={index} className="p-4 text-center border border-blue-200 bg-gradient-to-br from-blue-50 to-teal-100 rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      {React.createElement(stat.icon, { className: "text-blue-600", size: 20 })}
                    </div>
                    <div className="text-lg font-bold text-blue-700 sm:text-xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold text-gray-800 sm:text-sm">{stat.label}</div>
                    <div className="text-xs text-gray-600 sm:text-sm">{stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Ambo Multi Purpose Village of Tiruzer Ethiopia</h2>
                    <p className="text-blue-600">Integrating Culture, Environment, and Sustainable Development</p>
                  </div>
                </div>

                {/* Location Highlight */}
                <div className="p-5 mb-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="text-blue-600" size={18} />
                    <span className="font-semibold text-gray-800">Location</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium text-blue-700">Ambo</span> is one of the 180 Woredas in the Oromia Regional State of Ethiopia. It is located at 112 Km to the west of Addis Ababa.
                  </p>
                </div>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Village Overview */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Village Overview</h3>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        The multi Purpose Village occupies a total of 46 ha of land most of it is covered with forests which is suitable for beekeeping and refreshment, recreational picnic sites. The primary program activities being implemented in this village are environmental protection, culture, education and apicultural-agriculture.
                      </p>
                      
                      <p className="text-gray-700">
                        The village is represented as the best of an integration of cultural, apiculture, research, plant nursery site for forest diversification, and refreshment colliders within a unique community village.
                      </p>
                      
                      <div className="p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50">
                        <p className="text-gray-700">
                          Both physically and operationally, community-based multi-Purpose village provides a cluster of unique facilities, services and conveniences that will be attractive to the local communities of Oromia Region, but will also become a destination for international visitors to engage in recreation and learning activities of a cultural-agricultural and socio-enterprise nature.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Educational Value */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Educational and Research Value</h3>
                    
                    <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <School className="text-blue-600" size={20} />
                        <h4 className="font-semibold text-gray-800">Learning Opportunities</h4>
                      </div>
                      <p className="text-gray-700">
                        The multi-purpose village is suitable for students, community members, researchers to learn, diagnose issues, etc on forestry, beekeeping and culture together with its refreshment site.
                      </p>
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Key Features</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {keyFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div key={index} className="p-4 text-center bg-white border border-blue-200 rounded-xl">
                            <div className="flex justify-center mb-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <Icon className="text-blue-600" size={20} />
                              </div>
                            </div>
                            <h4 className="mb-2 font-semibold text-gray-800">{feature.title}</h4>
                            <p className="text-sm text-gray-700">{feature.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Project Objectives */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Project Aims</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {projectObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 border border-blue-200 rounded-lg bg-gradient-to-r from-white to-blue-50">
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <span className="font-bold text-blue-700">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-700">{objective}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Natural Resources */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Natural Resources and Opportunities</h3>
                    
                    <div className="p-5 mb-4 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <p className="mb-4 text-gray-700">
                        The forest is rich in trees and diversified plants to implement beekeeping for honey production and refreshment and cultural heritages untapped opportunities that can transform the community members to prosperity.
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Trees className="text-blue-600" size={18} />
                        <span className="font-medium text-gray-800">Forest Resources:</span>
                      </div>
                      <ul className="mt-2 space-y-1 ml-7">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">Rich in trees and diversified plants</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">Ideal for beekeeping and honey production</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">Refreshment and recreational sites</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Local Attractions */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Palette className="text-blue-600" size={20} />
                        <div>
                          <h3 className="font-bold text-gray-800">Local Attractions</h3>
                          <p className="text-sm text-blue-600">Tourism and Cultural Heritage</p>
                        </div>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        The district which Ambo town is located in, have plenty of underutilized and untapped cultural heritage and historical sites that will help attract tourist resources in the area with different qualities and varieties in boosting tourism industry of the region.
                      </p>
                      
                      <div className="space-y-2">
                        {localAttractions.map((attraction, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700">{attraction}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-3 mt-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-700">
                          They are the people with traditional knowledge and practices of traditional healing methods, folk music and dances passed down from generation to generation.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Village Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-5 bg-white border border-blue-200 rounded-xl"
                  >
                    <h4 className="mb-3 font-semibold text-gray-800">Village Benefits</h4>
                    <div className="space-y-2">
                      {villageBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="p-1 mt-1">
                            <CheckCircle className="text-blue-600" size={16} />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="my-8 border-t border-blue-200"
              ></motion.div>

              {/* Economic Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-blue-600 to-teal-700 rounded-xl sm:rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/20">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">Economic Transformation</h3>
                    <p className="text-blue-100">Harnessing Untapped Resources for Community Prosperity</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Beef className="text-blue-200" size={18} />
                      <h4 className="font-semibold">Beekeeping & Honey Production</h4>
                    </div>
                    <p className="text-blue-100">
                      Transforming idle forest resources into productive, eco-friendly business models that create sustainable income for communities.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-blue-200" size={18} />
                      <h4 className="font-semibold">Youth Employment</h4>
                    </div>
                    <p className="text-blue-100">
                      Creating full-time employment for 100+ unemployed youth annually, ensuring food security and economic stability for households.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-teal-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Sustainable Community Development
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Help us build a model village that integrates culture, environment, and economic development
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Mail size={20} />
                    Partner With Us
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Building size={20} />
                    Explore Other Projects
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-blue-600 to-teal-600 rounded-t-2xl"
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
            title="Projects"
            links={projectsSidebarLinks}
            brandColor="blue"
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

export default MultiPurposeVillage;