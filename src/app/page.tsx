import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-extrabold mb-4 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Welcome to My Website
        </span>
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        Explore the future of technology and innovation.
      </p>
      <div className="flex space-x-4">
        <a
          href="/about"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          About
        </a>
        <a
          href="/gallery"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Gallery
        </a>
      </div>
    </div>
  );
};

export default HomePage;
