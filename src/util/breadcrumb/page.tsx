'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const createBreadcrumbs = () => {
    return pathArray.map((path: string, index: number) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      const isLast = index === pathArray.length - 1;
      return (
        <React.Fragment key={href}>
          <motion.div variants={itemVariants} className="flex items-center">
            <Link 
              href={href} 
              className={`text-sm font-medium transition-all duration-200 ease-in-out 
                ${isLast 
                  ? 'text-black font-semibold cursor-default' 
                  : 'text-gray-500 hover:text-black'}`}
            >
              {decodeURIComponent(path.charAt(0).toUpperCase() + path.slice(1))}
            </Link>
            {!isLast && (
              <span className="mx-2 text-gray-400">›</span>
            )}
          </motion.div>
        </React.Fragment>
      );
    });
  };

  if (pathname === '/login') {
    return (
      <motion.nav 
        className="flex items-center space-x-1 text-gray-500 p-3 bg-white rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center">
          <span className="text-sm font-medium text-black font-semibold cursor-default">Login</span>
        </motion.div>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      className="flex items-center space-x-1 text-gray-500 p-3 bg-white rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex items-center">
        <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200 ease-in-out flex items-center">
          <span className="text-sm font-medium">Home</span>
        </Link>
      </motion.div>
      {pathArray.length > 0 && (
        <span className="mx-2 text-gray-400">›</span>
      )}
      {createBreadcrumbs()}
    </motion.nav>
  );
};

export default Breadcrumbs;
