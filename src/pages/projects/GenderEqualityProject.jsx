// src/pages/projects/gender-equality/GenderEquality.jsx
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
  Star as StarIcon
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

// Program Key Components
const keyComponents = [
  {
    title: "Advocacy and Awareness",
    items: [
      "Localized Campaigns: Launch targeted awareness campaigns to highlight gender equality issues such as early child marriage, gender-based violence (GBV), and economic inequalities specific to emerging regions of Ethiopia.",
      "Community Workshops: Organize workshops and dialogues with local leaders, religious authorities, and community members to foster understanding and support for gender equality."
    ]
  },
  {
    title: "Capacity Building",
    items: [
      "Tailored Training: Provide training for local government officials, educators, and community organizations on gender sensitivity, inclusive practices, and strategies for combating gender-based discrimination.",
      "Leadership Development: Facilitate leadership programs for women and youth to enhance their roles in decision-making processes at local and community levels."
    ]
  },
  {
    title: "Support Services",
    items: [
      "Psycho-Social Support: Establish support centers that offer counseling and psycho-social support for survivors of GBV and harmful practices, ensuring their well-being and recovery.",
      "Legal Assistance: Provide access to legal aid to help victims navigate the legal system and seek justice for gender-related abuses."
    ]
  },
  {
    title: "Economic Empowerment",
    items: [
      "Vocational Training: Implement skills development programs to improve employment opportunities for women and marginalized groups, focusing on trades and professions relevant to the local economy.",
      "Entrepreneurship Initiatives: Offer microfinance, business training, and mentorship to support the establishment and growth of small businesses led by women and youth."
    ]
  },
  {
    title: "Educational Initiatives",
    items: [
      "Scholarships and Support: Provide educational scholarships and support for girls and women to overcome barriers to education, such as costs and distance.",
      "Gender Education in Schools: Integrate gender equality topics into school curricula to challenge stereotypes and promote respectful relationships among students."
    ]
  },
  {
    title: "Research and Data Collection",
    items: [
      "Local Research: Conduct research to identify specific gender-related issues and challenges in the emerging regions, using this data to tailor interventions effectively.",
      "Community Surveys: Use surveys and focus groups to collect insights from local populations about their experiences and needs related to gender equality."
    ]
  },
  {
    title: "Community Engagement",
    items: [
      "Partnerships: Build and strengthen partnerships with local NGOs, community organizations, and traditional leaders to collaborate on gender equality efforts and ensure culturally sensitive approaches.",
      "Grassroots Mobilization: Support and amplify grassroots movements and local advocacy groups working to address gender inequalities and advance women's rights."
    ]
  },
  {
    title: "Monitoring and Evaluation",
    items: [
      "Impact Assessment: Continuously evaluate the effectiveness of the program's activities to ensure they meet their objectives and make necessary adjustments.",
      "Feedback Mechanisms: Establish feedback channels to gather input from beneficiaries and stakeholders to improve program strategies and implementation."
    ]
  }
];

// Target Groups
const targetGroups = [
  "Women and Girls: Enhance access to education, economic opportunities, and support services specifically for women and girls in emerging regions.",
  "Marginalized Communities: Address the needs of marginalized groups, including those affected by traditional practices, disability, and socio-economic challenges.",
  "Community Leaders: Engage local leaders and influencers to foster community-wide support for gender equality and drive sustainable change.",
  "Capacity Building: Strengthen the capabilities of civil society and traditional leaders to prevent and respond to issues related to sexual and gender-based violence (SGBV), harmful practices, sexual and reproductive health and rights (SRHR), and child marriages.",
  "Grassroots Institutional Support: Enhance the capacity of grassroots institutions to safeguard human rights, provide secure spaces for SGBV survivors, and ensure access to economic empowerment opportunities.",
  "Focused Outreach: Target duty bearers, including state institutions and traditional leaders, as well as rights holders, with a focus on vulnerable groups such as women, children, youth, and those affected by child marriages. Concentrate efforts in districts with the highest prevalence of SGBV, harmful practices, and SRHR issues.",
  "Enhanced Support Services: Build upon existing support systems by improving safe spaces and livelihood training for survivors, ensuring continued and effective support for affected individuals."
];

