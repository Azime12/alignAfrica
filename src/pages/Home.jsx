// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Users2, 
  Shield,
  Award,
  Briefcase,
  GraduationCap,
  Stethoscope,
  HandHeart,
  Globe,
  ArrowRight,
  Coffee,
  Calendar,
  Map,
  Music,
  Palette,
  Sprout,
  Building,
  Utensils,
  Star,
  ShieldCheck,
  User2,
  Leaf,
  CloudRain,
  Mountain,
  Home as HomeIcon,
  School,
  HeartHandshake
} from 'lucide-react';

const Home = () => {
  // New color variables
  const primaryColor = '#7b3400'; // Rich brown
  const secondaryColor = '#e89c03'; // Gold
  
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Impact statistics
  const impactStats = [
    { 
      number: "2.7M+", 
      label: "Women & Youth Empowered", 
      icon: User2,
      gradient: "from-amber-500 to-orange-500"
    },
    { 
      number: "250K+", 
      label: "Children in School", 
      icon: School,
      gradient: "from-amber-600 to-orange-600"
    },
    { 
      number: "1.2M+", 
      label: "Healthcare Services", 
      icon: HeartHandshake,
      gradient: "from-orange-500 to-amber-500"
    },
    { 
      number: "550+", 
      label: "Health Facilities", 
      icon: HomeIcon,
      gradient: "from-orange-600 to-amber-600"
    },
  ];

  // Thematic areas with new colors
  const thematicAreas = [
    {
      title: "Educate",
      description: "Promoting inclusive and quality education for youth, women, and marginalized groups",
      icon: GraduationCap,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      iconColor: "text-amber-600",
      hoverColor: "hover:shadow-amber-200"
    },
    {
      title: "Empower",
      description: "Fostering economic empowerment through entrepreneurship and skills development",
      icon: TrendingUp,
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      hoverColor: "hover:shadow-orange-200"
    },
    {
      title: "Engage",
      description: "Strengthening community resilience through peace-building and climate adaptation",
      icon: Users2,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      hoverColor: "hover:shadow-yellow-200"
    },
    {
      title: "Advocate",
      description: "Driving policy change for justice, social inclusion, and equitable resources",
      icon: ShieldCheck,
      bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
      borderColor: "border-amber-300",
      iconColor: "text-amber-700",
      hoverColor: "hover:shadow-amber-300"
    }
  ];

  // Quick links
  const quickLinks = [
    { title: "Ethiopia's Challenges", href: "/problems", icon: CloudRain },
    { title: "Sustainable Solutions", href: "/solutions", icon: Leaf },
    { title: "Development Partners", href: "/partners", icon: HeartHandshake },
    { title: "Ongoing Projects", href: "/projects", icon: Mountain },
  ];

  // Success stories links
  const successStories = [
    { title: "Success Stories", href: "/stories", icon: Star },
    { title: "The Ethiopian People", href: "/ethiopians", icon: Users },
    { title: "Our Partners", href: "/partners", icon: Globe },
  ];

  // Cultural exploration links
  const culturalExploration = [
    { title: "Coffee Culture", href: "/ethiopians/coffee", icon: Coffee },
    { title: "Traditional Calendar", href: "/ethiopians/calendar", icon: Calendar },
    { title: "Major Cities", href: "/ethiopians/cities", icon: Map },
    { title: "Dance & Music", href: "/culture/dance-music", icon: Music },
    { title: "Art & Crafts", href: "/ethiopians/art", icon: Palette },
    { title: "Traditional Cuisine", href: "/ethiopians/foods", icon: Utensils },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "alignAfrica gave me the tools to start my own business. Today, I employ 5 people in my community.",
      author: "Alem, Entrepreneur",
      role: "Women Empowerment Program"
    },
    {
      quote: "Because of the school support program, my daughter can now read and write. She dreams of becoming a doctor.",
      author: "Kebede, Father",
      role: "Education Program Beneficiary"
    },
    {
      quote: "The healthcare training transformed our community clinic. We can now serve twice as many patients.",
      author: "Dr. Selam, Community Doctor",
      role: "Healthcare Program Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-orange-50/20">
      {/* Hero Banner Section with multiple background options */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Option 1: Using CSS background-image with fallbacks */}
        <div className="absolute inset-0">
          {/* Primary background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/home-banner.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' // Optional: creates parallax effect
            }}
          ></div>
          
          {/* Fallback background gradient if image doesn't load */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900"
            style={{ display: 'none' }} // Hidden by default, shows if image fails
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#7b3400]/40 via-[#7b3400]/30 to-[#7b3400]/20"></div>
          
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e89c03' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-[#e89c03]/10 to-[#ffaa00]/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              x: [0, -25, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "easeInOut",
              delay: 2 
            }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-[#7b3400]/10 to-[#e89c03]/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              x: [0, 15, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "easeInOut",
              delay: 4 
            }}
            className="absolute top-2/3 left-2/3 w-40 h-40 bg-gradient-to-br from-[#ffaa00]/10 to-[#ffcc33]/10 rounded-full blur-xl"
          ></motion.div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-[#e89c03]/40 to-[#e89c03]/30 backdrop-blur-md rounded-full border border-[#e89c03]/50 shadow-xl">
                <span className="text-white font-semibold text-lg drop-shadow-lg">Transforming Lives Since 2008</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl"
            >
              Welcome to{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#e89c03] via-[#ffaa00] to-[#ffcc33] bg-clip-text text-transparent drop-shadow-lg">
                  alignAfrica
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#e89c03] via-[#ffaa00] to-[#ffcc33] bg-clip-text text-transparent blur-xl opacity-30"></span>
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12 inline-block"
            >
              <div className="p-8 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl max-w-3xl mx-auto">
                <p className="text-2xl italic text-white sm:text-3xl drop-shadow-lg leading-relaxed">
                  "Empowering others to know they're not alone is incredibly impactful."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-6 sm:flex-row sm:gap-8 justify-center mt-16"
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold bg-gradient-to-r from-[#e89c03] to-[#ffaa00] text-white rounded-full hover:from-[#ffaa00] hover:to-[#ff8800] transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-[#e89c03]/50 overflow-hidden"
              >
                <span className="relative z-10">Learn About Us</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#ffaa00] to-[#ffcc33] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                to="/donate"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold text-white border-3 border-[#e89c03] rounded-full hover:bg-[#e89c03]/15 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Heart className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                <span>Support Our Mission</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-8 h-12 border-3 border-[#e89c03] rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-4 bg-gradient-to-b from-[#e89c03] to-[#ffaa00] rounded-full mt-3"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Breaking Barriers,
              <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Building Futures
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Across Africa, millions face challenges that prevent them from reaching their full potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Children in Poverty",
                description: "Trapped in cycles of poverty with limited access to education and opportunities",
                icon: School,
                color: "from-amber-500 to-orange-500",
                stats: "60% Dropout Rate"
              },
              {
                title: "Women's Challenges",
                description: "Facing gender-based violence, limited education access, and economic dependence",
                icon: Users,
                color: "from-orange-500 to-amber-500",
                stats: "1 in 3 Affected"
              },
              {
                title: "Youth Unemployment",
                description: "Struggling with high unemployment, limited skills training, and social exclusion",
                icon: Target,
                color: "from-yellow-500 to-amber-500",
                stats: "40% Unemployed"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="px-4 py-2 bg-amber-50 rounded-lg inline-block">
                    <span className="font-bold text-amber-700">{item.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200">
                  <h2 className="mb-6 text-4xl font-bold text-gray-900">
                    Our Commitment to{' '}
                    <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                      Change
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At <span className="font-bold text-amber-700">alignAfrica</span>, we're breaking down barriers and creating
                    opportunities for people to build better lives. Through our integrated approach, we address root causes of
                    inequality and conflict.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">15+ Years of Impact</p>
                      <p className="text-sm text-gray-600">Transforming communities across Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Our Philosophy</h3>
                <p className="text-gray-700">
                  Real, lasting change begins with local ownership and collective action. We empower communities to lead their own
                  development with the tools, knowledge, and opportunities they need.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Village Ownership</h4>
                  <p className="text-sm opacity-90">Communities leading their own development</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Knowledge Sharing</h4>
                  <p className="text-sm opacity-90">Building capacity through continuous learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-700 font-semibold">Our Approach</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Four Pillars of{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our holistic approach addresses multiple dimensions of development for sustainable impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thematicAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`h-full p-8 rounded-3xl border-2 ${area.borderColor} ${area.bgColor} transition-all duration-500 ${area.hoverColor} hover:shadow-2xl hover:-translate-y-2`}>
                  <div className={`inline-flex p-4 rounded-2xl bg-white/50 backdrop-blur-sm mb-6 ${area.hoverColor}`}>
                    <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <Link
                      to={`/solutions#${area.title.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics with Animation */}
      <section   style={{
              backgroundImage: 'url(/images/home-main-art.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' // Optional: creates parallax effect
            }} className="py-20 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold">
              Transforming{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">
                Millions of Lives
              </span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              15 years of creating lasting change across Africa through sustainable development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${stat.gradient} rounded-full shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <motion.div 
                  className="text-5xl font-bold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 rounded-full mb-4">
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Success Stories</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Voices of{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Transformation
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 bg-white rounded-3xl shadow-lg border border-amber-100 hover:shadow-2xl hover:border-amber-300 transition-all duration-500">
                  <div className="text-amber-400 mb-6">
                    {"★★★★★".split('').map((star, i) => (
                      <span key={i} className="text-2xl">{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-amber-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-amber-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section   style={{
              backgroundImage: 'url(/images/home-main-art.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' // Optional: creates parallax effect
            }} className="py-20 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Get Involved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Join Our Community</h3>
              </div>
              <p className="mb-6 text-amber-100">
                Become part of a movement that's transforming lives across Africa. Your involvement makes a real difference.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Support with your donation",
                  "Volunteer your skills",
                  "Advocate for change",
                  "Partner with us"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-amber-900 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 hover:scale-105"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Explore Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Explore Our Impact</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-amber-300">Our Programs</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-sm text-center"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-amber-300">Cultural Exploration</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {successStories.map((story) => (
                      <Link
                        key={story.title}
                        to={story.href}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                      >
                        <story.icon className="w-4 h-4" />
                        <span>{story.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Donate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Invest in Change</h3>
              </div>
              
              <p className="mb-6">
                Your contribution creates ripple effects of positive change, empowering communities to build their own futures.
              </p>
              
              <div className="p-4 bg-white/20 rounded-xl mb-6">
                <p className="text-lg font-semibold">
                  Every $50 provides school supplies for 10 children
                </p>
              </div>
              
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 font-bold text-amber-900 bg-white rounded-full hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Exploration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
              <Palette className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Cultural Heritage</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Discover the Rich{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Ethiopian Culture
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the vibrant traditions, art, and daily life that make Ethiopia unique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalExploration.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={item.href}
                  className="group block p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-amber-600 font-semibold">Explore →</span>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-4 h-4 text-amber-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Trusted by{' '}
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Global Partners
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with governments, organizations, and communities to create sustainable impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl shadow-lg border border-amber-100"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900">International Partners</h3>
              <div className="grid grid-cols-2 gap-4">
                {['UN Agencies', 'Global Foundations', 'International NGOs', 'Corporate Partners'].map((partner) => (
                  <div key={partner} className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center border border-amber-200 hover:border-amber-300 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">{partner}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl shadow-lg border border-amber-100"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Government Collaborations</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Ministry of Health', 'Ministry of Education', 'Local Municipalities', 'Regional Authorities'].map((gov) => (
                  <div key={gov} className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl text-center border border-orange-200 hover:border-orange-300 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">{gov}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Home;