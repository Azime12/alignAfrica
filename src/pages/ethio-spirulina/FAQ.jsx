// src/pages/ethio-spirulina/SpirulinaFQA.jsx
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
  Users,
  Shield,
  Droplet,
  Heart as HeartIcon,
  Zap,
  Apple,
  Battery,
  Brain,
  Calendar,
  Package as PackageIcon,
  Star,
  Recycle
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

// FAQ data organized by category
const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is Spirulina?',
        answer: 'Spirulina is a microscopic plant growing by the hundreds in a single drop of water. This spiral shaped fresh-water plant derives its energy from the sun. Scientists classify it as one kind of blue-green algae. Spirulina has been eaten by humans since prehistory and is now cultivated worldwide as a healthy food.'
      },
      {
        question: 'Who should use Spirulina?',
        answer: 'Women, men, people on the go, retired people, parents, athletes; most anyone subject to stress wanting a healthy, active, lifestyle. (If you have a medical condition or are on medication, consult a health care practitioner before using this product).'
      }
    ]
  },
  {
    id: 'dietary',
    title: 'Dietary Information',
    icon: Apple,
    questions: [
      {
        question: 'Is Spirulina Vegan?',
        answer: 'Absolutely. Spirulina is a microscopic plant and Ethio-Spirulina does not contain or come in contact with any animals or animal byproducts.'
      },
      {
        question: 'Is Spirulina KETO Friendly?',
        answer: 'Yes! Spirulina is a plant-based KETO and paleo friendly Super-Food. Spirulina can help enhance a keto diet with its vitamin, mineral, and antioxidant content.'
      },
      {
        question: 'Is Spirulina Gluten-Free?',
        answer: 'Yes! It is gluten-free.'
      },
      {
        question: 'Is Ethio-Spirulina Non-GMO Project verified?',
        answer: 'Yes! We have never used genetic modification on our spirulina and we are Non-GMO Project Verified.'
      }
    ]
  },
  {
    id: 'composition',
    title: 'Composition & Quality',
    icon: Shield,
    questions: [
      {
        question: 'How does Spirulina differ from Chlorella?',
        answer: 'Spirulina vs Chlorella Comparison',
        subpoints: [
          'Spirulina: Fully digestible (no cell wall), Contains phycocyanin, Contains Gamma Linolenic Acid (GLA), GRAS certified',
          'Chlorella: Indigestible (thick cellulose wall), No important pigments, No GLA, More chlorophyll content'
        ]
      },
      {
        question: 'How much Iron is in one serving of Ethio-Spirulina® (3 grams)?',
        answer: 'Spirulina contains 1.5 mg Iron per 3 grams serving size which is 8% of daily value.'
      },
      {
        question: 'How much iodine is in one serving of Ethio-Spirulina® Spirulina (3 grams)?',
        answer: 'The iodine content of our Spirulina is less than 1 ppm.'
      },
      {
        question: 'Does Ethio-Spirulina® conduct heavy metal testing?',
        answer: 'Our spirulina products meet all regulatory requirements for heavy metals, including California Prop 65.'
      }
    ]
  },
  {
    id: 'benefits',
    title: 'Health Benefits',
    icon: HeartIcon,
    questions: [
      {
        question: 'What are the structure/function claims attributed to Spirulina?',
        answer: 'Key benefits include:',
        subpoints: [
          'Immune Defense Support',
          'Antioxidant Protection', 
          'Cardiovascular Health'
        ]
      },
      {
        question: 'What are the environmental benefits of Ethio-Spirulina®?',
        answer: 'Our production involves the efficient use of land, energy and water resources. This is because our Spirulina productivity (yield per acre) is much higher than that of conventional food products. Spirulina fixes carbon dioxide and produces a lot of oxygen during growth and it does not require fertile land.'
      },
      {
        question: 'Any side effects to taking Spirulina?',
        answer: 'No serious side effects have been reported. Some people might experience stomach disturbances at first time use.'
      }
    ]
  },
  {
    id: 'usage',
    title: 'Usage & Storage',
    icon: PackageIcon,
    questions: [
      {
        question: 'How much Spirulina should I take and when?',
        answer: 'Recommended dosages (1 teaspoon = 1.5 grams):',
        dosage: [
          { group: 'Children up to 5', dose: '1 – 2 grams/day' },
          { group: 'Children over 5', dose: '2 – 3 grams/day' },
          { group: 'Adults', dose: '3 – 5 grams/day' },
          { group: 'Immune builder', dose: '10 – 15 grams/day' },
          { group: 'Primary Protein', dose: '15 – 20 grams/day' },
          { group: 'Athletes', dose: '20 – 30 grams/day' }
        ]
      },
      {
        question: 'How can I take Spirulina?',
        answer: 'The most popular way to take Spirulina is in powder form. There are tons of delicious recipes that incorporate Spirulina. Our Spirulina also comes in tablet and capsule form, for easy and on-the-go consumption.'
      },
      {
        question: 'How can I store Spirulina?',
        answer: 'At Ethio-Spirulina, we recommend storing Spirulina sealed tight in a dry pantry. The ideal spot does not have humidity or sunlight.'
      }
    ]
  },
  {
    id: 'other',
    title: 'Other Questions',
    icon: Star,
    questions: [
      {
        question: 'Why should I take Ethio-Spirulina® instead of other products?',
        answer: 'Ethio-Spirulina Supplementary Food Industry PLC has over 5 years in the market, building and perfecting Ethio-Spirulina® which contains many essential nutrients in one concentrated package in addition to phytonutrients of health benefit. Ethio-Spirulina® is affirmed GRAS (Generally Recognized as Safe) by scientific procedures and EFDA review.'
      },
      {
        question: 'Can I request more info about your products?',
        answer: 'Of course! We love when our customers want to learn more. You can reach out to us through our contact page.'
      }
    ]
  }
];

