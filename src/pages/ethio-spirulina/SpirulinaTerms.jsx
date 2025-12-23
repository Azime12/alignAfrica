// src/pages/ethio-spirulina/SpirulinaTerms.jsx
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
  CreditCard,
  Truck,
  Clock,
  Globe,
  Building,
  Mail as MailIcon,
  Phone,
  Users,
  FileCheck,
  Banknote,
  Package as PackageIcon,
  CheckCircle
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

// Payment methods
const paymentMethods = [
  {
    name: "Credit Card",
    icon: CreditCard,
    description: "Secure payment through major credit card circuits",
    details: "Every transaction passes directly through a secure electronic banking system and no one, not even Ethio-Spirulina PLC, can learn about the card codes."
  },
  {
    name: "PayPal",
    icon: Shield,
    description: "Fast and secure online payment system",
    details: "Can be used even without a PayPal account - simply enter your credit card or prepaid card details."
  },
  {
    name: "Bank Transfer",
    icon: Banknote,
    description: "For wholesale orders only",
    details: "Bank: Abyssinia's, SWIFT code: ABYSETAA. Goods shipped upon payment receipt (2-3 working days)."
  }
];

// Delivery methods
const deliveryMethods = [
  {
    method: "At Home",
    details: "When the person is sure to be present"
  },
  {
    method: "Workplace",
    details: "Providing days and opening hours or with a trusted person"
  },
  {
    method: "Courier Branch",
    details: "Collect the package yourself at the Courier branch"
  },
  {
    method: "Farm Store",
    details: "At our store in the Farm from 8:00-15:00. Pay on the spot in cash, credit card, or debit card."
  }
];

// Processing purposes
const processingPurposes = [
  {
    type: "Without Consent",
    items: [
      "Fulfillment of pre-contractual, contractual and tax obligations",
      "Fulfillment of obligations established by law, regulation, or community legislation",
      "Exercise the rights of the owner (e.g., defense in court)"
    ]
  },
  {
    type: "With Consent",
    items: [
      "Marketing: sending newsletters, advertising, and promotional communications",
      "Support: customer service, advice, and personalized information"
    ]
  }
];

