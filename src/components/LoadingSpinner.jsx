import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent border-r-transparent"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;