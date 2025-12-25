import React from "react";

const WelcomeSectionAlt = () => {
  const primaryColor = "#7b3400"; // Rich brown
  const secondaryColor = "#953673"; // Purple-pink

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4  bg-white">
      <div className="max-w-7xl w-full mx-auto">
       <div className="relative  md:mb-32">
  {/* Background with gradient overlay */}
  <div className="absolute inset-0" style={{
    background: `linear-gradient(135deg, ${primaryColor}05 0%, ${secondaryColor}05 100%)`
  }}></div>
  
  {/* Floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 right-10 w-32 h-32 rounded-3xl rotate-12 opacity-10" style={{ backgroundColor: primaryColor }}></div>
    <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: secondaryColor }}></div>
    <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-2xl rotate-45 opacity-5" style={{ backgroundColor: primaryColor }}></div>
  </div>

  <div className="relative z-10">
    {/* Logo and Title Stack */}
    <div className="flex flex-col items-center mb-14">
      {/* Logo with frame */}
    
<div
  className="relative mx-auto max-w-7xl rounded-3xl border bg-white/90 backdrop-blur-sm
             p-6 sm:p-10 lg:p-16 overflow-hidden transition-all duration-500
             hover:shadow-2xl hover:scale-[1.002] group"
  style={{ 
    borderColor: `${primaryColor}30`,
    boxShadow: `0 20px 80px ${primaryColor}10, 0 10px 40px ${secondaryColor}05`
  }}
>
  {/* Enhanced ambient color glows with animation */}
  <div
    className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-25
               animate-pulse-slow"
    style={{ 
      backgroundColor: primaryColor,
      animation: 'pulse-glow 8s ease-in-out infinite alternate'
    }}
  />
  <div
    className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-25
               animate-pulse-slow delay-1000"
    style={{ 
      backgroundColor: secondaryColor,
      animation: 'pulse-glow 8s ease-in-out infinite alternate reverse'
    }}
  />

  {/* Animated gradient border effect */}
  <div
    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    style={{
      background: `linear-gradient(45deg, ${primaryColor}15, ${secondaryColor}15, transparent 70%)`,
      filter: 'blur(20px)'
    }}
  />

  {/* Title Section */}
  <div className="relative z-10 mb-14">
    <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
      <span
        className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-[0.25em]
                   uppercase px-4 py-2 rounded-full border transition-all duration-300
                   group-hover:scale-105 group-hover:shadow-lg"
        style={{
          borderColor: `${primaryColor}40`,
          color: primaryColor,
          backgroundColor: `${primaryColor}10`,
          boxShadow: `0 4px 20px ${primaryColor}20`
        }}
      >
        Welcome To
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05]">
        <span 
          className="inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
          style={{ color: primaryColor }}
        >
          Align
        </span>{' '}
        <span 
          className="inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
          style={{ color: secondaryColor }}
        >
          Africa
        </span>
      </h1>
    </div>

    {/* Animated gradient underline */}
    <div className="relative">
      <div
        className="h-[3px] w-20 rounded-full transition-all duration-700 group-hover:w-32"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
        }}
      />
      <div
        className="absolute h-[3px] w-0 rounded-full opacity-50 group-hover:w-32 group-hover:opacity-100
                   transition-all duration-700 delay-150"
        style={{
          background: `linear-gradient(90deg, ${secondaryColor}, ${primaryColor})`,
          top: 0,
          left: 0
        }}
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-5">

    {/* Enhanced Image Column with floating animation */}
    <div className="lg:col-span-4 flex justify-center lg:justify-start">
      <div className="relative animate-float-slow">
        {/* Glowing rings */}
        <div
          className="absolute -inset-5 rounded-full border animate-pulse"
          style={{ 
            borderColor: `${primaryColor}35`,
            animation: 'ring-pulse 3s ease-in-out infinite'
          }}
        />
        <div
          className="absolute -inset-9 rounded-full border animate-pulse delay-500"
          style={{ 
            borderColor: `${secondaryColor}25`,
            animation: 'ring-pulse 3s ease-in-out infinite'
          }}
        />

        {/* Rotating gradient border */}
        <div
          className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: `conic-gradient(from 0deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
            animation: 'spin 10s linear infinite'
          }}
        />

        {/* Logo container with glass effect */}
        <div
          className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52
                     rounded-full bg-white/80 backdrop-blur-sm
                     shadow-[0_25px_80px_rgba(0,0,0,0.2)]
                     flex items-center justify-center
                     transition-all duration-500 group-hover:shadow-[0_35px_120px_rgba(0,0,0,0.3)]
                     border border-white/50"
        >
          <img
            src="/images/alignafrica.png"
            alt="Align Africa Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Hover shine effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div
              className="absolute -inset-y-full -left-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent
                         transition-all duration-1000 group-hover:translate-x-[400%]"
            />
          </div>
        </div>
      </div>
    </div>

 {/* Text Column with refined hero font */}
<div className="lg:col-span-8 text-center lg:text-left">
  <p
    className="
      text-base sm:text-lg lg:text-2xl
      text-gray-700
      font-normal
      text-justify
      leading-relaxed
      max-w-3xl
      mx-auto lg:mx-0
      tracking-[0.01em]
      transition-all duration-500
      group-hover:text-gray-800
    "
    style={{
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    }}
  >
  At alignAfrica, we’re committed to changing this. We’re breaking down the barriers that hold people back and creating opportunities for them to build better lives. Through our integrated, holistic approach, we address the root causes of inequality and conflict, empowering individuals and communities to create their own sustainable futures.
  </p>

  {/* Subtle animated accent (cleaner than cursor) */}
  <div
    className="hidden lg:block h-[3px] w-16 mt-6 rounded-full opacity-0
               group-hover:opacity-100 transition-opacity duration-500"
    style={{
      background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
    }}
  />
</div>

  </div>
</div>



    </div>

    {/* Mission Statement - Card Design */}
    <div className="max-w-6xl mx-auto">
      <div className="relative group">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: primaryColor }}></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: secondaryColor }}></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: primaryColor }}></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: secondaryColor }}></div>
        
        <div className="bg-white/95 backdrop-blur-sm p-10 lg:p-12 rounded-3xl shadow-2xl border border-gray-200">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-0.5" style={{ backgroundColor: primaryColor }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: primaryColor }}>
              Our Mission
            </span>
            <div className="w-12 h-0.5" style={{ backgroundColor: secondaryColor }}></div>
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7
            }}>
            Across Africa, millions of children, women, and marginalized communities face real, everyday challenges that prevent them from reaching their full potential. These barriers to education, economic opportunity, and social inclusion are made worse by conflict, climate change, and displacement. As a result, people are left struggling without access to the resources and support they need to thrive.
          </p>
          
          {/* Call to action */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ 
                backgroundColor: primaryColor,
                color: 'white'
              }}>
              Learn About Our Work →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
  {/* Outer Border Layer */}
  <div
    className="absolute inset-0 rounded-3xl pointer-events-none"
    style={{
      border: `1px solid ${primaryColor}40`,
      boxShadow: `0 0 0 3px ${secondaryColor}20`,
    }}
  />

  {/* Inner Container */}
  <div
    className="relative rounded-3xl bg-white/95 backdrop-blur-sm overflow-hidden p-6 sm:p-10 lg:p-12"
  >
    {/* Header */}
    <h2
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-tight"
      style={{ color: primaryColor }}
    >
      The Challenges We Address
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[{
        title: "Children in Poverty",
        color: primaryColor,
        desc:
          "Trapped in cycles of poverty by inadequate education, cultural barriers, and child labor—robbing them of brighter futures.",
        items: ["Poor education systems", "Cultural barriers to learning", "Widespread child labor"],
      },{
        title: "Women's Struggles",
        color: secondaryColor,
        desc:
          "Facing gender-based violence, limited education access, and economic dependence—restricting autonomy and community contribution.",
        items: ["Gender-based violence", "Limited education access", "Economic dependence"],
      },{
        title: "Youth at Risk",
        color: primaryColor,
        desc:
          "Struggling with unemployment, skills gaps, and limited opportunities—increasing vulnerability to exploitation and extremism.",
        items: ["High unemployment rates", "Inadequate skills training", "Migration and displacement"],
      }].map((card, idx) => (
        <div
          key={idx}
          className="
            group relative rounded-3xl bg-gradient-to-br from-white/80 to-white/95
            shadow-lg hover:shadow-2xl transition-all duration-500
            hover:-translate-y-2 hover:scale-[1.02] overflow-hidden
            border border-gray-100
          "
        >
          <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Card title */}
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 relative inline-block"
              style={{
                color: card.color,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {card.title}
              <span
                className="absolute -bottom-1 left-0 w-10 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${card.color}, ${secondaryColor})`,
                }}
              />
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed flex-1">
              {card.desc}
            </p>

            {/* List */}
            <ul className="space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start text-sm sm:text-base">
                  <span
                    className="w-3 h-3 rounded-full mt-1 mr-3 flex-shrink-0"
                    style={{ backgroundColor: card.color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Hover accent line */}
            <div
              className="h-1 w-full mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background: `linear-gradient(90deg, ${card.color}, ${secondaryColor})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    

      </div>
    </section>
  );
};

export default WelcomeSectionAlt;
