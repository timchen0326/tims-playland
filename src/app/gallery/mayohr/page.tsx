"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();
  
  const timelineItems = [
    {
      icon: "/unnamed.png",
      alt: "Freecodecamp",
      route: 'https://www.freecodecamp.org/',
      text: "BMI Calculator: Check your Body Mass Index quickly and easily.",
      color: "border-teal-500"
    },
    {
      icon: "/pngtree-bmi-cartoon-vector-illustration-depicting-medical-concept-unhealthy-vector-body-vector-png-image_47239794.jpg",
      alt: "BMI",
      route: '/gallery/mayohr/bmi',
      text: "BMI Calculator: Check your Body Mass Index quickly and easily.",
      color: "border-teal-500"
    },
    {
      icon: "/9b205bc30c406fdff6e173156594b8cb.jpg",
      alt: "拍賣球員卡網站",
      route: 'https://shopping-cart-k73y.vercel.app/',
      text: "Shopping Cart: Explore our e-commerce platform with Tim as your guide.",
      color: "border-blue-500"
    },
    {
      icon: "/images (1).png",
      alt: "learngitbranching",
      route: 'https://learngitbranching.js.org/',
      text: "Shopping Cart: Explore our e-commerce platform with Tim as your guide.",
      color: "border-blue-500"
    },
    {
      icon: "/json-editor-online-icon-filled-256.webp",
      alt: "JsonEditor",
      route: '/gallery/mayohr/jsonEditor',
      text: "JSON Editor: Edit and validate JSON data with our powerful online tool.",
      color: "border-indigo-500"
    },
    {
      icon: "/istockphoto-921617728-612x612.jpg",
      alt: "ReactD3Tree",
      route: '/gallery/mayohr/reactD3Tree',
      text: "React D3 Tree: Visualize hierarchical data with interactive tree diagrams.",
      color: "border-purple-500"
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Progress Report Timeline</h1>
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        
        {timelineItems.map((item, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-100 shadow-xl w-24 h-24 rounded-full">
              <img 
                src={item.icon}
                className={`w-20 h-20 rounded-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300 border-4 ${item.color} ml-2`}
                alt={item.alt}
                onClick={() => router.push(item.route)}
              />
            </div>
            <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <h3 className={`mb-3 font-bold text-gray-800 text-xl`}>{item.alt}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
