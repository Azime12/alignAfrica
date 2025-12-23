import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronUp,
  MapPin,
  Phone,
  Award,
} from "lucide-react";

import HeroSection from "../../components/sections/HeroSection";
import SidebarNavigation from "../../components/sections/SidebarNavigation";
import sidebarLinksData from "../../data/sidebarLinksData";

// Import the icons you need for the mobile navigation
import {
  Target,
  Sparkles,
  Award as AwardIcon,
  Shield,
  Users as UsersIcon
} from "lucide-react";

const OurNamePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroData = {
    title: "About Our Name",
    subtitle: "Discover the meaning behind alignafrica and our commitment to empowering generations across Ethiopia and Africa.",
    backgroundImage: "/images/our-name-banner.jpg",
    establishedYear: "2009",
    primaryCta: { 
      text: "Our Mission", 
      link: "/about/about-align-africa" // Fixed: Use exact route
    },
    secondaryCta: { 
      text: "Our History", 
      link: "/about/history" 
    },
  };

  // Create mobile navigation data with JSX icons
  const mobileNavData = [
    {
      name: "About",
      href: "/about/about-align-africa",
      icon: <Target size={16} className="mx-auto" />
    },
    {
      name: "Our Name",
      href: "/about/our-name",
      icon: <Sparkles size={16} className="mx-auto" />
    },
    {
      name: "History",
      href: "/about/history",
      icon: <AwardIcon size={16} className="mx-auto" />
    },
    {
      name: "Philosophy",
      href: "/about/philosophy",
      icon: <Shield size={16} className="mx-auto" />
    },
    {
      name: "Board",
      href: "/about/board-of-directors",
      icon: <UsersIcon size={16} className="mx-auto" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      <HeroSection {...heroData} />

      <div className="container px-3 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <main className="space-y-6 lg:col-span-8 xl:col-span-9">
            <section className="p-5 bg-white shadow-sm rounded-xl">
              <div className="container px-3 py-6 mx-auto">
                <article>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* LEFT COLUMN */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Welcome to alignafrica: Empowering Generations Across Ethiopia
                      </h2>

                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Founded in April 2009 by Yonas Mamo, alignafrica is dedicated to cultivating a{" "}
                        <span className="font-medium">"Fruitful Generation"</span>{" "}
                        across Ethiopia and beyond. Our objective is to empower
                        young achievers, promote responsible citizenship, and
                        foster self-reliant communities, driving impactful change
                        from local communities to national levels.
                      </p>

                      <h2 className="pt-2 text-lg font-semibold text-gray-900 sm:text-xl">
                        Why Choose alignafrica?
                      </h2>

                      <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Impactful Initiatives:</strong> Explore our
                            diverse projects aimed at addressing challenges like
                            injustice and poverty, turning them into
                            opportunities for hope and transformation.
                          </span>
                        </li>

                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Partnerships:</strong> Join forces with our
                            donors, volunteers, and partners who share our vision
                            for a better Africa.
                          </span>
                        </li>

                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Community Engagement:</strong> Learn about
                            resilient communities and their stories of
                            empowerment, and discover how you can make a
                            difference.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                        Get Involved
                      </h2>

                      <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Donate:</strong> Your contribution directly
                            supports our initiatives, providing essential
                            resources where they're most needed.
                          </span>
                        </li>

                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Volunteer:</strong> Become part of our
                            dedicated team or participate in local
                            projects that make a lasting impact.
                          </span>
                        </li>

                        <li className="flex gap-2">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
                          <span>
                            <strong>Stay Informed:</strong> Subscribe to our
                            newsletter for updates on our latest projects,
                            success stories, and opportunities to engage.
                          </span>
                        </li>
                      </ul>

                      <blockquote className="p-4 mt-5 text-sm italic text-gray-800 border-l-4 border-red-600 rounded-lg bg-red-50 sm:text-base">
                        Join our journey, whether you choose to make a difference
                        through donations, find inspiration in helping others,
                        or seek deeper understanding.
                      </blockquote>

                      <h2 className="pt-2 text-lg font-semibold text-gray-900 sm:text-xl">
                        Join Our Journey
                      </h2>

                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Together, we're building a brighter future for Africa.
                        Explore our website to learn more about our mission,
                        meet our team, and discover how you can
                        contribute to empowering generations across the
                        continent.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="sticky space-y-4 top-20">
              <SidebarNavigation
                title="About alignafrica"
                description="Explore our organization"
                links={sidebarLinksData}
              />

              <div className="p-4 text-sm bg-white border border-red-100 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-red-500" />
                  <span>P.O. Box 102030</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={14} className="text-red-500" />
                  <span>+251 933 920 666</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-red-500" />
                  <span>Reg. No. 2717</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t lg:hidden">
        <div className="flex justify-around py-2">
          {mobileNavData.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex flex-col items-center p-1 transition-colors ${
                  isActive ? "text-red-600" : "text-gray-500 hover:text-red-500"
                }`
              }
            >
              <div className="mb-1">
                {item.icon}
              </div>
              <span className="text-[10px] font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* BACK TO TOP BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed z-50 p-3 text-white bg-red-600 rounded-full shadow-lg bottom-16 right-4 hover:bg-red-700 transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp size={18} />
      </motion.button>
    </div>
  );
};

export default OurNamePage;