function SpirulinaTerms() {
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
                Terms and Conditions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Legal Information & Customer Agreement
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
              {/* Main Title */}
              <div className="mb-8 text-center sm:mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
                >
                  Terms and Conditions
                </motion.h1>
                
                <div className="w-24 h-1 mx-auto bg-yellow-500 rounded-full"></div>
              </div>

              {/* First Row - Introduction & Data Processing */}
              <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2 sm:gap-8 sm:mb-12">
                {/* Left Column - Introduction & Data Processing */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="mb-6 text-base text-gray-700 sm:text-lg">
                      We inform you that the personal data you provide and acquired by our company will be subject to treatment based on principles of correctness, lawfulness and transparency, in compliance with current regulations of Ethiopia.
                    </p>

                    {/* Data Controller */}
                    <div className="p-5 border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Building className="text-yellow-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Identity and contact details of the owner</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          The Data Controller is the <span className="font-semibold">Ethio-Spirulina PLC</span>, with registered office in Ethiopia.
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">TIN Number:</span> 0041869761
                        </p>
                        <a 
                          href="mailto:ethiospirulina@gmail.com" 
                          className="flex items-center gap-2 text-yellow-700 transition-colors hover:text-yellow-800"
                        >
                          <MailIcon size={16} />
                          Mail: ethiospirulina@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Processing Purposes */}
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-800">Purpose of the processing</h3>
                    
                    <div className="space-y-4">
                      {processingPurposes.map((purpose, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gray-50">
                          <h4 className="mb-2 font-semibold text-gray-800">
                            {purpose.type === "Without Consent" ? "Without your express consent:" : "Only with your specific and distinct consent:"}
                          </h4>
                          <ul className="space-y-2">
                            {purpose.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-1 h-1 mt-2 bg-gray-400 rounded-full"></div>
                                <span className="text-sm text-gray-700 sm:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Prices & Warranties */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  {/* Prices & Availability */}
                  <div className="p-5 border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Banknote className="text-blue-600" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">PRICES AND AVAILABILITY</h2>
                    </div>
                    
                    <div className="space-y-3 text-gray-700">
                      <p>
                        All prices are expressed in multiple currencies (KWD, BHD, OMR, JOD, GBP, GIP, KYD, CHF, EUR, USD) and are inclusive of VAT. They do not include any taxes, duties applicable in the destination country.
                      </p>
                      
                      <div className="p-3 rounded-lg bg-white/70">
                        <p className="text-sm">
                          <span className="font-semibold">Note:</span> Specific conditions of sale are reserved for operators in the organic food, pharmaceutical, herbal and therapists sectors.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="mailto:ethiospirulina@gmail.com" 
                            className="flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800"
                          >
                            <MailIcon size={14} />
                            Email: ethiospirulina@gmail.com
                          </a>
                          <a 
                            href="tel:+251933920666" 
                            className="flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800"
                          >
                            <Phone size={14} />
                            Telephone: +251 933 920 666
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600">
                        The Ethio-Spirulina PLC reserves the right to change prices at any time. The price charged will be that indicated at the time of order placement.
                      </p>
                    </div>
                  </div>

                  {/* Warranties */}
                  <div className="p-5 border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Shield className="text-green-600" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">WARRANTIES</h2>
                    </div>
                    
                    <div className="space-y-2 text-gray-700">
                      <p>
                        Ethio-Spirulina PLC guarantees:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={16} />
                          <span>Total confidentiality of customer data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={16} />
                          <span>Data correction possibility at any time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={16} />
                          <span>Exact payment matching order summary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={16} />
                          <span>No hidden or additional expenses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* Second Row - Ordering, Payments, Delivery */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                {/* Left Column - Ordering & Payments */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  {/* How to Order */}
                  <div>
                    <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
                      <PackageIcon className="text-yellow-600" size={24} />
                      HOW TO ORDER WHOLESALE
                    </h2>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Globe className="text-yellow-600" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Online</h4>
                          <p className="text-sm text-gray-700">On our website www.ethiospirulina.com in total safety</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Phone className="text-yellow-600" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                          <p className="text-sm text-gray-700">+251 933 920 666 (Mon-Fri, 8:00-12:00 & 14:00-18:00)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <MailIcon className="text-yellow-600" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Email</h4>
                          <p className="text-sm text-gray-700">ethiospirulina@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-800">PAYMENT METHODS</h3>
                    <p className="mb-4 text-gray-700">Payments can be made by credit card, PayPal and bank transfer for wholesale.</p>
                    
                    <div className="space-y-4">
                      {paymentMethods.map((method, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              {React.createElement(method.icon, { className: "text-gray-600", size: 20 })}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">{method.name}</h4>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">{method.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Billing & Shipping */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800">BILLING</h4>
                      <p className="text-sm text-gray-700">
                        Invoice issued only upon express written request to <a href="mailto:ethiospirulina@gmail.com" className="text-yellow-700">ethiospirulina@gmail.com</a>, after payment but within 24 hours.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800">SHIPPING COSTS</h4>
                      <p className="text-sm text-gray-700">
                        Free shipping for orders over 50.00 (net of ancillary costs). For smaller orders: shipping fee of 5.00. All deliveries to ground floor.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Delivery & Warranties */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  {/* Delivery Options */}
                  <div>
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                      <Truck className="text-blue-600" size={24} />
                      DELIVERY OPTIONS
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {deliveryMethods.map((method, index) => (
                        <div key={index} className="p-4 rounded-lg bg-blue-50">
                          <h4 className="mb-1 font-semibold text-gray-800">{method.method}</h4>
                          <p className="text-sm text-gray-700">{method.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Times */}
                  <div>
                    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
                      <Clock className="text-blue-600" size={24} />
                      DELIVERY TIMES AND METHODS
                    </h3>
                    
                    <div className="space-y-3 text-gray-700">
                      <div className="p-4 rounded-lg bg-blue-50">
                        <h4 className="mb-2 font-semibold text-gray-800">Standard Delivery:</h4>
                        <p className="text-sm">24-48 hours after order receipt (Mon-Fri)</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-blue-50">
                        <h4 className="mb-2 font-semibold text-gray-800">Remote Areas:</h4>
                        <p className="text-sm">3-4 days for Emerging Regions and some Tigray provinces</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-yellow-50">
                        <p className="text-sm font-semibold">Check upon delivery:</p>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 mt-2 bg-yellow-500 rounded-full"></div>
                            <span>Package count matches waybill</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 mt-2 bg-yellow-500 rounded-full"></div>
                            <span>Packages not damaged or tampered with</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 mt-2 bg-yellow-500 rounded-full"></div>
                            <span>Sign with reservation if any doubts</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Warranties & Withdrawal */}
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-800">WARRANTIES AND WITHDRAWAL</h3>
                    
                    <div className="space-y-3 text-gray-700">
                      <p className="text-sm">
                        Right to withdraw within 14 days of receipt. Written communication to <a href="mailto:ethiospirulina@gmail.com" className="text-yellow-700">ethiospirulina@gmail.com</a>.
                      </p>
                      
                      <div className="p-4 rounded-lg bg-green-50">
                        <h4 className="mb-2 font-semibold text-gray-800">Return Conditions:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 text-green-500" size={16} />
                            <span className="text-sm">Integrate and not damaged</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 text-green-500" size={16} />
                            <span className="text-sm">Original packaging included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="mt-1 text-green-500" size={16} />
                            <span className="text-sm">Return within 14 days of authorization</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Legal Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mt-8 border border-gray-200 shadow-lg sm:mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="flex items-center gap-2 mb-3 font-bold text-gray-800">
                      <FileCheck className="text-gray-600" size={20} />
                      APPLICABLE LAW
                    </h4>
                    <p className="text-sm text-gray-700">
                      The Contract and purchases are governed by Ethiopian law. The Court of Ethiopia is competent for any disputes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center gap-2 mb-3 font-bold text-gray-800">
                      <Shield className="text-gray-600" size={20} />
                      PRIVACY
                    </h4>
                    <p className="text-sm text-gray-700">
                      By using www.ethiospirulinafarm.org, you authorize Ethio-Spirulina PLC to process personal data with confidentiality, in accordance with our Privacy Policy.
                    </p>
                  </div>
                </div>
                
                {/* International Delivery */}
                <div className="p-4 mt-6 rounded-lg bg-white/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="text-gray-600" size={18} />
                    <h4 className="font-semibold text-gray-800">International Delivery</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    For deliveries outside Ethiopia, costs and delivery times will be estimated and communicated in writing as they vary by country.
                  </p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 mt-8 text-center text-white shadow-lg sm:mt-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl sm:rounded-2xl sm:p-8 sm:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold sm:text-2xl sm:mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  Contact us for clarification on any terms and conditions
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <a 
                    href="/ethio-spirulina/contact" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    Contact Legal Department
                  </a>
                  <a 
                    href="/ethio-spirulina/products" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    View Products
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

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default SpirulinaTerms;