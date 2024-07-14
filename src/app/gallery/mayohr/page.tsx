"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MayoHR = () => {
  const router = useRouter();
  
  const timelineItems = [
    {
      icon: "/unnamed.png",
      alt: "Freecodecamp",
      route: 'https://www.freecodecamp.org/',
      text: "Freecodecamp: Learn to code for free with interactive lessons and a supportive community.",
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
      text: "拍賣球員卡網站: Explore our e-commerce platform with Tim as your guide.",
      color: "border-blue-500"
    },
    {
      icon: "/images (1).png",
      alt: "learngitbranching",
      route: 'https://learngitbranching.js.org/',
      text: "Learn Git Branching: Master Git concepts through visual tutorials and interactive exercises.",
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
      alt: "React D3 Tree",
      route: '/gallery/mayohr/reactD3Tree',
      text: "React D3 Tree: Visualize hierarchical data with interactive tree diagrams.",
      color: "border-purple-500"
    },
  ];
    

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center p-6 min-h-screen "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-10 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Progress Report Timeline
      </motion.h1>
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-purple-300"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index} 
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            variants={itemVariants}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div 
              className="z-20 flex items-center order-1 bg-white shadow-xl w-24 h-24 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.img 
                src={item.icon}
                className={`w-20 h-20 rounded-full object-cover cursor-pointer border-4 ${item.color} ml-2`}
                alt={item.alt}
                onClick={() => router.push(item.route)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
            <motion.div 
              className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            >
              <h3 className={`mb-3 font-bold text-gray-800 text-xl`}>{item.alt}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MayoHR;