// Program Outcomes
const outcomes = [
  "Increased community awareness and support for gender equality issues.",
  "Strengthened capacity of local institutions and individuals to address gender disparities effectively.",
  "Improved access to support services and legal aid for survivors of GBV and harmful practices.",
  "Enhanced economic opportunities and empowerment for women and marginalized groups.",
  "Data-driven insights that guide future program improvements and policy advocacy efforts."
];

// Achievements
const achievements = [
  "Community Engagement and Awareness: Successfully conducted dialogues, advocacy, multimedia information sessions, and awareness-raising initiatives for community members, community-based groups, chief forums, and traditional leaders on child marriages and related harmful practices.",
  "Strengthened Stakeholder Platforms: Established and promoted a robust platform through chiefs' forums to enhance engagement between stakeholders, focusing on the rights of survivors of child marriages, sexual and gender-based violence (SGBV), and harmful practices. Developed mechanisms to denormalize SGBV, increase awareness of GBV laws, and facilitate the identification and reporting of SGBV cases.",
  "Psychosocial Support and Safe Spaces: Provided essential psychosocial support and created safe spaces for survivors of child marriage, ensuring their well-being and recovery.",
  "Economic Empowerment and Livelihood Support: Delivered economic empowerment programs, including livelihood training and starter tools/materials, to survivors of child marriage, enhancing their economic independence and resilience.",
  "Strengthened Leadership: Reinforcing leadership roles within community settings.",
  "Enhanced Human Rights Movements: Boosting the effectiveness of human rights advocacy.",
  "Improved Engagement: Elevating the practices of human rights educators to effectively engage and influence decision-makers."
];

// Impact Points
const impactPoints = [
  "Empower Women and Girls: Equip them with the knowledge and tools needed to advocate for gender equality in their communities.",
  "Strengthen Women's Leadership: Facilitate community mobilization activities that engage both women and men in promoting gender equality.",
  "Enhance Collaboration: Foster stronger connections between Women's Associations, Youth Associations, Faith-Based Organizations, and human rights groups.",
  "Advocate for Decision-Makers: Encourage leaders to uphold and respect their obligations related to gender equality."
];

