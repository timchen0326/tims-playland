"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-start p-6 min-h-screen space-x-6">
      <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img 
          src="/pngtree-bmi-cartoon-vector-illustration-depicting-medical-concept-unhealthy-vector-body-vector-png-image_47239794.jpg" 
          className="w-32 h-32 rounded-full shadow-lg" // Adjusted width and height to make it smaller like an icon
          alt="BMI" 
          onClick={() => {
            router.push('/gallery/mayohr/bmi');
          }}
        />
      </div>
      <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img 
          src="/9b205bc30c406fdff6e173156594b8cb.jpg" 
          className="w-25 h-32 rounded shadow-lg" // Adjusted width and height to make it smaller like an icon
          alt="Sally" 
          onClick={() => {
            router.push('https://shopping-cart-k73y.vercel.app/');
          }}
        />
      </div>
      <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img 
          src="/json-editor-online-icon-filled-256.webp" 
          className="w-32 h-32 rounded shadow-lg" // Adjusted width and height to make it smaller like an icon
          alt="JsonEditor" 
          onClick={() => {
            router.push('/gallery/mayohr/jsonEditor');
          }}
        />
      </div>
      <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img 
          src="/istockphoto-921617728-612x612.jpg" 
          className="w-32 h-32 rounded shadow-lg" // Adjusted width and height to make it smaller like an icon
          alt="JsonEditor" 
          onClick={() => {
            router.push('/gallery/mayohr/reactD3Tree');
          }}
        />
      </div>

    </div>
  );
}

export default About;
