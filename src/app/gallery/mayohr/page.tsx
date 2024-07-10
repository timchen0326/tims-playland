"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start p-6 min-h-screen">
      <div className="hover:scale-105 transition-transform duration-300 pointer-hover">
        <img 
          src="/9b205bc30c406fdff6e173156594b8cb.jpg" 
          className="mt-3 w-25 h-40 rounded-full shadow-lg" // Adjusted width and height to make it smaller like an icon
          alt="Sally" 
          onClick={() => {
            router.push('https://shopping-cart-k73y.vercel.app/');
          }}
        />
      </div>
    </div>
  );
}

export default About;
