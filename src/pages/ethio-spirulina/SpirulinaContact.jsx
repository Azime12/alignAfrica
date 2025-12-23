// src/pages/ethio-spirulina/SpirulinaContact.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';
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
  User,
  Users,
  Award as AwardIcon,
  Leaf,
  Droplet,
  Sun,
  Phone,
  MapPin,
  Mail as MailIcon,
  MessageCircle,
  Globe,
  CheckCircle
} from 'lucide-react';

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

// Team members
const teamMembers = [
  {
    name: "Yonas Mamo",
    position: "Founder & CEO",
    image: "/images/yonas-ethio.jpg",
    description: "Pioneer with over 5 years of production expertise in Ethiopian spirulina"
  },
  {
    name: "Deputy CEO",
    position: "Deputy Chief Executive Officer",
    image: "/images/executive-officer.jpg",
    description: "Leading operations and strategic development"
  },
  {
    name: "Program Manager",
    position: "Program Manager",
    image: "/images/program-manger.jpg",
    description: "Overseeing production programs and quality control"
  },
  {
    name: "Finance Manager",
    position: "Finance Manager",
    description: "Managing financial operations and strategic planning"
  }
];

// Company achievements
const companyAchievements = [
  {
    icon: Leaf,
    title: "Zero Water Discharge",
    description: "Achieved despite producing huge tonnage of aquaculture and vegetables"
  },
  {
    icon: Sun,
    title: "Green Energy Usage",
    description: "Over 70% of reusable green energy sources in production"
  },
  {
    icon: Globe,
    title: "Climate Change Reduction",
    description: "Contributing to environmental sustainability through natural resource utilization"
  },
  {
    icon: Users,
    title: "Job Creation",
    description: "Creating employment opportunities in sustainable agriculture"
  }
];

function SpirulinaContact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
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
                Contact Us
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Get in Touch with Ethio-Spirulina Team
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
              {/* Message from Founder Section */}
              <div className="mb-8 text-center sm:mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 mb-6 overflow-hidden border-4 border-yellow-200 rounded-full shadow-lg sm:w-56 sm:h-56">
                    <img 
                      src="/images/yonas-ethio.jpg" 
                      alt="Yonas Mamo - Founder & CEO" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
                  >
                    A Message from the Founder and CEO
                  </motion.h1>
                  
                  <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500 rounded-full"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl mx-auto text-left"
                >
                  <div className="space-y-4 text-gray-700">
                    <p className="text-base sm:text-lg">
                      I am <span className="font-semibold text-yellow-700">Yonas Mamo</span>, the founder and chief executive officer of Ethio-spirulina supplementary food industry plc. I am excited about my new creativity because of our business company's unique ability to deliver authentic quality "Ethio-spirulina, super food. Super future" from Arenguade and Chitu lakes of rift valley of Ethiopia.
                    </p>
                    
                    <div className="p-4 border-l-4 border-yellow-500 rounded-r-lg bg-yellow-50">
                      <p className="text-gray-800">
                        As pioneers in this field with over 5 years of production expertise, we are proud to be the only manufacturer to offer this quality product in Ethiopia.
                      </p>
                    </div>
                    
                    <p className="text-base sm:text-lg">
                      Moreover, we take pride in our commitment to Spirulina business, which is our natural resource that has not been used for centuries, to solve nutritional deficiency, reduce climate change, create jobs, and be used as a raw material for other products development in sustainability.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 my-6 sm:grid-cols-2">
                      <div className="p-4 rounded-lg bg-green-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Droplet className="text-green-600" size={20} />
                          <h4 className="font-semibold text-gray-800">Zero Water Discharge</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Achieved despite producing huge tonnage of aquaculture and vegetables
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Sun className="text-green-600" size={20} />
                          <h4 className="font-semibold text-gray-800">Green Energy</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Over 70% of reusable green energy sources in production process
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg">
                      Join us in experiencing a bright future and improved health through our "Ethiopian grown spirulina" called "Ethio-spirulina, super food. Super future®".
                    </p>
                    
                    <div className="pt-6 mt-8 border-t border-gray-200">
                      <p className="text-lg font-bold text-gray-800">
                        Sincerely yours,
                      </p>
                      <p className="mt-2 text-xl font-bold text-yellow-700">
                        Yonas Mamo
                      </p>
                      <p className="text-gray-600">
                        Founder and CEO, Ethio-Spirulina PLC
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* Leadership Team */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
                  Our Leadership Team
                </h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {teamMembers.slice(1).map((member, index) => (
                    <div key={index} className="p-4 text-center transition-shadow bg-gray-50 rounded-xl hover:shadow-md">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden border-4 border-white rounded-full shadow-lg">
                        <img 
                          src={member.image || "/images/placeholder-avatar.jpg"} 
                          alt={member.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                      <p className="mb-2 font-semibold text-yellow-700">{member.position}</p>
                      <p className="text-sm text-gray-600">{member.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* Contact Form & Information */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                {/* Left Column - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="mb-6 text-xl font-bold text-gray-800">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          placeholder="+251 ___ ___ ___"
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="retail">Retail Purchase</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="info">General Information</option>
                          <option value="support">Customer Support</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </motion.div>

                {/* Right Column - Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800">Get in Touch</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Phone className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Phone</h4>
                          <a 
                            href="tel:+251933920666" 
                            className="text-blue-700 transition-colors hover:text-blue-800"
                          >
                            +251 933 920 666
                          </a>
                          <p className="mt-1 text-sm text-gray-600">Monday - Friday, 8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <MessageCircle className="text-green-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                          <a 
                            href="https://wa.me/251933920666" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-700 transition-colors hover:text-green-800"
                          >
                            +251 933 920 666
                          </a>
                          <p className="mt-1 text-sm text-gray-600">Direct messaging available</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <MailIcon className="text-yellow-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Email</h4>
                          <a 
                            href="mailto:ethiospirulina@gmail.com" 
                            className="text-yellow-700 transition-colors hover:text-yellow-800"
                          >
                            ethiospirulina@gmail.com
                          </a>
                          <p className="mt-1 text-sm text-gray-600">We respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-50">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <MapPin className="text-purple-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Address</h4>
                          <p className="text-gray-700">Bole Sub City</p>
                          <p className="text-gray-700">Addis Ababa, Ethiopia</p>
                          <p className="mt-1 text-sm text-gray-600">Farm visits by appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company Achievements */}
                  <div className="p-5 border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <h4 className="mb-4 font-bold text-gray-800">Our Sustainable Achievements</h4>
                    
                    <div className="space-y-3">
                      {companyAchievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                            {React.createElement(achievement.icon, { className: "text-green-600", size: 18 })}
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-gray-800">{achievement.title}</h5>
                            <p className="text-xs text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mt-8 text-center text-white shadow-lg sm:mt-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Ready to Experience Ethiopian Spirulina?
                </h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  Contact us for wholesale, retail, or partnership opportunities
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <button className="px-6 py-2 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base">
                    Request Quote
                  </button>
                  <a 
                    href="/ethio-spirulina/products" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    Browse Products
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

export default SpirulinaContact;