// src/pages/ethio-spirulina/SpirulinaCertificates.jsx
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
  FileCheck,
  Shield,
  Building,
  Mail as MailIcon,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Users
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

// Certification authorities
const certificationAuthorities = [
  {
    name: "Ethiopian Food and Drug Authority (EFDA)",
    description: "National regulatory body for food and drug safety"
  },
  {
    name: "Ethiopian Conformity Assessment Enterprise",
    description: "Standardization and quality assurance authority"
  },
  {
    name: "Ethiopian Health and Nutrition Research Institute (EHNRI)",
    description: "Leading health and nutrition research institution"
  }
];

function SpirulinaCertificates() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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

  // Certificate click handler for lightbox effect
  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/ethio-spirulina-banner.jpg)' }}
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
                Our Certificates
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Quality Assurance & International Standards
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
              {/* First Row - Certificates Introduction */}
              <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2 sm:gap-8 sm:mb-12">
                {/* Left Column - Introduction */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Shield className="text-yellow-600" size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">Our Certificates</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-base sm:text-lg">
                      We Ethio-Spirulina PLC accredit the quality of all our products. For this we have some of the highest certifications, granted by independent authorities, which guarantee strict compliance with all requirements.
                    </p>
                    
                    <div className="p-4 border-l-4 border-yellow-500 rounded-r-lg bg-yellow-50">
                      <p className="text-gray-800">
                        We currently have recognition from the following regulatory bodies and are continuously working to achieve international quality certifications.
                      </p>
                    </div>

                    {/* Certification Authorities List */}
                    <div className="mt-6 space-y-3">
                      {certificationAuthorities.map((authority, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-yellow-50">
                          <div className="flex-shrink-0">
                            <Building className="text-gray-600" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{authority.name}</h4>
                            <p className="mt-1 text-sm text-gray-600">{authority.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Certificate Images */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      <FileCheck className="text-yellow-600" size={24} />
                      Our Certificates
                    </h3>
                    
                    {/* Certificate 1 - EFDA */}
                    <div className="mb-6">
                      <div 
                        className="overflow-hidden transition-shadow shadow-lg cursor-pointer rounded-xl hover:shadow-xl"
                        onClick={() => handleCertificateClick('efda')}
                      >
                        <img 
                          src="/images/certificate-efda.jpg" 
                          alt="EFDA Certificate" 
                          className="object-cover w-full h-auto transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-600">EFDA Certification</p>
                    </div>

                    {/* Certificate 2 - ECAE */}
                    <div>
                      <div 
                        className="overflow-hidden transition-shadow shadow-lg cursor-pointer rounded-xl hover:shadow-xl"
                        onClick={() => handleCertificateClick('ecae')}
                      >
                        <img 
                          src="/images/ECAE-certificat.jpg" 
                          alt="ECAE Certificate" 
                          className="object-cover w-full h-auto transition-transform duration-500 transform hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-600">ECAE Certification</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* Second Row - Contact Info & More Certificates */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                {/* Left Column - Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      <MailIcon className="text-yellow-600" size={24} />
                      Keep In Touch
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-5 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50">
                        <p className="italic text-gray-700">
                          "We want to share our love of Ethiopian Super-foods for your Super-future and health with you."
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="mb-3 font-semibold text-gray-800">Contact us in our weekly newsletter!</h4>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <MailIcon className="text-gray-600" size={18} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">Email</p>
                              <a 
                                href="mailto:EthiopianSpirulinal@gmail.com" 
                                className="text-yellow-700 transition-colors hover:text-yellow-800"
                              >
                                EthiopianSpirulinal@gmail.com
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <Phone className="text-gray-600" size={18} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">Phone</p>
                              <a 
                                href="tel:+251933920666" 
                                className="text-gray-700 transition-colors hover:text-yellow-700"
                              >
                                +251 933 920 666 (Yonas Mamo)
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <Phone className="text-gray-600" size={18} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">WhatsApp</p>
                              <a 
                                href="https://wa.me/251933920666" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-700 transition-colors hover:text-yellow-700"
                              >
                                +251 933 920 666
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="p-2 mt-1 bg-gray-100 rounded-lg">
                              <MapPin className="text-gray-600" size={18} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">Address</p>
                              <p className="text-gray-700">Bole Sub City, Addis Ababa, Ethiopia</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - More Certificates & Social */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  {/* EHNRI Certificate */}
                  <div>
                    <div 
                      className="mb-4 overflow-hidden transition-shadow shadow-lg cursor-pointer rounded-xl hover:shadow-xl"
                      onClick={() => handleCertificateClick('ehnri')}
                    >
                      <img 
                        src="/images/EHNRI-certificat.jpg" 
                        alt="EHNRI Certificate" 
                        className="object-cover w-full h-auto transition-transform duration-500 transform hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-center text-gray-600">EHNRI Certification</p>
                  </div>

                  {/* Join Us Section */}
                  <div className="p-5 border border-yellow-200 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl">
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      <Users className="text-yellow-700" size={24} />
                      Join Us
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Follow us on social media to stay updated with our latest products, certifications, and health tips!
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <a 
                          href="https://www.facebook.com/Ethio.Spirulina.SuperFood.SuperFuture" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                          <Facebook size={20} />
                          <span>Facebook</span>
                        </a>
                        
                        <a 
                          href="https://twitter.com/ethiospirulina" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-lg bg-sky-500 hover:bg-sky-600"
                        >
                          <Twitter size={20} />
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Future Certifications */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mt-8 border border-blue-200 shadow-lg sm:mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">International Recognition</h3>
                    <p className="text-blue-700">Ongoing Quality Enhancement</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
                  <div className="p-4 text-center rounded-lg bg-white/80">
                    <div className="mb-2 text-3xl font-bold text-blue-600">🌍</div>
                    <h4 className="mb-2 font-semibold text-gray-800">International Standards</h4>
                    <p className="text-sm text-gray-600">Working towards ISO, FDA, and other global certifications</p>
                  </div>
                  
                  <div className="p-4 text-center rounded-lg bg-white/80">
                    <div className="mb-2 text-3xl font-bold text-blue-600">🔬</div>
                    <h4 className="mb-2 font-semibold text-gray-800">Research Partnerships</h4>
                    <p className="text-sm text-gray-600">Collaborating with international research institutes</p>
                  </div>
                  
                  <div className="p-4 text-center rounded-lg bg-white/80">
                    <div className="mb-2 text-3xl font-bold text-blue-600">📈</div>
                    <h4 className="mb-2 font-semibold text-gray-800">Continuous Improvement</h4>
                    <p className="text-sm text-gray-600">Regular quality audits and process enhancements</p>
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

      {/* Certificate Modal/Lightbox */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-0 text-white transition-colors -top-10 hover:text-yellow-400"
            >
              Close
            </button>
            <img 
              src={`/images/${
                selectedCertificate === 'efda' ? 'certificate-efda.jpg' :
                selectedCertificate === 'ecae' ? 'ECAE-certificat.jpg' :
                'EHNRI-certificat.jpg'
              }`}
              alt="Certificate"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SpirulinaCertificates;