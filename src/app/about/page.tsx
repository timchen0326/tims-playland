import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-black-50 ">
      <h2 className="text-4xl font-bold text-white-800 mb-4">Hi Sally</h2>
      <Image src="/IMG_4605.JPG" className="mt-3 w-1/4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105" alt="Sally" />
      <p className="text-lg text-white-600 mt-4">I love you</p>
    </div>
  );
}

export default About;
