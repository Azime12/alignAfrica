import React from 'react';
       import { Target, Eye } from "lucide-react";
          import { Book, BarChart2, Heart, Globe, Megaphone } from "lucide-react";
import { Link } from 'react-router-dom';
        import { Home, BookOpen, Users } from "lucide-react";
import { Leaf } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Building } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const primaryColor = '#7b3400'; // Rich brown
  const secondaryColor = '#953673'; // Purple-pink
  
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: primaryColor }}>
            About alignAfrica
          </h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            A grassroots, community-led nonprofit organization with over 15 years of experience 
            empowering marginalized communities across Africa
          </p>
        </div>

{/* Mission & Vision Cards - Modern Minimalist */}
<div className="grid md:grid-cols-2 gap-8 ">
  {/* Mission Card */}
  <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-primaryColor/30 transition-all duration-500">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Line animation */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primaryColor to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    
    <div className="relative p-10">
      <div className="flex items-start gap-6 mb-8">
        {/* Icon with subtle animation */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-all duration-500">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${primaryColor}08` }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: primaryColor }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: primaryColor }}></div>
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: primaryColor }}>
              Our Commitment
            </span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight" style={{ color: primaryColor }}>
            Mission
          </h3>
        </div>
      </div>
      
      <div className="pl-2">
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide font-light">
          To educate, empower, engage, and advocate for marginalized communities, fostering local 
          leadership, expanding opportunities, and driving systemic change for a just, equitable, 
          and sustainable future.
        </p>
        
      </div>
      
      {/* Bottom indicator */}
     
    </div>
  </div>

  {/* Vision Card */}
  <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-secondaryColor/30 transition-all duration-500">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Line animation */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondaryColor to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ animationDelay: '0.2s' }}></div>
    
    <div className="relative p-10">
      <div className="flex items-start gap-6 mb-8">
        {/* Icon with subtle animation */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-all duration-500">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${secondaryColor}08` }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: secondaryColor }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: secondaryColor }}>
              Our Aspiration
            </span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight" style={{ color: secondaryColor }}>
            Vision
          </h3>
        </div>
      </div>
      
      <div className="pl-2">
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide font-light italic">
          "A world where every individual thrives in dignity, inclusion, and shared prosperity."
        </p>
      </div>
      
      {/* Bottom indicator */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: secondaryColor, animationDelay: '0.5s' }}></div>
          <span>Future Vision • Global Impact</span>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Philosophy Section - Minimalist Glassmorphism - FIXED */}
