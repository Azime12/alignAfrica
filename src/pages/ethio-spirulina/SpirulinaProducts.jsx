// src/pages/ethio-spirulina/SpirulinaProducts.jsx
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
  Leaf,
  Recycle,
  Trees,
  Droplet,
  Wind,
  Sparkles,
  Shield,
  Heart as HeartIcon,
  Scissors,
  Flower2,
  Droplets as WaterIcon
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

// Environmental benefits data
const environmentalBenefits = [
  {
    icon: Leaf,
    title: "No Fertile Land Needed",
    description: "Spirulina does not need fertile land for cultivation and therefore conserves fertile land and soil."
  },
  {
    icon: Shield,
    title: "High Protein Content",
    description: "Spirulina has over 60% protein that is higher than any other food with rapid growth and higher yield."
  },
  {
    icon: Sparkles,
    title: "Energy Efficient",
    description: "Spirulina requires less energy input per kilo than soy, corn, or bovine protein."
  },
  {
    icon: WaterIcon,
    title: "Water Efficient",
    description: "Spirulina uses less water per kilo of protein than other foods as water is recycled back to ponds."
  },
  {
    icon: Wind,
    title: "Oxygen Production",
    description: "Spirulina is a big oxygen producer that is even more efficient than trees and forests to absorb CO₂."
  },
  {
    icon: Trees,
    title: "Prevents Deforestation",
    description: "Uses non-fertile land, helping to halt pressures to destroy wilderness and re-green our planet."
  },
  {
    icon: Recycle,
    title: "No Hidden Costs",
    description: "No pollution from pesticides, herbicides, toxins, or long-term medical costs from chemical additives."
  }
];

// Vitamin benefits for cosmetics
const vitaminBenefits = [
  {
    vitamin: "Vitamin A",
    benefits: ["Regulates sebum production", "Prevents or regulates acne problems"]
  },
  {
    vitamin: "Vitamin E",
    benefits: ["Healing action for collagen fibers", "Restores firmness and elasticity", "Protects against UV rays"]
  },
  {
    vitamin: "B Vitamins",
    benefits: ["Stimulates cell renewal", "Antioxidant and anti-aging", "Promotes elastin & hyaluronic acid"]
  },
  {
    vitamin: "Vitamin B3 (PP)",
    benefits: ["Stimulates collagen production", "Improves micro-circulation"]
  }
];

// Soap benefits by use
const soapBenefits = [
  {
    use: "For Face",
    benefits: ["Anti-aging action", "Contains vitamin E, selenium, tyrosine"]
  },
  {
    use: "For Body",
    benefits: ["Powerful toning action", "Firming effect on tissues", "Leaves body hydrated"]
  },
  {
    use: "For Hair",
    benefits: ["Balances sebum production", "Fights dandruff and itching", "Prevents excessive hair loss", "Strengthens hair follicles"]
  }
];

