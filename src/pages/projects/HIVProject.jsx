

// src/pages/projects/hiv-project/HIVProject.jsx
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
  ShieldCheck,
  Stethoscope as StethoscopeIcon,
  Target as TargetIcon2,
  Activity as ActivityIcon,
  Heart as HeartIcon,
  Users as UsersIcon2,
  Award as AwardIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Building2,
  LightbulbIcon,
  MessageSquare,
  Globe as GlobeIcon,
  ShieldOff,
  FileCheck
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

// Focus Areas
const focusAreas = [
  "Prevention and Support: Strengthening efforts to prevent HIV transmission, particularly among at-risk populations.",
  "Care and Treatment: Enhancing the quality and accessibility of care and treatment services for individuals affected by HIV.",
  "Stigma Reduction: Combatting stigma and discrimination related to HIV/AIDS.",
  "Health Systems Strengthening: Building the capacity of local health systems to provide comprehensive HIV services."
];

// Key Activities
const keyActivities = [
  "Capacity Building: Training health service providers on HIV prevention, care, treatment, and services for orphans and vulnerable children.",
  "Community Care and Treatment: Expanding community-based HIV services by reinforcing the roles of people living with HIV and local communities in delivering care. This includes strengthening the capacity of government and community-based organizations (CBOs) to implement and sustain interventions.",
  "Psychosocial Support: Providing targeted support for high-risk groups, including female sex workers, truck drivers, commercial sex workers, and out-of-school adolescent girls. Activities include HIV counseling, testing, self-testing, gender-based violence prevention, and care services at community drop-in centers."
];

// 90-90-90 Objectives
const ninetyNinetyObjectives = [
  "Achieve 90% of people living with HIV knowing their status",
  "Achieve 90% of those diagnosed receiving sustained antiretroviral therapy (ART)",
  "Achieve 90% of ART recipients achieving viral suppression by 2020"
];

// Project Outcomes
const projectOutcomes = [
  "Increased Awareness: Improved community understanding and acceptance of HIV-positive individuals.",
  "Reduced Stigma: Enhanced support from religious leaders and institutions.",
  "Strengthened Local Capacity: Empowered local organizations and leaders in HIV response efforts."
];

// Achievements
const achievements = [
  {
    title: "Significant Reduction in Stigma and Discrimination",
    description: "The project in Gambella Town successfully reduced stigma and discrimination towards people living with HIV/AIDS through the active involvement of religious leaders and institutions. This shift in community attitudes has fostered a more supportive environment for those affected by HIV."
  },
  {
    title: "Enhanced Capacity and Reach",
    description: "Trained health service providers in HIV prevention, care, and treatment, strengthening the overall healthcare system's ability to address HIV/AIDS. Expanded community-based HIV services, increasing accessibility to care and treatment for vulnerable populations."
  },
  {
    title: "Improved Support for Key Populations",
    description: "Provided targeted psychological support and health services to high-risk groups, including female sex workers, truck drivers, and out-of-school adolescent girls, improving their access to HIV counseling, testing, and treatment services."
  },
  {
    title: "Strengthened Community-Based Organizations (CBOs)",
    description: "Collaborated with local CBOs to enhance their capacity in delivering HIV/AIDS care, leading to better community engagement and sustainability of interventions."
  },
  {
    title: "Achieved Notable Beneficiary Impact",
    description: "Directly benefitted 5,266 individuals, including 3,791 women and girls, through comprehensive HIV care and support services, including counseling, testing, and treatment."
  },
  {
    title: "Progress Towards 90-90-90 Targets",
    description: "Contributed to the achievement of the 90-90-90 targets by improving awareness, testing, and treatment adherence among people living with HIV. This has been critical in moving towards national and global HIV control goals."
  },
  {
    title: "Effective Use of Funding and Resources",
    description: "Successfully implemented the project with financial support from the US Embassy in Addis Ababa, demonstrating efficient use of resources and effective collaboration with international donors."
  },
  {
    title: "Increased Community Involvement",
    description: "Engaged religious leaders and local communities in HIV/AIDS education and prevention efforts, enhancing local ownership and commitment to the fight against HIV."
  },
  {
    title: "Strengthened Health Systems",
    description: "Improved the overall health system's response to HIV/AIDS through capacity building and support for local health infrastructure, ensuring long-term sustainability of HIV services."
  },
  {
    title: "Comprehensive Support for Orphans and Vulnerable Children",
    description: "Ensured that HIV-positive children were linked to appropriate services and support structures, addressing their unique needs and contributing to their well-being and protection."
  }
];

