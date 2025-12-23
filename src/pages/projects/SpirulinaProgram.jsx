// src/pages/projects/spirulina-program/SpirulinaProgram.jsx
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
  HeartPulse
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

// International endorsements
const internationalEndorsements = [
  {
    organization: "United Nations World Food Conference (1974)",
    statement: "Declared Spirulina as 'the best food for the future.'"
  },
  {
    organization: "United Nations General Assembly",
    statement: "Urged member states, UN agencies, and organizations to promote Spirulina production and use."
  },
  {
    organization: "Food and Agriculture Organization (FAO)",
    statement: "Highlighted Spirulina's potential for food security and emergency response."
  },
  {
    organization: "World Health Organization (WHO)",
    statement: "Recognized Spirulina as a highly suitable food, noting its rich iron and protein content and safety for children."
  }
];

// Nutritional benefits
const nutritionalBenefits = [
  "Protein: Composed of 60% highly digestible vegetable protein",
  "Vitamins and Minerals: High levels of beta-carotene (10 times more than carrots), vitamin B-12, iron, and trace minerals",
  "Essential Fatty Acids: Includes Gamma-Linolenic Acid (GLA), rare in non-breastfed individuals",
  "Amino Acids: Offers a balanced spectrum of essential amino acids",
  "Additional Components: Contains cleansing chlorophyll and the blue pigment Phycocyanin"
];

// Dosage guidelines
const dosageGuidelines = [
  { group: "Children up to 5", dosage: "1 – 2 grams/day" },
  { group: "Children over 5", dosage: "2 – 3 g/day" },
  { group: "Adults", dosage: "3 – 5 g/day" },
  { group: "Immune builder", dosage: "10 – 15 g/day" },
  { group: "Primary Protein", dosage: "15 – 20 g/day" },
  { group: "Athletes", dosage: "20 – 30 g/day" }
];

// Health benefits
const healthBenefits = [
  "Increases the CD4 count – Strengthens the immune system particularly useful for HIV/AIDS patients",
  "Increases RNA (Ribonucleic acid) in the brain for more energy",
  "The beta carotene (contains 10 times more than carrots) is an excellent source of disease fighting antioxidants",
  "Contains vegetable protein and amino acids to build muscle",
  "High concentration of B Vitamins; maintains cardiovascular health",
  "Excellent anti-inflammatory, essential for arthritis patients and prevents heart disease",
  "Contains anti-aging properties",
  "Improves digestive health",
  "Contains easy to absorb iron supplements ideal for women and children",
  "Reduces cancer with antioxidant protection"
];

// Project objectives
const projectObjectives = [
  "Develop strategy for mass production of Spirulina",
  "Isolate pure culture and characterize the Spirulina using local resources",
  "Conduct laboratory scale production",
  "Construct and develop outdoor production ponds or tankers system",
  "Carry out outdoor pilot scale production",
  "Create awareness of the consumption of this healthy food",
  "Give training to target groups, national nutrition taskforce members",
  "Create economically self-sufficient mass production system"
];

// Production advantages
const productionAdvantages = [
  "Can be produced locally and so has social as well as economic benefits",
  "Cheap to produce",
  "Uses simple technology and locally available materials",
  "Requires much less water to grow than vegetables",
  "Stimulates the education of local women about nutrition",
  "Can be combined with other products to be made into locally acceptable food products",
  "Very effective, contains most essential micronutrients in high concentrations",
  "Very easy to digest",
  "Very safe, resistant to most contamination due to highly alkaline environment"
];

// Cost of hunger facts
const hungerFacts = [
  "Today, more than 2 out of every 5 children in Ethiopia suffer from stunting",
  "As many as 81% of all cases of child under nutrition and its related pathologies go untreated",
  "44% of the health costs associated with under nutrition occur before the child turns 1 year-old",
  "28% of all child mortality in Ethiopia is associated with under nutrition",
  "16% of all repetitions in primary school are associated with stunting",
  "Stunted children achieve 1.1 years less in school education",
  "Child mortality associated with under nutrition has reduced Ethiopia's workforce by 8%",
  "67% of the adult population in Ethiopia suffered from stunting as children",
  "The annual costs associated with child under nutrition are estimated at Ethiopian birr (ETB) 55.5 billion",
  "Eliminating stunting in Ethiopia is a necessary step for its growth and transformation"
];