<div className="mb-24">
  <div className="relative" style={{ perspective: '1000px' }}>
    {/* Glassmorphism background */}
    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20"></div>
    
    {/* Subtle animated elements */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primaryColor/30 to-secondaryColor/30 animate-spin-slow"></div>
    </div>
    
    <div className="relative backdrop-blur-md bg-white/60 rounded-3xl p-10 md:p-12 shadow-xl transform transition-all duration-700 hover:rotate-y-1 group border border-white/30">
      {/* Animated border - Subtle */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 border border-transparent group-hover:border-primaryColor/10 transition-all duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primaryColor/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-3000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Interactive header - Minimalist */}
     <div className="mb-12 px-4 sm:px-6 lg:px-0">
  {/* Small Accent + Label */}
  <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4">
    <div className="w-6 sm:w-8 h-0.5 rounded-full" style={{ backgroundColor: primaryColor }}></div>
    <span className="text-xs sm:text-sm font-medium tracking-widest uppercase" style={{ color: primaryColor }}>
      Our Approach
    </span>
  </div>

  {/* Main Heading */}
  <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-tight leading-snug">
    <span className="block sm:inline-block pr-0 sm:pr-2" style={{ color: primaryColor }}>
      Philosophy of
    </span>
    <span className="block sm:inline-block font-bold" style={{ color: secondaryColor }}>
      Sustainable Change
    </span>
  </h3>
</div>

        
        {/* Philosophy content WITHOUT opacity animation (fixed) */}
        <div className="space-y-8">
          {/* First paragraph */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-medium" style={{ color: primaryColor }}>alignAfrica</span> believes that real, 
              lasting change begins with <span className="font-medium underline" style={{ color: secondaryColor }}>local 
              ownership</span> and <span className="font-medium underline" style={{ color: primaryColor }}>collective 
              action</span>.
            </p>
             <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to transforming lives by providing the tools, knowledge, and opportunities needed to 
                build self-reliant, empowered communities.
              </p>
          </div>
          
         
            
         
          

<div>
  <div className="p-6 md:p-8 rounded-2xl bg-white/50 border border-gray-100 shadow-lg">
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center md:text-left">
      Our interventions focus on sustainable solutions through:
    </p>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {[
        { area: "Education", color: primaryColor, icon: <Book size={24} /> },
        { area: "Economic", color: secondaryColor, icon: <BarChart2 size={24} /> },
        { area: "Healthcare", color: primaryColor, icon: <Heart size={24} /> },
        { area: "Peace", color: secondaryColor, icon: <Globe size={24} /> },
        { area: "Advocacy", color: primaryColor, icon: <Megaphone size={24} /> }
      ].map((focus, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full mb-2"
            style={{ backgroundColor: `${focus.color}20` }}
          >
            {React.cloneElement(focus.icon, { color: focus.color, size: 28 })}
          </div>

          {/* Text */}
          <div className="text-sm md:text-base font-semibold text-center" style={{ color: focus.color }}>
            {focus.area}
          </div>

          {/* Accent line */}
          <div
            className="h-1 w-8 rounded-full mt-1 opacity-30"
            style={{ backgroundColor: focus.color }}
          />
        </div>
      ))}
    </div>
  </div>
</div>

          
          {/* Final paragraph */}
          <div className=''>
            <p className="text-lg text-gray-700 leading-relaxed">
              By partnering with local governments, civil society organizations, and international 
              stakeholders, we ensure our solutions are scalable, impactful, and deeply rooted in 
              community needs.
                 Together, we are shaping a future where marginalized communities have the power to 
                drive their own development.
  


<span className="mt-10 pt-8 border-t  border-gray-100 flex justify-center">
  <Link
    to="/about/philosophy"
    className="flex items-center bg-orange-800 gap-3 px-8 py-4 rounded-full font-semibold text-white 
               bg-primaryColor hover:bg-secondaryColor
               shadow-lg hover:shadow-xl transition-all duration-500"
  >
    {/* Left pulse dot */}
    <div
      className="w-3 h-3 rounded-full animate-pulse"
      style={{ backgroundColor: '#fff' }}
    ></div>

    {/* Button Text */}
    <span className="text-sm md:text-base">Our Philosophy in Practice</span>

    {/* Right pulse dot */}
    <div
      className="w-3 h-3 rounded-full animate-pulse"
      style={{ backgroundColor: '#fff', animationDelay: '0.5s' }}
    ></div>
  </Link>
</span>


            </p>
            
          </div>
          
       
        </div>
        



      </div>
    </div>
  </div>
</div>

<div className="mb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  {/* Section Header */}
  <div className="text-center mb-12 lg:mb-16">
    <div className="inline-block px-4 py-2 rounded-full mb-6"
      style={{ 
        backgroundColor: `${primaryColor}10`,
        border: `1px solid ${primaryColor}20`
      }}>
      <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: primaryColor }}>
        Our Framework
      </span>
    </div>
    
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
      <span style={{ color: primaryColor }}>VIV</span>
      <span style={{ color: secondaryColor }}> Framework</span>
    </h3>
    
    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
      Three pillars working in harmony for sustainable community development
    </p>
  </div>

  




