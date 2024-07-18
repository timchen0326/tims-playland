'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MdHome, MdChevronRight } from "react-icons/md";

const breadcrumbConfig: { [key: string]: string } = {
  'mayohr': 'MAYOHR',
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
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
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 }
  };

  const getBreadcrumbLabel = (path: string) => {
    return breadcrumbConfig[path] || decodeURIComponent(path.charAt(0).toUpperCase() + path.slice(1));
  };

  const createBreadcrumbs = () => {
    return pathArray.map((path: string, index: number) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      const isLast = index === pathArray.length - 1;
      return (
        <React.Fragment key={href}>
          <motion.span variants={itemVariants} className="flex items-center">
            <Link 
              href={href} 
              className={`text-sm font-medium ${isLast ? 'text-blue-700 font-semibold cursor-default' : 'text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out'}`}
            >
              {getBreadcrumbLabel(path)}
            </Link>
          </motion.span>
          {!isLast && (
            <MdChevronRight className="mx-2 text-gray-400" size={16} />
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <motion.nav 
      className="flex items-center px-4 py-3 border-b border-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={itemVariants} className="flex items-center">
        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out">
          <MdHome size={20} />
        </Link>
      </motion.span>
      {pathArray.length > 0 && (
        <MdChevronRight className="mx-2 text-gray-400" size={16} />
      )}
      {createBreadcrumbs()}
    </motion.nav>
  );
};

export default Breadcrumbs;