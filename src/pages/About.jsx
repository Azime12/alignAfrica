import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon,
  UsersIcon,
  GlobeAltIcon,
  LightBulbIcon,
  HandRaisedIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const About = () => {
  // Team members
  const teamMembers = [
    {
      name: 'Yonas Mamo',
      role: 'Founder & Executive Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Founded alignAfrica in 2009 with a vision to transform development in Africa through sustainable solutions.',
      expertise: ['Strategic Leadership', 'Social Entrepreneurship', 'Community Development']
    },
    {
      name: 'Dr. Alemayehu Tadesse',
      role: 'Board Chairperson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Public health expert with 20+ years of experience in international development and policy.',
      expertise: ['Public Health', 'Policy Advocacy', 'Program Management']
    },
    {
      name: 'Martha Getachew',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading our program implementation with expertise in gender equality and youth empowerment.',
      expertise: ['Gender Studies', 'Youth Development', 'Monitoring & Evaluation']
    },
  ];

  // Core values
  const values = [
    {
      icon: HeartIcon,
      title: 'Community First',
      description: 'We prioritize community needs and involve local leaders in every decision.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships to create sustainable change.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace creative solutions to address complex development challenges.'
    },
    {
      icon: ChartBarIcon,
      title: 'Transparency',
      description: 'We maintain open communication and clear reporting on all our activities.'
    },
  ];

  // Timeline
  const timeline = [
    { year: '2009', event: 'Founded as Tiruzer Ethiopia for Africa' },
    { year: '2012', event: 'Expanded to regional operations across Ethiopia' },
    { year: '2015', event: 'Launched first international partnership program' },
    { year: '2018', event: 'Rebranded to alignAfrica with expanded mission' },
    { year: '2021', event: 'Reached 500,000+ direct beneficiaries milestone' },
    { year: '2024', event: 'Expanded operations to 3 additional African countries' },
  ];

  // Geographic presence
  const countries = [
    { name: 'Ethiopia', projects: 12, beneficiaries: '500,000+' },
    { name: 'Kenya', projects: 4, beneficiaries: '75,000+' },
    { name: 'Uganda', projects: 3, beneficiaries: '50,000+' },
    { name: 'Tanzania', projects: 2, beneficiaries: '30,000+' },
    { name: 'Rwanda', projects: 2, beneficiaries: '25,000+' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="absolute inset-0 z-0 bg-black/40">
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Community in Africa"
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/20">
              About alignAfrica
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Building Sustainable Futures
              <br />
              <span className="text-yellow-400">Across Africa</span>
            </h1>
            <p className="mb-10 text-xl md:text-2xl opacity-90">
              We are a local nonprofit organization dedicated to driving sustainable 
              development and creating positive change across Africa through innovation, 
              collaboration, and community empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/impact" 
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-blue-900 transition-colors bg-yellow-500 rounded-full hover:bg-yellow-400"
              >
                See Our Impact
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-colors rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    Our Mission
                  </div>
                  <p className="text-xl text-gray-700">
                    To empower African communities by aligning resources, expertise, 
                    and partnerships to create sustainable development solutions that 
                    address the continent's most pressing challenges.
                  </p>
                </div>
                
                <div>
                  <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full">
                    Our Vision
                  </div>
                  <p className="text-xl text-gray-700">
                    A prosperous, equitable, and sustainable Africa where every 
                    community has the resources and opportunities to thrive.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Our Approach
              </h3>
              <div className="space-y-4">
                {[
                  'Community-Led Development',
                  'Evidence-Based Programming',
                  'Sustainable Partnerships',
                  'Innovative Solutions',
                  'Transparent Operations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="flex-shrink-0 w-6 h-6 mr-3 text-green-500" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Journey
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From a local initiative to a pan-African force for change
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                      <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {item.year}
                      </div>
                      <p className="text-lg font-medium text-gray-900">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 transition-shadow bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center mb-6 text-blue-600 bg-blue-100 w-14 h-14 rounded-xl">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Where We Work
            </h2>
            <p className="max-w-3xl mx-auto text-xl opacity-90">
              Our impact spans across multiple African countries
            </p>
          </div>
          
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center mb-6">
                  <MapPinIcon className="w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold">Our Presence</h3>
                </div>
                
                <div className="space-y-4">
                  {countries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-white/10">
                      <div>
                        <span className="font-semibold">{country.name}</span>
                        <span className="ml-2 text-sm opacity-75">
                          {country.projects} projects
                        </span>
                      </div>
                      <div className="font-semibold text-yellow-400">
                        {country.beneficiaries}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden shadow-2xl aspect-w-16 aspect-h-9 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Africa map with locations"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Passionate professionals dedicated to creating change
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="overflow-hidden transition-shadow bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-4 font-semibold text-blue-600">{member.role}</p>
                  <p className="mb-6 text-gray-600">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about/team"
              className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Meet the full team
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Transparency & Accountability
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We believe in open communication and responsible stewardship of resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center bg-white rounded-2xl">
              <div className="mb-4 text-5xl font-bold text-blue-600">80%+</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Program Expenses
              </h3>
              <p className="text-gray-600">
                Majority of donations go directly to program beneficiaries
              </p>
            </div>
            
            <div className="p-8 text-center bg-white rounded-2xl">
              <div className="mb-4 text-5xl font-bold text-green-600">A+</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Financial Rating
              </h3>
              <p className="text-gray-600">
                Highest rating from charity watchdog organizations
              </p>
            </div>
            
            <div className="p-8 text-center bg-white rounded-2xl">
              <div className="mb-4 text-5xl font-bold text-teal-600">100%</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Public Reporting
              </h3>
              <p className="text-gray-600">
                All financial reports and impact data publicly available
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/transparency"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-blue-600 transition-colors bg-white border-2 border-blue-200 rounded-full hover:bg-blue-50"
            >
              View Financial Reports
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Our Mission
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl opacity-90">
            Be part of creating sustainable change across Africa
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link 
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl"
            >
              Support Our Work
            </Link>
            
            <Link 
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:bg-white/10"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;