// Success Story Sections
const successStorySections = [
  {
    title: "The Challenge",
    content: "Gambella, a region deeply affected by HIV/AIDS, faced severe stigma and limited access to care. The prevalence of HIV remained high, and vulnerable populations, including women, children, and marginalized groups, struggled with inadequate support and widespread discrimination. Addressing these challenges required a comprehensive and compassionate approach."
  },
  {
    title: "A Strategic Intervention",
    content: "In September 2018, alignAfrica launched a pioneering project with funding from the US Embassy in Addis Ababa, as part of the PEPFAR initiative. The project aimed to achieve the ambitious 90-90-90 targets. To tackle stigma and discrimination, alignAfrica engaged religious leaders and institutions, harnessing their influence to foster a supportive environment. This innovative approach was complemented by efforts to enhance health service delivery, build capacity among local health providers, and expand community-based support."
  },
  {
    title: "Impact and Achievements",
    subsections: [
      {
        title: "Dismantling Stigma",
        content: "Religious leaders played a pivotal role in changing community perceptions. By addressing stigma and encouraging acceptance, the project created a more inclusive environment for those living with HIV."
      },
      {
        title: "Expanding Access to Care",
        content: "The project directly supported 5,266 individuals, including 3,791 women and girls. This included providing vital HIV counseling, testing, and treatment services, reaching those who had previously been underserved."
      },
      {
        title: "Strengthening Local Health Systems",
        content: "Training and capacity-building initiatives equipped health service providers with the skills needed for effective HIV care and treatment, improving the quality and reach of services in the region."
      },
      {
        title: "Empowering Key Populations",
        content: "Targeted interventions for high-risk groups—such as female sex workers and truck drivers—ensured they received essential psychological support and health services, significantly improving their well-being and access to care."
      },
      {
        title: "Creating Sustainable Change",
        content: "By collaborating with Community-Based Organizations (CBOs) and integrating local resources, alignAfrica fostered a sense of ownership and sustainability, ensuring long-term impact beyond the project's initial phase."
      }
    ]
  },
  {
    title: "A Lasting Legacy",
    content: "The Gambella HIV project stands as a testament to the power of targeted, compassionate intervention. It not only achieved its goal of moving towards the 90-90-90 targets but also left a lasting legacy of resilience, hope, and empowerment. Through dedicated efforts, alignAfrica has shown that with the right support and approach, communities can overcome the most daunting challenges and build a healthier, more inclusive future for all."
  }
];

