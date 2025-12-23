import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 text-white bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Get Involved</h1>
          <p className="text-xl md:text-2xl opacity-90">Multiple ways to make a difference</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p className="text-xl text-gray-600">Page content coming soon...</p>
          <Link to="/" className="inline-block mt-6 text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;