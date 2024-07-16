"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/util/breadcrumb/page';

const Gallery = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem("userId") ?? '';
      setUserId(value);
    }
  }, []);

  const icons = [
    { id: 'mayohr', src: '/mayo_human_capital_logo.JPG', alt: 'Mayo HR', link: '/gallery/mayohr' },
    ...(userId === "timchen0326" || userId === "sallytsai0620" 
      ? [{ id: 'sally', src: '/IMG_4605.JPG', alt: 'Sally', link: '/gallery/sally' }] 
      : [])
  ];

  return (
    <AnimatePresence>
      <div className="flex flex-wrap items-start justify-start min-h-screen p-6">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(icon.link)}
            className="cursor-pointer m-4"
          >
            <img 
              src={icon.src}
              className="w-16 h-16 rounded-full"
              alt={icon.alt}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default Gallery;
