// src/pages/legacy/LegacyGirma.jsx
import React from 'react';
import { motion } from 'framer-motion';

function LegacyGirma() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/girma-banner.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2972ac]/80 to-[#1e6091]/70"></div>
        <div className="relative flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4"
              >
                In Memoriam
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 sm:text-xl md:text-2xl"
              >
                Honoring the Legacy of H.E. Girma Wolde Giorgis
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8 mx-auto sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 bg-white shadow-xl rounded-xl sm:rounded-2xl sm:p-8 md:p-10">
            {/* Memorial Header */}
            <div className="mb-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-[#2972ac]/10 rounded-full">
                  <svg className="w-12 h-12 text-[#2972ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              
              <div className="h-1 mx-auto bg-gradient-to-r from-[#2972ac] to-sky-600 rounded-full w-32 mb-6"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">A Tribute to a Great Leader</h2>
              <p className="mt-2 text-lg text-[#2972ac]">Former President of the Federal Republic of Ethiopia</p>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10"
            >
              <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50">
                <p className="text-lg text-gray-700">
                  We pay tribute to the remarkable legacy of H.E. Girma Wolde Giorgis, former President of the Federal Republic of Ethiopia and esteemed patron of alignAfrica, whose recent passing leaves an indelible mark on Ethiopia and beyond.
                </p>
              </div>
            </motion.div>

            {/* Legacy Sections */}
            <div className="space-y-8">
              {/* Leadership Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#2972ac]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#2972ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Visionary Leadership</h3>
                  </div>
                  
                  <p className="text-gray-700">
                    Throughout his distinguished career, President Girma Wolde Giorgis exemplified unwavering dedication to environmental conservation, cultural heritage, and community development. His visionary leadership extended beyond political borders, advocating passionately for the protection of Ethiopia's natural resources and the preservation of its rich cultural tapestry.
                  </p>
                </div>
              </motion.div>

              {/* Multi-Purpose Village Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-sky-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-sky-100">
                      <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">The Multi-Purpose Village Legacy</h3>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700">
                      In recognition of his profound impact, President Girma Wolde Giorgis graciously allocated 46 hectares of land in Ambo town to alignAfrica, transforming it into the Multi-Purpose Village—a testament to his commitment to education, environmental stewardship, and community empowerment.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <p className="text-sm font-medium text-gray-700">
                        <span className="font-bold text-[#2972ac]">46 Hectares:</span> Land allocated for community development
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50">
                      <p className="text-sm font-medium text-gray-700">
                        <span className="font-bold text-[#2972ac]">Vibrant Hub:</span> Cultural center and educational facility
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* International Recognition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#2972ac]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#2972ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Global Recognition</h3>
                  </div>
                  
                  <p className="text-gray-700">
                    President Girma Wolde Giorgis's influence transcended national boundaries, earning him international acclaim, including the prestigious President Girma Wolde-Giorgis Environmental Award, established in his honor by I Change Nations. This accolade reflects his tireless efforts in promoting sustainable development and environmental advocacy on a global scale.
                  </p>
                </div>
              </motion.div>

              {/* Legacy and Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="p-6 border border-blue-200 rounded-xl bg-gradient-to-br from-sky-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-sky-100">
                      <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Enduring Legacy</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        As we mourn his loss, we celebrate President Girma Wolde Giorgis's enduring legacy—a legacy of integrity, compassion, and visionary leadership. His legacy will continue to inspire generations to come, guiding us as we strive to build upon his vision of a prosperous and sustainable future for all.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg">
                      <p className="text-gray-700">
                        In honor of his memory, alignAfrica remains committed to upholding President Girma Wolde Giorgis's values and advancing his noble causes. Together, we carry forward his legacy with gratitude and reverence, knowing that his spirit will forever guide our efforts towards positive change.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Rest in Peace */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="p-8 text-white shadow-lg bg-gradient-to-r from-[#2972ac] to-sky-700 rounded-xl sm:rounded-2xl">
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-2xl font-bold">May his soul rest in eternal peace</h4>
                  <p className="text-blue-100">1935 - 2018</p>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="my-10"
              >
                <hr className="h-px bg-gradient-to-r from-blue-200 to-sky-200" />
              </motion.div>

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <blockquote className="max-w-2xl mx-auto">
                  <svg className="w-8 h-8 mx-auto text-[#2972ac]/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="mb-4 text-xl italic text-gray-700">
                    "A true leader's legacy is not measured by the power they held, but by the lives they touched and the positive change they inspired."
                  </p>
                  <footer className="text-gray-600">— In memory of H.E. Girma Wolde Giorgis</footer>
                </blockquote>
              </motion.div>

              {/* Memorial Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="pt-6 text-center"
              >
                <div className="inline-block p-4 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-sky-50">
                  <p className="text-sm text-gray-600">
                    This memorial page serves as a tribute to our esteemed patron and supporter.<br/>
                    His vision continues to guide our work at alignAfrica.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-[#2972ac] text-white rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

export default LegacyGirma;