<div className="lg:hidden space-y-6">
  {[
    {
      title: "Village Ownership",
      description:
        "We empower communities to lead their own development. We equip them with the tools, skills, and knowledge needed to create lasting change.",
      color: primaryColor,
      Icon: Home, // Capitalized!
      features: ["Community Governance", "Local Decision Making", "Sustainable Ownership"]
    },
    {
      title: "Learning & Knowledge Sharing",
      description:
        "We believe in building capacity through continuous learning, ensuring that communities can tackle their own challenges and create solutions that last.",
      color: secondaryColor,
      Icon: BookOpen,
      features: ["Training Programs", "Knowledge Transfer", "Skill Development"]
    },
    {
      title: "Partnership & Teamwork",
      description:
        "By working alongside local governments, international donors, and community leaders, we ensure our solutions are scalable and sustainable.",
      color: primaryColor,
      Icon: Users,
      features: ["Strategic Alliances", "Resource Sharing", "Collective Impact"]
    }
  ].map((item, index) => {
    const IconComponent = item.Icon; // assign to capitalized variable
    return (
      <div
        key={index}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 active:scale-[0.98] transition-transform duration-200"
      >
        {/* Mobile accordion header */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{
              backgroundColor: `${item.color}15`,
              color: item.color,
            }}
          >
            {IconComponent && <IconComponent size={24} color={item.color} />}
          </div>

          <div className="flex-1">
            <h4 className="text-xl font-bold" style={{ color: item.color }}>
              {item.title}
            </h4>
            <div className="text-sm text-gray-500">Tap to learn more</div>
          </div>
          <div className="text-2xl text-gray-400">+</div>
        </div>

        {/* Hidden content */}
        <div className="overflow-hidden max-h-0 transition-all duration-500">
          <p className="text-gray-700 mb-4">{item.description}</p>

          <div className="space-y-2 mb-6">
            {item.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <button
            className="w-full py-3 rounded-xl font-semibold"
            style={{
              backgroundColor: `${item.color}10`,
              color: item.color,
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  })}
</div>




<div className="hidden lg:grid lg:grid-cols-3 gap-6">
  {[
    {
      title: "Village Ownership",
      description:
        "We empower communities to lead their own development. We equip them with the tools, skills, and knowledge needed to create lasting change.",
      color: primaryColor,
      Icon: Home,
      stats: "100% Community-led",
      action: "Explore Community Programs",
    },
    {
      title: "Learning & Knowledge",
      description:
        "We believe in building capacity through continuous learning, ensuring that communities can tackle their own challenges and create solutions that last.",
      color: secondaryColor,
      Icon: BookOpen,
      stats: "10K+ Training Sessions",
      action: "View Learning Resources",
    },
    {
      title: "Partnership",
      description:
        "By working alongside local governments, international donors, and community leaders, we ensure our solutions are scalable and sustainable.",
      color: primaryColor,
      Icon: Users,
      stats: "500+ Active Partners",
      action: "Join Our Network",
    },
  ].map((item, index) => {
    const IconComponent = item.Icon;
    return (
      <div key={index} className="group">
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
          
          {/* Title with icon as bullet */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundColor: `${item.color}20`, color: item.color }}
            >
              {IconComponent && <IconComponent size={24} color={item.color} />}
            </div>
            <h4 className="text-xl font-bold flex-1" style={{ color: item.color }}>
              {item.title}
            </h4>
          </div>

          {/* Stats badge */}
          <div
            className="inline-block px-3 py-1.5 rounded-full mb-4 text-center font-semibold"
            style={{ backgroundColor: `${item.color}10`, color: item.color }}
          >
            {item.stats}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1">
            {item.description}
          </p>

          {/* Action button */}
          <button
            className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:bg-opacity-100"
            style={{ backgroundColor: `${item.color}10`, color: item.color }}
          >
            {item.action}
          </button>
        </div>
      </div>
    );
  })}
</div>



 
</div>


<div className="mb-20">
  <h3 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
    Our Thematic Areas
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Educate",
        description:
          "Promoting inclusive and quality education, ensuring equitable access to learning opportunities, and providing vocational training.",
        color: primaryColor,
        Icon: BookOpen
      },
      {
        title: "Empower",
        description:
          "Fostering economic empowerment through job creation, entrepreneurship support, and skills development.",
        color: secondaryColor,
        Icon: Users
      },
      {
        title: "Engage",
        description:
          "Strengthening community resilience through peace-building, climate adaptation, and local solution co-creation.",
        color: primaryColor,
        Icon: Leaf
      },
      {
        title: "Advocate",
        description:
          "Driving policy change and systemic reform to promote justice, social inclusion, and equitable resource access.",
        color: secondaryColor,
        Icon: Megaphone
      }
    ].map((item, index) => {
      const IconComponent = item.Icon;
      return (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${item.color}15` }}
            >
              {IconComponent && <IconComponent size={24} color={item.color} />}
            </div>
            <h4 className="text-xl font-bold" style={{ color: item.color }}>
              {item.title}
            </h4>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
        </div>
      );
    })}
  </div>
</div>



<div className="mb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  {/* Header Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-3 mb-6">
      <div className="w-8 h-1 rounded-full" style={{ backgroundColor: primaryColor }}></div>
      <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: primaryColor }}>
        Measurable Impact
      </span>
      <div className="w-8 h-1 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
    </div>
    
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
      <span className="" style={{ color: primaryColor }}>Our Impact</span>
      <span className="" style={{ color: secondaryColor }}> Across Africa</span>
    </h3>
    
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
      Quantifying change through data-driven results and sustainable community development
    </p>
  </div>



  {/* Impact Categories Grid */}
  <div className="space-y-16">
    {/* Empowering Women & Youth */}
    <div className="relative group/category">
      <div className="absolute -inset-4 bg-gradient-to-r from-secondaryColor/5 to-transparent rounded-3xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="flex justify-center items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" 
          style={{ backgroundColor: `${secondaryColor}15` }}>
          <Users className="w-6 h-6" style={{ color: secondaryColor }} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-bold" style={{ color: secondaryColor }}>
            Empowering Women & Youth
          </h4>
          <p className="text-gray-600 mt-2">Creating opportunities for leadership and economic independence</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            value: "2.7M+", 
            label: "Entrepreneurship skills developed", 
            description: "Women and youth equipped for economic independence",
            icon: TrendingUp,
            color: primaryColor,
            gradient: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}05)`
          },
          { 
            value: "50,000+", 
            label: "Leaders trained in advocacy", 
            description: "Young leaders advocating for policy change",
            icon: Target,
            color: secondaryColor,
            gradient: `linear-gradient(135deg, ${secondaryColor}15, ${secondaryColor}05)`
          },
          { 
            value: "546.5K+", 
            label: "Enterprises launched", 
            description: "Youth- and women-led sustainable businesses",
            icon: Building,
            color: primaryColor,
            gradient: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}05)`
          },
          { 
            value: "35%", 
            label: "Violence reduction", 
            description: "Decrease in gender-based violence incidents",
            icon: Heart,
            color: secondaryColor,
            gradient: `linear-gradient(135deg, ${secondaryColor}15, ${secondaryColor}05)`
          }
        ].map((stat, index) => (
          <div key={index} className="group/stat">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: stat.gradient }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${stat.color}10`,
                    color: stat.color
                  }}>
                  Impact
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h5>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
              
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000 group-hover/stat:w-full"
                  style={{ 
                    width: `${index * 25 + 60}%`,
                    backgroundColor: stat.color
                  }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Transforming Education */}
    <div className="relative group/category">
      <div className="absolute -inset-4 bg-gradient-to-r from-primaryColor/5 to-transparent rounded-3xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="flex justify-center items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" 
          style={{ backgroundColor: `${primaryColor}15` }}>
          <GraduationCap className="w-6 h-6" style={{ color: primaryColor }} />
        </div>
        <div>
          <h4 className="text-2xl sm:text-2xl font-bold" style={{ color: primaryColor }}>
            Transforming Education
          </h4>
          <p className="text-gray-600 mt-2">Building futures through inclusive and quality education</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            value: "250K+", 
            label: "Children enrolled", 
            description: "Inclusive education for all children",
            icon: Users,
            color: secondaryColor,
            trend: "+12% yearly"
          },
          { 
            value: "40%", 
            label: "Literacy increase", 
            description: "Improved learning outcomes",
            icon: TrendingUp,
            color: primaryColor,
            trend: "Above national average"
          },
          { 
            value: "10K+", 
            label: "Teachers trained", 
            description: "Quality education delivery",
            icon: GraduationCap,
            color: secondaryColor,
            trend: "Child-centered methods"
          },
          { 
            value: "30%", 
            label: "Dropout reduction", 
            description: "Increased school retention",
            icon: ArrowRight,
            color: primaryColor,
            trend: "Scholarships & support"
          }
        ].map((stat, index) => (
          <div key={index} className="group/stat">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {stat.trend}
                </div>
              </div>
              
              <h5 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h5>
              <p className="text-gray-600 mb-4">{stat.description}</p>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stat.color }}></div>
                <span className="text-sm font-medium" style={{ color: stat.color }}>Active Program</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Healthcare Systems */}
    <div className="relative group/category">
      <div className="absolute -inset-4 bg-gradient-to-r from-secondaryColor/5 to-transparent rounded-3xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="flex justify-center items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" 
          style={{ backgroundColor: `${secondaryColor}15` }}>
          <Heart className="w-6 h-6" style={{ color: secondaryColor }} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-bold" style={{ color: secondaryColor }}>
            Healthcare Systems
          </h4>
          <p className="text-gray-600 mt-2">Strengthening healthcare access and outcomes across communities</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            value: "1.2M+", 
            label: "People served", 
            sublabel: "Healthcare services provided",
            color: primaryColor,
            icon: Users,
            details: "Including pregnant women & children"
          },
          { 
            value: "35%", 
            label: "Mortality reduction", 
            sublabel: "Maternal & neonatal",
            color: secondaryColor,
            icon: TrendingUp,
            details: "Through skilled birth attendance"
          },
          { 
            value: "135K+", 
            label: "Health workers", 
            sublabel: "Trained professionals",
            color: primaryColor,
            icon: GraduationCap,
            details: "Ensuring quality care delivery"
          },
          { 
            value: "550+", 
            label: "Facilities", 
            sublabel: "Strengthened health centers",
            color: secondaryColor,
            icon: Building,
            details: "Expanded access to critical care"
          },
          { 
            value: "17.2K+", 
            label: "Women's groups", 
            sublabel: "Health education networks",
            color: primaryColor,
            icon: Heart,
            details: "Promoting reproductive health"
          },
          { 
            value: "30%", 
            label: "Funding increase", 
            sublabel: "Healthcare financing",
            color: secondaryColor,
            icon: ArrowRight,
            details: "Government partnership impact"
          }
        ].map((stat, index) => (
          <div key={index} className="group/stat">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <h5 className="text-lg font-bold text-gray-900">{stat.label}</h5>
                  <p className="text-sm text-gray-600">{stat.sublabel}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">{stat.details}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Impact Level</span>
                  <span className="font-semibold" style={{ color: stat.color }}>
                    {index < 2 ? 'High' : index < 4 ? 'High' : 'High'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


</div>



{/* Compact Success Story with Icon Bullet List */}
<div className="relative group">
  <div className="relative bg-white rounded-3xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300"
    style={{ borderColor: `${primaryColor}20` }}>
    
    <div className="flex flex-col justify-center lg:flex-row items-center gap-8">
     
      <div className="">
        <h4 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          Success Story: Alem's Journey
        </h4>
        
        {/* Icon bullet points as a list */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primaryColor }} />
            <p className="text-gray-700">
              Alem, a young entrepreneur from rural Ethiopia, launched her sustainable agriculture business with our support.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: secondaryColor }} />
            <p className="text-gray-700">
              She now creates job opportunities for <span className="font-bold" style={{ color: primaryColor }}>15 other youths</span> in her community.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primaryColor }} />
            <p className="text-gray-700">
              Her success demonstrates the powerful ripple effect of empowerment and sustainable development.
            </p>
          </div>
        </div>
        
      <Link to="/success-stories/rif-project">
  <button
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
    style={{
      backgroundColor: `${primaryColor}10`,
      color: primaryColor,
    }}
  >
    <ArrowRight className="w-4 h-4" />
    Read Full Story
  </button>
</Link>

       
      </div>
    </div>
  </div>
</div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6" style={{ color: primaryColor }}>
            Join Us in Making a Difference
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Together, we can continue to transform lives and build stronger, more resilient communities across Africa.
          </p>
        <div className="flex flex-wrap justify-center gap-6">
  <Link to="/faqs">
    <button
      className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      style={{ backgroundColor: primaryColor, color: 'white' }}
    >
      Get Involved
    </button>
  </Link>

  <Link to="/donate">
    <button
      className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:shadow-lg"
      style={{ borderColor: secondaryColor, color: secondaryColor }}
    >
      Donate Now
    </button>
  </Link>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;