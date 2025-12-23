// src/pages/projects/one-health/OneHealthProject.jsx
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
  Zap,
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
  AlertTriangle, // Changed from Virus to AlertTriangle
  Crosshair,
  GitBranch,
  MessageCircle
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
    icon: AlertTriangle // Changed from Virus to AlertTriangle
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
    icon: Crosshair // Changed from Target (duplicate) to Crosshair
  },
  { 
    name: "Youth Voice Ethiopia", 
    href: "/projects/youth-voice-ethiopia", 
    icon: MessageCircle // Changed from Zap to MessageCircle
  }
];

// Program objectives
const programObjectives = [
  "Establish and strengthen One Health Clubs at higher learning institutions",
  "Advocate for the inclusion of One Health in national health agendas",
  "Raise national awareness among scientific community, public, and government",
  "Promote research on zoonotic diseases",
  "Encourage cross-disciplinary collaboration within One Health professions"
];

// Club objectives
const clubObjectives = [
  "Strengthen leadership and capacity within the clubs",
  "Equip leaders with essential skills for effective management",
  "Engage clubs in community service and advocacy",
  "Provide training, materials, and motivational seminars",
  "Encourage student participation in health-related activities"
];

// Club activities
const clubActivities = [
  "Conduct awareness programs and provide counseling services",
  "Facilitate referrals and support for health issues",
  "Organize motivational seminars and community engagement",
  "Collaborate with other clubs and institutions for joint learning"
];

// Zoonotic disease facts
const zoonoticFacts = [
  {
    stat: "60%+",
    description: "of human infectious diseases are zoonotic",
    detail: "Originating from animals"
  },
  {
    stat: "75%",
    description: "of emerging infectious diseases are zoonotic",
    detail: "Including rabies, anthrax, and tuberculosis"
  },
  {
    stat: "2",
    description: "Universities with established clubs",
    detail: "Assossa University and Semera University"
  },
  {
    stat: "340",
    description: "Students engaged",
    detail: "Directly benefiting from the program"
  }
];

// Achievements
const achievements = [
  "Establishment of One Health Clubs at Assossa and Semera Universities",
  "Enhanced interdisciplinary collaboration among health professionals",
  "National awareness campaigns influencing health agendas",
  "Promotion of zoonotic disease research",
  "Capacity building and skill development for club leaders",
  "Community engagement and support initiatives",
  "Successful model for expansion to other institutions"
];

// Why Ethiopia needs One Health
const ethiopiaNeeds = [
  "Extensive livestock population and widespread pastoralism",
  "Close human-animal interactions increasing disease risk",
  "Prevalent consumption of raw animal products",
  "High-risk diseases: rabies, anthrax, tuberculosis, Ebola",
  "Addressing globalization and climate change impacts",
  "Integrated approach for evolving disease patterns"
];

