import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  HeartIcon,
  UsersIcon,
  ShieldCheckIcon,
  BeakerIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Programs = () => {
  const programs = [
    {
      id: 'education',
      icon: AcademicCapIcon,
      title: 'Education',
      description: 'Providing quality education and lifelong learning opportunities for all',
      stats: ['500+ schools supported', '50,000+ students reached', '85% graduation rate'],
      color: 'blue'
    },
    {
      id: 'health',
      icon: HeartIcon,
      title: 'Health & Nutrition',
      description: 'Improving health outcomes and nutrition security across communities',
      stats: ['100+ clinics supported', '1M+ people vaccinated', '75% reduction in malnutrition'],
      color: 'red'
    },
    {
      id: 'youth',
      icon: UsersIcon,
      title: 'Youth Empowerment',
      description: 'Building skills and creating opportunities for Africa\'s future leaders',
      stats: ['10,000+ youth trained', '85% employment rate', '500+ startups launched'],
      color: 'green'
    },
    {
      id: 'gender',
      icon: ShieldCheckIcon,
      title: 'Gender Equality',
      description: 'Promoting women\'s rights, safety, and equal opportunities',
      stats: ['5,000+ women entrepreneurs', '100+ women-led cooperatives', '40% leadership increase'],
      color: 'purple'
    },
    {
      id: 'innovation',
      icon: BeakerIcon,
      title: 'Innovation & Research',
      description: 'Developing sustainable solutions through research and technology',
      stats: ['50+ research projects', '30+ patents filed', '100+ innovative solutions'],
      color: 'orange'
    },
    {
      id: 'climate',
      icon: GlobeAltIcon,
      title: 'Climate Resilience',
      description: 'Building communities resilient to climate change impacts',
      stats: ['1M+ trees planted', '500+ solar installations', '100+ climate-smart farms'],
      color: 'teal'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive solutions addressing Africa's most pressing challenges through 
              sustainable development and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${program.color}-100 text-${program.color}-600 mb-6 group-hover:bg-${program.color}-600 group-hover:text-white transition-colors`}>
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {program.title}
                  </h3>
                  <p className="mb-6 text-gray-600">
                    {program.description}
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    {program.stats.map((stat, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                        {stat}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center font-medium text-blue-600 group-hover:text-blue-800">
                    Learn more
                    <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Support Our Programs
          </h2>
          <p className="mb-10 text-xl text-gray-600">
            Your donation helps us continue and expand these vital programs across Africa.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-xl"
          >
            Donate to Our Programs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;