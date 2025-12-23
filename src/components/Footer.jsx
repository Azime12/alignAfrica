// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const brandColor = '#7b3400';

  return (
    <footer className="bg-[#7b3400] text-white">
      {/* Top Section with Thematic Areas */}
      <div className="bg-gradient-to-r from-[#5a2800] via-[#7b3400] to-[#5a2800] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-lg md:text-xl font-bold">
            <span className="text-white">Educate</span>
            <span className="text-[#e89c03]">|</span>
            <span className="text-white">Empower</span>
            <span className="text-[#e89c03]">|</span>
            <span className="text-white">Engage</span>
            <span className="text-[#e89c03]">|</span>
            <span className="text-white">Advocate</span>
          </div>
          <p className="text-center text-[#e89c03] mt-3 max-w-2xl mx-auto text-sm">
            Four pillars driving sustainable change across African communities
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Contact Info */}
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#e89c03]">Address:</h3>
              <div className="space-y-2">
                <p className="text-white/90">©{currentYear} alignAfrica</p>
                <p className="text-white/90">P.O. Box: 102030</p>
                <p className="text-white/90">Mobile: +251 933 920 666</p>
                <p className="text-white/90">Charitable Registration No. 2717</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e89c03]/20">
              <p className="text-white/80 text-sm">
                Registered charitable organization working across Africa for sustainable development and community transformation.
              </p>
            </div>
          </div>

          {/* Middle Column: Social Media */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#e89c03]">Follow Us:</h3>
              <p className="text-white/90 mb-4">
                Stay connected with us for updates, stories, and more:
              </p>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/alignAfrica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <img 
                    src="/images/linked.png" 
                    alt="LinkedIn" 
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
                <a 
                  href="https://www.facebook.com/alignAfrica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <img 
                    src="/images/fb.png" 
                    alt="Facebook" 
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
                <a 
                  href="https://twitter.com/align_Africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <img 
                    src="/images/twitter.png" 
                    alt="Twitter" 
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/alignAfrica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <img 
                    src="/images/instagram.png" 
                    alt="Instagram" 
                    className="w-8 h-8"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-[#e89c03]/20">
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  Home
                </Link>
                <Link to="/about" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/solutions" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  Solutions
                </Link>
                <Link to="/problems" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  Challenges
                </Link>
                <Link to="/ethiopians" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  Ethiopian Culture
                </Link>
                <Link to="/donate" className="text-white/90 hover:text-[#e89c03] transition-colors text-sm">
                  Donate
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="">
            <h3 className="text-xl font-bold text-[#e89c03]">Where we operate:</h3>
            
            <div className="bg-white/5 border-2 border-[#e89c03]/30 rounded-lg p-2">
              <img 
                src="/images/map-align-workingareas.png" 
                alt="alignAfrica Operating Areas Map" 
                className="w-full h-auto rounded"
                loading="lazy"
              />
            </div>

          
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#5a2800] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} alignAfrica. All rights reserved. Transforming communities since 2008.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:info@alignafrica.org" 
                className="text-[#e89c03] hover:text-[#ffaa00] transition-colors text-sm"
              >
                info@alignafrica.org
              </a>
              <span className="text-white/50 hidden md:inline">•</span>
              <p className="text-white/60 text-sm hidden md:block">
                Making a difference across Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;