function OneHealthProject() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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
        style={{ backgroundImage: 'url(/images/one-helth.png)' }}
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
                One Health Program
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Integrating Human, Animal, and Environmental Health
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
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex overflow-x-auto border-b border-blue-200">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "overview" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    Overview
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("objectives")}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "objectives" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  <div className="flex items-center gap-2">
                    <Target size={16} />
                    Objectives
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("achievements")}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "achievements" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  <div className="flex items-center gap-2">
                    <Trophy size={16} />
                    Achievements
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("clubs")}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "clubs" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    One Health Clubs
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
            >
              {/* Program Introduction */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Activity className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">alignAfrica One Health Program</h2>
                    <p className="text-blue-600">Holistic Health Management in Ethiopia</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700">
                  The alignAfrica One Health Program is dedicated to advancing a holistic approach to health management in Ethiopia by integrating human, animal, and environmental health. Through interdisciplinary partnerships, we aim to enhance public health by fostering coordinated efforts across veterinary, medical, and environmental sectors.
                </p>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 mb-8 border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Target className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Mission of the One Health Program</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Our mission is to foster closer collaboration and research among veterinary, medical, and environmental health professionals to improve public health outcomes.
                </p>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Program Objectives */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeTab === "overview" || activeTab === "objectives" ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                    className={activeTab === "overview" || activeTab === "objectives" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Objectives of the One Health Program</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {programObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="flex-shrink-0 p-1 mt-1">
                            <CheckCircle className="text-blue-600" size={16} />
                          </div>
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Why One Health in Ethiopia */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeTab === "overview" ? 1 : 0 }}
                    transition={{ delay: 0.6 }}
                    className={activeTab === "overview" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MapPin className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Why the One Health Approach in Ethiopia?</h3>
                    </div>
                    
                    <p className="mb-4 text-gray-700">
                      Ethiopia's extensive livestock population and widespread pastoralism pose significant risks from zoonotic diseases due to close human-animal interactions and prevalent consumption of raw animal products.
                    </p>
                    
                    <div className="space-y-2">
                      {ethiopiaNeeds.map((need, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">{need}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Zoonotic Disease Facts */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeTab === "overview" ? 1 : 0 }}
                    transition={{ delay: 0.7 }}
                    className={activeTab === "overview" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <AlertTriangle className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Quick Facts about Zoonotic Diseases</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {zoonoticFacts.map((fact, index) => (
                        <div key={index} className="p-4 text-center bg-blue-50 rounded-xl">
                          <div className="text-2xl font-bold text-blue-700">{fact.stat}</div>
                          <div className="mt-1 text-sm font-semibold text-gray-800">{fact.description}</div>
                          <div className="text-xs text-gray-600">{fact.detail}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* One Health Clubs */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: activeTab === "clubs" || activeTab === "overview" ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                    className={activeTab === "clubs" || activeTab === "overview" ? "block" : "hidden"}
                  >
                    <div className="p-5 border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg">
                          <Building className="text-blue-600" size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Establishment of One Health Clubs</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        From December 2015 to April 2016, alignAfrica established One Health Clubs at Assossa University and Semera University, funded by the Civil Society Support Program (CSSP)/British Council.
                      </p>
                      
                      <div className="p-4 mb-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="text-blue-600" size={16} />
                          <span className="font-semibold text-gray-800">340 Students Engaged</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          This initiative demonstrated the effectiveness of One Health Clubs in addressing health issues among university youth and has plans for expansion to other institutions.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Club Objectives */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: activeTab === "clubs" ? 1 : 0 }}
                    transition={{ delay: 0.6 }}
                    className={activeTab === "clubs" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Objectives of the Clubs</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {clubObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="flex-shrink-0 p-1 mt-1">
                            <CheckCircle className="text-blue-600" size={16} />
                          </div>
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Club Activities */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: activeTab === "clubs" ? 1 : 0 }}
                    transition={{ delay: 0.7 }}
                    className={activeTab === "clubs" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Calendar className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Activities of the One Health Clubs</h3>
                    </div>
                    
                    <p className="mb-4 text-gray-700">The clubs are expected to:</p>
                    
                    <div className="space-y-3">
                      {clubActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="flex-shrink-0 p-1 mt-1">
                            <CheckCircle className="text-blue-600" size={16} />
                          </div>
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: activeTab === "achievements" ? 1 : 0 }}
                    transition={{ delay: 0.8 }}
                    className={activeTab === "achievements" ? "block" : "hidden"}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Trophy className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${index < 3 ? 'bg-blue-100' : 'bg-blue-50'}`}>
                              <span className={`font-bold ${index < 3 ? 'text-blue-700' : 'text-blue-600'}`}>
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">{achievement.split(':')[0]}</h4>
                              {achievement.includes(':') && (
                                <p className="mt-1 text-sm text-gray-600">{achievement.split(':')[1]}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Closing Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 mt-8 text-center border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Building a Healthier Society</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Through these efforts, alignAfrica aims to build a healthier, more resilient society by integrating and strengthening health management across multiple sectors.
                </p>
              </motion.div>

              {/* Program Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 mt-8 bg-white border border-blue-200 shadow-lg rounded-xl"
              >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-700">2</div>
                    <div className="text-sm font-semibold text-gray-800">Universities</div>
                    <div className="text-xs text-gray-600">With One Health Clubs</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-700">340</div>
                    <div className="text-sm font-semibold text-gray-800">Students</div>
                    <div className="text-xs text-gray-600">Directly Engaged</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-700">7</div>
                    <div className="text-sm font-semibold text-gray-800">Key Achievements</div>
                    <div className="text-xs text-gray-600">Documented Impact</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-700">2015</div>
                    <div className="text-sm font-semibold text-gray-800">Program Start</div>
                    <div className="text-xs text-gray-600">Continuous Growth</div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-cyan-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support the One Health Program
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Join us in creating integrated health solutions for Ethiopia
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-block px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    Partner With Us
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-block px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    View All Projects
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

export default OneHealthProject;