function GenderEquality() {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/gender-equality.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/60"></div>
        
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
                GENDER EQUALITY PROGRAM
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-purple-100 sm:text-xl md:text-2xl"
              >
                Empowering Women and Marginalized Groups in Emerging Regions of Ethiopia
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
              {/* Program Objective Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <TargetIcon2 className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Gender Equality Program of alignAfrica</h2>
                    <p className="text-purple-600">Creating Lasting Change Through Empowerment</p>
                  </div>
                </div>

                <div className="p-5 mb-6 border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Objective:</h3>
                  <p className="text-lg text-gray-700">
                    To enhance gender equality in emerging regions of Ethiopia by addressing local gender disparities, empowering women and marginalized groups, and fostering inclusive community practices.
                  </p>
                </div>
              </motion.div>

              {/* Two Column Layout for Main Content */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Key Components */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="mb-6 text-2xl font-bold text-gray-800">Key Components</h2>
                    
                    <div className="space-y-6">
                      {keyComponents.slice(0, 4).map((component, index) => (
                        <div key={index} className="p-5 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50/50 to-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${index < 2 ? 'bg-purple-100' : 'bg-purple-50'}`}>
                              {index === 0 && <Megaphone className="text-purple-600" size={20} />}
                              {index === 1 && <GraduationCap className="text-purple-600" size={20} />}
                              {index === 2 && <HandHeart className="text-purple-600" size={20} />}
                              {index === 3 && <BriefcaseBusiness className="text-purple-600" size={20} />}
                            </div>
                            <h3 className="font-bold text-gray-800">{component.title}</h3>
                          </div>
                          
                          <ul className="space-y-2">
                            {component.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 mt-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* More Key Components */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="space-y-6">
                      {keyComponents.slice(4, 8).map((component, index) => (
                        <div key={index} className="p-5 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50/50 to-white">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${index < 2 ? 'bg-purple-100' : 'bg-purple-50'}`}>
                              {index === 0 && <School className="text-purple-600" size={20} />}
                              {index === 1 && <FileText className="text-purple-600" size={20} />}
                              {index === 2 && <Network className="text-purple-600" size={20} />}
                              {index === 3 && <ClipboardCheck className="text-purple-600" size={20} />}
                            </div>
                            <h3 className="font-bold text-gray-800">{component.title}</h3>
                          </div>
                          
                          <ul className="space-y-2">
                            {component.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 mt-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Program Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="overflow-hidden shadow-lg rounded-xl"
                  >
                    <img 
                      src="/images/gendereq.jpg" 
                      alt="Gender Equality Program in action" 
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105 sm:h-72"
                    />
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                      <p className="text-sm font-medium text-center text-gray-700">
                        Empowering communities through gender equality initiatives
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Target Groups */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="p-5 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Users2 className="text-purple-600" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Target Groups</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {targetGroups.map((group, index) => (
                          <li key={index} className="flex items-start gap-2 p-3 rounded-lg bg-white/50">
                            <div className={`p-1.5 rounded-md ${index < 3 ? 'bg-purple-100' : 'bg-purple-50'}`}>
                              <UserCheck className="text-purple-600" size={16} />
                            </div>
                            <span className="text-gray-700">{group}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Program Outcomes */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 border border-purple-200 rounded-xl bg-gradient-to-r from-white to-purple-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <TrendingUpIcon className="text-purple-600" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Outcomes</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="p-1 mt-1">
                              <CheckCircle className="text-purple-600" size={16} />
                            </div>
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-4 mt-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                        <p className="text-gray-700">
                          By focusing on the unique needs of emerging regions in Ethiopia, alignAfrica's Gender Equality Program aims to make a significant impact on gender equality and empower communities for lasting change.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="p-5 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <AwardIcon className="text-purple-600" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="p-3 rounded-lg bg-white/50">
                            <div className="flex items-start gap-2">
                              <StarIcon className="flex-shrink-0 mt-1 text-purple-500" size={16} />
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Our Impact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <GlobeIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">Our Impact</h2>
                      <p className="text-purple-100">Transforming Lives Through Gender Equality</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-purple-100">
                      Gender discrimination and violence are deeply entrenched issues in Ethiopia, further exacerbated by poverty, marginalization, and various forms of discrimination. Through our Advancing Equality through Human Rights Education program, alignAfrica works in partnership with CBOs in targeted regions to:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                    {impactPoints.map((point, index) => (
                      <div key={index} className="p-3 rounded-lg bg-white/10">
                        <div className="flex items-start gap-2">
                          <div className="p-1 rounded-md bg-white/20">
                            <ShieldCheck className="text-white" size={16} />
                          </div>
                          <span className="text-purple-100">{point}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Join Us in Creating Gender Equality
                </h3>
                <p className="mb-6 text-lg text-purple-100 sm:text-xl">
                  Help us empower women and marginalized groups in Ethiopia's emerging regions
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-purple-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-purple-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <HandHeart size={20} />
                    Support Our Work
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <Scale size={20} />
                    Explore Other Projects
                  </a>
                </div>
              </motion.div>

              {/* Final Commitment Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 mt-8 text-center border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="text-purple-600" size={28} />
                  <h4 className="text-xl font-bold text-gray-800">Our Commitment</h4>
                  <Heart className="text-purple-600" size={28} />
                </div>
                <p className="text-lg text-gray-700">
                  alignAfrica remains committed to addressing the complexities of gender inequality and fostering a more equitable society through dedicated programs and collaborative efforts.
                </p>
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl"
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

export default GenderEquality;