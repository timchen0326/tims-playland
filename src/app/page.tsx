import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Welcome to My Website
        </span>
      </h1>
      <p className="text-lg mb-12 text-gray-700 text-center max-w-xl">
        Discover the latest trends in technology and innovation. Dive into our insightful articles, browse our gallery, and learn more about what drives us.
      </p>
      <div className="flex space-x-6">
        <a
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          About
        </a>
        <a
          href="/gallery"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Gallery
        </a>
      </div>
    </div>
  );
};

export default HomePage;