function SpirulinaProducts() {
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
        style={{ backgroundImage: 'url(/images/spirulina-products-banner.jpg)' }}
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
                Spirulina Products
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Pure. Organic. Environmentally Friendly
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
              {/* Two Column Layout - What is Spirulina */}
              <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2 sm:gap-8 sm:mb-12">
                {/* Left Column - What is Spirulina */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-2xl">
                      What is Spirulina?
                    </h2>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="text-base sm:text-lg">
                        Spirulina, also known as Arthrospira Platensis, is a blue micro-alga that grows in alkaline fresh water and at high temperatures.
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        Spirulina is a natural "Blue-Green Algae" (cyanobacteria) powder that is incredibly high in protein and a good source of antioxidants, B-vitamins and other nutrients. When harvested correctly from non-contaminated ponds and bodies of water, it is one of the most potent nutrient sources available.
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        It is largely made up of protein and essential amino acids, and is typically recommended to vegetarians due to its high natural iron content.
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        The high concentration of protein and iron also makes it ideal during pregnancy, after surgery, or anytime the immune system needs a boost.
                      </p>
                    </div>
                  </div>

                  {/* History Section */}
                  <div>
                    <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-2xl">
                      History of Spirulina
                    </h2>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="text-base sm:text-lg">
                        Spirulina, a high source of nutrition, is found throughout the world. The usage of Spirulina has spread to the public from its discovery by a tribe on the continent of South America. The tribals have sustained their lives by consuming one kind of algae which the local tribe called "Dihe".
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        The anthropologists who discovered this tribe were curious about how their population existed due to the tribe's insufficient intake of meat protein while they still continued to live without any physical development problem. When the scientists undertook research, they found out that people of this tribe consume Spirulina which gives them high nutrients to maintain their body.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Product Images & Environmental Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Product Images */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="text-center">
                      <div className="mb-3 overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src="/images/spirulina-powder.jpg" 
                          alt="Spirulina Powder" 
                          className="object-cover w-full h-48 transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800">Spirulina Powder</h3>
                    </div>
                    
                    <div className="text-center">
                      <div className="mb-3 overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src="/images/spirulina-capsules.jpg" 
                          alt="Spirulina Capsules" 
                          className="object-cover w-full h-48 transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800">Spirulina Capsules</h3>
                    </div>
                    
                    <div className="text-center">
                      <div className="mb-3 overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src="/images/spirulina-tablets.jpg" 
                          alt="Spirulina Tablets" 
                          className="object-cover w-full h-48 transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800">Spirulina Tablets</h3>
                    </div>
                  </div>

                  {/* Environmental Benefits */}
                  <div className="p-5 border border-green-200 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:p-6">
                    <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b-2 border-green-500 sm:text-2xl">
                      Spirulina Farm is Environment Friendly
                    </h2>
                    
                    <div className="space-y-4">
                      {environmentalBenefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/70">
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-green-100 rounded-lg">
                              {React.createElement(benefit.icon, { className: "text-green-600", size: 20 })}
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-1 font-semibold text-gray-800">{benefit.title}</h4>
                            <p className="text-sm text-gray-700">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Large Farm Image */}
                    <div className="mt-6 text-center">
                      <div className="overflow-hidden shadow-lg rounded-xl">
                        <img 
                          src="/images/spirulina-farm.jpg" 
                          alt="Environmentally Friendly Spirulina Farm" 
                          className="object-cover w-full h-auto"
                        />
                      </div>
                      <h3 className="mt-3 font-semibold text-gray-800">Environmentally Friendly Spirulina Farm</h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cosmetics Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 sm:mb-12"
              >
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                    COSMETIC PRODUCTS - SKIN AND HAIR HEALTH
                  </h2>
                  <div className="w-24 h-1 mx-auto mt-3 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                  {/* Left Column - Anti-Age */}
                  <div className="p-5 border border-pink-200 shadow-sm bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:p-6">
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      <Sparkles className="text-pink-500" size={24} />
                      Spiru Anti-Age
                    </h3>
                    
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Spirulina is not only a valid and complete food for the body but, thanks to its multiple properties, it is also used a lot in cosmetics. Its nourishing capacities for skin and hair are manifold: toning, moisturizing, nourishing and regenerative.
                      </p>
                      
                      <p>
                        The detoxifying action is the key element that makes this seaweed perfect for creating purifying masks and scrubs of various kinds, even the most 'home-made' ones.
                      </p>
                      
                      <div className="p-4 rounded-lg bg-white/70">
                        <h4 className="mb-3 font-semibold text-gray-800">Vitamin Benefits for Skin:</h4>
                        <div className="space-y-3">
                          {vitaminBenefits.map((vitamin, index) => (
                            <div key={index} className="pl-3 border-l-4 border-pink-400">
                              <h5 className="font-semibold text-gray-800">{vitamin.vitamin}</h5>
                              <ul className="mt-1 space-y-1 text-sm">
                                {vitamin.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-1 h-1 mt-2 bg-pink-400 rounded-full"></div>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <p>
                        Spirulina is also widely indicated for draining and reducing treatments. Phycocyanin, together with other active and antioxidant ingredients, deeply hydrates the skin, counteracting the chronic inflammation typical of cellulite, with a reducing and draining effect already after the first treatments.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Soap */}
                  <div className="p-5 border border-blue-200 shadow-sm bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:p-6">
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      <Droplet className="text-blue-500" size={24} />
                      Ethio-Spirulina-Soap
                    </h3>
                    
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Our Ethio-Spirulina-Soap performs a remineralizing, revitalizing, antioxidant and nourishing action. Suitable for all skin types, it purifies it in depth, through a re-balancing work and makes it smooth and radiant.
                      </p>
                      
                      <p>
                        Thanks to its antioxidant and elasticizing properties, our Ethio-Spirulina-Soap helps to restore the skin's natural water balance. Furthermore, used for daily cleansing, it helps to slow down premature aging of the epidermis.
                      </p>
                      
                      <div className="space-y-4">
                        {soapBenefits.map((soap, index) => (
                          <div key={index} className="p-4 rounded-lg bg-white/70">
                            <h4 className="mb-2 font-semibold text-gray-800">{soap.use}:</h4>
                            <ul className="space-y-1">
                              {soap.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="flex-shrink-0 w-1 h-1 mt-2 bg-blue-400 rounded-full"></div>
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-sm italic text-gray-600">
                        Suitable for all hair types, Spirulina regulates the excessive production of sebum in the case of scalp tending to grease and regenerates the tissues in the case of dry and brittle hair.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* More Environmental Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 border border-green-300 shadow-lg bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-6 text-xl font-bold text-center text-gray-800 sm:text-2xl">
                  More Environmental Advantages of Spirulina Farming
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {environmentalBenefits.slice(3).map((benefit, index) => (
                    <div key={index} className="p-4 text-center transition-shadow rounded-lg bg-white/80 hover:shadow-md">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full">
                        {React.createElement(benefit.icon, { className: "text-green-600", size: 24 })}
                      </div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-xs text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
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
                  Discover Our Complete Spirulina Range
                </h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  From dietary supplements to cosmetic products - all organic, all sustainable
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <a 
                    href="/ethio-spirulina/certificates" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    View Our Certificates
                  </a>
                  <a 
                    href="/ethio-spirulina/contact" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    Contact for Wholesale
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

export default SpirulinaProducts;