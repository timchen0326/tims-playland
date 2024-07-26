'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import { FaArrowUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { homePageText } from '.';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Typewriter
            words={[homePageText.title, "陳蔚霆"]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </h1>
        <p className={styles.subtitle}>{homePageText.subtitle}</p>
      </header>

      <section className={`${styles.section} ${styles.about}`}>
        <h2 className={styles.sectionTitle}>{homePageText.about.title}</h2>
        <p className={styles.aboutText}>{homePageText.about.text}</p>
      </section>

      <section className={`${styles.section} ${styles.projects}`}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <AnimatePresence>
          <div className={styles.projectsGrid}>
            {homePageText.projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(project.link)}
                className={styles.projectCard}
              >
                <div className={styles.projectImageContainer}>
                  <motion.img
                    src={project.src}
                    className={styles.projectImage}
                    alt={project.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.alt}</h3>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.projectTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>

      <section className={`${styles.section} ${styles.experience}`}>
        <h2 className={styles.sectionTitle}>{homePageText.experience.title}</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className={styles.swiper}
        >
          {homePageText.experience.jobs.map((job, index) => (
            <SwiperSlide key={index}>
              <div className={styles.scrollableCard}>
                <h3>{job.role} - {job.company}</h3>
                <p>{job.duration}</p>
                <p>{job.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={`${styles.section} ${styles.education}`}>
        <h2 className={styles.sectionTitle}>{homePageText.education.title}</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className={styles.swiper}
        >
          {homePageText.education.details.map((detail, index) => (
            <SwiperSlide key={index}>
              <div className={styles.scrollableCard}>
                <h3>{detail.institution}</h3>
                <p>{detail.degree}</p>
                {detail.minors && <p>Minor in {detail.minors}</p>}
                <p>{detail.duration}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={`${styles.section} ${styles.volunteer}`}>
        <h2 className={styles.sectionTitle}>{homePageText.volunteer.title}</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className={styles.swiper}
        >
          {homePageText.volunteer.roles.map((role, index) => (
            <SwiperSlide key={index}>
              <div className={styles.scrollableCard}>
                <h3>{role.position}</h3>
                <p>{role.organization}</p>
                <p>{role.location}</p>
                <p>{role.duration}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={`${styles.section} ${styles.certifications}`}>
        <h2 className={styles.sectionTitle}>{homePageText.certifications.title}</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          className={styles.swiper}
        >
          {homePageText.certifications.details.map((certification, index) => (
            <SwiperSlide key={index}>
              <div className={styles.scrollableCard}>
                <h3>{certification.name}</h3>
                <p>{certification.issuingOrganization}</p>
                <p>{certification.issueDate}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>{homePageText.skills.title}</h2>
        <div className={styles.skillsGrid}>
          {homePageText.skills.categories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <li key={index} className={styles.skillItem}>
                    <skill.icon className={styles.skillIcon} />
                    <span className={styles.skillName}>{skill.name}</span>
                  </li>
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

      <div className="flex justify-end">
        <motion.button
          className="item-centered bg-blue-500 text-white p-4 rounded-full shadow-lg"
          onClick={scrollToTop}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowUp size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