function HIVProject() {
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hivganbelaba.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-orange-900/60"></div>
        
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
                HIV PROJECT
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-red-100 sm:text-xl md:text-2xl"
              >
                Combating HIV/AIDS with Compassion and Comprehensive Care in Ethiopia
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
                brandColor="red"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <ActivityIcon className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">HIV Project</h2>
                    <p className="text-red-600">Advancing Epidemic Control in Ethiopia</p>
                  </div>
                </div>

                <div className="p-5 mb-6 border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                  <p className="text-gray-700">
                    Ethiopia has made significant progress in controlling the HIV/AIDS epidemic over the past decade. Despite these advancements, urban areas continue to experience relatively high prevalence rates, with estimates indicating a 3% prevalence compared to less than 1% nationally. Although the country is approaching epidemic control, critical gaps remain in preventing HIV spread among key populations, supporting affected individuals, and improving pediatric services.
                  </p>
                </div>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Focus Areas */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <TargetIcon className="text-red-600" size={24} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">alignAfrica's Focus Areas</h2>
                    </div>
                    
                    <div className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-red-50 to-orange-50">
                      <p className="mb-4 text-gray-700">
                        alignAfrica's HIV Project addresses several key areas to advance epidemic control:
                      </p>
                      
                      <ol className="space-y-3">
                        {focusAreas.map((area, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="p-1.5 mt-0.5 rounded-md bg-red-100">
                              <span className="font-bold text-red-700">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{area}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>

                  {/* Key Populations */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-white to-red-50">
                      <h3 className="mb-3 text-lg font-bold text-gray-800">Key Populations and Services</h3>
                      <p className="text-gray-700">
                        Orphans and vulnerable children face heightened risks of neglect, abuse, and HIV infection. alignAfrica prioritizes connecting HIV-positive children with community and family support services to ensure their well-being and continued care. alignAfrica collaborates with the Government of Ethiopia to offer coordinated and high-quality services for these children.
                      </p>
                    </div>
                  </motion.div>

                  {/* Key Activities */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="mb-4 text-xl font-bold text-gray-800">Key Activities</h2>
                    
                    <div className="space-y-4">
                      {keyActivities.map((activity, index) => (
                        <div key={index} className="p-4 border border-red-200 rounded-xl bg-gradient-to-r from-red-50/50 to-white">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              {index === 0 && <GraduationCap className="text-red-600" size={20} />}
                              {index === 1 && <HeartIcon className="text-red-600" size={20} />}
                              {index === 2 && <UsersIcon2 className="text-red-600" size={20} />}
                            </div>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-red-50 to-orange-50">
                      <h3 className="mb-3 text-lg font-bold text-gray-800">Project Highlight: Enhancing Religious Leaders' Roles</h3>
                      <p className="mb-4 text-gray-700">
                        The Enhancing the Role of Religious Leaders and Institutions in Achieving the 90-90-90 Targets project aimed to reduce stigma and discrimination towards people living with HIV/AIDS in Gambella Town. The project, funded by the US Embassy in Addis Ababa as part of PEPFAR interventions, ran from September 2018 to September 2019.
                      </p>
                      
                      <h4 className="mb-2 font-semibold text-gray-800">Objectives</h4>
                      <ul className="space-y-2">
                        {ninetyNinetyObjectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 mt-2 bg-red-400 rounded-full"></div>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Project Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="overflow-hidden shadow-lg rounded-xl"
                  >
                    <img 
                      src="/images/hivganbela.jpg" 
                      alt="HIV Project in Gambella" 
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105 sm:h-72"
                    />
                    <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50">
                      <p className="text-sm font-medium text-center text-gray-700">
                        Community engagement and support services in Gambella
                      </p>
                    </div>
                  </motion.div>

                  {/* Success Story */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-white to-red-50">
                      <h1 className="mb-4 text-2xl font-bold text-gray-800">Success Story: Transforming Lives in Gambella Through HIV Care</h1>
                      
                      <h2 className="mb-3 text-xl font-bold text-gray-800">Empowering Communities, One Life at a Time</h2>
                      <p className="mb-4 text-gray-700">
                        In the heart of Gambella Town, Ethiopia, a transformative project led by alignAfrica has redefined hope and resilience for thousands battling HIV/AIDS. This success story is not just about numbers; it's about the profound impact on individuals, families, and the community at large.
                      </p>
                    </div>
                  </motion.div>

                  {/* Success Story Sections */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                  >
                    {successStorySections.map((section, index) => (
                      <div key={index} className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-red-50/50 to-white">
                        <h3 className="mb-3 text-lg font-bold text-gray-800">{section.title}</h3>
                        
                        {section.content && (
                          <p className="text-gray-700">{section.content}</p>
                        )}
                        
                        {section.subsections && (
                          <div className="mt-4 space-y-4">
                            {section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex} className="p-4 bg-white rounded-lg">
                                <h4 className="mb-2 font-semibold text-gray-800">{subsection.title}:</h4>
                                <p className="text-gray-700">{subsection.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>

                  {/* Final Quote */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="p-5 italic text-center border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl"
                  >
                    <p className="text-lg text-gray-700">
                      "This success story is a powerful reminder that every life transformed, every stigma dismantled, and every barrier overcome brings us closer to a world where everyone can thrive, regardless of their health status."
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Achievements Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-red-600 to-orange-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <AwardIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">Achievements of alignAfrica's HIV Project</h2>
                      <p className="text-red-100">Making a Tangible Difference in the Fight Against HIV/AIDS</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/10">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-white/20">
                            <span className="font-bold text-white">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{achievement.title}</h4>
                            <p className="mt-2 text-red-100">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Program Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-8"
              >
                <div className="p-5 border border-red-200 rounded-xl bg-gradient-to-r from-red-50 to-orange-50">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Project Outcomes</h3>
                  
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {projectOutcomes.map((outcome, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="text-red-600" size={18} />
                          <h4 className="font-semibold text-gray-800">
                            {outcome.split(':')[0]}:
                          </h4>
                        </div>
                        <p className="text-gray-700">{outcome.split(':')[1]}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 mt-6 rounded-lg bg-gradient-to-r from-white to-red-50">
                    <p className="text-gray-700">
                      alignAfrica's HIV Project continues to play a crucial role in addressing the epidemic and supporting those affected, contributing to a healthier and more resilient Ethiopia.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 mt-8 text-center text-white shadow-lg bg-gradient-to-r from-red-600 to-orange-700 rounded-xl sm:rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                  Join the Fight Against HIV/AIDS
                </h3>
                <p className="mb-6 text-lg text-red-100 sm:text-xl">
                  Support our mission to provide comprehensive care and end stigma in Ethiopia
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                  <a 
                    href="/projects/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-red-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-red-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    <HeartIcon size={20} />
                    Support Our Work
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                  >
                    <ActivityIcon size={20} />
                    Explore Other Projects
                  </a>
                </div>
              </motion.div>

              {/* Statistical Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 mt-8 text-center border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-4xl font-bold text-red-600">5,266</div>
                    <div className="mt-2 font-semibold text-gray-800">Individuals Benefited</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-4xl font-bold text-red-600">3,791</div>
                    <div className="mt-2 font-semibold text-gray-800">Women and Girls Supported</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-4xl font-bold text-red-600">90-90-90</div>
                    <div className="mt-2 font-semibold text-gray-800">Targets Progress</div>
                  </div>
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 rounded-t-2xl"
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
            brandColor="red"
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

export default HIVProject;