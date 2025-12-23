// src/pages/projects/nutrition-project/NutritionProject.jsx
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
  MapPin as MapPinIcon,
  Droplets,
  FlaskRound,
  Leaf as LeafIcon,
  Pill,
  Apple,
  Wheat,
  HeartPulse,
  Scale,
  UserCheck,
  HandHeart,
  BriefcaseBusiness,
  Building2,
  LightbulbIcon,
  Target as TargetIcon2,
  MessageSquare,
  ShieldCheck,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Globe as GlobeIcon,
  Star as StarIcon,
  Mail as MailIcon,
  Clock,
  Package,
  Truck,
  ShieldPlus,
  Users as UsersIcon3,
  Hospital,
  Cake,
  Star as StarIcon2,
  Target as TargetIcon3,
  DollarSign as DollarSignIcon,
  Users as UsersIcon4
} from 'lucide-react';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

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

// Key Collaborations
const keyCollaborations = [
  {
    partner: "Gambella University",
    contribution: "Provided crucial financial support and local expertise throughout the pilot phase."
  },
  {
    partner: "Just Spirulina",
    contribution: "This Israeli NGO, renowned for its expertise in Spirulina cultivation and training, supplied essential technical guidance and cultivation medium."
  }
];

// Pilot Phase Achievements
const pilotAchievements = [
  "Location: Operated from alignAfrica's Head Office in Addis Ababa.",
  "Distribution Impact:",
  "Macedonia Home for the Elderly: Distributed Spirulina powder to 60 elderly residents, enhancing their nutritional well-being.",
  "Eka Kotebe General Hospital: Supplied Spirulina to COVID-19 patients to support immune function and recovery.",
  "Duration: Spirulina supplements were provided free of charge for 5 months, showcasing significant potential for nutritional improvement."
];

// Future Plans and Expansion
const futurePlans = [
  "Production Scale-Up: Plans are underway to expand Spirulina cultivation to 40 hectares of land in the Gambella Region, leveraging favorable climatic conditions.",
  "Product Diversification: Introduction of Spirulina in various forms, including tablets, candy, and flour."
];

// Funding and Community Engagement
const fundingDetails = [
  "Global Giving Crowdfunding Campaign (June 2019):",
  "Amount Raised: USD 5,135 from 47 generous donors.",
  "Objective: Funding aimed at purchasing a high-speed centrifugal Spirulina drying machine.",
  "Target: USD 10,000."
];

// Beneficiaries
const beneficiaries = [
  "School Children: Through school feeding programs.",
  "Street Children: In rehabilitation centers.",
  "Patients: With severe and acute malnutrition in health centers and hospitals."
];

// Achievements List
const achievementsList = [
  {
    category: "Successful Launch and Licensing:",
    items: [
      "Initiation: October 2018.",
      "Licensing: Approved by the Food, Medicine, and Healthcare Administration & Control Authority by late 2019."
    ]
  },
  {
    category: "Collaborations:",
    items: [
      "Gambella University: Financial and expertise contributions.",
      "Just Spirulina: Technical support and cultivation medium."
    ]
  },
  {
    category: "Pilot Phase Impact:",
    items: [
      "Macedonia Home for the Elderly: Nutritional enhancement for 60 elderly individuals.",
      "Eka Kotebe General Hospital: Immunity and recovery support for COVID-19 patients."
    ]
  },
  {
    category: "Funding and Community Engagement:",
    items: [
      "Global Giving Campaign: Raised USD 35,135 for a spirulina production and distribution."
    ]
  }
];

