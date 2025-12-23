// src/pages/projects/dance4life/Dance4LifeProject.jsx
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
  Shield as ShieldIcon
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

// Program objectives
const programObjectives = [
  "Enhance Communication: Strengthen behavior change communication capabilities within secondary schools",
  "Improve Outcomes: Achieve better behavioral outcomes related to HIV/AIDS and sexual and reproductive health among in-school youth",
  "Disseminate Tools: Provide impactful behavior change tools and approaches tailored to the needs of students",
  "Strengthen Implementation: Build school capacity to deliver and monitor high-quality, skills-based HIV prevention education"
];

// Approach methodology
const approachMethods = [
  "Integration of Education and Behavior Change Communication",
  "Peer-Led Approaches",
  "Recognition of Achievements",
  "School Community Outreach"
];

// Major achievements
const majorAchievements = [
  "Increased Knowledge: Participants demonstrated significant improvement in knowledge about STDs compared to non-participants",
  "Behavioral Changes: Notable changes include delayed initiation of sexual intercourse, fewer sexual partners, and reduced incidence of high-risk sexual behaviors",
  "Community Impact: Over 4,500 individuals, including 2,172 girls, received awareness training, along with school staff and local health officials"
];

// Target schools
const targetSchools = [
  "Debre-Berhan Debre-Eba Secondary and Preparatory School",
  "Mojana Wodera Woreda, Seladngay Secondary and Preparatory School",
  "Menz Mama Midr, Molale Secondary and Preparatory School",
  "Menzekeya, Wogera Secondary and Preparatory School"
];

// Activity highlights
const activityHighlights = [
  {
    title: "Heart-Connection-Tour (HCT)",
    description: "Organized events to inspire and educate students about Dance4Life through music and dance performances",
    reach: "4,200 youths reached",
    icon: Music
  },
  {
    title: "Mass Awareness Activities",
    description: "Comprehensive training on sexual and reproductive health and STD prevention",
    details: "Includes peer pressure management training",
    icon: Megaphone
  }
];

// Impact statistics
const impactStats = [
  { label: "Youths Reached", value: "4,200+", description: "Through HCT events" },
  { label: "Individuals Trained", value: "4,500+", description: "Including 2,172 girls" },
  { label: "Schools Engaged", value: "4", description: "In North Shoa Zone" },
  { label: "Program Focus", value: "HIV Prevention", description: "Sexual & reproductive health" }
];

