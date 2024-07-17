"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { id: 'mayohr', src: '/mayohr.jpg', alt: 'MAYOHR', link: '/projects/mayohr', description: 'Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.', tags: ['Form Development', 'TSX', 'Next.Js', 'React', 'VS Code'] },
    ...(userId === "timchen0326" || userId === "sallytsai0620"
      ? [{ id: 'sally', src: '/IMG_4605.JPG', alt: 'Sally', link: '/projects/sally', description: 'Meet Sally, your expert in professional development.', tags: ['Career', 'Development', 'Mentorship'] }]
      : [])
  ];

  return (
    <AnimatePresence>
      <div className="flex flex-wrap items-start justify-start min-h-screen p-6">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(icon.link)}
            className="cursor-pointer m-4 transform transition-transform duration-300 w-80 rounded-lg shadow-lg p-4 bg-white"
          >
            <div className="relative h-40 overflow-hidden rounded-lg mb-4">
              <motion.img 
                src={icon.src}
                className="absolute inset-0 w-full h-full object-cover"
                alt={icon.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{icon.alt}</h3>
              <p className="text-sm mb-4">{icon.description}</p>
              <div className="flex flex-wrap justify-center space-x-2">
                {icon.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default Gallery;
