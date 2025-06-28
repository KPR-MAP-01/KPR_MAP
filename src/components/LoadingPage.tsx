
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      <div className="text-center text-white">
        {/* Logo Circle */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">KPR</span>
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl font-bold mb-4 tracking-wide">
          KPR CAS
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-200 mb-2">
          Campus Navigation System
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          Find your way around campus
        </p>
        
        {/* Loading Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