function NutritionProject() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/nutrition-ban.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/60"></div>
        
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
                NUTRITION PROJECT
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Pilot Project on Spirulina Production and Distribution in Ethiopia
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
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left Column - Full width content */}
                <div className="space-y-8 lg:col-span-2">
                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <Leaf className="text-blue-600" size={28} />
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Pilot Project on Spirulina Production and Distribution in Ethiopia</h1>
                        <p className="text-blue-600">Innovative Nutritional Solutions for Vulnerable Communities</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Main Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="overflow-hidden shadow-lg rounded-xl"
                  >
                    <img 
                      src="/images/spriluna.jpg" 
                      alt="Spirulina Production and Distribution" 
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105 sm:h-72"
                    />
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                      <p className="text-sm font-medium text-center text-gray-700">
                        Spirulina production facility and distribution network
                      </p>
                    </div>
                  </motion.div>

                  {/* Overview Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                      </div>
                      
                      <p className="text-gray-700">
                        The Spirulina Pilot Project, launched by alignAfrica in October 2018, is an innovative initiative designed to combat malnutrition across Ethiopia through the production and distribution of Spirulina-based nutritional supplements. With formal approval and licensing from the Food, Medicine, and Healthcare Administration & Control Authority by the end of 2019, this project marks a significant step towards improving nutritional health in vulnerable communities.
                      </p>
                    </div>
                  </motion.div>

                  {/* Key Collaborations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Key Collaborations</h2>
                    
                    <div className="space-y-4">
                      {keyCollaborations.map((collab, index) => (
                        <div key={index} className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <UsersIcon3 className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <h3 className="mb-2 font-bold text-gray-800">{collab.partner}</h3>
                              <p className="text-gray-700">{collab.contribution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pilot Phase Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <AwardIcon className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Pilot Phase Achievements</h2>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-start gap-2">
                            <MapPinIcon className="mt-1 text-blue-600" size={18} />
                            <span className="font-semibold text-gray-800">Location:</span>
                            <span className="text-gray-700">Operated from alignAfrica's Head Office in Addis Ababa.</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg">
                          <h3 className="mb-2 font-semibold text-gray-800">Distribution Impact:</h3>
                          <ul className="ml-4 space-y-2">
                            {pilotAchievements.slice(2).map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Future Plans and Expansion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <TrendingUpIcon className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Future Plans and Expansion</h2>
                      </div>
                      
                      <ul className="space-y-3">
                        {futurePlans.map((plan, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="p-1.5 mt-0.5 rounded-md bg-blue-100">
                              <TargetIcon3 className="text-blue-600" size={16} />
                            </div>
                            <span className="text-gray-700">{plan}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Funding and Community Engagement */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <DollarSignIcon className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Funding and Community Engagement</h2>
                      </div>
                      
                      <div className="p-3 mb-3 rounded-lg bg-blue-50">
                        <h3 className="mb-2 font-semibold text-gray-800">• Global Giving Crowdfunding Campaign (June 2019):</h3>
                        <ul className="ml-4 space-y-2">
                          {fundingDetails.slice(1).map((detail, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 text-center bg-white border border-blue-200 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">USD 5,135</div>
                        <div className="text-sm text-gray-600">raised from 47 donors</div>
                        <div className="mt-2 text-sm text-gray-700">Target: USD 10,000</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Beneficiaries */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Heart className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Beneficiaries</h2>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg">
                        <h3 className="mb-3 font-semibold text-gray-800">The expanded project will provide support to:</h3>
                        <ul className="space-y-2">
                          {beneficiaries.map((beneficiary, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="p-1 mt-1">
                                <UsersIcon4 className="text-blue-600" size={16} />
                              </div>
                              <span className="text-gray-700">{beneficiary}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <StarIcon2 className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Achievements</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {achievementsList.map((achievement, index) => (
                          <div key={index} className="p-3 rounded-lg bg-blue-50">
                            <h3 className="mb-2 font-semibold text-gray-800">{achievement.category}</h3>
                            <ul className="ml-4 space-y-1">
                              {achievement.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <CheckCircle className="mt-0.5 text-blue-600" size={14} />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Conclusion Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-cyan-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <StarIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">Conclusion</h2>
                      <p className="text-blue-100">Our Commitment to Nutritional Health in Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-blue-100">
                      The Spirulina Pilot Project exemplifies alignAfrica's dedication to innovative nutritional solutions. By successfully supporting elderly individuals and COVID-19 patients during the pilot phase, and with plans for substantial expansion, alignAfrica aims to significantly enhance nutritional health across Ethiopia. We are committed to leveraging Spirulina's benefits to uplift vulnerable populations and drive sustainable change.
                    </p>
                  </div>
                  
                  <div className="p-4 mt-4 rounded-lg bg-white/10">
                    <div className="flex items-center gap-3">
                      <MailIcon className="text-blue-200" size={20} />
                      <div>
                        <p className="text-blue-100">For more updates and to support our efforts:</p>
                        <a 
                          href="mailto:tiruzerethiopia@gmail.com" 
                          className="font-semibold text-white hover:underline"
                        >
                          tiruzerethiopia@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8"
              >
                <div className="p-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Project Impact at a Glance</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 text-center bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">Oct 2018</div>
                      <div className="mt-2 font-semibold text-gray-800">Project Launch</div>
                    </div>
                    
                    <div className="p-4 text-center bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">60</div>
                      <div className="mt-2 font-semibold text-gray-800">Elderly Beneficiaries</div>
                    </div>
                    
                    <div className="p-4 text-center bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">5</div>
                      <div className="mt-2 font-semibold text-gray-800">Months of Free Distribution</div>
                    </div>
                    
                    <div className="p-4 text-center bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">40</div>
                      <div className="mt-2 font-semibold text-gray-800">Hectares Planned Expansion</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-cyan-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Nutritional Health in Ethiopia
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Join us in expanding spirulina production to combat malnutrition
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Heart size={20} />
                    Support Our Mission
                  </a>
                  <a 
                    href="/projects/spirulina-program" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Leaf size={20} />
                    Learn About Spirulina
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 rounded-t-2xl"
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

export default NutritionProject;