function Dance4LifeProject() {
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
        style={{ backgroundImage: 'url(/images/success-storie-banner.jpg)' }}
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
                Dance4Life Project
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Empowering Youth Through HIV Prevention Education
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
              {/* Impact Statistics */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4 sm:gap-6 sm:mb-12"
              >
                {impactStats.map((stat, index) => (
                  <div key={index} className="p-4 text-center border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                    <div className="text-2xl font-bold text-blue-700 sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">{stat.label}</div>
                    <div className="text-xs text-gray-600 sm:text-sm">{stat.description}</div>
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
                        <Heart className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Dance4Life</h2>
                        <p className="text-blue-600">Transforming Youth Health Education</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Overview</h3>
                      <p className="mb-4 text-gray-700">
                        The Dance4Life Project is a transformative initiative aimed at equipping Ethiopian youth with critical knowledge and skills to prevent HIV and make informed decisions regarding their sexual and reproductive health.
                      </p>
                      <p className="text-gray-700">
                        Despite entering secondary school with generally low-risk behaviors, Ethiopian youth often lack comprehensive understanding and support for effective HIV prevention.
                      </p>
                    </div>

                    <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <h4 className="mb-3 font-semibold text-gray-800">Partnership Collaboration</h4>
                      <p className="text-gray-700">
                        In collaboration with the Youth Network for Sustainable Development (YNSD), the North Shoa Zone Education Office, the Office of Women, Children, and Youth Affairs Department, and various school youth clubs, alignAfrica launched an in-school youth program.
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        This program is designed to reduce HIV infection risks among students transitioning from primary to secondary and preparatory schools by establishing a robust HIV prevention and sexual and reproductive health curriculum.
                      </p>
                    </div>
                  </motion.div>

                  {/* Program Objectives */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Program Objectives</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {programObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50">
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

                  {/* Target Schools */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <School className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Target Schools</h3>
                    </div>
                    
                    <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <p className="mb-4 text-gray-700">
                        The Dance4Life Project was implemented across four secondary schools in the North Shoa Zone, Amhara Region:
                      </p>
                      
                      <div className="space-y-3">
                        {targetSchools.map((school, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                            <div className="flex-shrink-0 p-2 mt-1">
                              <GraduationCap className="text-blue-600" size={16} />
                            </div>
                            <div>
                              <span className="text-gray-700">{school}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Approach and Methodology */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Lightbulb className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Approach and Methodology</h3>
                    </div>
                    
                    <div className="p-5 mb-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <p className="mb-4 text-gray-700">
                        The program utilizes a heart connection tour team, focusing on placing youth at the center of social structures to drive mass awareness within the school community.
                      </p>
                    </div>

                    {/* Activity Highlights */}
                    <div className="mb-6">
                      <h4 className="mb-4 font-semibold text-gray-800">Key Activities:</h4>
                      <div className="space-y-4">
                        {activityHighlights.map((activity, index) => {
                          const Icon = activity.icon;
                          return (
                            <div key={index} className="p-4 bg-white border border-blue-200 rounded-xl">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <Icon className="text-blue-600" size={20} />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-800">{activity.title}</h5>
                                  <p className="text-sm text-blue-600">{activity.reach || activity.details}</p>
                                </div>
                              </div>
                              <p className="text-gray-700">{activity.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Methodology Emphasis */}
                    <div>
                      <h4 className="mb-4 font-semibold text-gray-800">The methodology emphasizes:</h4>
                      <div className="space-y-2">
                        {approachMethods.map((method, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                            <div className="flex-shrink-0 p-1 mt-1">
                              <CheckCircle className="text-blue-600" size={16} />
                            </div>
                            <span className="text-gray-700">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Major Achievements */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Trophy className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Major Achievements</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {majorAchievements.map((achievement, index) => (
                        <div key={index} className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${index === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}>
                              <Star className={`${index === 0 ? 'text-blue-700' : 'text-blue-600'}`} size={20} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">{achievement.split(':')[0]}</h4>
                              <p className="mt-2 text-gray-700">{achievement.split(':')[1]}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Conclusion and Contact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="p-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg">
                          <ShieldIcon className="text-blue-600" size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Conclusion</h3>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        The Dance4Life Project is a vital initiative for fostering a healthier, informed generation. By partnering with local schools and communities, alignAfrica strives to create lasting change in the fight against HIV and promote sexual and reproductive health awareness.
                      </p>
                      
                      <div className="p-4 mt-4 bg-white rounded-lg">
                        <div className="flex items-center gap-3">
                          <Mail className="text-blue-600" size={20} />
                          <div>
                            <h4 className="font-semibold text-gray-800">For more information, contact:</h4>
                            <a 
                              href="mailto:alignafrica@gmail.com" 
                              className="text-blue-700 hover:text-blue-800 hover:underline"
                            >
                              Mr. Yonas Mamo - alignafrica@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Partners */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-b from-white to-blue-50">
                      <h4 className="mb-3 font-semibold text-gray-800">Key Partners</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Users className="text-blue-600" size={16} />
                          <span className="text-gray-700">Youth Network for Sustainable Development (YNSD)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <School className="text-blue-600" size={16} />
                          <span className="text-gray-700">North Shoa Zone Education Office</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users2 className="text-blue-600" size={16} />
                          <span className="text-gray-700">Office of Women, Children, and Youth Affairs Department</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <GraduationCap className="text-blue-600" size={16} />
                          <span className="text-gray-700">Various School Youth Clubs</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Behavioral Impact Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Behavioral Impact Outcomes</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="p-4 text-center bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">✓</div>
                      <div className="mt-2 font-semibold text-gray-800">Delayed Initiation</div>
                      <p className="text-sm text-gray-600">Of sexual intercourse</p>
                    </div>
                    <div className="p-4 text-center bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">✓</div>
                      <div className="mt-2 font-semibold text-gray-800">Fewer Partners</div>
                      <p className="text-sm text-gray-600">Reduced number of sexual partners</p>
                    </div>
                    <div className="p-4 text-center bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">✓</div>
                      <div className="mt-2 font-semibold text-gray-800">Reduced Risk</div>
                      <p className="text-sm text-gray-600">Lower incidence of high-risk behaviors</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Support Youth Health Education
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Help us empower the next generation with life-saving knowledge
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="mailto:alignafrica@gmail.com" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-blue-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <Mail size={20} />
                    Contact Our Team
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Heart size={20} />
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

export default Dance4LifeProject;