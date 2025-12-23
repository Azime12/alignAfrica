import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UsersIcon,
  GlobeAltIcon,
  HeartIcon,
  BuildingLibraryIcon,
  ArrowRightIcon,
  TrophyIcon,
  ChartBarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Impact = () => {
  const impactStats = [
    { icon: UsersIcon, value: '706,781', label: 'Direct Beneficiaries', change: '+12%' },
    { icon: HeartIcon, value: '7.5M', label: 'Indirectly Reached', change: '+15%' },
    { icon: BuildingLibraryIcon, value: '500+', label: 'Schools & Clinics', change: '+8%' },
    { icon: GlobeAltIcon, value: '5', label: 'Countries', change: '+1 new' },
  ];

  const successStories = [
    {
      title: 'Clean Water Transforms Village',
      location: 'Gambella, Ethiopia',
      impact: 'Reduced waterborne diseases by 80%',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Youth Entrepreneurship Program',
      location: 'Addis Ababa, Ethiopia',
      impact: 'Created 500+ new businesses',
      image: 'https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Women Empowerment Initiative',
      location: 'Amhara Region, Ethiopia',
      impact: 'Increased women\'s income by 300%',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Measuring success by the lives changed and communities transformed across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-600">Our reach and results since 2009</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-blue-600 bg-blue-100 rounded-full">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mb-1 text-sm text-gray-600 md:text-base">
                  {stat.label}
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Stories of Change
            </h2>
            <p className="text-xl text-gray-600">Real impact in real communities</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {successStories.map((story, index) => (
              <div key={index} className="overflow-hidden bg-white shadow-lg rounded-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {story.location}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {story.title}
                  </h3>
                  <div className="flex items-center font-semibold text-green-600">
                    <TrophyIcon className="w-5 h-5 mr-2" />
                    {story.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Transparency & Reports
            </h2>
            <p className="text-xl text-gray-600">Download our annual reports and financial statements</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <ChartBarIcon className="w-10 h-10 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">PDF</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {year} Annual Report
                </h3>
                <p className="mb-6 text-gray-600">
                  Comprehensive overview of our programs, impact, and financials.
                </p>
                <button className="w-full px-4 py-2 font-semibold text-blue-600 transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;