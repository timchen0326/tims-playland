"use client";
import { ReactNode, useEffect, useState } from 'react';
import '../app/globals.css';
import './layout.css';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/util/breadcrumb/page';
import { Providers } from './providers';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
      <body className="relative bg-gray-100 h-full">
        <Providers>
          <div className="breadcrumb-container">
            <Breadcrumbs />
          </div>
          <header 
            className={`bg-black text-white shadow-lg rounded-full mx-auto mt-4 p-2 max-w-2xl relative z-10 flex items-center justify-between ${showNavbar ? 'header-visible' : 'header-hidden'}`}
          >
            <div className="flex items-center space-x-2">
              <img src="/pikachu.svg" alt="Pikachu Logo" width={24} height={24} />
              <h1 className="text-sm font-bold">
                cwt&apos;s Playground
              </h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              {['Home', 'Projects', 'About', 'Contact', 'Login'].map((item) => (
                <motion.a 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-gray-200 px-3 py-1 rounded-md text-xs font-medium transition-all duration-100 ease-in-out hover:bg-gray-700"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.button 
              className="md:hidden text-gray-200"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </motion.button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav 
                  className="absolute top-full left-0 right-0 bg-black rounded-b-lg p-4 md:hidden"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {['Home', 'Projects', 'About', 'Contact', 'Login'].map((item) => (
                    <motion.a 
                      key={item}
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="block text-gray-200 p-2 text-sm transition-all duration-100 ease-in-out hover:bg-gray-700 rounded-md"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </header>

          <motion.main 
            className="mx-auto p-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
          </motion.main>

          <div className="social-icons-container">
            <a href="https://github.com/timchen0326" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub color="white" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tim-chen-4b37b1125" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin color="white" size={24} />
            </a>
            <a href="mailto:timchen0326ca@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaEnvelope color="white" size={24} />
            </a>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
