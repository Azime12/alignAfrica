// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ArrowRight,

  Home as HomeIcon,
 } from 'lucide-react';
import WelcomeSectionAlt from '../components/align/Wellcome';
import AboutSection from '../components/align/AboutSection';

const Home = () => {
  // New color variables
  const primaryColor = '#7b3400'; // Rich brown
  const secondaryColor = '#953673'; // Gold
  
 


 


  return (
    <div className="">
<section className="relative w-full -mt-6">
  {/* Hero Image */}
  <img
    src="/images/home-banner.jpg"
    alt="African community empowerment and development"
    className="object-contain w-full h-auto"
    style={{ maxHeight: '80vh', display: 'block' }}
    loading="eager"
  />

  {/* Overlay for contrast */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.6) 100%)'
    }}
  />

  {/* Grouped content over the bottom */}
  <div className="absolute inset-x-0 flex flex-col items-center justify-center gap-3 px-4 bottom-4 sm:flex-row sm:px-6">
    {/* Text part */}
    {/* <div className="flex-shrink text-center text-white sm:text-left">
      <h1 className="text-lg font-bold sm:text-2xl">Empowering African Communities</h1>
      <p className="mt-1 text-xs sm:text-sm">Transforming lives through education and innovation</p>
    </div> */}

    {/* Buttons row */}
    <div className="flex flex-row gap-2 mt-2 sm:gap-4 sm:mt-0">
      <Link
        to="/about"
        className="px-3 py-1 text-xs font-semibold text-white transition rounded-full shadow-md sm:px-5 sm:py-2 sm:text-sm bg-gradient-to-r from-yellow-500 to-orange-600 hover:brightness-110"
      >
        Learn About Us
      </Link>

      <Link
        to="/donate"
        className="px-3 py-1 text-xs font-semibold text-white transition border-2 rounded-full sm:px-5 sm:py-2 sm:text-sm border-white/50 hover:border-white/80 bg-black/30 backdrop-blur-sm"
      >
        Support Our Mission
      </Link>
    </div>
  </div>
</section>



<WelcomeSectionAlt/>
<AboutSection/>
  

   
<div className="w-full h-px mt-2 bg-orange-700/60" />

    

    
    </div>
  );
};

export default Home;