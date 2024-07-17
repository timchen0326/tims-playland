'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const homePageText = {
  title: 'Tim Chen',
  subtitle: '',
  socialLinks: [
    { href: 'https://github.com/timchen0326', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/tim-chen-4b37b1125', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:timchen0326ca@gmail.com', icon: FaEnvelope, label: 'Email' },
  ],
  about: {
    title: 'About Me',
    text: "I'm a passionate software developer with expertise in building scalable web applications. With a strong foundation in React, Next.js, and TypeScript, I create elegant solutions to complex problems. My goal is to craft intuitive user experiences that make a positive impact.",
  },
  featuredProjects: {
    title: 'Featured Projects',
    projects: [
      {
        id: 'mayohr',
        title: 'MAYOHR',
        description: 'Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.',
        tags: ['Form Development', 'TSX', 'Next.Js', 'React', 'VS Code'],
        image: 'mayohr.jpg',
        alt: 'MAYOHR',
      },
    ],
  },
  skills: {
    title: 'Skills',
    categories: [
      {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Backend',
        skills: ['Python'],
      },
      {
        title: 'Tools',
        skills: ['Tableau', 'R', 'Git'],
      },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    quotes: [
      "Tim's attention to detail and problem-solving skills are exceptional. He consistently delivers high-quality work.",
      "Working with Tim was a pleasure. His expertise in React and Next.js significantly improved our project's performance.",
    ],
  },
  callToAction: {
    title: "Let's Work Together",
    text: "Interested in collaborating or have a project in mind? I'd love to hear from you!",
    button: 'Get in Touch',
  },
};


const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{homePageText.title}</h1>
        <p className={styles.subtitle}>{homePageText.subtitle}</p>
        <div className={styles.socialLinks}>
          {homePageText.socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <link.icon />
            </a>
          ))}
        </div>
      </header>

      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>{homePageText.about.title}</h2>
        <p className={styles.aboutText}>{homePageText.about.text}</p>
      </section>

      <section className={styles.featuredProjects}>
        <h2 className={styles.sectionTitle}>{homePageText.featuredProjects.title}</h2>
        <div className={styles.projectsGrid}>
          {homePageText.featuredProjects.projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="cursor-pointer m-4 transform transition-transform duration-300 w-80 rounded-lg shadow-lg p-4 bg-white"
            >
              <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src={project.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={project.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center space-x-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>{homePageText.skills.title}</h2>
        <div className={styles.skillsGrid}>
          {homePageText.skills.categories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>{homePageText.callToAction.title}</h2>
        <p className={styles.callToActionText}>{homePageText.callToAction.text}</p>
        <button onClick={() => router.push('/contact')} className={styles.button}>
          {homePageText.callToAction.button}
        </button>
      </section>
    </div>
  );
};

export default HomePage;