function SpirulinaProgram() {
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
        style={{ backgroundImage: 'url(/images/spirulinaprogram.jpg)' }}
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
                SPIRULINA PROGRAM
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Superfood for Nutrition and Food Security
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
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* What is Spirulina */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <LeafIcon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">What is Spirulina?</h2>
                        <p className="text-blue-600">Nature's Superfood</p>
                      </div>
                    </div>

                    <p className="mb-4 text-gray-700">
                      Spirulina is a single-celled blue-green alga that flourishes in warm, alkaline freshwater environments. Renowned for its nutritional value, Spirulina contains 65-71% complete protein, with all essential amino acids perfectly balanced.
                    </p>
                    
                    <div className="p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50">
                      <p className="text-gray-700">
                        It thrives in conditions that are inhospitable to most other algae, such as the East African Rift Valley lakes, where it sustains flamingos. Spirulina's ability to convert sunlight into micronutrient-rich energy is a key feature, and its distinctive spiral shape is reflected in its name.
                      </p>
                    </div>
                  </motion.div>

                  {/* International Endorsements */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">International Endorsements</h3>
                    
                    <div className="space-y-4">
                      {internationalEndorsements.map((endorsement, index) => (
                        <div key={index} className="p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Globe className="text-blue-600" size={18} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">{endorsement.organization}</h4>
                              <p className="mt-2 text-gray-700">{endorsement.statement}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Nutritional Benefits */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Nutritional Benefits and Properties</h3>
                    
                    <div className="p-5 mb-4 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <p className="mb-4 text-gray-700">
                        Spirulina is often termed a "superfood" due to its exceptional nutrient profile. It boasts the highest concentration of nutrients found in any food, plant, grain, or herb.
                      </p>
                      
                      <div className="space-y-2">
                        {nutritionalBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700">
                      Spirulina's remarkable nutrient density and health benefits make it a valuable addition to any diet, supporting overall health and well-being.
                    </p>
                  </motion.div>

                  {/* WHO Statement */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="p-5 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white rounded-lg">
                          <HeartPulse className="text-blue-600" size={20} />
                        </div>
                        <h4 className="font-semibold text-gray-800">World Health Organization (WHO) Declaration</h4>
                      </div>
                      <p className="text-gray-700">
                        "Spirulina represents an interesting food for multiple reasons, rich in iron and protein, and is able to be administered to children without any risk. We at WHO consider it a very suitable food".
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Gallery Images */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/spirulinap.jpg" 
                        alt="Spirulina as seen under a microscope" 
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50">
                        <p className="text-sm font-medium text-center text-gray-700">Spirulina as seen under a microscope</p>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/spirulinaf.jpg" 
                        alt="Spirulina in water" 
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50">
                        <p className="text-sm font-medium text-center text-gray-700">Spirulina in water</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* What Does Spirulina Do */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">What Does Spirulina Do?</h2>
                    
                    <div className="p-5 mb-4 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                      <p className="mb-4 text-gray-700">
                        Spirulina is packed with the proteins, vitamins and minerals that your body needs in order to be healthy. As a food, Spirulina promotes healing and healthy living by boosting the natural defenses of your body, making you stronger and better equipped to fight diseases.
                      </p>
                      
                      <p className="text-gray-700">
                        Spirulina helps detox the body giving the body the power to rejuvenate itself. Spirulina is not a synthetic drug. It is 100% natural food and can be used by anyone at anytime to help fight disease or for general health and fitness.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white border border-blue-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Pill className="text-blue-600" size={18} />
                        <span className="font-semibold text-gray-800">Usage:</span>
                      </div>
                      <p className="text-gray-700">
                        Spirulina is consumed in powder form, tablets or capsules for easy usage as food supplement and immune booster due to its high protein and nutrients content. The powder is added to warm food or drinks in small quantities; two table spoon per day.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Middle Section - Two Columns */}
              <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                {/* Left Column - Dosage Table */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50">
                    <h3 className="mb-4 text-xl font-bold text-gray-800">How Can You Take Spirulina</h3>
                    <p className="mb-4 text-gray-700">
                      The dosage of Spirulina depends on the individual need of the user.
                      A general guideline:
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border border-blue-200 rounded-lg">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="p-3 text-left border-b border-blue-200">User Group</th>
                            <th className="p-3 text-left border-b border-blue-200">Daily Dosage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dosageGuidelines.map((guideline, index) => (
                            <tr key={index} className="border-b border-blue-100 hover:bg-blue-50">
                              <td className="p-3 text-gray-700">{guideline.group}</td>
                              <td className="p-3 font-medium text-gray-700">{guideline.dosage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="p-3 mt-4 text-center bg-white rounded-lg">
                      <p className="font-semibold text-blue-700">(1 teaspoon = 1.5 grams)</p>
                    </div>
                  </div>
                  
                  {/* Gallery Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6"
                  >
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <img 
                        src="/images/spirulinat.jpg" 
                        alt="Spirulina in tablet and powder form" 
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105 sm:h-56"
                      />
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50">
                        <p className="text-sm font-medium text-center text-gray-700">Spirulina in tablet and powder form</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - Health Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                    <h3 className="mb-4 text-xl font-bold text-gray-800">
                      10 Benefits from Taking 5-10 grams of Spirulina Every Day
                    </h3>
                    
                    <div className="space-y-3">
                      {healthBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className={`p-2 rounded-lg ${index < 3 ? 'bg-blue-100' : 'bg-blue-50'}`}>
                            <span className={`font-bold ${index < 3 ? 'text-blue-700' : 'text-blue-600'}`}>
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Why alignAfrica Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <div className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-blue-600 to-teal-700 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl">Why is alignAfrica engaging in spirulina production?</h2>
                      <p className="text-blue-100">Creating a "Chain of Nutrition" for Sustainable Impact</p>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-blue-100">
                    alignAfrica aims to form a "chain of nutrition": every community or individual that gains this knowledge will make use of it, spread it to its local community, and then pass it to other communities and individuals in need.
                  </p>
                  
                  <p className="text-blue-100">
                    As outlined above, spirulina is of significant importance to malnourished people. The health benefits of spirulina have made it an excellent food for rapid recovery of children from malnutrition related diseases.
                  </p>
                </div>
              </motion.div>

              {/* Malnutrition Context */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <div className="p-5 mb-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Malnutrition in Ethiopia</h3>
                  
                  <p className="mb-4 text-gray-700">
                    Malnutrition has remained to be a consistent challenge facing Ethiopia as a developing country in its efforts to development. Malnutrition is a major public health problem in Ethiopia and has a significant impact on communities, in particular for women and children.
                  </p>
                  
                  <p className="text-gray-700">
                    Millions of children die of severe acute malnutrition each year and poor nutrition prevents many children and adults from ever reaching their full mental and physical capacity. For example, children who are malnourished are at risk of stunting, which affects their productivity when they are older; malnutrition also affects their learning ability, school performance and attendance.
                  </p>
                </div>
                
                <div className="p-5 border border-blue-200 bg-gradient-to-r from-white to-blue-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-gray-800">Economic Impact</h4>
                  </div>
                  <p className="text-gray-700">
                    All of these consequences have a social and economic impact on the community and the country. Ethiopia loses around 16.5 percent of its GDP each year to the long-term effects of child malnutrition.
                  </p>
                </div>
              </motion.div>

              {/* Program Implementation */}
              <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2">
                {/* Left Column - Program Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50">
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Program Implementation in Gambella Region</h3>
                    
                    <p className="mb-4 text-gray-700">
                      This program is intended to be implemented in the Gambella region where high statistics of malnutrition has been registered. The residents of Gambella are pastoralists and as such, highly depend on agriculture mainly rain-fed.
                    </p>
                    
                    <p className="mb-4 text-gray-700">
                      In the past four decades, Ethiopia has been faced by severe droughts brought about by unfavorable weather related factors including climate change and environmental degradation rendering the region unproductive agriculturally.
                    </p>
                    
                    <p className="text-gray-700">
                      Gambella residents have been hard hit by these droughts due to their dependence on rain-fed agriculture exposing them to food insecurity. The results have been devastating with children, women and the old people being malnourished to the point of death.
                    </p>
                  </div>
                  
                  <div className="p-5 mt-6 bg-white border border-blue-200 rounded-xl">
                    <h4 className="mb-3 font-semibold text-gray-800">Project Approach</h4>
                    <p className="text-gray-700">
                      alignAfrica with technical involvement of three Biotechnology Researchers and financial support from our donor organizations will pilot a project of mass production of spirulina in two zones of the Gambella region; Nuer and Anuak zones.
                    </p>
                    <p className="mt-3 text-gray-700">
                      This is a sustainable program since the produced spirulina will not only be consumed by the target groups to improve their nutrition but the surplus Spirulina will be sold to generate income. Mass production of spirulina is also environmentally friendly thereby improving food security in the region.
                    </p>
                  </div>
                </motion.div>

                {/* Right Column - Objectives & Advantages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="space-y-6"
                >
                  {/* Project Objectives */}
                  <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-white to-blue-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <TargetIcon className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Specific Objectives of This Project</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {projectObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="p-1 mt-1">
                            <CheckCircle className="text-blue-600" size={16} />
                          </div>
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production Advantages */}
                  <div className="p-5 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50">
                    <h3 className="mb-4 text-lg font-bold text-gray-800">The Advantages of Spirulina Production</h3>
                    
                    <div className="space-y-2">
                      {productionAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cost of Hunger Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 mb-8 text-white shadow-lg bg-gradient-to-r from-blue-600 to-teal-700 rounded-xl sm:rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/20">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">Cost of Hunger in Africa</h3>
                    <p className="text-blue-100">Research Findings on Malnutrition in Ethiopia</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-blue-100">
                    The Cost of Hunger in Africa analyzes the impact of hunger across 12 countries in Africa. It was carried out with the support of the African Union Commission.
                  </p>
                  <p className="mt-3 text-blue-100">
                    However, the lasting effects of malnutrition still weigh heavily on the Ethiopian economy, as new research shows. The "Cost of Hunger in Africa" report estimates that under nutrition costs the country billions of dollars every year in lost worker productivity.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2">
                  {hungerFacts.slice(0, 6).map((fact, index) => (
                    <div key={index} className="p-3 rounded-lg bg-white/10">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-200">{index + 1}.</span>
                        <span className="text-blue-100">{fact}</span>
                      </div>
                    </div>
                  ))}
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
                  Support Nutrition and Food Security
                </h3>
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Help us combat malnutrition with sustainable spirulina production
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
                    <LeafIcon size={20} />
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

export default SpirulinaProgram;