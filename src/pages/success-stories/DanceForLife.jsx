// src/pages/success-stories/dance-for-life/DanceForLife.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNavigation from '../../components/sections/SidebarNavigation';

// Sidebar links for Success Stories section
const successStoriesSidebarLinks = [
  { 
    name: "Success Stories Home", 
    href: "/success-stories", 
    icon: "Home" 
  },
  { 
    name: "Hope of Addicted", 
    href: "/success-stories/hope-addicted", 
    icon: "Heart" 
  },
  { 
    name: "RIF Project", 
    href: "/success-stories/rif-project", 
    icon: "Activity" 
  },
  { 
    name: "Dance for Life", 
    href: "/success-stories/dance-for-life", 
    icon: "Music" 
  },
  { 
    name: "TARGET Project", 
    href: "/success-stories/target-project", 
    icon: "Target" 
  },
  { 
    name: "Youth Voice", 
    href: "/success-stories/youth-voice", 
    icon: "MessageCircle" 
  }
];

function DanceForLife() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      {/* Hero Banner Section */}
      <header 
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/success-storie-banner.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/60"></div>
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
                  DANCE FOR LIFE
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-purple-100 sm:text-xl md:text-2xl"
                >
                  Empowering Youth through Rhythm and Education
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
                title="Success Stories"
                links={successStoriesSidebarLinks}
                brandColor="purple"
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
            >
              {/* Main Title */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Success Story: Transforming Lives through Dance and Education
                    </h2>
                    <p className="text-purple-600">Debre-Berhan, Amhara Region – July 2024</p>
                  </div>
                </div>
              </motion.section>

              <div className="column-group lg:flex lg:gap-8">
                {/* Left Column */}
                <div className="column column-left lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="/images/dfl.jpg" 
                        alt="Dance for Life students performing" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">The Challenge</h4>
                      <p className="text-gray-700">
                        Entering secondary school is a pivotal transition for Ethiopian youth, marked by the shift from primary education to a broader world of possibilities and risks. Despite their generally low-risk behaviors, many students face a significant knowledge gap regarding HIV prevention and sexual and reproductive health. Addressing this gap is crucial to reducing infection rates and fostering healthier communities.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">The Approach</h3>
                      <p className="text-gray-700">
                        The Dance4Life Project took an innovative approach to education by integrating music, dance, and peer-led education to engage students effectively. The heart-connection-tour team captivated over 1,000 students at Debre-Berhan Debre-Eba Secondary and Preparatory School with dynamic performances that doubled as powerful educational tools. These events were designed not only to entertain but to educate and inspire.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Mass awareness activities followed, including comprehensive training sessions on sexual and reproductive health, STD prevention, and peer pressure management. By integrating behavior change communication with traditional education, the project created a unique learning environment that resonated deeply with the students.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">The Impact</h3>
                      <p className="text-gray-700">
                        The results have been nothing short of transformative. Prior to the project's implementation, many students lacked essential knowledge about HIV and sexual health. Post-intervention, students demonstrated a remarkable increase in their understanding of STDs. In particular, girls from the school reported significant improvements in their knowledge and attitudes toward HIV prevention.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Behavioral changes have been equally impressive. Many students have delayed the initiation of sexual activity, reduced the number of sexual partners, and adopted safer sexual practices. These changes reflect a deep-seated shift in attitudes, driven by both the educational content and the engaging delivery methods used.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Moreover, the impact extends beyond the school walls. Over 2,000 girls and boys, alongside school staff and local health officials, have benefited from the training and awareness efforts. The community has embraced the project's goals, amplifying its reach and effectiveness.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">A Lasting Legacy</h3>
                      <p className="text-gray-700">
                        The success of the Dance4Life Project at Debre-Berhan Debre-Eba Secondary and Preparatory School serves as a beacon of hope and a model for future initiatives. It demonstrates the power of combining education with entertainment, peer-led approaches, and community engagement to foster significant behavioral change and enhance knowledge.
                      </p>
                      <p className="mt-3 text-gray-700">
                        As we celebrate these achievements, the Dance4Life Project continues to strive towards its mission of equipping Ethiopian youth with the tools and knowledge needed to prevent HIV and make informed decisions about their sexual and reproductive health.
                      </p>
                      <div className="p-4 mt-4 border border-purple-200 rounded-lg bg-purple-50">
                        <p className="font-semibold text-gray-800">Contact Information:</p>
                        <p className="text-gray-700">
                          For more information or to get involved, please contact Mr. Yonas Mamo at alignafrica@gmail.com
                        </p>
                      </div>
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
                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">Empowering Youth through Dance4Life: A Success Story</h2>
                      <p className="text-gray-700">
                        <span className="font-semibold">Overview:</span> Temesgen Belay, a student involved with Dance4Life by alignafrica, exemplifies the program's impact on both personal and community levels. His story highlights the significant benefits of the Dance4Life initiative in educating and empowering young people.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Background</h4>
                      <p className="text-gray-700">
                        Dance4Life, implemented by alignafrica, is a comprehensive program focused on sexual and reproductive health education. It includes workshops, follow-up sessions, and student-parent education to address topics such as healthy relationships, peer pressure, and decision-making. The program aims to delay sexual initiation among adolescents and promote responsible sexual behavior.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Success Story: Temesgen Belay</h4>
                      <div className="p-4 italic text-center border border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                        <p className="text-lg text-gray-700">
                          "My friends are incredible. I've never met young people so informed."
                        </p>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Before joining Dance4Life, Temesgen had limited knowledge about sexual and reproductive health. The program equipped him with essential leadership skills and a deep understanding of pregnancy prevention and HIV/AIDS.
                      </p>
                      <div className="p-4 mt-4 border border-purple-200 rounded-lg bg-purple-50">
                        <p className="text-gray-700">
                          One Dance4Life Agent Crew member shares: "I learned leadership skills in Sexual and Reproductive Health and valuable information about pregnancy prevention and HIV/AIDS. It wasn't until I joined Dance4Life that I truly grasped these concepts. This knowledge has been crucial, and I continue to share it on my college campus."
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Community Impact</h4>
                      <p className="text-gray-700">
                        In late 2013, Dance4Life Agent Crew made a significant impact during Debre Birhan Town's Youth HIV/AIDS Awareness Day. They successfully recruited 1,545 college students for HIV testing and engaged homeless community members in an awareness event. The Program Manager of World Start with Me at alignafrica reported that community members were impressed by the knowledge and dedication of the youth volunteers.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Program Reach</h3>
                      <p className="mb-3 text-gray-700">Dance4Life includes:</p>
                      <ul className="mb-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-700">Two days of workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-700">6- to 7-hour follow-up sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-700">Student-parent education sessions</span>
                        </li>
                      </ul>
                      <p className="text-gray-700">
                        The program reaches approximately 1,200 youth annually across four districts and impacts an additional 1,000 through the teen council's activities.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h3 className="mb-3 text-xl font-bold text-gray-800">Evidence of Success</h3>
                      <p className="mb-3 text-gray-700">
                        As an evidence-based intervention, Dance4Life has been shown to:
                      </p>
                      <ul className="mb-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                          <span className="text-gray-700">Delay sexual initiation among sexually inexperienced adolescents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full"></div>
                          <span className="text-gray-700">Increase condom use among sexually active adolescents</span>
                        </li>
                      </ul>
                      <p className="text-gray-700">
                        Collaborations with four District Health Offices for program evaluation suggest positive outcomes, reflecting the favorable feedback from both the community and Dance4Life Agent Crew members.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Participant Reflection</h4>
                      <div className="p-4 italic text-center border border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                        <p className="text-lg text-gray-700">
                          "I'm now well-informed about pregnancy prevention, HIV/AIDS, family planning, and sexual health. I feel prepared to educate others and lead a responsible life. I'm thankful to alignafrica for making this possible."
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Conclusion</h4>
                      <p className="text-gray-700">
                        Dance4Life by alignafrica demonstrates the effectiveness of modern health education in empowering youth. By providing essential knowledge and leadership skills, the program fosters responsible decision-making and makes a positive impact on both individuals and their communities.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                      <h2 className="mb-4 text-2xl font-bold text-gray-800">Lessons Learned for Future Engagement</h2>
                      <p className="text-gray-700">
                        The Dance4Life Project highlights the importance of engaging youth directly in health education programs. By centering youth in activities and utilizing innovative methods such as music and dance, the program effectively communicated crucial health messages. For future initiatives, involving youth as central participants and adopting creative communication strategies can significantly enhance engagement and impact.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Another key lesson is the value of peer-led approaches and comprehensive training. Empowering peer educators to lead health education sessions ensures that messages are more relatable and effective. Additionally, providing thorough training on a range of topics related to sexual and reproductive health, as well as STD prevention, is essential for driving meaningful behavioral change.
                      </p>
                      <p className="mt-3 text-gray-700">
                        Community involvement and strong partnerships are also critical for sustainability and success. Engaging school staff, local health officials, and community organizations helps in integrating health education into the broader community context. Measuring outcomes, recognizing participant achievements, and tailoring programs to local needs further strengthen the effectiveness and longevity of such initiatives.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Impact Statistics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <div className="p-6 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50">
                  <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Dance4Life Impact at a Glance</h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-purple-600">1,000+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Students Engaged</div>
                      <div className="mt-1 text-sm text-gray-600">At Debre-Berhan School</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-purple-600">2,000+</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Youth Benefited</div>
                      <div className="mt-1 text-sm text-gray-600">Including staff & officials</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-purple-600">1,545</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">HIV Tests</div>
                      <div className="mt-1 text-sm text-gray-600">College students tested</div>
                    </div>
                    
                    <div className="p-6 text-center bg-white shadow-sm rounded-xl">
                      <div className="text-4xl font-bold text-purple-600">4</div>
                      <div className="mt-2 text-lg font-semibold text-gray-800">Districts</div>
                      <div className="mt-1 text-sm text-gray-600">Annual program reach</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <div className="p-8 text-center text-white shadow-lg bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl sm:rounded-2xl">
                  <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                    Support Dance4Life's Mission
                  </h3>
                  <p className="mb-6 text-lg text-purple-100 sm:text-xl">
                    Help empower more youth through dance, education, and health awareness
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-purple-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-purple-50 sm:py-4 sm:px-8 hover:scale-105 sm:text-base"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Support Our Program
                    </a>
                    <a 
                      href="/success-stories" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/20 sm:py-4 sm:px-8 sm:text-base"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      More Success Stories
                    </a>
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
          className="flex items-center justify-center h-12 cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-2xl"
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
            title="Success Stories"
            links={successStoriesSidebarLinks}
            brandColor="purple"
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

export default DanceForLife;