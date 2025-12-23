import React from 'react';

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">News & Updates</h1>
          <p className="text-xl md:text-2xl opacity-90">Stay informed about our work</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-xl text-center text-gray-600">Blog and news content coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default News;