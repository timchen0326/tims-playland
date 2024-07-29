// components/Layout.tsx
"use client";
import { ReactNode, useEffect, useState } from 'react';
import '../app/globals.css';
import './layout.css';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/util/breadcrumb/page';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { ReduxProvider } from './ReduxProvider';

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
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      } 
    }
  };

  const navItems = ['Home', 'Projects', 'About', 'Contact', 'Login'];
  const socialIcons = [
    { Icon: FaGithub, href: "https://github.com/timchen0326" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/tim-chen-4b37b1125" },
    { Icon: FaEnvelope, href: "mailto:timchen0326ca@gmail.com" }
  ];

  return (
    <html lang="en" className="h-full">
      <head>
        <title>cwt&apos;s Playground</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-blue-300 h-full">
        <div className="breadcrumb-container">
          <Breadcrumbs />
        </div>
        <header 
          className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-lg rounded-full mx-auto mt-4 p-3 max-w-2xl relative z-20 flex items-center justify-between transition-all duration-300 ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        >
          <div className="flex items-center space-x-2">
            <img src="/pikachu.svg" alt="Pikachu Logo" width={24} height={24} className="animate-bounce" />
            <h1 className="text-sm font-bold">
              cwt&apos;s Playground
            </h1>
          </div>
          <motion.button 
            className="text-white bg-white bg-opacity-30 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed top-0 left-0 h-full w-full z-30 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="absolute bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black rounded-full p-4 text-sm pointer-events-auto shadow-lg"
                  style={{
                    top: `${(index + 1) * 80}px`,
                    left: '30px'
                  }}
                  variants={bubbleVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { delay: 0 } }}
                >
                  {item}
                </motion.a>
              ))}
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black rounded-full p-4 pointer-events-auto shadow-lg"
                  style={{
                    bottom: `${(index + 1) * 80}px`,
                    left: '30px'
                  }}
                  variants={bubbleVariants}
                  transition={{ delay: (navItems.length + index) * 0.1 }}
                  whileHover={{ scale: 1.1 , transition: { delay: 0 }}}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.main 
          className="mx-auto p-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          
          <ReduxProvider>{children}</ReduxProvider>
        </motion.main>
      </body>
    </html>
  );
}

export default Layout;
