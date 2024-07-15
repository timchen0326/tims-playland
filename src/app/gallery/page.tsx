"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/util/breadcrumb/page';

const Gallery = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem("userId") ?? '';
      setUserId(value);
    }
  }, []);

  const MotionImage = motion.img;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1
        }
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: [0, 0.5, 0], scale: 1.5, transition: { duration: 2, repeat: Infinity } }
  };

  return (
    <AnimatePresence>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center min-h-screen p-6"
      >
        <motion.div
          variants={itemVariants}
          className="relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <MotionImage 
            src={userId === "timchen0326" || userId === "sallytsai0620" ? "/IMG_4605.JPG" : "/mayo_human_capital_logo.JPG"}
            className="w-40 h-40 rounded-full shadow-2xl z-10 relative"
            alt={userId === "timchen0326" || userId === "sallytsai0620" ? "Sally" : "Mayo HR"}
            onClick={() => router.push(userId === "timchen0326" || userId === "sallytsai0620" ? '/gallery/sally' : '/gallery/mayohr')}
            whileHover="hover"
            variants={imageVariants}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full blur-xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-black"
            animate={{ 
              color: isHovered ? ['#000', '#333', '#666', '#000'] : '#000'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {userId === "timchen0326" || userId === "sallytsai0620" ? "Sally's Gallery" : "Mayo HR Gallery"}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Click the image to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Gallery;
