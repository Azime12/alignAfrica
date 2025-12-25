import React from "react";

const WelcomeSectionAlt = () => {
  const primaryColor = "#7b3400"; // Rich brown
  const secondaryColor = "#953673"; // Purple-pink

  return (
    <section className="flex items-center justify-center w-full min-h-screen px-4 bg-white">
      <div className="w-full mx-auto max-w-7xl">
       <div className="relative md:mb-32">
  {/* Background with gradient overlay */}
  <div className="absolute inset-0" style={{
    background: `linear-gradient(135deg, ${primaryColor}05 0%, ${secondaryColor}05 100%)`
  }}></div>
  
  {/* Floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-32 h-32 top-20 right-10 rounded-3xl rotate-12 opacity-10" style={{ backgroundColor: primaryColor }}></div>
    <div className="absolute w-40 h-40 rounded-full bottom-20 left-10 opacity-10" style={{ backgroundColor: secondaryColor }}></div>
    <div className="absolute w-24 h-24 rotate-45 top-1/2 left-1/3 rounded-2xl opacity-5" style={{ backgroundColor: primaryColor }}></div>
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
    className="absolute inset-0 transition-opacity duration-700 opacity-0 rounded-3xl group-hover:opacity-100"
    style={{
      background: `linear-gradient(45deg, ${primaryColor}15, ${secondaryColor}15, transparent 70%)`,
      filter: 'blur(20px)'
    }}
  />

  {/* Title Section */}
 <div className="relative z-10 px-4 text-center mb-14 sm:px-6 sm:text-left">
  {/* Badge + Title Container */}
  <div className="flex flex-col items-center justify-center gap-2 mb-4 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-3">
    
    {/* Badge */}
    <span
      className="inline-flex items-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300
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

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] break-words">
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
  <div className="relative flex justify-center w-full sm:justify-start">
    <div
      className="h-[3px] w-16 sm:w-20 rounded-full transition-all duration-700 group-hover:w-32"
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
<div className="relative z-10 grid items-center grid-cols-1 gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-12 lg:gap-6">

  {/* Image Column */}
  <div className="flex justify-center lg:col-span-4 lg:justify-start">
    <div className="relative animate-float-slow group">

      {/* Glowing Rings */}
      <div
        className="absolute border rounded-full -inset-5 animate-pulse"
        style={{ borderColor: `${primaryColor}35` }}
      />
      <div
        className="absolute delay-500 border rounded-full -inset-9 animate-pulse"
        style={{ borderColor: `${secondaryColor}25` }}
      />

      {/* Rotating Gradient Border */}
      <div
        className="absolute transition-opacity duration-1000 rounded-full opacity-0 group-hover:opacity-100 -inset-4"
        style={{
          background: `conic-gradient(from 0deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
          animation: 'spin 10s linear infinite',
        }}
      />

      {/* Logo with glass effect */}
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
          className="object-contain w-24 h-24 transition-transform duration-500 sm:w-32 sm:h-32 lg:w-44 lg:h-44 group-hover:scale-110"
        />

        {/* Hover shine effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            className="absolute -inset-y-full -left-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent
                       transition-transform duration-1000 group-hover:translate-x-[400%]"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Text Column */}
  <div className="text-center lg:col-span-8 lg:text-left">
    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-normal text-justify leading-relaxed max-w-3xl mx-auto lg:mx-0 tracking-[0.01em] transition-all duration-500 group-hover:text-gray-800"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      At Align Africa, we’re committed to changing this. We’re breaking down the barriers that hold people back and creating opportunities for them to build better lives. Through our integrated, holistic approach, we address the root causes of inequality and conflict, empowering individuals and communities to create their own sustainable futures.
    </p>

    {/* Accent Line */}
    <div
      className="hidden lg:block h-[3px] w-16 mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
      }}
    />
  </div>

</div>

</div>



    </div>

  {/* Mission Statement - Fully Responsive Card */}
<div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 mb:8">
  <div className="relative mb-10 group">
    {/* Corner accents */}
    <div className="absolute w-5 h-5 border-t-2 border-l-2 -top-3 -left-3 sm:w-6 sm:h-6" style={{ borderColor: primaryColor }} />
    <div className="absolute w-5 h-5 border-t-2 border-r-2 -top-3 -right-3 sm:w-6 sm:h-6" style={{ borderColor: secondaryColor }} />
    <div className="absolute w-5 h-5 border-b-2 border-l-2 -bottom-3 -left-3 sm:w-6 sm:h-6" style={{ borderColor: primaryColor }} />
    <div className="absolute w-5 h-5 border-b-2 border-r-2 -bottom-3 -right-3 sm:w-6 sm:h-6" style={{ borderColor: secondaryColor }} />

    {/* Card */}
    <div className="p-6 border border-gray-200 shadow-2xl sm:p-10 lg:p-12 bg-white/95 backdrop-blur-sm rounded-3xl">
      
      {/* Heading with accent lines */}
      <div className="flex flex-col items-center justify-center gap-3 mb-6 sm:flex-row sm:mb-8">
        <div className="w-10 h-0.5 sm:w-12" style={{ backgroundColor: primaryColor }}></div>
        <span className="text-xs font-semibold tracking-widest text-center uppercase sm:text-sm sm:text-base" style={{ color: primaryColor }}>
          Our Mission
        </span>
        <div className="w-10 h-0.5 sm:w-12" style={{ backgroundColor: secondaryColor }}></div>
      </div>

      {/* Mission text */}
      <p className="max-w-3xl mx-auto text-base font-light leading-relaxed text-center text-gray-700 sm:text-lg lg:text-xl"
        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
        Across Africa, millions of children, women, and marginalized communities face real, everyday challenges that prevent them from reaching their full potential. These barriers to education, economic opportunity, and social inclusion are made worse by conflict, climate change, and displacement. As a result, people are left struggling without access to the resources and support they need to thrive.
      </p>

      {/* Call-to-action button */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <button 
          className="px-6 py-3 text-sm font-bold transition-transform duration-300 rounded-full shadow-lg sm:px-8 sm:py-4 sm:text-lg hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: primaryColor, color: 'white' }}
        >
          Learn About Our Work →
        </button>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

<div className="relative px-2 mx-auto sm:px-4 md:px-6 lg:px-0 max-w-7xl">
  {/* Inner Container */}
  <div className="relative p-4 overflow-hidden sm:p-6 md:p-10 lg:p-12 rounded-3xl bg-white/95 backdrop-blur-sm">
    {/* Header */}
    <h2
      className="mb-8 text-2xl font-extrabold tracking-tight text-center sm:text-3xl md:text-4xl lg:text-5xl"
      style={{ color: primaryColor }}
    >
      The Challenges We Address
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Children in Poverty",
          color: primaryColor,
          desc:
            "Trapped in cycles of poverty by inadequate education, cultural barriers, and child labor—robbing them of brighter futures.",
          items: ["Poor education systems", "Cultural barriers to learning", "Widespread child labor"],
        },
        {
          title: "Women's Struggles",
          color: secondaryColor,
          desc:
            "Facing gender-based violence, limited education access, and economic dependence—restricting autonomy and community contribution.",
          items: ["Gender-based violence", "Limited education access", "Economic dependence"],
        },
        {
          title: "Youth at Risk",
          color: primaryColor,
          desc:
            "Struggling with unemployment, skills gaps, and limited opportunities—increasing vulnerability to exploitation and extremism.",
          items: ["High unemployment rates", "Inadequate skills training", "Migration and displacement"],
        },
      ].map((card, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-white/80 to-white/95
                     shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]
                     overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
            {/* Card title */}
            <h3
              className="relative inline-block mb-3 text-lg font-bold sm:text-xl"
              style={{ color: card.color, fontFamily: "'DM Sans', sans-serif" }}
            >
              {card.title}
              <span
                className="absolute left-0 w-8 h-1 rounded-full sm:w-10 -bottom-1"
                style={{ background: `linear-gradient(90deg, ${card.color}, ${secondaryColor})` }}
              />
            </h3>

            {/* Description */}
            <p className="flex-1 mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {card.desc}
            </p>

            {/* List */}
            <ul className="space-y-1 sm:space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start text-sm sm:text-base">
                  <span
                    className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 mt-1 mr-2 sm:mr-3 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Hover accent line */}
            <div
              className="w-full h-1 mt-4 transition-opacity duration-500 rounded-full opacity-0 sm:mt-6 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, ${card.color}, ${secondaryColor})` }}
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
