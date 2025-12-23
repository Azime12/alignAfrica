// src/pages/projects/rmnh/RMNHProject.jsx
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
  Map,
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
  UsersRound
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
    icon: Baby 
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

// SMS Strategy components
const smsStrategies = [
  {
    number: 1,
    name: "Social Mobilization",
    icon: UsersRound,
    description: "Educating the entire community to alter behavior and adapt positive practices",
    components: [
      {
        name: "Youth Educators for Success (YES) Groups",
        details: "15 members per woreda, trained in RMNH, gender rights, and facilitation skills",
        activities: [
          "Personal contacts: one-to-one or small group education with peers",
          "Techno contact: produce local songs and role plays on RMNH issues",
          "Professional contact: create referral linkages with local health facilities"
        ]
      },
      {
        name: "Be-Model-Women (BMW) Groups",
        details: "15 women per woreda, acting as role models to convince others to use RMNH services",
        benefit: "Graduate to 'Money for Women' group after convincing 10 women"
      },
      {
        name: "Joint-Action-Leaders (JAL) Group",
        details: "Includes teachers, health practitioners, religious leaders, opinion leaders, etc.",
        role: "Work as change agents to improve lives of women and youth"
      }
    ]
  },
  {
    number: 2,
    name: "Money for Women",
    icon: DollarSign,
    description: "Empowering women economically and socially through income generation activities",
    details: [
      "Women form goat-saving groups using revolving fund mechanism",
      "Recipients pass offspring to next qualifying woman in group",
      "Addresses male-dominant system and improves women's economic power"
    ]
  },
  {
    number: 3,
    name: "Service Quality Promotion",
    icon: ShieldIcon,
    description: "Improving quality, client-friendly & culturally-responsive health services",
    details: [
      "Competence building and motivational trainings for health practitioners",
      "Increasing number of female health service providers",
      "Addressing cultural barriers to modern delivery services"
    ]
  }
];

// Project outcomes
const projectOutcomes = [
  {
    target: "Increasing uptake of culturally acceptable RMNH services",
    goal: "33% improvement in 14 selected woredas"
  },
  {
    target: "Improving community's attitude to RMNH needs",
    goal: "50% positive change in attitude"
  },
  {
    target: "Empowering women to make healthy RMNH choices",
    goal: "10% increase in women's confidence"
  },
  {
    target: "Enhanced accountability of health providers",
    goal: "75% improvement in responsiveness"
  }
];

// Achievements list
const achievements = [
  "1000 pregnant women attended antenatal care at least once during their last pregnancy",
  "Teenage pregnancy reduced (proportion of reduction from current baseline)",
  "1000 pregnant women attended their last delivery at health centers",
  "75 health workers trained on Reproductive maternal and neonatal health",
  "5,000 youth reached with RMNH information",
  "50,000+ women & community members reached with RMNH information",
  "140 religious and community leaders trained on local level leadership",
  "14 facility management boards (JAL) established and strengthened",
  "800 women and girls reached with business development initiatives",
  "20 songs & role plays produced, recorded and distributed",
  "150 awareness raising campaigns conducted",
  "5000 brochures produced and distributed",
  "560 T-shirts produced and distributed"
];

// Project statistics
const projectStats = [
  { label: "Project Duration", value: "Apr 2015 - Mar 2018", icon: Calendar },
  { label: "Total Budget", value: "ETB 13,976,290", icon: DollarSign },
  { label: "alignAfrica Funding", value: "ETB 5,684,300", icon: Gift },
  { label: "Direct Beneficiaries", value: "10,324", icon: Users },
  { label: "Women Beneficiaries", value: "8,678", icon: Users2 },
  { label: "Woredas Covered", value: "14", icon: Map }
];

// Target zones and woredas
const targetAreas = [
  {
    zone: "Zone 1",
    woredas: ["Ada'ar", "Aysaita", "Chifra", "Dubti", "Elida'ar", "Afambo"]
  },
  {
    zone: "Zone 4",
    woredas: ["Awra", "Ewa", "Gulina", "Teru"]
  },
  {
    zone: "Zone 5",
    woredas: ["Delifage", "Dewe", "Telalek"]
  },
  {
    zone: "Additional",
    woredas: ["Semera-logiya Town Administration"]
  }
];

// YES Group Rewards
const yesRewards = [
  "Mobile phones",
  "Goats",
  "Vocational skill trainings",
  "Annual awards for 100 best achieving members"
];

