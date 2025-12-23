import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, Shield, Target, Award,
  TrendingUp, Globe, BookOpen, CheckCircle,
  ArrowRight, Briefcase, FileText,
  BarChart, PieChart, Settings,
  UserCheck, Gavel, Building,
  Handshake, Zap, Star
} from "lucide-react";

// Import reusable components
import HeroSection from "../../components/sections/HeroSection";
import ImpactMetrics from "../../components/sections/ImpactMetrics";
import AboutOverview from "../../components/sections/AboutOverview";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import CorePillars from "../../components/sections/CorePillars";
import FloatingCTA from "../../components/ui/FloatingCTA";
import AnimatedBackground from "../../components/layout/AnimatedBackground";
// import LeadershipTeam from "../../components/sections/LeadershipTeam";
import sidebarLinksData from "../../data/sidebarLinksData";
const BoardOfDirectorsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for each component
  const heroData = {
    title: "Board of Directors",
    subtitle: "Dedicated leaders ensuring transparency, accountability, and strategic governance to advance our mission across Africa.",
    establishedYear: "5 Members",
    primaryCta: "Meet Our Board",
    secondaryCta: "View Governance",
    backgroundImage: "/images/board-of-directors-banner.png",
    enableAnimations: true,
    particleCount: 12
  };

  const impactMetricsData = {
    metrics: [
      { 
        value: "5", 
        label: "Board Members", 
        description: "Diverse expertise and leadership", 
        icon: <Users />, 
        color: "from-red-500 to-orange-500", 
        delay: 0.1 
      },
      { 
        value: "80%+", 
        label: "Field Focus", 
        description: "Resources directed to actual fieldwork", 
        icon: <Target />, 
        color: "from-orange-500 to-yellow-500", 
        delay: 0.2 
      },
      { 
        value: "100%", 
        label: "Compliance", 
        description: "Ethiopian civil code governance", 
        icon: <Shield />, 
        color: "from-yellow-500 to-red-500", 
        delay: 0.3 
      },
      { 
        value: "15+", 
        label: "Years Stewarded", 
        description: "Consistent governance excellence", 
        icon: <Award />, 
        color: "from-red-600 to-pink-500", 
        delay: 0.4 
      }
    ],
    enableAnimations: true
  };

  const aboutOverviewData = {
    title: "alignAfrica Board of Directors",
    content: "Welcome to alignAfrica, where we uphold a robust board governance framework to effectively steer our organization towards achieving its mission and goals. Comprising five distinguished members, including the Chair, Treasurer, and Vice Chair, the alignAfrica Board operates under the auspices of the Ethiopian civil code, endowed with the authority to govern the organization effectively.",
    focusItems: [
      { 
        title: "Strategic Governance", 
        icon: <Gavel />, 
        content: "The Board formulates policies, reviews partnerships, and ensures strategic alignment with our mission and objectives." 
      },
      { 
        title: "Financial Stewardship", 
        icon: <BarChart />, 
        content: "Exercising rigorous oversight over resource utilization, including donations and grants, adhering to our mandate and standards." 
      }
    ],
    enableAnimations: true
  };

  const governancePrinciplesData = {
    title: "Our Governance Principles",
    description: "The core principles that guide our Board's operations and decision-making",
    pillars: [
      {
        title: "Transparency",
        description: "Ensuring open communication, regular updates, and full disclosure of organizational activities and financials to all stakeholders.",
        icon: <Shield className="text-red-600" size={24} />,
        gradient: "from-red-50 to-white",
        stats: "Full Disclosure",
        progress: 95
      },
      {
        title: "Accountability",
        description: "Holding ourselves accountable for organizational performance, financial stewardship, and adherence to our mission and values.",
        icon: <CheckCircle className="text-red-600" size={24} />,
        gradient: "from-red-100 to-red-50",
        stats: "Rigorous Oversight",
        progress: 90
      },
      {
        title: "Strategic Leadership",
        description: "Providing strategic guidance and oversight to ensure the organization operates effectively and achieves its mission.",
        icon: <Target className="text-red-600" size={24} />,
        gradient: "from-red-200 to-red-100",
        stats: "Mission Alignment",
        progress: 92
      },
      {
        title: "Stakeholder Engagement",
        description: "Acting as ambassadors and advocates for the organization within the community and among stakeholders.",
        icon: <Users className="text-red-600" size={24} />,
        gradient: "from-red-300 to-red-200",
        stats: "Community Representation",
        progress: 88
      }
    ],
    enableAnimations: true
  };

 

  const floatingCTAData = {
    text: "Learn About Governance",
    enableAnimations: true
  };

  // Board Responsibilities Data
  const responsibilitiesData = [
    {
      title: "Policy Formulation",
      description: "The Board formulates and approves policies and guidelines that shape alignAfrica's operational strategies and initiatives.",
      icon: "📋",
      items: ["Strategic planning", "Operational guidelines", "Governance policies"]
    },
    {
      title: "Partnership Oversight",
      description: "Meticulously review and approve partnership agreements with donors and stakeholders to ensure alignment with our mission.",
      icon: "🤝",
      items: ["Donor agreements", "Stakeholder partnerships", "Collaboration frameworks"]
    },
    {
      title: "Financial Stewardship",
      description: "Exercising rigorous oversight over the proper utilization of resources, including donations and grants.",
      icon: "💰",
      items: ["Budget approval", "Financial audits", "Resource allocation"]
    },
    {
      title: "Leadership Oversight",
      description: "Appoint and diligently evaluate executive leadership and auditors, safeguarding organizational integrity.",
      icon: "👥",
      items: ["Executive evaluation", "Auditor selection", "Performance monitoring"]
    },
    {
      title: "Stakeholder Collaboration",
      description: "Actively collaborate with governments, donors, foundations, and the private sector to leverage resources.",
      icon: "🌍",
      items: ["Government relations", "Donor engagement", "Private sector partnerships"]
    },
    {
      title: "Strategic Governance",
      description: "Continuously monitoring and assessing compliance with organizational strategies, policies, and standards.",
      icon: "🎯",
      items: ["Compliance monitoring", "Strategy assessment", "Impact evaluation"]
    }
  ];

  // Board Guidelines Data
  const guidelinesData = [
    {
      category: "Purpose and Role",
      items: [
        "Mission Alignment: Ensure all actions align with the organization's mission, vision, and values.",
        "Governance Oversight: Provide strategic guidance and oversight for effective and ethical operations.",
        "Financial Stewardship: Ensure financial resources are managed prudently and transparently.",
        "Risk Management: Identify and mitigate risks affecting reputation, finances, or operations."
      ]
    },
    {
      category: "Composition and Structure",
      items: [
        "Diversity: Seek diverse perspectives and skills contributing to organizational goals.",
        "Optimal Size: Maintain appropriate board size for effective decision-making.",
        "Term Limits: Establish term limits to promote continuity and fresh perspectives.",
        "Committee Formation: Create specialized committees for focused governance areas."
      ]
    },
    {
      category: "Meetings and Communication",
      items: [
        "Regular Meetings: Hold scheduled board meetings to review performance and strategies.",
        "Transparency: Ensure open communication with stakeholders through regular updates.",
        "Confidentiality: Maintain confidentiality of sensitive information discussed.",
        "Agenda Setting: Develop comprehensive meeting agendas addressing critical issues."
      ]
    },
    {
      category: "Responsibilities and Evaluation",
      items: [
        "Policy Development: Develop and approve organizational policies and procedures.",
        "Fundraising Support: Support fundraising efforts and contribute according to means.",
        "Legal Compliance: Ensure compliance with all relevant laws and ethical standards.",
        "Board Assessment: Conduct regular assessments of board performance and effectiveness."
      ]
    }
  ];

  // Leadership Team Component
  const BoardMembersSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Board Leadership</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Our distinguished board members bring diverse expertise and leadership to guide our organization
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Chair",
            role: "Board Chairperson",
            description: "Leads board meetings, sets strategic direction, and represents the organization at the highest level.",
            expertise: ["Strategic Planning", "Governance", "Leadership"]
          },
          {
            name: "Vice Chair",
            role: "Vice Chairperson",
            description: "Supports the Chair, assumes duties when needed, and focuses on specific strategic initiatives.",
            expertise: ["Operations", "Partnerships", "Committee Leadership"]
          },
          {
            name: "Treasurer",
            role: "Financial Steward",
            description: "Oversees financial management, budgeting, and ensures financial transparency and accountability.",
            expertise: ["Finance", "Budgeting", "Financial Compliance"]
          },
          {
            name: "Secretary",
            role: "Governance Officer",
            description: "Maintains board records, ensures compliance with bylaws, and facilitates board communications.",
            expertise: ["Legal Compliance", "Documentation", "Governance"]
          },
          {
            name: "Member at Large",
            role: "Strategic Advisor",
            description: "Provides expertise in specific areas and represents diverse perspectives in decision-making.",
            expertise: ["Program Development", "Community Engagement", "Specialized Expertise"]
          }
        ].map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50">
                <Briefcase className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="font-medium text-red-600">{member.role}</p>
              </div>
            </div>
            <p className="mb-4 text-gray-600">{member.description}</p>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium text-red-700 rounded-full bg-red-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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

            {/* Board Members Section */}
            <BoardMembersSection />

            {/* Responsibilities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Board Responsibilities</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                  Key areas where our Board provides oversight and strategic guidance
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {responsibilitiesData.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg"
                  >
                    <div className="mb-4 text-3xl">{responsibility.icon}</div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{responsibility.title}</h3>
                    <p className="mb-4 text-gray-600">{responsibility.description}</p>
                    <ul className="space-y-2">
                      {responsibility.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle size={14} className="flex-shrink-0 mt-1 text-green-500" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Governance Principles */}
            <CorePillars {...governancePrinciplesData} />

            {/* Guidelines Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="p-8 border border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-2xl">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">Board Guidelines</h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Comprehensive framework guiding our Board's operations and decision-making
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {guidelinesData.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <FileText className="text-red-600" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{section.category}</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Final Conclusion Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-2xl">
                <div className="max-w-4xl mx-auto">
                  <h2 className="mb-6 text-3xl font-bold">Our Commitment to Governance Excellence</h2>
                  <div className="mb-6 space-y-4">
                    <p className="text-lg text-red-100">
                      alignAfrica's commitment to a board-led governance structure ensures decisions are made with meticulous care and foresight, underscoring our steadfast dedication to transparency, accountability, and impactful leadership in advancing humanitarian and development efforts.
                    </p>
                    <p className="text-lg text-red-100">
                      Through this framework, alignAfrica adeptly navigates challenges and drives sustainable change across Africa.
                    </p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-xl">
                    <p className="text-lg font-semibold text-center">
                      Join alignAfrica as we continue to make a meaningful impact and strive for excellence in governance and humanitarian service.
                    </p>
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

              {/* Governance Structure Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Governance Structure</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Building size={16} className="mt-1 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Ethiopian Civil Code</p>
                      <p className="text-sm text-gray-600">Legal governance framework</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <UserCheck size={16} className="mt-1 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">5 Board Members</p>
                      <p className="text-sm text-gray-600">Including Chair & Treasurer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield size={16} className="mt-1 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Minimum 3 Members</p>
                      <p className="text-sm text-gray-600">Operational quorum</p>
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
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Governance Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <FileText size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Bylaws & Charter</p>
                      <p className="text-sm text-gray-600">Complete governance document</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <PieChart size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Financial Reports</p>
                      <p className="text-sm text-gray-600">Annual financial statements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <BarChart size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Meeting Minutes</p>
                      <p className="text-sm text-gray-600">Board meeting summaries</p>
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

export default BoardOfDirectorsPage;