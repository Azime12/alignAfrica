// src/pages/solutions/education/EducationSolutions.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Solutions section
const solutionsSidebarLinks = [
  { 
    name: "Education", 
    href: "/solutions/education", 
    icon: "Book" 
  },
  { 
    name: "Health", 
    href: "/solutions/health", 
    icon: "Heart" 
  },
  { 
    name: "Livelihood", 
    href: "/solutions/livelihood", 
    icon: "Briefcase" 
  },
  { 
    name: "Partnership", 
    href: "/solutions/partnership", 
    icon: "Handshake" 
  },
  { 
    name: "Water Security", 
    href: "/solutions/water-security", 
    icon: "CloudRain" 
  },
  { 
    name: "Women Empowerment", 
    href: "/solutions/women-empowerment", 
    icon: "UserPlus" 
  },
  { 
    name: "Sanitation & Hygiene", 
    href: "/solutions/sanitation-hygiene", 
    icon: "Droplet" 
  }
];

function EducationSolutions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Green color scheme based on #1c8a24
  const mainColor = '#1c8a24';
  const colorVariants = {
    light: '#dcfce7',
    medium: '#1c8a24',
    dark: '#16681d'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0fdf4' }}>
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/educat-banne.jpg)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 138, 36, 0.7)' }}></div>
        <div className="relative flex items-center h-full">
          <div id="header-content" className="container px-4 mx-auto">
            <div id="intro" className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
                >
                  EDUCATION SOLUTIONS
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-white/90 sm:text-xl md:text-2xl"
                >
                  Transforming Communities Through Quality Education
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 mx-auto sm:py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-8">
              <SidebarNavigation
                title="Our Solutions"
                links={solutionsSidebarLinks}
                brandColor="custom"
                customColor={colorVariants.medium}
                enableAnimations={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full pb-20 lg:w-3/4 sm:pb-24 lg:pb-0">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white shadow-lg rounded-xl sm:rounded-2xl sm:shadow-xl sm:p-6 md:p-8"
              style={{ borderColor: colorVariants.light }}
            >
              <div className="column-group lg:flex lg:gap-8">
                {/* Left Column */}
                <div className="column column-left lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Education for Community Development</h2>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        Education is critical to both community development and the development of Ethiopia as a whole. UNESCO and the World Bank agree that universal primary education is the core of all human progress.
                      </p>
                      
                      <p className="mb-4 text-gray-700">
                        In many communities, the establishment of a vibrant school leads to further strides, including improvement in adult literacy, and the establishment of healthcare facilities and economic opportunities. Providing education is one of the most important development projects that can be implemented in a community.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #dcfce7, white)' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Progress and Challenges</h3>
                      
                      <p className="mb-4 text-gray-700">
                        In recent years primary schools have been established even in very remote and un-serviced regions all over Ethiopia, helping to fulfill the goal of universal literacy and access to education opportunities. It has not been an easy road, especially for girls.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          Traditionally, girls did not attend school; they were kept home to work, help with younger children, and fetch water and firewood. They were often married off early, both for the bride price and to protect them from rape and abduction.
                        </p>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        Cultural norms have gradually been altered so that girls are now allowed and welcomed to attend school. Children are graduating from primary school in unprecedented numbers all over Ethiopia. But what happens to them then?
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Addressing Educational Gaps</h3>
                      
                      <p className="mb-4 text-gray-700">
                        Lack of secondary education opportunities is chronic in marginalized communities across rural Ethiopia. Without these opportunities, youth have nothing to do and cannot contribute to the development of their communities.
                      </p>
                      
                      <p className="mb-4 text-gray-700">
                        Building and supplying high schools in these communities supports sustainable development, giving young people options previously impossible for them to imagine, particularly if they can proceed to post-secondary education.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #dcfce7, white)' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Vocational Training and Skills Development</h3>
                      
                      <p className="mb-4 text-gray-700">
                        There is a real need for skilled trades people who can help the country keep up with a burgeoning population and a growing economy by building roads, railways, buildings, and bridges.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          The ability to secure these types of jobs provides young adults with an income that they can use to support themselves and to help their communities develop. To do this, they need technical and vocational training that is easy to access and provides a good education.
                        </p>
                      </div>
                      
                      <p className="text-gray-700">
                        These trained, skilled workers will contribute to the economy both locally and nationally. They can start their own businesses and hire and train others. Young people can stay in their own communities but will be equipped to work and contribute, building the local economy.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/eee.jpg" 
                        alt="Education, engagement, and empowerment" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Our Approach to Education</h3>
                      
                      <p className="mb-4 text-gray-700">
                        We have talented educators and researchers from different parts of the world who are passionate about purposeful learning that makes an impact. Students and teachers are the center of everything we do.
                      </p>
                      
                      <p className="mb-4 text-gray-700">
                        With years of experience in teaching, educational leadership and research, we have the skills and evidence to support you to make a long-lasting impact on your students and teachers.
                      </p>
                      
                      <div className="p-4 my-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-gray-700">
                          Learning and teaching is what we love, what we do, and we do it with passion. If you do too, we'd love to hear from you about how we could collaborate.
                        </p>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        We're serious about collaborating, working with, and learning alongside teachers and schools. Everything we do is evidence-based and makes an impact on students' learning and teachers' teaching.
                      </p>
                      
                      <p className="text-gray-700">
                        Look below to see how we could collaborate, or contact us to discuss what it could look like for you or at your school.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="mt-8 column column-right lg:w-1/2 lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/webinars.jpg" 
                        alt="Webinars and workshops" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                        <p className="text-lg font-semibold text-center" style={{ color: mainColor }}>
                          <span className="font-bold">Educate, Engage, & Empower:</span> Increasing teacher motivation, improving problem-solving skills, and teaching students to become empowered, all of which are vital to improving learning and teaching outcomes for every student and teacher.
                        </p>
                      </div>
                      
                      <p className="mb-4 text-gray-700">
                        The 3E model proposes a three-part process for student learning and teachers teaching: educate, engage, and empower.
                      </p>
                      
                      <h4 className="mb-3 text-lg font-bold text-gray-800">These steps involve the following elements:</h4>
                      
                      <ul className="space-y-3">
                        {[
                          "Educate students with the necessary background content information to provide foundational knowledge of the issue or topic being discussed in an authentic, meaningful way that yields opportunities for later application and understanding. By learning within the context of the big picture, students are able to apply their democratic understandings in a variety of contexts.",
                          "Engage students & teachers by allowing them to participate in shaping their own education, provide authentic experiences from which they can learn, and facilitate a relevant, motivating dialogue for students to carry on in and out of the classroom.",
                          "Empower teachers and students to apply their knowledge, interests, and understandings and become life-long, active, engaged, effective citizens, capable of self-motivating and innovative thinking."
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full" style={{ backgroundColor: mainColor }}>
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #dcfce7, white)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Webinars & Workshops</h2>
                      </div>
                      
                      <p className="text-gray-700">
                        One to one or small group webinars or workshops to help engage and empower students in powerful learning experiences.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, backgroundColor: '#f0fdf4' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Coaching & Mentoring</h2>
                      </div>
                      
                      <p className="text-gray-700">
                        Personalized coaching and mentoring built around your strengths and needs to help you identify and reach teaching, learning or leadership goals.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to bottom right, #dcfce7, white)' }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Modeled Teaching</h2>
                      </div>
                      
                      <p className="text-gray-700">
                        Lessons for teachers, by teachers to help teachers make the biggest impact possible with their classes (or teams).
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/coaching.jpg" 
                        alt="Coaching and mentoring" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}
                    >
                      <h3 className="mb-4 text-2xl font-bold text-center text-gray-800">Interested?</h3>
                      
                      <div className="p-5 text-center bg-white rounded-lg shadow-sm">
                        <p className="mb-4 text-lg text-gray-700">
                          Let's talk! Don't hesitate to reach out with an email
                        </p>
                        <div className="p-4 rounded-lg" style={{ backgroundColor: colorVariants.light }}>
                          <a 
                            href="mailto:tiruzerethiopia@gmail.com"
                            className="text-xl font-bold hover:underline"
                            style={{ color: mainColor }}
                          >
                            tiruzerethiopia@gmail.com
                          </a>
                        </div>
                        <p className="mt-4 text-gray-600">
                          We're excited to collaborate with you to transform education in your community.
                        </p>
                      </div>
                    </motion.div>

                    {/* Our Services */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="p-6 rounded-xl"
                      style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}
                    >
                      <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Our Education Services</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white rounded-lg">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                              <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800" style={{ color: mainColor }}>Curriculum Development</h4>
                              <p className="text-sm text-gray-600">Designing culturally relevant and effective educational materials</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white rounded-lg">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                              <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800" style={{ color: mainColor }}>Teacher Training</h4>
                              <p className="text-sm text-gray-600">Professional development for educators at all levels</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white rounded-lg">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                              <svg className="w-5 h-5" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800" style={{ color: mainColor }}>School Infrastructure</h4>
                              <p className="text-sm text-gray-600">Supporting the development of educational facilities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="p-6 text-center text-white shadow-lg rounded-xl sm:rounded-2xl"
                      style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
                    >
                      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                        Transform Education Together
                      </h3>
                      <p className="mb-6 text-lg text-white/90 sm:text-xl">
                        Partner with us to create lasting educational impact in Ethiopian communities
                      </p>
                      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:opacity-90 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                          style={{ color: mainColor }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Contact Us
                        </a>
                        <a 
                          href="/get-involved" 
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Get Involved
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Key Impact Areas */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-12"
              >
                <div className="p-6 rounded-xl" style={{ border: `1px solid ${colorVariants.light}`, background: 'linear-gradient(to right, #dcfce7, #bbf7d0)' }}>
                  <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Key Impact Areas</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Girls' Education",
                        description: "Promoting gender equality through education access",
                        icon: "User"
                      },
                      {
                        title: "Vocational Training",
                        description: "Developing practical skills for economic empowerment",
                        icon: "Briefcase"
                      },
                      {
                        title: "Teacher Development",
                        description: "Building capacity of educators for quality teaching",
                        icon: "AcademicCap"
                      }
                    ].map((area, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full" style={{ backgroundColor: colorVariants.light }}>
                            <svg className="w-6 h-6" style={{ color: mainColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {area.icon === "User" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                              {area.icon === "Briefcase" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                              {area.icon === "AcademicCap" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 016.16 1.538 11.962 11.962 0 01-7.168 2.634 11.92 11.92 0 01-7.168-2.634c-.02-.01-.04-.028-.06-.045m12.16 3.422a12.083 12.083 0 016.16 1.538 11.962 11.962 0 01-7.168 2.634 11.92 11.92 0 01-7.168-2.634c-.02-.01-.04-.028-.06-.045" />}
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-800" style={{ color: mainColor }}>{area.title}</h4>
                          <p className="text-sm text-gray-600">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            </motion.article>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow-2xl lg:hidden rounded-t-2xl"
           style={{ 
             transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(calc(100% - 60px))',
             maxHeight: '85vh'
           }}>
        <div 
          className="flex items-center justify-center h-12 cursor-pointer rounded-t-2xl"
          style={{ background: `linear-gradient(to right, ${colorVariants.dark}, ${colorVariants.medium})` }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="font-semibold text-white">
              {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </span>
            <svg 
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 48px)' }}>
          <SidebarNavigation 
            title="Our Solutions"
            links={solutionsSidebarLinks}
            brandColor="custom"
            customColor={colorVariants.medium}
            enableAnimations={false}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default EducationSolutions;