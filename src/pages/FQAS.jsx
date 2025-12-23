// src/pages/about/History.jsx
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  HandHeart,
  Shield,
  BookOpen,
  Clock,
  Building,
  CheckCircle,
  Send,
  ArrowRight
} from 'lucide-react';
import SidebarNavigation from '../components/sections/SidebarNavigation';
import sidebarLinksData from '../data/sidebarLinksData';

// Sidebar links for About section
// const aboutSidebarLinks = [
//   { 
//     name: "Our History", 
//     href: "/about/history", 
//     icon: Clock,
//     active: true
//   },
//   { 
//     name: "Our Mission", 
//     href: "/about/mission", 
//     icon: Target 
//   },
//   { 
//     name: "Our Team", 
//     href: "/about/team", 
//     icon: Users 
//   },
//   { 
//     name: "Our Board", 
//     href: "/about/board", 
//     icon: Building 
//   },
//   { 
//     name: "Partnerships", 
//     href: "/about/partnerships", 
//     icon: HandHeart 
//   },
//   { 
//     name: "Awards", 
//     href: "/about/awards", 
//     icon: Award 
//   },
//   { 
//     name: "Annual Reports", 
//     href: "/about/reports", 
//     icon: BookOpen 
//   }
// ];

function History() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FAQ sections
  const faqSections = [
    {
      title: "About alignAfrica",
      icon: Building,
      items: [
        {
          question: "What is alignAfrica?",
          answer: "alignAfrica is a non-profit organization dedicated to achieving social justice, gender equality, and poverty eradication. With a decade of impactful work, alignAfrica focuses on advocating for women's rights, justice, and poverty alleviation in Ethiopia. For more details about our history and board, please visit www.alignafrica.org.",
          color: "from-[#7b3400] to-[#5a2800]"
        }
      ]
    },
    {
      title: "Our Operations",
      icon: Globe,
      items: [
        {
          question: "Why Campaign in Ethiopia?",
          answer: "Ethiopian governmental and corporate policies often contribute significantly to global challenges faced by women. alignAfrica stands in solidarity with advocates for justice, campaigning alongside a robust network to hold decision-makers accountable and ensure Ethiopia upholds women's rights globally.",
          color: "from-[#7b3400] to-[#8b4410]"
        },
        {
          question: "Areas of Operation",
          answer: "alignAfrica operates in Ethiopia and South Sudan, striving to empower marginalized women affected by poverty and exclusion. In Ethiopia, we collaborate with local activists to champion women's rights and hold authorities accountable.",
          color: "from-[#7b3400] to-[#8b4410]"
        }
      ]
    },
    {
      title: "Our Principles",
      icon: Shield,
      items: [
        {
          question: "Political and Religious Affiliations?",
          answer: "alignAfrica operates independently, without affiliation to any religious or political entities. Our commitment to autonomy ensures our actions remain focused solely on our mission and values.",
          color: "from-[#5a2800] to-[#7b3400]"
        },
        {
          question: "Code of Conduct",
          answer: "In addition to our internal Code of Conduct, alignAfrica adheres to the voluntary guidelines of the Consortium of Christian Relief and Development Association (CCRDA), Global Giving, and Giving Tuesday.",
          color: "from-[#5a2800] to-[#7b3400]"
        }
      ]
    }
  ];

  const contactInfo = {
    feedback: [
      { type: "General complaints", email: "nancychebet@gmail.com" },
      { type: "Executive Director-related issues", email: "alignafrica@gmail.com" },
      { type: "Postal complaints (Board Chair)", email: "alignafrica@gmail.com" }
    ],
    contact: {
      phone: "+251 933 920 666",
      email: "alignafrica@gmail.com",
      address: "Addis Ababa, Ethiopia"
    },
    opportunities: [
      { title: "Volunteering Opportunities", icon: Heart },
      { title: "Internship Opportunities", icon: GraduationCap },
      { title: "Support and Donations", icon: HandHeart }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-orange-50/20">
      {/* Hero Banner Section */}
      <header 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/history-banne.jpg)' }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7b3400]/80 via-[#7b3400]/70 to-[#7b3400]/60"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e89c03' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our History & Mission
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-amber-100 sm:text-2xl"
            >
              10+ Years of Impact Across Africa
            </motion.p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-8">
              <SidebarNavigation
                title="About Us"
                links={sidebarLinksData}
                brandColor="amber"
                enableAnimations={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full pb-20 lg:w-3/4 lg:pb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
            >
              {/* Page Header */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#7b340020' }}>
                    <Building className="w-8 h-8" style={{ color: '#7b3400' }} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                      Welcome to alignAfrica
                    </h1>
                    <p style={{ color: '#7b3400' }} className="font-medium">
                      A Decade of Transformative Work
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* About alignAfrica */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Target className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">About alignAfrica?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      alignAfrica is a non-profit organization dedicated to achieving social justice, gender equality, and poverty eradication. With a decade of impactful work, alignAfrica focuses on advocating for women's rights, justice, and poverty alleviation in Ethiopia. For more details about our history and board, please visit www.alignafrica.org.
                    </p>
                  </div>

                  {/* Why Campaign in Ethiopia */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Globe className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Why Campaign in Ethiopia?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Ethiopian governmental and corporate policies often contribute significantly to global challenges faced by women. alignAfrica stands in solidarity with advocates for justice, campaigning alongside a robust network to hold decision-makers accountable and ensure Ethiopia upholds women's rights globally.
                    </p>
                  </div>

                  {/* Political and Religious Affiliations */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Shield className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Political and Religious Affiliations?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      alignAfrica operates independently, without affiliation to any religious or political entities. Our commitment to autonomy ensures our actions remain focused solely on our mission and values.
                    </p>
                  </div>

                  {/* Areas of Operation */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <MapPin className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Areas of Operation</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      alignAfrica operates in Ethiopia and South Sudan, striving to empower marginalized women affected by poverty and exclusion. In Ethiopia, we collaborate with local activists to champion women's rights and hold authorities accountable.
                    </p>
                  </div>

                  {/* Code of Conduct */}
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <CheckCircle className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Code of Conduct</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      In addition to our internal Code of Conduct, alignAfrica adheres to the voluntary guidelines of the Consortium of Christian Relief and Development Association (CCRDA), Global Giving, and Giving Tuesday.
                    </p>
                  </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8"
                >
                  {/* Feedback Section */}
                  <div className="p-6 rounded-xl" style={{ 
                    backgroundColor: '#f9f9f9', 
                    border: '1px solid #e5e5e5' 
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Mail className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Providing Feedback or Making Complaints</h2>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      alignAfrica values feedback as integral to our continuous improvement. To lodge a complaint or provide feedback, please contact us at:
                    </p>
                    
                    <div className="space-y-3">
                      {contactInfo.feedback.map((item, index) => (
                        <div key={index} className="p-3 bg-white rounded-lg">
                          <p className="font-semibold text-gray-800">{item.type}</p>
                          <p className="text-gray-700">{item.email}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities Section */}
                  <div className="p-6 rounded-xl" style={{ 
                    backgroundColor: '#f9f9f9', 
                    border: '1px solid #e5e5e5' 
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Briefcase className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Opportunities</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {contactInfo.opportunities.map((item, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-5 h-5" style={{ color: '#7b3400' }} />
                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          </div>
                          {item.title === "Volunteering Opportunities" && (
                            <p className="text-gray-700 text-sm">
                              alignAfrica welcomes passionate volunteers to support our efforts in various capacities. Whether at our headquarters in Addis Ababa or remotely, volunteering with alignAfrica offers enriching experiences in driving positive change.
                            </p>
                          )}
                          {item.title === "Internship Opportunities" && (
                            <p className="text-gray-700 text-sm">
                              alignAfrica occasionally offers internship opportunities aligned with educational requirements. These internships provide valuable hands-on experience in our organizational mission.
                            </p>
                          )}
                          {item.title === "Support and Donations" && (
                            <p className="text-gray-700 text-sm">
                              Support alignAfrica's impactful work by making a regular donation. Your contributions empower women, foster community development, and advance global justice initiatives.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Us */}
                  <div className="p-6 rounded-xl" style={{ 
                    background: 'linear-gradient(135deg, #7b340010 0%, #e89c0310 100%)',
                    border: '1px solid #7b340020'
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#7b340020' }}>
                        <Phone className="w-6 h-6" style={{ color: '#7b3400' }} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        For inquiries or to learn more about how you can support alignAfrica's mission, please visit our website or contact our Supporter Care team:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <p className="font-semibold text-gray-800">Phone</p>
                          <p className="text-gray-700">{contactInfo.contact.phone}</p>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg">
                          <p className="font-semibold text-gray-800">Email</p>
                          <p className="text-gray-700">{contactInfo.contact.email}</p>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg">
                          <p className="font-semibold text-gray-800">Address</p>
                          <p className="text-gray-700">{contactInfo.contact.address}</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white/50 rounded-lg">
                        <p className="text-gray-700 italic">
                          "Join us in making a difference—empowering women, transforming communities, and advancing justice worldwide. Together, we can create a more equitable future."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 text-center text-white shadow-lg rounded-xl"
                    style={{ background: 'linear-gradient(to right, #7b3400, #5a2800)' }}
                  >
                    <h3 className="mb-3 text-xl font-bold">
                      Get Involved Today
                    </h3>
                    <p className="mb-6 text-[#e89c03]">
                      Join our mission to create lasting change across Africa
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
                      <a 
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
                        style={{ color: '#7b3400' }}
                      >
                        <Send className="w-4 h-4" />
                        Contact Us
                      </a>
                      <a 
                        href="/donate"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/10"
                      >
                        <Heart className="w-4 h-4" />
                        Donate Now
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Stats Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ 
                  background: 'linear-gradient(135deg, #7b340005 0%, #e89c0305 100%)',
                  border: '1px solid #7b340020'
                }}>
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Our Impact Over 10+ Years</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#7b3400' }}>10+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Years of Service</div>
                      <div className="mt-1 text-sm text-gray-600">Dedicated to Africa</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#7b3400' }}>2</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Countries</div>
                      <div className="mt-1 text-sm text-gray-600">Ethiopia & South Sudan</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#7b3400' }}>100+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Projects</div>
                      <div className="mt-1 text-sm text-gray-600">Completed & Ongoing</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold" style={{ color: '#7b3400' }}>50K+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Lives Impacted</div>
                      <div className="mt-1 text-sm text-gray-600">Women & Communities</div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow-2xl lg:hidden rounded-t-2xl"
           style={{ 
             transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(calc(100% - 60px))',
             maxHeight: '85vh'
           }}>
        <div 
          className="flex items-center justify-center h-12 cursor-pointer rounded-t-2xl"
          style={{ background: 'linear-gradient(to right, #7b3400, #5a2800)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="font-semibold text-white">
              {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </span>
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 48px)' }}>
          <SidebarNavigation
            title="About Us"
            links={sidebarLinksData}
            brandColor="amber"
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

export default History;