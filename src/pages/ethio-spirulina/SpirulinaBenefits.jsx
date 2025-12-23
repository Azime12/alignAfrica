// src/pages/ethio-spirulina/SpirulinaBenefits.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Info, 
  Heart, 
  Package, 
  Award, 
  HelpCircle, 
  FileText, 
  Mail,
  ChevronUp,
  Shield,
  Battery,
  Zap,
  Heart as HeartIcon,
  Brain,
  Apple,
  Clock,
  TrendingUp,
  Droplets,
  Leaf
} from 'lucide-react';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Ethio-Spirulina section
const spirulinaSidebarLinks = [
  { 
    name: "Home", 
    href: "/ethio-spirulina", 
    icon: Home 
  },
  { 
    name: "About Us", 
    href: "/ethio-spirulina/about", 
    icon: Info 
  },
  { 
    name: "Spirulina Benefits", 
    href: "/ethio-spirulina/benefits", 
    icon: Heart 
  },
  { 
    name: "Products", 
    href: "/ethio-spirulina/products", 
    icon: Package 
  },
  { 
    name: "Our Certificates", 
    href: "/ethio-spirulina/certificates", 
    icon: Award 
  },
  { 
    name: "FQA", 
    href: "/ethio-spirulina/fqa", 
    icon: HelpCircle 
  },
  { 
    name: "Terms & Conditions", 
    href: "/ethio-spirulina/terms", 
    icon: FileText 
  },
  { 
    name: "Contact Us", 
    href: "/ethio-spirulina/contact", 
    icon: Mail 
  }
];

// Benefit data for left column
const leftColumnBenefits = [
  {
    image: "/images/booststrengthens.jpg",
    benefits: [
      { title: "Boosts and Strengthens Immune System", icon: Shield },
      { title: "Fights Fatigue and Stress", icon: Battery },
      { title: "Assists in Healing Wounds and Ulcers", icon: Zap },
      { title: "Ensures Round the Clock Performance", icon: Clock }
    ]
  },
  {
    image: "/images/maintainscholesterol.jpg",
    benefits: [
      { title: "Maintains Cholesterol Levels", icon: TrendingUp },
      { title: "Lowers Blood Sugar Levels", icon: Droplets },
      { title: "Maintains a Healthy Heart", icon: HeartIcon },
      { title: "Delays the Ageing Process", icon: Apple }
    ]
  },
  {
    image: "/images/buildsup.jpg",
    benefits: [
      { title: "Builds up the Hb Levels", icon: TrendingUp },
      { title: "Good Source of Nutrients", icon: Leaf },
      { title: "Improves Cognition", icon: Brain }
    ]
  }
];

// Right column benefits
const rightColumnBenefits = [
  {
    image: "/images/prevents.jpg",
    benefits: [
      { title: "Prevents and Fights Cancer", icon: Shield },
      { title: "Protective Cover against Allergic Reaction", icon: Shield },
      { title: "Provides Cosmetic Appearance", icon: Apple }
    ]
  }
];

// Advantages data
const advantages = [
  "It's effective: a daily dose of 1 to 3 grams of spirulina, for four to six weeks, will cure a malnourished child",
  "It's local and sustainable: this is a dietary supplement which is grown, sold and consumed locally",
  "It means autonomy: spirulina farms, having achieved viability and autonomy, actually create revenue streams for the local community",
  "It's low threshold, using local resources, with low start-up investment",
  "It's high yields, producing 5 to 6 grams of dry spirulina a day, per m²",
  "It's tidy, space-saving and it fits: given the quantity of protein produced, it requires very little space – 15 times less than sugar cane, 20 times less than soya and 250 times less than rice",
  "It's frugal, needing very little water – three to four times less than soya, five times less than maize, and 40 times less than beef",
  "It's business for women: with proper training and capacity building, decentralized production, and processing and sales being suitable for small businesses",
  "It's handy: conservation, storage and distribution are straightforward"
];