function SpirulinaFQA() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState({});

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

  const toggleQuestion = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
                Frequently Asked Questions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-yellow-100 sm:text-xl md:text-2xl"
              >
                Everything You Need to Know About Spirulina
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
              
              {/* FAQ Categories Navigation */}
              <div className="p-4 mt-6 bg-white shadow-lg rounded-xl">
                <h3 className="mb-3 font-bold text-gray-800">FAQ Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setOpenCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                        openCategory === category.id 
                          ? 'bg-yellow-100 text-yellow-800 font-semibold' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {React.createElement(category.icon, { size: 16 })}
                        <span>{category.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
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
              {/* FAQ Introduction */}
              <div className="mb-8 text-center sm:mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
                >
                  Spirulina FQA
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl mx-auto text-lg text-gray-700 sm:text-xl"
                >
                  Find answers to common questions about Ethio-Spirulina, its benefits, usage, and more.
                </motion.p>
                
                <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500 rounded-full"></div>
              </div>

              {/* Mobile FAQ Categories */}
              <div className="mb-6 lg:hidden">
                <div className="overflow-x-auto">
                  <div className="flex pb-2 space-x-2">
                    {faqCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setOpenCategory(category.id)}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 ${
                          openCategory === category.id 
                            ? 'bg-yellow-500 text-white font-semibold' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {React.createElement(category.icon, { size: 16 })}
                          <span className="whitespace-nowrap">{category.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="space-y-8">
                {/* First Row - General & Dietary */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                  {/* Left Column - General & Dietary */}
                  <div className="space-y-6">
                    {faqCategories.filter(cat => ['general', 'dietary'].includes(cat.id)).map((category) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-yellow-100 rounded-lg">
                            {React.createElement(category.icon, { className: "text-yellow-600", size: 20 })}
                          </div>
                          <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                        </div>
                        
                        <div className="space-y-4">
                          {category.questions.map((faq, index) => (
                            <div 
                              key={index}
                              className="transition-colors border border-gray-200 rounded-xl hover:border-yellow-300"
                            >
                              <button
                                onClick={() => toggleQuestion(category.id, index)}
                                className="w-full p-4 text-left"
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                                    Q: {faq.question}
                                  </h3>
                                  <ChevronUp 
                                    size={20} 
                                    className={`text-gray-400 transition-transform duration-300 ${
                                      expandedQuestions[`${category.id}-${index}`] ? 'rotate-180' : ''
                                    }`}
                                  />
                                </div>
                                
                                <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${
                                  expandedQuestions[`${category.id}-${index}`] ? 'max-h-96' : 'max-h-0'
                                }`}>
                                  <div className="pt-2 border-t border-gray-100">
                                    <p className="mb-2 font-medium text-yellow-700">A:</p>
                                    <p>{faq.answer}</p>
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Column - Composition & Benefits */}
                  <div className="space-y-6">
                    {faqCategories.filter(cat => ['composition', 'benefits'].includes(cat.id)).map((category) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-yellow-100 rounded-lg">
                            {React.createElement(category.icon, { className: "text-yellow-600", size: 20 })}
                          </div>
                          <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                        </div>
                        
                        <div className="space-y-4">
                          {category.questions.map((faq, index) => (
                            <div 
                              key={index}
                              className="transition-colors border border-gray-200 rounded-xl hover:border-yellow-300"
                            >
                              <button
                                onClick={() => toggleQuestion(category.id, index)}
                                className="w-full p-4 text-left"
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                                    Q: {faq.question}
                                  </h3>
                                  <ChevronUp 
                                    size={20} 
                                    className={`text-gray-400 transition-transform duration-300 ${
                                      expandedQuestions[`${category.id}-${index}`] ? 'rotate-180' : ''
                                    }`}
                                  />
                                </div>
                                
                                <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${
                                  expandedQuestions[`${category.id}-${index}`] ? 'max-h-96' : 'max-h-0'
                                }`}>
                                  <div className="pt-2 border-t border-gray-100">
                                    <p className="mb-2 font-medium text-yellow-700">A:</p>
                                    {faq.subpoints ? (
                                      <div>
                                        <p className="mb-3">{faq.answer}</p>
                                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                          <div className="p-3 rounded-lg bg-green-50">
                                            <h4 className="mb-2 font-semibold text-green-800">Spirulina:</h4>
                                            <ul className="space-y-1">
                                              {faq.subpoints[0].split(', ').map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                  <div className="flex-shrink-0 w-1 h-1 mt-2 bg-green-500 rounded-full"></div>
                                                  <span>{point}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                          <div className="p-3 rounded-lg bg-blue-50">
                                            <h4 className="mb-2 font-semibold text-blue-800">Chlorella:</h4>
                                            <ul className="space-y-1">
                                              {faq.subpoints[1].split(', ').map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                  <div className="flex-shrink-0 w-1 h-1 mt-2 bg-blue-500 rounded-full"></div>
                                                  <span>{point}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    ) : faq.dosage ? (
                                      <div>
                                        <p className="mb-3">{faq.answer}</p>
                                        <div className="p-4 rounded-lg bg-yellow-50">
                                          <div className="space-y-2">
                                            {faq.dosage.map((item, idx) => (
                                              <div key={idx} className="flex items-center justify-between py-2 border-b border-yellow-200 last:border-b-0">
                                                <span className="font-medium text-gray-800">{item.group}</span>
                                                <span className="font-bold text-yellow-700">{item.dose}</span>
                                              </div>
                                            ))}
                                          </div>
                                          <p className="mt-3 text-sm italic text-gray-600">1 teaspoon = 1.5 grams</p>
                                        </div>
                                      </div>
                                    ) : faq.subpoints && !faq.question.includes('Chlorella') ? (
                                      <div>
                                        <p className="mb-2">{faq.answer}</p>
                                        <ul className="space-y-1">
                                          {faq.subpoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                              <div className="flex-shrink-0 w-1 h-1 mt-2 bg-yellow-500 rounded-full"></div>
                                              <span>{point}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ) : (
                                      <p>{faq.answer}</p>
                                    )}
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-200"></div>

                {/* Second Row - Usage & Other */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
                  {/* Left Column - Usage */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <PackageIcon className="text-yellow-600" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">How to take/store Spirulina</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {faqCategories.find(cat => cat.id === 'usage').questions.map((faq, index) => (
                        <div 
                          key={index}
                          className="transition-colors border border-gray-200 rounded-xl hover:border-yellow-300"
                        >
                          <button
                            onClick={() => toggleQuestion('usage', index)}
                            className="w-full p-4 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                                Q: {faq.question}
                              </h3>
                              <ChevronUp 
                                size={20} 
                                className={`text-gray-400 transition-transform duration-300 ${
                                  expandedQuestions[`usage-${index}`] ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                            
                            <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${
                              expandedQuestions[`usage-${index}`] ? 'max-h-96' : 'max-h-0'
                            }`}>
                              <div className="pt-2 border-t border-gray-100">
                                <p className="mb-2 font-medium text-yellow-700">A:</p>
                                {faq.dosage ? (
                                  <div>
                                    <p className="mb-3">{faq.answer}</p>
                                    <div className="p-4 rounded-lg bg-yellow-50">
                                      <div className="space-y-2">
                                        {faq.dosage.map((item, idx) => (
                                          <div key={idx} className="flex items-center justify-between py-2 border-b border-yellow-200 last:border-b-0">
                                            <span className="font-medium text-gray-800">{item.group}</span>
                                            <span className="font-bold text-yellow-700">{item.dose}</span>
                                          </div>
                                        ))}
                                      </div>
                                      <p className="mt-3 text-sm italic text-gray-600">1 teaspoon = 1.5 grams</p>
                                    </div>
                                  </div>
                                ) : (
                                  <p>{faq.answer}</p>
                                )}
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Column - Other Questions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Star className="text-yellow-600" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-800">Others</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {faqCategories.find(cat => cat.id === 'other').questions.map((faq, index) => (
                        <div 
                          key={index}
                          className="transition-colors border border-gray-200 rounded-xl hover:border-yellow-300"
                        >
                          <button
                            onClick={() => toggleQuestion('other', index)}
                            className="w-full p-4 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                                Q: {faq.question}
                              </h3>
                              <ChevronUp 
                                size={20} 
                                className={`text-gray-400 transition-transform duration-300 ${
                                  expandedQuestions[`other-${index}`] ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                            
                            <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${
                              expandedQuestions[`other-${index}`] ? 'max-h-96' : 'max-h-0'
                            }`}>
                              <div className="pt-2 border-t border-gray-100">
                                <p className="mb-2 font-medium text-yellow-700">A:</p>
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Tips Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 mt-8 border border-green-200 shadow-lg sm:mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-6 text-xl font-bold text-center text-gray-800 sm:text-2xl">
                  Quick Spirulina Tips
                </h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="p-5 text-center rounded-lg bg-white/80">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full">
                      <Calendar className="text-green-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">Consistency is Key</h4>
                    <p className="text-sm text-gray-600">
                      Take spirulina regularly for best results. Start with small doses and gradually increase.
                    </p>
                  </div>
                  
                  <div className="p-5 text-center rounded-lg bg-white/80">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full">
                      <Recycle className="text-green-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">Eco-Friendly Choice</h4>
                    <p className="text-sm text-gray-600">
                      Choosing spirulina supports sustainable agriculture with minimal environmental impact.
                    </p>
                  </div>
                  
                  <div className="p-5 text-center rounded-lg bg-white/80">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full">
                      <Users className="text-green-600" size={24} />
                    </div>
                    <h4 className="mb-2 font-bold text-gray-800">Suitable for Everyone</h4>
                    <p className="text-sm text-gray-600">
                      From children to athletes, spirulina adapts to different nutritional needs.
                    </p>
                  </div>
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
                  Still Have Questions?
                </h3>
                <p className="mb-4 text-lg text-yellow-100 sm:text-xl sm:mb-6">
                  Our team is here to help you with any other questions about spirulina.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <a 
                    href="/ethio-spirulina/contact" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg text-amber-700 hover:bg-yellow-100 sm:py-3 sm:px-8 hover:scale-105 sm:text-base"
                  >
                    Contact Our Experts
                  </a>
                  <a 
                    href="/ethio-spirulina/products" 
                    className="inline-block px-6 py-2 text-sm font-bold text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-3 sm:px-8 sm:text-base"
                  >
                    Shop Spirulina Products
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

export default SpirulinaFQA;