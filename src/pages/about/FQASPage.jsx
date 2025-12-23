import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, MessageSquare, Users, Globe,
  Mail, Phone, MapPin, Heart,
  ArrowRight, ChevronDown, ChevronUp,
  Shield, Target, BookOpen, Award,
  Zap, Star, Briefcase, Download,
  Share2, Clock, CheckCircle
} from "lucide-react";

// Import reusable components with updated paths
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import sidebarLinksData from "../../data/sidebarLinksData";

const FQASPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for each component
  const heroData = {
    title: "Frequently Asked Questions & Support",
    subtitle: "Find answers to common questions, learn how to get involved, and discover ways to support our mission of empowering communities across Africa.",
    establishedYear: "Ask Us Anything",
    primaryCta: "Contact Support",
    secondaryCta: "Download FAQ",
    backgroundImage: "/images/history-banner.jpg",
    enableAnimations: true,
    particleCount: 12
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "10+", 
        label: "Years of Impact", 
        description: "Dedicated to social justice", 
        icon: <Clock />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "2", 
        label: "Countries", 
        description: "Ethiopia & South Sudan", 
        icon: <Globe />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "24/7", 
        label: "Support Available", 
        description: "For queries & feedback", 
        icon: <MessageSquare />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "100%", 
        label: "Independent", 
        description: "No political affiliations", 
        icon: <Shield />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "Welcome to alignAfrica",
    content: "alignAfrica is a non-profit organization dedicated to achieving social justice, gender equality, and poverty eradication. With a decade of impactful work, we focus on advocating for women's rights, justice, and poverty alleviation in Ethiopia. We stand in solidarity with advocates for justice, campaigning alongside a robust network to hold decision-makers accountable.",
    focusItems: [
      { 
        title: "Our Mission", 
        icon: <Target />, 
        content: "Dedicated to social justice, gender equality, and poverty eradication through advocacy and community empowerment." 
      },
      { 
        title: "Our Values", 
        icon: <Heart />, 
        content: "Operating independently without religious or political affiliations, focused solely on our mission and values." 
      }
    ],
    enableAnimations: true
  };

  const engagementPrinciplesData = {
    title: "Our Engagement Principles",
    description: "Core principles that guide how we interact with supporters, volunteers, and communities",
    pillars: [
      {
        title: "Transparency",
        description: "Open communication about our work, finances, and impact, ensuring donors and supporters are fully informed.",
        icon: <Shield className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "Open Communication",
        progress: 95
      },
      {
        title: "Accessibility",
        description: "Making it easy for anyone to get involved, whether through donations, volunteering, or advocacy.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Easy Engagement",
        progress: 90
      },
      {
        title: "Responsiveness",
        description: "Prompt responses to inquiries, feedback, and support requests from all stakeholders.",
        icon: <MessageSquare className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Quick Support",
        progress: 88
      },
      {
        title: "Impact Focus",
        description: "Ensuring every contribution, whether time or money, creates meaningful change in communities.",
        icon: <Target className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Meaningful Change",
        progress: 92
      }
    ],
    enableAnimations: true
  };

 

  const floatingCTAData = {
    text: "Get Support",
    enableAnimations: true
  };

  // FAQ Data
  const faqData = [
    {
      question: "What is alignAfrica?",
      answer: "alignAfrica is a non-profit organization dedicated to achieving social justice, gender equality, and poverty eradication. With a decade of impactful work, alignAfrica focuses on advocating for women's rights, justice, and poverty alleviation in Ethiopia."
    },
    {
      question: "Why campaign in Ethiopia?",
      answer: "Ethiopian governmental and corporate policies often contribute significantly to global challenges faced by women. alignAfrica stands in solidarity with advocates for justice, campaigning alongside a robust network to hold decision-makers accountable and ensure Ethiopia upholds women's rights globally."
    },
    {
      question: "What are alignAfrica's political and religious affiliations?",
      answer: "alignAfrica operates independently, without affiliation to any religious or political entities. Our commitment to autonomy ensures our actions remain focused solely on our mission and values."
    },
    {
      question: "Where does alignAfrica operate?",
      answer: "alignAfrica operates in Ethiopia and South Sudan, striving to empower marginalized women affected by poverty and exclusion. In Ethiopia, we collaborate with local activists to champion women's rights and hold authorities accountable."
    },
    {
      question: "What is alignAfrica's Code of Conduct?",
      answer: "In addition to our internal Code of Conduct, alignAfrica adheres to the voluntary guidelines of the Consortium of Christian Relief and Development Association (CCRDA), Global Giving, and Giving Tuesday."
    },
    {
      question: "How can I provide feedback or make complaints?",
      answer: "alignAfrica values feedback as integral to our continuous improvement. To lodge a complaint or provide feedback, please contact us at: For general complaints: nancychebet@gmail.com; For Executive Director-related issues: alignafrica@gmail.com; Postal complaints can be sent to our Board Chair at alignafrica@gmail.com"
    },
    {
      question: "What volunteering opportunities are available?",
      answer: "alignAfrica welcomes passionate volunteers to support our efforts in various capacities. Whether at our headquarters in Addis Ababa or remotely, volunteering with alignAfrica offers enriching experiences in driving positive change."
    },
    {
      question: "Are there internship opportunities?",
      answer: "alignAfrica occasionally offers internship opportunities aligned with educational requirements. These internships provide valuable hands-on experience in our organizational mission."
    },
    {
      question: "How can I support alignAfrica through donations?",
      answer: "Support alignAfrica's impactful work by making a regular donation. Your contributions empower women, foster community development, and advance global justice initiatives."
    },
    {
      question: "How do I contact alignAfrica?",
      answer: "For inquiries or to learn more about how you can support alignAfrica's mission, please visit our website or contact our Supporter Care team at +251933920666 or alignafrica@gmail.com"
    }
  ];

  // Contact Information
  const contactInfo = {
    general: "nancychebet@gmail.com",
    executive: "alignafrica@gmail.com",
    postal: "alignafrica@gmail.com (Attn: Board Chair)",
    phone: "+251 933 920 666",
    address: "P.O.Box: 102030, Addis Ababa, Ethiopia"
  };

  // Opportunities Data
  const opportunitiesData = [
    {
      title: "Volunteering",
      description: "Join our passionate volunteers in various capacities, either at our headquarters or remotely.",
      benefits: ["Hands-on experience", "Skill development", "Community impact", "Networking"],
      icon: "🤝"
    },
    {
      title: "Internships",
      description: "Gain valuable hands-on experience through internship opportunities aligned with educational requirements.",
      benefits: ["Professional growth", "Mentorship", "Real-world projects", "Career development"],
      icon: "🎓"
    },
    {
      title: "Donations",
      description: "Support our impactful work through regular donations that empower women and transform communities.",
      benefits: ["Tax-deductible", "Regular updates", "Impact reports", "Donor recognition"],
      icon: "💝"
    },
    {
      title: "Advocacy",
      description: "Become an advocate for social justice, gender equality, and women's rights in your community.",
      benefits: ["Awareness building", "Policy influence", "Community leadership", "Global network"],
      icon: "📢"
    }
  ];

  // FAQ Accordion Component
  const FAQAccordion = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Find quick answers to common questions about our work, mission, and how you can get involved
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full p-6 text-left transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <HelpCircle className="text-red-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                {openFaq === index ? (
                  <ChevronUp className="text-gray-400" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Animated Background */}
      <AnimatedBackground enableAnimations={true} />

      {/* Hero Section */}
      <HeroSection {...heroData} />

      {/* Impact Metrics Section */}
      <ImpactMetrics {...impactMetricsData} />

      {/* Main Content Area */}
      <div className="container px-3 pt-4 mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Content - 3/4 */}
          <div className="space-y-6 lg:w-3/4">
            {/* About Overview Section */}
            <AboutOverview {...aboutOverviewData} />

            {/* FAQ Accordion */}
            <FAQAccordion />

            {/* Engagement Principles */}
            <CorePillars {...engagementPrinciplesData} />

            {/* Opportunities Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Get Involved</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Multiple ways to support our mission and make a meaningful difference
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {opportunitiesData.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="mb-4 text-3xl">{opportunity.icon}</div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                    <p className="mb-4 text-gray-600">{opportunity.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Benefits:</h4>
                      <ul className="space-y-1">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle size={14} className="text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Feedback Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 border border-blue-100 bg-gradient-to-r from-blue-50 to-white rounded-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-100 rounded-xl">
                    <MessageSquare className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Contact & Feedback</h2>
                    <p className="text-lg text-gray-600">We value your input and are here to help</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Mail className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Email Contacts</h3>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            <span className="font-medium">General Inquiries:</span> {contactInfo.general}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Executive Director:</span> {contactInfo.executive}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Postal Contact:</span> {contactInfo.postal}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Phone className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Phone & Address</h3>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            <span className="font-medium">Phone:</span> {contactInfo.phone}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Address:</span> {contactInfo.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Shield className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Feedback Process</h3>
                        <p className="mb-4 text-gray-600">
                          alignAfrica values feedback as integral to our continuous improvement. We commit to:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-purple-500" />
                            <span className="text-gray-700">Acknowledge receipt within 48 hours</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-purple-500" />
                            <span className="text-gray-700">Investigate thoroughly and fairly</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-purple-500" />
                            <span className="text-gray-700">Provide resolution updates</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-purple-500" />
                            <span className="text-gray-700">Maintain confidentiality</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-2xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="mb-6 text-3xl font-bold">Ready to Make a Difference?</h2>
                  <p className="mb-8 text-lg text-red-100">
                    Join us in making a difference—empowering women, transforming communities, and advancing justice worldwide. Together, we can create a more equitable future.
                  </p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Heart className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Support Our Work</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Make a donation to empower women and transform communities.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Donate Now
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <Users className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Volunteer With Us</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Join our team of passionate volunteers making an impact.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Volunteer Now
                      </button>
                    </div>
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <MessageSquare className="text-white" size={24} />
                        <h3 className="text-xl font-semibold">Get In Touch</h3>
                      </div>
                      <p className="mb-4 text-red-100">
                        Have questions? Contact our support team for assistance.
                      </p>
                      <button className="w-full py-2 font-semibold text-red-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - 1/4 width */}
          <div className="lg:w-1/4">
            <div className="sticky space-y-4 top-16">
              {/* Sidebar Navigation */}
              <SidebarNavigation
                title="About alignAfrica"
                description="Explore our organization"
                links={sidebarLinksData}
                enableAnimations={true}
              />

              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-green-100 shadow-sm bg-gradient-to-br from-green-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Phone size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone Support</p>
                      <p className="text-sm text-gray-600">+251 933 920 666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-sm text-gray-600">alignafrica@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-sm text-gray-600">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Resources Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Support Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <Download size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">FAQ PDF</p>
                      <p className="text-sm text-gray-600">Download complete FAQ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <BookOpen size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Support Guide</p>
                      <p className="text-sm text-gray-600">How to get involved</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <Share2 size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Share</p>
                      <p className="text-sm text-gray-600">Help others find us</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <FloatingCTA {...floatingCTAData} />

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 top-4 right-4"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 text-sm font-semibold text-white transition-shadow rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:shadow-xl"
        >
          Back to Top
        </button>
      </motion.div>
    </div>
  );
};

export default FQASPage;