function RMNHProject() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/project-banner.jpg)' }}
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
                RMNH Project in Afar Region
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Reproductive, Maternal and Neonatal Health Innovation
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

          {/* Main Content - All content visible without tabs */}
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
                className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 lg:grid-cols-3 sm:gap-6 sm:mb-12"
              >
                {projectStats.map((stat, index) => (
                  <div key={index} className="p-4 text-center border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      {React.createElement(stat.icon, { className: "text-blue-600", size: 20 })}
                    </div>
                    <div className="text-lg font-bold text-blue-700 sm:text-xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold text-gray-800 sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Overview Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Baby className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">RMNH Project in Afar Region</h2>
                        <p className="text-blue-600">Eliminating Demand-Side Barriers to RMNH Services</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="mb-4 text-gray-700">
                        The RMNH project is a collaborative program that deals with eliminating demand-side barriers to the uptake of RMNH (reproductive, maternal and neonatal health) services in Afar region.
                      </p>
                      <p className="text-gray-700">
                        As a competent and well-meaning public organization, alignAfrica in partnership with Afar Development Association (AFDA) and Semera Health Sciences College (SHSC) is complementing the efforts of the government and play meaningful role by undertaking an integrated RMNH promotion program.
                      </p>
                    </div>

                    <div className="p-5 mb-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <h3 className="mb-3 text-lg font-bold text-gray-800">The SMS Package</h3>
                      <p className="text-gray-700">
                        The project uses three highly innovative implementation strategies referred to as 'SMS' package:
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {smsStrategies.map((strategy) => (
                          <div key={strategy.number} className="p-3 text-center bg-white rounded-lg">
                            <div className="text-xl font-bold text-blue-700">{strategy.number}</div>
                            <div className="mt-1 text-sm font-semibold text-gray-800">{strategy.name.charAt(0)}</div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        Social Mobilization (S) + Money for Women (M) + Service Quality Promotion (S)
                      </p>
                    </div>

                    {/* Project Outcomes */}
                    <div className="mb-6">
                      <h3 className="mb-4 text-lg font-bold text-gray-800">Expected Project Outcomes</h3>
                      <div className="space-y-4">
                        {projectOutcomes.map((outcome, index) => (
                          <div key={index} className="p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <Target className="text-blue-600" size={20} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{outcome.target}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <TrendingUp className="text-blue-500" size={14} />
                                  <span className="text-sm font-medium text-blue-700">{outcome.goal}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Areas */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="mb-4 text-lg font-bold text-gray-800">Target Areas</h3>
                      <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                        <div className="space-y-4">
                          {targetAreas.map((area, index) => (
                            <div key={index} className="p-3 bg-white rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="text-blue-600" size={16} />
                                <h4 className="font-semibold text-gray-800">{area.zone}</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {area.woredas.map((woreda, wIndex) => (
                                  <span key={wIndex} className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                                    {woreda}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* SMS Strategies */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="space-y-8">
                      {smsStrategies.map((strategy) => (
                        <div key={strategy.number} className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-white to-blue-50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                              {React.createElement(strategy.icon, { className: "text-blue-600", size: 24 })}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">
                                Strategy #{strategy.number}: {strategy.name}
                              </h3>
                              <p className="text-blue-600">{strategy.description}</p>
                            </div>
                          </div>

                          {strategy.components ? (
                            <div className="space-y-4">
                              {strategy.components.map((component, index) => (
                                <div key={index} className="p-4 bg-white border border-blue-200 rounded-lg">
                                  <h4 className="mb-2 font-semibold text-gray-800">{component.name}</h4>
                                  <p className="mb-3 text-sm text-gray-700">{component.details}</p>
                                  
                                  {component.activities && (
                                    <div className="ml-4">
                                      <h5 className="mb-2 text-sm font-medium text-gray-800">Activities:</h5>
                                      <ul className="space-y-1">
                                        {component.activities.map((activity, aIndex) => (
                                          <li key={aIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-1 h-1 mt-2 bg-blue-400 rounded-full"></div>
                                            <span>{activity}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {component.benefit && (
                                    <div className="p-3 mt-3 rounded-lg bg-blue-50">
                                      <p className="text-sm text-blue-700">
                                        <span className="font-semibold">Benefit:</span> {component.benefit}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {strategy.details.map((detail, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                                  <div className="flex-shrink-0 p-1 mt-1">
                                    <CheckCircle className="text-blue-600" size={16} />
                                  </div>
                                  <span className="text-gray-700">{detail}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* YES Group Rewards for Strategy 1 */}
                          {strategy.number === 1 && (
                            <div className="p-4 mt-4 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                              <h5 className="mb-2 font-semibold text-gray-800">YES Group Rewards:</h5>
                              <div className="flex flex-wrap gap-2">
                                {yesRewards.map((reward, index) => (
                                  <span key={index} className="px-3 py-1 text-sm text-blue-800 bg-white border border-blue-200 rounded-full">
                                    {reward}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Gallery Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/af1.jpg" 
                        alt="Training of Income Generating Activities" 
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <p className="text-sm font-medium text-center text-gray-700">Income Generating Activities Training</p>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/rnmh.jpg" 
                        alt="RMNH Program Activities" 
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <p className="text-sm font-medium text-center text-gray-700">Community RMNH Program</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Achievements Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Trophy className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Achievements of RMNH Project</h2>
                        <p className="text-blue-600">Measurable Impact in Afar Region</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 border border-blue-200 rounded-lg bg-gradient-to-r from-white to-blue-50">
                          <div className={`p-2 rounded-lg ${index < 5 ? 'bg-blue-100' : 'bg-blue-50'}`}>
                            <CheckCircle className={`${index < 5 ? 'text-blue-700' : 'text-blue-600'}`} size={18} />
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Multimedia Achievements */}
                    <div className="p-5 mt-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <h4 className="mb-3 font-semibold text-gray-800">Media and Awareness Materials</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 text-center bg-white rounded-lg">
                          <FileMusic className="mx-auto text-blue-600" size={24} />
                          <div className="mt-2 text-xl font-bold text-blue-700">20</div>
                          <div className="text-sm text-gray-700">Songs & Role Plays</div>
                        </div>
                        <div className="p-3 text-center bg-white rounded-lg">
                          <Headphones className="mx-auto text-blue-600" size={24} />
                          <div className="mt-2 text-xl font-bold text-blue-700">150</div>
                          <div className="text-sm text-gray-700">Awareness Campaigns</div>
                        </div>
                        <div className="p-3 text-center bg-white rounded-lg">
                          <FileText className="mx-auto text-blue-600" size={24} />
                          <div className="mt-2 text-xl font-bold text-blue-700">5000</div>
                          <div className="text-sm text-gray-700">Brochures</div>
                        </div>
                        <div className="p-3 text-center bg-white rounded-lg">
                          <Shirt className="mx-auto text-blue-600" size={24} />
                          <div className="mt-2 text-xl font-bold text-blue-700">560</div>
                          <div className="text-sm text-gray-700">T-shirts</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Impact Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 mb-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg">
                          <BarChart3 className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-800">
                            Better Reproductive Health Life for Hard to Reach People of Afar
                          </h2>
                          <p className="text-blue-600">Reproductive Maternal and Neonatal Health Innovative Fund (RIF) Project</p>
                        </div>
                      </div>

                      <p className="mb-4 text-gray-700">
                        This was a Reproductive Maternal and Neonatal Health Innovative Fund (RIF) project jointly implemented by alignAfrica with Afar Development Association and Semera Health Sciences College.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="text-blue-500" size={16} />
                          <span className="text-sm text-gray-700">Implemented: April 2015 to March 2018</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="text-blue-500" size={16} />
                          <span className="text-sm text-gray-700">Funded by: DFID through Ethiopian Ministry of Health</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="text-blue-500" size={16} />
                          <span className="text-sm text-gray-700">Direct beneficiaries: 10,324 (8,678 women)</span>
                        </div>
                      </div>
                    </div>

                    {/* Health Impact Metrics */}
                    <div className="space-y-4">
                      <div className="p-5 bg-white border border-blue-200 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <Heart className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-gray-800">Maternal Health Impact</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-xl font-bold text-blue-700">1000</div>
                            <div className="text-sm text-gray-700">ANC Attendees</div>
                          </div>
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-xl font-bold text-blue-700">1000</div>
                            <div className="text-sm text-gray-700">Facility Deliveries</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-white border border-blue-200 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingDown className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-gray-800">Youth Impact</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-xl font-bold text-blue-700">5000</div>
                            <div className="text-sm text-gray-700">Youth Reached</div>
                          </div>
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-sm font-semibold text-blue-700">Reduced</div>
                            <div className="text-sm text-gray-700">Teenage Pregnancy</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-white border border-blue-200 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <UsersIcon className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-gray-800">Capacity Building</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-xl font-bold text-blue-700">75</div>
                            <div className="text-sm text-gray-700">Health Workers Trained</div>
                          </div>
                          <div className="p-3 text-center rounded-lg bg-blue-50">
                            <div className="text-xl font-bold text-blue-700">140</div>
                            <div className="text-sm text-gray-700">Leaders Trained</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Partners */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50"
                  >
                    <h4 className="mb-3 font-semibold text-gray-800">Key Partners</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Building className="text-blue-600" size={18} />
                        <div>
                          <h5 className="font-medium text-gray-800">Afar Development Association (AFDA)</h5>
                          <p className="text-sm text-gray-600">Local implementation partner</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <School className="text-blue-600" size={18} />
                        <div>
                          <h5 className="font-medium text-gray-800">Semera Health Sciences College (SHSC)</h5>
                          <p className="text-sm text-gray-600">Technical and training partner</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Shield className="text-blue-600" size={18} />
                        <div>
                          <h5 className="font-medium text-gray-800">DFID / Ethiopian Ministry of Health</h5>
                          <p className="text-sm text-gray-600">Funding partner</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Gallery Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="overflow-hidden shadow-lg rounded-xl"
                  >
                    <img 
                      src="/images/af12.jpg" 
                      alt="RMNH Project Implementation" 
                      className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                    />
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <p className="text-sm font-medium text-center text-gray-700">Community Engagement Session</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Maternal and Child Health
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Help us improve reproductive, maternal and neonatal health in pastoral communities
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
                    <Baby size={20} />
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl"
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

export default RMNHProject;