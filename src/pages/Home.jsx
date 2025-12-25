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
    
 <section className="relative -mt-24">
  {/* Background Image */}
  <img
    src="/images/home-banner.jpg"
    alt="Hero background showing African community empowerment"
    className="object-cover object-center w-full h-[500px] sm:h-[600px] md:h-[700px]"
    loading="eager"
    sizes="100vw"
  />

  {/* Gradient overlay for better text visibility */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

  {/* Buttons at bottom */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 px-4"
  >
    <Link
      to="/about"
      className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 hover:shadow-xl active:scale-95"
    >
      Learn About Us
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </Link>

    <Link
      to="/donate"
      className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 rounded-full shadow-lg border-white/80 hover:bg-white/20 hover:border-white backdrop-blur-sm active:scale-95"
    >
      <Heart className="w-5 h-5" />
      Support Our Mission
    </Link>
  </motion.div>
</section>



<WelcomeSectionAlt/>
<AboutSection/>
  

   
<div className="w-full h-px mt-2 bg-orange-700/60" />

    

    
    </div>
  );
};

export default Home;