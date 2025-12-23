import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, Users, Heart, AlertTriangle, 
  Scale, Eye, Target, Lock,
  FileText, CheckCircle, Mail, Phone,
  ChevronRight, ExternalLink, Sparkles,
  ArrowRight, ShieldCheck, Users2,
  HandHeart, Scale as ScaleIcon
} from "lucide-react";

// Import reusable components
import HeroSection from "../../components/sections/HeroSection";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CallToAction from "../../components/sections/CallToAction";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
import sidebarLinksData from "../../data/sidebarLinksData";

const SafeguardingPage = () => {
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
    title: "Safeguarding at alignAfrica",
    subtitle: "Protecting the rights and dignity of every individual in our community through comprehensive safeguarding measures and survivor-centered approaches.",
    establishedYear: "Our Commitment",
    primaryCta: "Report Concern",
    secondaryCta: "View Policies",
    backgroundImage: "/images/safegarding-h.jpg",
    enableAnimations: true,
    particleCount: 15
  };

 

  const floatingCTAData = {
    text: "Report Concern",
    enableAnimations: true
  };

  const callToActionData = {
    title: "Need to Report a Safeguarding Concern?",
    description: "Your safety and well-being are our top priority. Contact our Safeguarding Team confidentially.",
    primaryButton: "Email Safeguarding Team",
    secondaryButton: "Emergency Contact",
    enableAnimations: true
  };

  // Safeguarding sections data
  const safeguardingSections = [
    {
      id: "welcome",
      title: "Our Safeguarding Commitment",
      icon: <ShieldCheck className="text-red-600" size={24} />,
      content: `Welcome to alignAfrica's commitment to safeguarding and protecting all individuals associated with our organization. We are dedicated to preventing and responding to instances of sexual harassment, exploitation, abuse, and other forms of harm, including child abuse and abuse of adults at-risk, whether perpetrated by staff, representatives, or as a result of our operations.`,
      gradient: "from-red-50 to-white"
    },
    {
      id: "commitment",
      title: "Our Safeguarding Framework",
      icon: <ScaleIcon className="text-red-600" size={24} />,
      content: `At alignAfrica, our Safeguarding Policy underscores our pledge to uphold the rights and dignity of every individual. We recognize that these violations are severe breaches of human rights, often stemming from power imbalances, particularly those that are gendered and sexualized. This commitment is supported by our Child Safeguarding Policy, Protection from Sexual Exploitation and Abuse (PSEA) Policy, and Sexual Harassment, Exploitation, and Abuse (SHEA) at Work Policy.`,
      gradient: "from-red-100 to-red-50"
    },
    {
      id: "commitments",
      title: "alignAfrica's Key Commitments",
      icon: <CheckCircle className="text-red-600" size={24} />,
      content: "We are committed to:",
      listItems: [
        "Organizational Culture: Fostering a culture that respects the rights and dignity of all individuals.",
        "Survivor-Centered Approach: Prioritizing the voices and rights of survivors in our response mechanisms.",
        "Intersectional Feminist Approach: Acknowledging the varying impacts of sexual violence on individuals from diverse ethnic, religious, racial, class, and ability backgrounds.",
        "Response to Allegations: Promptly addressing all allegations of sexual harassment, exploitation, and abuse.",
        "Integration into Work: Embedding our SHEA and Safeguarding principles into every facet of our operations."
      ],
      gradient: "from-red-200 to-red-100"
    },
    {
      id: "responsibilities",
      title: "Our Shared Responsibilities",
      icon: <Users className="text-red-600" size={24} />,
      content: "We all share a responsibility to:",
      listItems: [
        "Uphold the rights and dignity of everyone we encounter through our work.",
        "Cultivate a work environment where individuals are not only protected from harm but empowered to realize their rights and contribute as agents of positive change.",
        "Report any concerns if we suspect or witness harm. Under our survivor-centered approach, staff are not obliged to report incidents they have experienced personally and have the discretion to decide when and how to report.",
        "Integrate these policies into our practices through safer recruitment, programming, risk assessments, and other recommended protocols."
      ],
      gradient: "from-red-300 to-red-200"
    },
    {
      id: "reporting",
      title: "Reporting a Concern",
      icon: <AlertTriangle className="text-red-600" size={24} />,
      content: `If you have any inquiries regarding our safeguarding policies or need to report a safeguarding concern, please contact our global Safeguarding Team at safeguarding@alignafrica.org or call +251 933 920 666.`,
      closing: `Thank you for joining us in upholding these critical commitments to safeguarding at alignAfrica. Together, we strive to create a safe and respectful environment for all.`,
      gradient: "from-red-400 to-red-300"
    }
  ];

  // Key policy documents
  const policyDocuments = [
    {
      title: "Child Safeguarding Policy",
      description: "Comprehensive framework for protecting children in all our programs",
      icon: <Heart className="text-red-600" size={20} />,
      color: "bg-red-100"
    },
    {
      title: "PSEA Policy",
      description: "Protection from Sexual Exploitation and Abuse guidelines",
      icon: <Shield className="text-red-600" size={20} />,
      color: "bg-red-200"
    },
    {
      title: "SHEA at Work Policy",
      description: "Sexual Harassment, Exploitation and Abuse workplace standards",
      icon: <Scale className="text-red-600" size={20} />,
      color: "bg-red-300"
    }
  ];

  // Principles cards
  const safeguardingPrinciples = [
    {
      title: "Survivor-Centered",
      description: "Prioritizing the voices, needs and rights of survivors in all responses",
      icon: <Heart className="text-white" size={24} />,
      gradient: "from-red-600 to-red-700"
    },
    {
      title: "Intersectional",
      description: "Acknowledging diverse impacts based on ethnicity, religion, class, ability",
      icon: <Users className="text-white" size={24} />,
      gradient: "from-red-700 to-red-800"
    },
    {
      title: "Preventive",
      description: "Proactive measures to prevent harm before it occurs",
      icon: <Eye className="text-white" size={24} />,
      gradient: "from-red-800 to-red-900"
    },
    {
      title: "Accountable",
      description: "Transparent mechanisms for reporting and addressing concerns",
      icon: <Scale className="text-white" size={24} />,
      gradient: "from-red-900 to-red-950"
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
                  <HandHeart className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Protecting Every Individual</h2>
              </div>
              <p className="text-gray-700">
                At alignAfrica, safeguarding is not just a policy—it's a fundamental commitment woven into the fabric of our organization. We believe that every person deserves to feel safe, respected, and protected in all interactions with our work. Our comprehensive safeguarding framework ensures that we uphold the highest standards of protection for children, vulnerable adults, and all community members.
              </p>
            </motion.div>

            {/* Safeguarding Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 shadow-lg bg-gradient-to-br from-red-50 to-red-100 rounded-2xl"
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900">Our Safeguarding Principles</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {safeguardingPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 bg-gradient-to-br ${principle.gradient} rounded-xl text-white shadow-md`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/20">
                        {principle.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{principle.title}</h4>
                    </div>
                    <p className="text-sm text-white/90">{principle.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Policy Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white shadow-lg rounded-2xl"
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900">Our Safeguarding Framework</h3>
              <div className="grid gap-4">
                {policyDocuments.map((policy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className={`p-3 ${policy.color} rounded-lg`}>
                      {policy.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{policy.title}</h4>
                      <p className="text-sm text-gray-600">{policy.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Safeguarding Sections */}
            <div className="space-y-6">
              {safeguardingSections.map((section, index) => (
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

            {/* Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="overflow-hidden shadow-lg rounded-2xl">
                <img 
                  src="/images/tea-implements.jpg" 
                  alt="Safeguarding in action" 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden shadow-lg rounded-2xl">
                <img 
                  src="/images/safegurding-is-alignafrica.jpg" 
                  alt="Safe environment" 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="p-6 border border-red-200 bg-red-50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Emergency Reporting</h3>
              </div>
              <p className="mb-4 text-gray-700">
                If you are in immediate danger or need urgent assistance, please contact local emergency services first. For non-emergency safeguarding concerns, use our dedicated channels below.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:safeguarding@alignafrica.org" 
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                >
                  <Mail size={16} />
                  Email Safeguarding Team
                </a>
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg">
                  <Phone size={16} />
                  +251 933 920 666
                </div>
              </div>
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
                  {safeguardingSections.map((section) => (
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
                <h3 className="mb-4 text-lg font-bold text-white">Safeguarding Contacts</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:safeguarding@alignafrica.org" 
                    className="flex items-center gap-3 p-3 text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    <Mail size={18} />
                    <span className="text-sm">safeguarding@alignafrica.org</span>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <Phone size={18} className="text-white" />
                    <span className="text-sm text-white">+251 933 920 666</span>
                  </div>
                  <div className="p-3 text-sm rounded-lg text-white/90 bg-white/10">
                    <p className="font-semibold">Confidential Reporting:</p>
                    <p className="mt-1">All reports are treated with strict confidentiality</p>
                  </div>
                </div>
              </motion.div>

              {/* Key Resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-bold text-gray-900">Key Resources</h3>
                <div className="space-y-3">
                  {[
                    { name: "Child Protection Guidelines", icon: <Heart size={16} /> },
                    { name: "PSEA Implementation Guide", icon: <Shield size={16} /> },
                    { name: "Reporting Procedures", icon: <FileText size={16} /> },
                    { name: "Training Materials", icon: <Users size={16} /> }
                  ].map((resource, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between p-3 text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1 text-red-600 bg-red-100 rounded">
                          {resource.icon}
                        </div>
                        <span className="text-sm">{resource.name}</span>
                      </div>
                      <ExternalLink size={14} className="text-gray-400" />
                    </a>
                  ))}
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

export default SafeguardingPage;