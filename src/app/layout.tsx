"use client";
import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/globals.css';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/util/breadcrumb/page';
import { Providers } from './providers';
import users from '@/util/users';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#3b82f6" }
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <title>My Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-white">
        <Providers>
          <motion.header 
            className="bg-white shadow-lg"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mx-auto p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4 flex-grow">
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image src="/pikachu.svg" alt="Pikachu Logo" width={50} height={50} />
                  <h1 className="text-2xl font-bold">
                    cwt&apos;s Playground
                  </h1>
                </motion.div>
                <div className="hidden md:block flex-grow text-center">
                  <Breadcrumbs />
                </div>
              </div>
              <nav className="hidden md:block">
                {['Home','Projects', 'About', 'Login'].map((item) => (
                  <motion.a 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-700 mx-2"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
              <motion.button 
                className="md:hidden text-gray-700"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Menu
              </motion.button>
            </div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav 
                  className="md:hidden"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="p-2">
                    <Breadcrumbs />
                  </div>
                  {['Home','Projects', 'About', 'Login'].map((item) => (
                    <motion.a 
                      key={item}
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="block text-gray-700 p-2"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.header>

          <motion.main 
            className="flex-grow mx-auto p-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <div className="watermark absolute inset-0 opacity-10 pointer-events-none z-0">
              <Image 
                src="/cute-pokemon-pikachu-rain-desktop-wallpaper-preview.jpg" 
                alt="Watermark" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </motion.main>
        </Providers>
        <style jsx>{`
          .watermark {
            z-index: -1; /* Ensure the watermark is behind the content */
          }
        `}</style>
      </body>
    </html>
  );
}

export default Layout;