function SpirulinaBenefits() {
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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/Ethio-spirulina-benefit.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero content */}
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                Benefits of Spirulina
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Nature's Most Nutrient-Packed Superfood
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
                title="Ethio-Spirulina"
                links={spirulinaSidebarLinks}
                brandColor="yellow"
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
              {/* Main Title and Description */}
              <div className="mb-8 text-center sm:mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
                >
                  BENEFITS OF SPIRULINA PRODUCTS
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl mx-auto text-lg text-gray-700 sm:text-xl"
                >
                  Spirulina is blue-green algae that are one of the most nutrient packed superfoods on earth. This amazing environmentally sustainable algae has been a nutritious dietary supplement for thousands of years.
                </motion.p>
                
                <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500 rounded-full"></div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  {leftColumnBenefits.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-6">
                      <div className="overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src={section.image} 
                          alt="Spirulina Benefits" 
                          className="object-cover w-full h-auto transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        {section.benefits.map((benefit, benefitIndex) => (
                          <div 
                            key={benefitIndex}
                            className="flex items-start gap-3 p-4 transition-all duration-300 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 hover:shadow-md"
                          >
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                {React.createElement(benefit.icon, { className: "text-yellow-600", size: 20 })}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                {benefit.title}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8"
                >
                  {/* Top Benefits Section */}
                  {rightColumnBenefits.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-6">
                      <div className="overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src={section.image} 
                          alt="Spirulina Benefits" 
                          className="object-cover w-full h-auto transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        {section.benefits.map((benefit, benefitIndex) => (
                          <div 
                            key={benefitIndex}
                            className="flex items-start gap-3 p-4 transition-all duration-300 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 hover:shadow-md"
                          >
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                {React.createElement(benefit.icon, { className: "text-yellow-600", size: 20 })}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                {benefit.title}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Advantages Section */}
                  <div className="p-5 border border-green-200 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:p-6">
                    <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-green-500 sm:text-2xl">
                      THE ADVANTAGES OF SPIRULINA PRODUCTION
                    </h2>
                    
                    <div className="space-y-4">
                      {advantages.map((advantage, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 transition-all duration-300 rounded-lg bg-white/70 hover:bg-white"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <p className="text-gray-700">
                            {advantage}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Additional Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-4">
                      <div className="p-3 text-center rounded-lg bg-white/80">
                        <div className="text-2xl font-bold text-green-600">60-70%</div>
                        <div className="text-sm text-gray-600">Protein Content</div>
                      </div>
                      <div className="p-3 text-center rounded-lg bg-white/80">
                        <div className="text-2xl font-bold text-green-600">40×</div>
                        <div className="text-sm text-gray-600">Less Water</div>
                      </div>
                      <div className="p-3 text-center rounded-lg bg-white/80">
                        <div className="text-2xl font-bold text-green-600">20×</div>
                        <div className="text-sm text-gray-600">More Protein</div>
                      </div>
                      <div className="p-3 text-center rounded-lg bg-white/80">
                        <div className="text-2xl font-bold text-green-600">250×</div>
                        <div className="text-sm text-gray-600">Less Land</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Nutrients Card */}
                  <div className="p-5 border shadow-sm bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl sm:p-6 border-amber-200">
                    <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">Key Nutrients in Spirulina</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Complete Protein</span>
                        <span className="font-bold text-amber-700">60-70%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Essential Fatty Acids</span>
                        <span className="font-bold text-amber-700">High</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Vitamins (B, E, K)</span>
                        <span className="font-bold text-amber-700">Rich</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Minerals (Iron, Calcium)</span>
                        <span className="font-bold text-amber-700">Abundant</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Antioxidants</span>
                        <span className="font-bold text-amber-700">Powerful</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Comparison Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 mt-8 border border-blue-200 shadow-lg sm:mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-center text-gray-800 sm:text-2xl">
                  Why Choose Ethio-Spirulina?
                </h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full">
                      <Leaf className="text-blue-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">100% Organic</h4>
                    <p className="text-sm text-gray-600">
                      Grown in pristine Ethiopian environment without pesticides or chemicals
                    </p>
                  </div>
                  
                  <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full">
                      <Shield className="text-blue-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">Quality Certified</h4>
                    <p className="text-sm text-gray-600">
                      International quality standards with all necessary certifications
                    </p>
                  </div>
                  
                  <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full">
                      <HeartIcon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">Sustainable</h4>
                    <p className="text-sm text-gray-600">
                      Eco-friendly production with minimal water and land usage
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mt-8 text-center text-white shadow-lg sm:mt-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Experience the Power of Ethiopian Spirulina
                </h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  Transform your health with nature's most complete superfood
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <a 
                    href="/ethio-spirulina/products" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    Shop Spirulina Products
                  </a>
                  <a 
                    href="/ethio-spirulina/contact" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    Get Expert Advice
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-yellow-500 to-amber-600 rounded-t-2xl"
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
            title="Ethio-Spirulina"
            links={spirulinaSidebarLinks}
            brandColor="yellow"
            enableAnimations={false}
          />
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default SpirulinaBenefits;