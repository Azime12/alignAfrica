import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Target, 
  Users, 
  Droplets, 
  BookOpen, 
  Home, 
  Shield, 
  Gift, 
  School, 
  Briefcase,
  CheckCircle,
  DollarSign,
  Award,
  Globe,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Cross,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Sparkles,
  Building,
  Umbrella,
  Book
} from "lucide-react";
import HeroSection from "../components/sections/HeroSection";

// Donation Program Card
const DonationProgramCard = ({ program, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(program.id)}
      className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
        isSelected 
          ? 'border-red-500 bg-gradient-to-br from-red-50 to-white shadow-lg' 
          : 'border-gray-200 bg-white hover:border-red-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${isSelected ? 'bg-red-100' : 'bg-gray-100'}`}>
          {program.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
            {isSelected && (
              <div className="p-1 bg-green-100 rounded-full">
                <CheckCircle size={16} className="text-green-600" />
              </div>
            )}
          </div>
          <p className="text-gray-600 mb-3">{program.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Goal: {program.goal}</span>
            <span className="text-sm font-medium text-red-600">
              {isSelected ? "Selected" : "Select Program"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Donation Amount Card
const DonationAmountCard = ({ amount, items, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(amount)}
      className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
        isSelected 
          ? 'border-red-500 bg-gradient-to-br from-red-50 to-white shadow-md' 
          : 'border-gray-200 bg-white hover:border-red-200'
      }`}
    >
      <div className="text-center">
        <div className={`inline-block px-4 py-2 mb-3 rounded-lg ${
          isSelected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-900'
        }`}>
          <span className="text-xl font-bold">{amount}</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Big Impact Project Card
const ImpactProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg">
          {project.icon}
        </div>
        <div>
          <div className="inline-flex items-center px-3 py-1 mb-2 bg-gray-100 rounded-full">
            <span className="text-sm font-semibold text-gray-900">{project.amount}</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Transparency Stat Card
const StatCard = ({ stat }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-red-50 to-white rounded-2xl">
        <stat.icon className="text-red-600" size={28} />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
      <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
      <p className="text-sm text-gray-600">{stat.description}</p>
    </motion.div>
  );
};

const DonatePage = () => {
  const [selectedProgram, setSelectedProgram] = useState("children");
  const [selectedAmount, setSelectedAmount] = useState("£100");

  const heroData = {
    title: "Make a Lasting Impact",
    subtitle: "Your donation transforms lives and builds sustainable futures in Ethiopia. Join us in creating positive change.",
    backgroundImage: "/images/donate-banner.png",
    primaryCta: { 
      text: "Donate Now", 
      link: "#donation-options" 
    },
    secondaryCta: { 
      text: "View Impact Stories", 
      link: "/stories" 
    },
  };

  // Donation Programs Data
  const donationPrograms = [
    {
      id: "children",
      title: "Educational Materials for Children Affected by War & Drought",
      description: "Provide essential school supplies, educational materials, and psychological support to children impacted by conflict and drought conditions in Ethiopia.",
      goal: "£50,000",
      icon: <BookOpen className="w-6 h-6 text-red-600" />,
      link: "https://www.globalgiving.org/projects/educational-material-support-for-children-waranddrought/"
    },
    {
      id: "drought",
      title: "Emergency Water Relief for Drought Victims",
      description: "Construct and rehabilitate water points to provide clean drinking water for 200,000 people affected by severe drought conditions in Ethiopia.",
      goal: "£100,000",
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      link: "https://www.globalgiving.org/projects/rescue-drought-victims-by-digging-potable-water/"
    }
  ];

  // Donation Amounts Data
  const donationAmounts = [
    { amount: "£5", items: ["School supplies for 1 child", "Hygiene kit for village child"] },
    { amount: "£10", items: ["Train a water pump mechanic", "HIV/AIDS awareness materials"] },
    { amount: "£50", items: ["Monthly nutrition fair supplies"] },
    { amount: "£100", items: ["Mosquito nets for 3 children", "Vocational school tuition"] },
    { amount: "£300", items: ["Health insurance for 25 orphans"] },
    { amount: "£500", items: ["Clean water access for a village", "Girls' education support"] },
    { amount: "£1,000", items: ["Community dam construction", "Water for 200 people for 1 year"] },
    { amount: "Other", items: ["Custom donation amount", "Contact us for large projects"] }
  ];

  // Big Impact Projects Data
  const bigImpactProjects = [
    { amount: "£2,000", title: "School Rehabilitation", description: "Renovate community schools and provide comprehensive support including food, uniforms, and tuition for vulnerable children.", icon: <School className="w-6 h-6 text-green-600" /> },
    { amount: "£500", title: "Women's Empowerment", description: "Provide micro-loans and business training for women to start sustainable small businesses and achieve financial independence.", icon: <Briefcase className="w-6 h-6 text-purple-600" /> },
    { amount: "£2,000", title: "Youth & Women Training", description: "Business development training for 50 youth and women to create sustainable income-generating activities.", icon: <Users className="w-6 h-6 text-blue-600" /> },
    { amount: "£3,000", title: "Medical Equipment", description: "Supply rural health centers with essential medical equipment and life-saving medicines.", icon: <Cross className="w-6 h-6 text-red-600" /> },
    { amount: "£4,000", title: "Build a School", description: "Construct a new school facility to provide quality education and brighter futures for young people.", icon: <GraduationCap className="w-6 h-6 text-orange-600" /> },
    { amount: "£5,000+", title: "Technical College", description: "Establish technical training centers providing trade certification for sustainable employment opportunities.", icon: <Building className="w-6 h-6 text-indigo-600" /> }
  ];

  // Transparency Stats
  const transparencyStats = [
    { value: "78%", label: "Direct to Programs", icon: Target, description: "Goes directly to community projects and beneficiaries" },
    { value: "15%", label: "Administration", icon: Briefcase, description: "Operational and management costs" },
    { value: "7%", label: "Fundraising", icon: Heart, description: "Campaign and donor acquisition expenses" }
  ];

  // Payment Methods
  const paymentMethods = [
    { 
      title: "Online Donation", 
      description: "Secure donation through GlobalGiving platform",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      details: "Processed with 256-bit SSL encryption"
    },
    { 
      title: "Bank Transfer", 
      description: "Direct transfer to our bank account",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      details: "Contact finance@alignafrica.org for details"
    },
    { 
      title: "Mail a Check", 
      description: "Send check to our office address",
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      details: "alignAfrica, P.O. Box 102030, Addis Ababa, Ethiopia"
    }
  ];

  // Get selected program data
  const selectedProgramData = donationPrograms.find(p => p.id === selectedProgram);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-green-500" >
<HeroSection {...heroData} />
      </div>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 text-red-300">
                <Sparkles size={32} />
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic leading-relaxed">
                "One of the most important things you can do on this earth is to let people know they are not alone."
              </blockquote>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 text-red-300">
                <Sparkles size={32} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-green-100 rounded-full">
              <ShieldCheck size={18} className="text-green-600" />
              <span className="text-sm font-semibold text-green-700">Financial Transparency</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Where Your Money Goes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We ensure maximum impact with transparent financial management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {transparencyStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Choose Your Impact Area</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the program you want to support and see how your donation makes a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {donationPrograms.map((program) => (
              <DonationProgramCard
                key={program.id}
                program={program}
                isSelected={selectedProgram === program.id}
                onSelect={setSelectedProgram}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="donation-options" className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Select Your Donation Amount</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what each donation amount can provide for communities in need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {donationAmounts.map((amount, index) => (
              <DonationAmountCard
                key={amount.amount}
                {...amount}
                isSelected={selectedAmount === amount.amount}
                onSelect={setSelectedAmount}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-12 p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white rounded-full">
                <Heart size={16} className="text-red-600" />
                <span className="font-medium text-gray-900">Your Selected Donation</span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-600">Amount:</span>
                <div className="text-4xl font-bold text-red-600">{selectedAmount}</div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">This donation will provide:</h4>
                <div className="space-y-2">
                  {donationAmounts.find(a => a.amount === selectedAmount)?.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Big Impact Projects Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-100 rounded-full">
              <Award size={18} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Major Impact Projects</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Transformative Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Larger donations enable comprehensive projects that create lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bigImpactProjects.map((project, index) => (
              <ImpactProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation Action Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl">
                    <HeartHandshake className="text-white" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to Make Your Donation?</h2>
                  <p className="text-lg text-gray-600">
                    You've selected: <span className="font-semibold text-red-600">{selectedProgramData?.title}</span>
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-lg font-medium text-gray-900">Selected Program:</span>
                      <p className="text-gray-700">{selectedProgramData?.title}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-medium text-gray-900">Donation Amount:</span>
                      <div className="text-3xl font-bold text-red-600">{selectedAmount}</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Your Impact Summary</h4>
                    <ul className="space-y-2">
                      {donationAmounts.find(a => a.amount === selectedAmount)?.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href={selectedProgramData?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="/images/donate-button.png" 
                        alt="Donate Now"
                        className="w-full max-w-sm hover:opacity-90 transition-opacity"
                      />
                    </a>
                  </motion.div>
                  <p className="mt-4 text-sm text-gray-600">
                    Secure donation processed via GlobalGiving • 256-bit SSL encryption
                  </p>
                </div>
              </div>

              <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <ShieldCheck size={16} className="text-green-600" />
                    <span className="text-sm">Privacy protected • Secure payment</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Questions? Email: <a href="mailto:donations@alignafrica.org" className="text-red-600 hover:text-red-800">donations@alignafrica.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Other Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple secure options available for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {method.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-700 mb-3">{method.description}</p>
                <p className="text-sm text-gray-600">{method.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Check Payment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-12 p-6 bg-gray-50 rounded-2xl"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mail Your Check To:</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">alignAfrica</p>
                <p>Bole Sub city woreda 04, kebele 07</p>
                <p>P.O. Box 102030, Addis Ababa, Ethiopia</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Phone size={16} />
                  <span>+251 933 920 666</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Impact Statement */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 rounded-full">
              <Globe size={18} />
              <span className="text-sm font-semibold">Global Impact</span>
            </div>
            <h3 className="mb-6 text-3xl font-bold">Together, We Create Lasting Change</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Your contribution provides more than just resources—it delivers hope, dignity, 
              and the opportunity for self-determination. Communities facing adversity receive 
              not only practical support but also the profound knowledge that someone believes 
              in their potential and stands with them in solidarity.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold">
              <HandHeart size={18} />
              <span>Join thousands of donors making a difference</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;