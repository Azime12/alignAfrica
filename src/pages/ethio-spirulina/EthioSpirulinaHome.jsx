// src/pages/ethio-spirulina/EthioSpirulinaHome.jsx
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
  Menu,
  X,
  ChevronUp
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

function EthioSpirulinaHome() {
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
        style={{ backgroundImage: 'url(/images/Home-Spirulina-banner.jpg)' }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero content */}
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                Organic Spirulina
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 text-lg text-yellow-100 sm:text-xl md:text-2xl sm:mb-6"
              >
                Pure. Natural. Nutrient-Rich. From the Heart of Ethiopia
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <button className="px-6 py-2 text-sm font-bold text-white transition-all duration-300 transform bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 sm:py-3 sm:px-8 hover:scale-105 sm:text-base">
                  Shop Now
                </button>
                <button className="px-6 py-2 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base">
                  Learn More
                </button>
              </motion.div>
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
          <div className="w-full pb-20 lg:w-3/4 sm:pb-24 lg:pb-0"> {/* Added bottom padding for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
            >
              {/* Welcome Section */}
              <section className="mb-8 sm:mb-10">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pb-2 mb-3 text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-3xl sm:mb-4 sm:pb-3"
                >
                  Welcome To Ethio-Spirulina Farm
                </motion.h2>
                
                <div className="space-y-3 text-gray-700 sm:space-y-4">
                  <p className="text-base leading-relaxed sm:text-lg">
                    Ethio-Spirulina is one of the leading producers in Ethiopia, with 40,000 square meters of growing pond area in a serene atmosphere and having all necessary certifications. The pioneering founders are Mr. Yonas Mamo, Ms. Nancy Chebet and Mr. Ephrame Berhanu.
                  </p>
                  
                  <div className="p-3 my-3 border-l-4 border-yellow-500 rounded-r-lg bg-yellow-50 sm:p-4 sm:my-4">
                    <p className="text-sm text-gray-800 sm:text-base">
                      Our Spirulina is manufactured using the best quality basic material as per the standards of global market. In a short span of time, we have established ourselves as a trustworthy organization. Features like uncompromising quality, purity and their effectiveness are the trademarks of our Products.
                    </p>
                  </div>
                  
                  <p className="text-base leading-relaxed sm:text-lg">
                    All the products are well equipped with latest machinery and advanced expertise to finish the bulk order of the customers in given frame of time. To keep our infrastructure up to date, we make necessary changes time to time.
                  </p>
                </div>
              </section>

              {/* Products Section */}
              <section className="mb-8 sm:mb-10">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pb-2 mb-4 text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-3xl sm:mb-6 sm:pb-3"
                >
                  Spirulina Products
                </motion.h2>
                
                <p className="mb-6 text-base text-gray-700 sm:text-lg sm:mb-8">
                  Organic Spirulina is a dietary supplement made of Blue-Green Algae. It is rich in protein and nutrients. It is largely made up of protein and essential amino acids. It can be found in many freshwater environments, including ponds, lakes and rivers and thrives best under pesticide free conditions with plenty of sunlight and moderate temperature. We manufacture and export best quality Organic Spirulina.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                  {/* Powder Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-4 border border-yellow-200 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl sm:p-6"
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl sm:mb-3">Spirulina Powder</h3>
                    <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
                      Organic Spirulina is a primitive unicellular blue green algae with over 60% protein content. These microscopic plants grow naturally in lakes rich in salt.
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="/images/spirulina-powder.jpg" 
                        alt="Spirulina Powder" 
                        className="rounded-lg shadow-md w-full max-w-[200px] sm:max-w-[250px] h-auto"
                      />
                    </div>
                  </motion.div>

                  {/* Capsules Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-4 border border-yellow-200 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl sm:p-6"
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl sm:mb-3">Spirulina Capsules</h3>
                    <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
                      Spirulina Capsules has powerful nutrients that can have amazing effect on human body and brain. It is loaded with above 60% Protein, 10 vital Vitamins, numerous Essential Minerals & powerful Antioxidants.
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="/images/spirulina-capsules.jpg" 
                        alt="Spirulina Capsules" 
                        className="rounded-lg shadow-md w-full max-w-[200px] sm:max-w-[250px] h-auto"
                      />
                    </div>
                  </motion.div>

                  {/* Tablets Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-4 border border-yellow-200 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl sm:p-6"
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl sm:mb-3">Spirulina Tablets</h3>
                    <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
                      The Power Supplement Spirulina improves strength of body to keep us energetic & active. Spirulina is the Power house because of its nutritional supremacy.
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="/images/spirulina-tablets.jpg" 
                        alt="Spirulina Tablets" 
                        className="rounded-lg shadow-md w-full max-w-[200px] sm:max-w-[250px] h-auto"
                      />
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Specifications & Benefits */}
              <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Left Column - Specifications */}
                <div className="mb-8 lg:w-1/2 lg:mb-0">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pb-2 mb-3 text-xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-2xl sm:mb-4"
                  >
                    Product Specifications
                  </motion.h2>
                  
                  <div className="overflow-x-auto border border-yellow-200 rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-yellow-200">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="px-3 py-2 text-xs font-semibold text-left text-gray-700 uppercase sm:px-4 sm:py-3">No</th>
                          <th className="px-3 py-2 text-xs font-semibold text-left text-gray-700 uppercase sm:px-4 sm:py-3">Parameter</th>
                          <th className="px-3 py-2 text-xs font-semibold text-left text-gray-700 uppercase sm:px-4 sm:py-3">Specifications</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-yellow-100">
                        {[
                          ["1", "Botanical name", "Spirulina platensis"],
                          ["2", "Description", "Green powder having characteristic taste and odour"],
                          ["3", "Identification", "Positive for β-carotene"],
                          ["4", "Loss on drying (105°C/3 hrs)", "Not more than 6% w/w"],
                          ["5", "Total ash", "Not more than 7% w/w"],
                          ["6", "Bulk density (after 50 taps)", "0.70 to 0.80 gm/ml"],
                          ["7", "pH (5% suspension in water)", "6.0 to 7.5"],
                          ["8", "Assay protein (on dried basis)", "Not less than 60% w/w"],
                        ].map((row, idx) => (
                          <tr key={idx} className="transition-colors hover:bg-yellow-50">
                            <td className="px-3 py-2 text-sm font-medium text-gray-800 sm:px-4 sm:py-3">{row[0]}</td>
                            <td className="px-3 py-2 text-sm text-gray-700 sm:px-4 sm:py-3">{row[1]}</td>
                            <td className="px-3 py-2 text-sm text-gray-700 sm:px-4 sm:py-3">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Nutritional Elements */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 sm:mt-8"
                  >
                    <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl sm:mb-3">Nutritional Elements & Health Benefits</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-3 rounded-lg bg-yellow-50 sm:p-4">
                        <h4 className="mb-1 font-bold text-gray-800 sm:mb-2">Power of Protein</h4>
                        <ul className="pl-4 space-y-1 text-sm text-gray-700 list-disc sm:pl-5 sm:text-base">
                          <li>Contains 60-65% proteins for optimal growth and intelligence development</li>
                          <li>Critical for building muscle mass & increases muscular energy levels</li>
                          <li>Keeps energy level up throughout the day</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-amber-50 sm:p-4">
                        <h4 className="mb-1 font-bold text-gray-800 sm:mb-2">Power of Essential Minerals</h4>
                        <ul className="pl-4 space-y-1 text-sm text-gray-700 list-disc sm:pl-5 sm:text-base">
                          <li><span className="font-semibold">Zinc:</span> Increases fertility, Helps in muscle growth & repair</li>
                          <li><span className="font-semibold">Manganese:</span> Reduces fatigue, helps with inflammation</li>
                          <li><span className="font-semibold">Iron:</span> Essential for oxygen supply to muscles</li>
                          <li><span className="font-semibold">Calcium:</span> Boosts bone health & improves dental health</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Endorsements */}
                <div className="lg:w-1/2">
                  <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pb-2 mb-3 text-xl font-bold text-gray-800 border-b-2 border-yellow-400 sm:text-2xl sm:mb-4"
                  >
                    International Recognition
                  </motion.h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="p-4 border border-yellow-200 shadow-sm bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl sm:p-5">
                      <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">United Nations World Food Conference (1974)</h4>
                      <p className="text-sm text-gray-700 sm:text-base">Declared Spirulina as <span className="font-semibold text-yellow-700">"the best food for the future"</span></p>
                    </div>
                    
                    <div className="p-4 border border-yellow-200 shadow-sm bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl sm:p-5">
                      <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">World Health Organization (WHO)</h4>
                      <p className="text-sm text-gray-700 sm:text-base">"Spirulina represents an interesting food for multiple reasons, rich in iron and protein, and is able to be administered to children without any risk. We at WHO consider it a very suitable food."</p>
                    </div>
                    
                    <div className="p-4 border border-yellow-200 shadow-sm bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl sm:p-5">
                      <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">United Nations Food and Agriculture Organization (FAO)</h4>
                      <p className="text-sm text-gray-700 sm:text-base">Declared the need to re-evaluate Spirulina's potential for food security and emergency response efforts worldwide.</p>
                    </div>
                    
                    <div className="my-4 text-center sm:my-6">
                      <img 
                        src="/images/spirulina-chart.jpg" 
                        alt="Spirulina Nutritional Chart" 
                        className="rounded-xl shadow-lg w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto h-auto"
                      />
                    </div>
                    
                    {/* Other Details */}
                    <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-xl sm:p-5">
                      <h4 className="mb-2 text-base font-bold text-gray-800 sm:text-lg sm:mb-3">Additional Information</h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <h5 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">Side Effects</h5>
                          <p className="text-sm text-gray-700 sm:text-base">No known side effects or adverse reactions have been reported.</p>
                        </div>
                        <div>
                          <h5 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base">Storage</h5>
                          <p className="text-sm text-gray-700 sm:text-base">Store in a cool, dark & dry place away from direct sunlight.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 mt-8 text-center text-white shadow-lg sm:mt-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">Ready to Experience the Benefits?</h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">Join thousands who have transformed their health with our premium organic spirulina</p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <button className="px-6 py-2 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base">
                    Order Now
                  </button>
                  <button className="px-6 py-2 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base">
                    Contact Us
                  </button>
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

export default EthioSpirulinaHome;