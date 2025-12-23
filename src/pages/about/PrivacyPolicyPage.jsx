import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, FileText, Lock, Eye, Globe, 
  Users, Database, Mail, Phone, MessageSquare,
  ChevronRight, CheckCircle, AlertCircle,
  ShieldCheck, RefreshCw, ExternalLink,
  ArrowRight, Sparkles
} from "lucide-react";

// Import reusable components
import HeroSection from "../../components/sections/HeroSection";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CallToAction from "../../components/sections/CallToAction";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import sidebarLinksData from "../../data/sidebarLinksData";

const PrivacyPolicyPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for components
  const heroData = {
    title: "alignAfrica Privacy Policy",
    subtitle: "Protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data.",
    establishedYear: "Effective 2024",
    primaryCta: "Read Policy",
    secondaryCta: "Contact Privacy Team",
    backgroundImage: "/images/privacypolicy.jpg",
    enableAnimations: true,
    particleCount: 15
  };

 
  const floatingCTAData = {
    text: "Contact Privacy Team",
    enableAnimations: true
  };

  const callToActionData = {
    title: "Have Privacy Questions?",
    description: "Contact our privacy team for any questions about your personal data or our privacy practices.",
    primaryButton: "Email Privacy Team",
    secondaryButton: "Download Policy PDF",
    enableAnimations: true
  };

  // Privacy policy sections data
  const policySections = [
    {
      id: "welcome",
      title: "Welcome",
      icon: <ShieldCheck className="text-red-600" size={24} />,
      content: `Welcome to the Privacy Policy of alignAfrica ("alignAfrica"). At alignAfrica, we are committed to safeguarding your privacy and ensuring the security of any personal information you provide to us through our various communication channels and websites. This Privacy Policy outlines how we collect, use, share, and protect your personal information.`,
      gradient: "from-red-50 to-white"
    },
    {
      id: "scope",
      title: "Scope of This Privacy Policy",
      icon: <Globe className="text-red-600" size={24} />,
      content: `This Privacy Policy applies to the website www.alignafrica.org, online portals, electronic forms, social media channels operated by alignAfrica, and any other means through which we collect personal information from you, including interactions via phone or email. By accessing our Sites on any device or interacting with alignAfrica, you agree to the terms outlined in this Privacy Policy.`,
      gradient: "from-red-100 to-red-50"
    },
    {
      id: "collection",
      title: "Information We Collect",
      icon: <Database className="text-red-600" size={24} />,
      content: "",
      subsections: [
        {
          title: "Personal Information",
          content: "We collect personal information that you voluntarily provide to us, such as your name, contact details, financial information for donations, and other information necessary for interacting with alignAfrica. This information helps us provide personalized support, process donations, and engage with our supporters effectively."
        },
        {
          title: "Automated Data Collection",
          content: "When you visit our Sites, we may collect certain information automatically through technologies like cookies and web beacons. This includes information about your device, IP address, website usage patterns, and geographic location, which helps us improve our services and personalize your experience."
        }
      ],
      gradient: "from-red-200 to-red-100"
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <Eye className="text-red-600" size={24} />,
      content: "We use the information we collect for various purposes, including:",
      listItems: [
        "Providing personalized support and communication",
        "Processing donations and issuing receipts",
        "Engaging with individuals interested in supporting alignAfrica",
        "Managing your account on our Sites",
        "Protecting against fraud and managing risk",
        "Complying with legal obligations and industry standards"
      ],
      gradient: "from-red-300 to-red-200"
    },
    {
      id: "sharing",
      title: "Sharing Your Information",
      icon: <Users className="text-red-600" size={24} />,
      content: `We do not sell your personal information. We may share your information with trusted third parties, including service providers who assist us in delivering our programs and services. We ensure that these parties use your information only as necessary to perform their services for alignAfrica or as required by law.`,
      gradient: "from-red-400 to-red-300"
    },
    {
      id: "choices",
      title: "Your Choices and Rights",
      icon: <CheckCircle className="text-red-600" size={24} />,
      content: "We provide you with choices regarding the collection, use, and sharing of your personal information:",
      listItems: [
        "You can opt-out of receiving marketing emails by using the unsubscribe link in our emails or adjusting your email preferences on our Sites.",
        "You can manage your cookie preferences through your browser settings.",
        "Depending on your location, you may have additional rights to access, correct, or delete your personal information. Please contact us for more information."
      ],
      gradient: "from-red-500 to-red-400"
    },
    {
      id: "security",
      title: "Security of Your Information",
      icon: <Lock className="text-red-600" size={24} />,
      content: `alignAfrica maintains technical, administrative, and physical safeguards to protect the personal information we collect against unauthorized access, disclosure, or misuse. While we strive to maintain the security of your information, please note that no method of transmission over the Internet or electronic storage is completely secure.`,
      gradient: "from-red-600 to-red-500"
    },
    {
      id: "updates",
      title: "Updates to This Privacy Policy",
      icon: <RefreshCw className="text-red-600" size={24} />,
      content: `We may update this Privacy Policy periodically to reflect changes in our practices and legal requirements. We encourage you to review this Policy regularly for any updates. Significant changes will be communicated through our websites or other prominent means.`,
      gradient: "from-red-700 to-red-600"
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Mail className="text-red-600" size={24} />,
      content: `If you have questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at privacy@alignafrica.org or Phone Number: +251933920666 write to us via WhatsApp or Telegram.`,
      closing: `Thank you for trusting alignAfrica with your personal information. We are committed to protecting your privacy and ensuring a secure experience when you interact with us.`,
      gradient: "from-red-800 to-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Animated Background */}
      <AnimatedBackground enableAnimations={true} />

      {/* Hero Section */}
      <HeroSection {...heroData} />

      {/* Main Content Area */}
      <div className="container px-3 pt-8 mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Content - 3/4 */}
          <div className="space-y-8 lg:w-3/4">
            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white shadow-lg rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Your Privacy</h2>
              </div>
              <p className="text-gray-700">
                At alignAfrica, we believe that privacy is a fundamental right. This policy outlines our commitment to protecting your personal information and being transparent about how we handle your data. We value the trust you place in us and are dedicated to maintaining the highest standards of data protection.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-6">
              {policySections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 bg-gradient-to-br ${section.gradient} rounded-2xl shadow-lg`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white shadow-md rounded-xl">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                      {activeSection === section.id && (
                        <span className="inline-block px-2 py-1 mt-1 text-xs font-semibold text-white bg-red-600 rounded-full">
                          Currently Viewing
                        </span>
                      )}
                    </div>
                  </div>

                  {section.content && section.content.length > 0 && (
                    <p className="mb-4 text-gray-700">{section.content}</p>
                  )}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="pl-4 border-l-2 border-red-300">
                          <h4 className="mb-2 text-lg font-semibold text-gray-900">{subsection.title}</h4>
                          <p className="text-gray-700">{subsection.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.listItems && (
                    <ul className="mb-4 space-y-2">
                      {section.listItems.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="flex-shrink-0 mt-1 text-green-600" size={18} />
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {section.closing && (
                    <div className="p-4 mt-4 rounded-lg bg-white/50">
                      <p className="text-gray-700">{section.closing}</p>
                    </div>
                  )}
                </motion.section>
              ))}
            </div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 border border-yellow-200 bg-yellow-50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-yellow-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Important Notice</h3>
              </div>
              <p className="text-gray-700">
                This privacy policy is subject to change. We recommend checking this page periodically for updates. 
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </motion.div>

            {/* Call to Action Section */}
            <CallToAction {...callToActionData} />
          </div>

          {/* Right Sidebar - 1/4 */}
          <div className="lg:w-1/4">
            <div className="sticky space-y-6 top-16">
              {/* Quick Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-bold text-gray-900">Quick Navigation</h3>
                <div className="space-y-2">
                  {policySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-red-100 text-red-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1 rounded ${
                          activeSection === section.id ? 'bg-red-200' : 'bg-gray-200'
                        }`}>
                          {React.cloneElement(section.icon, { size: 16 })}
                        </div>
                        <span className="text-sm font-medium">{section.title}</span>
                      </div>
                      <ChevronRight size={16} className={activeSection === section.id ? 'text-red-600' : 'text-gray-400'} />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 shadow-lg bg-gradient-to-br from-red-600 to-red-700 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-bold text-white">Contact Privacy Team</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:privacy@alignafrica.org" 
                    className="flex items-center gap-3 p-3 text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    <Mail size={18} />
                    <span className="text-sm">privacy@alignafrica.org</span>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <Phone size={18} className="text-white" />
                    <span className="text-sm text-white">+251 933 920 666</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <MessageSquare size={18} className="text-white" />
                    <span className="text-sm text-white">WhatsApp/Telegram</span>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar Navigation */}
              <SidebarNavigation
                title="About alignAfrica"
                description="Explore our organization"
                links={sidebarLinksData}
                enableAnimations={true}
              />
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

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-red-600 to-red-700"
          animate={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;