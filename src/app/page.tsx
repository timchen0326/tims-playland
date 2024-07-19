'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import { FaGithub, FaReact, FaPython, FaGitAlt, FaArrowUp, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiTableau, SiR, SiAzuredevops, SiVisualstudiocode, SiPycharm, SiHtml5 } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const router = useRouter();

  const homePageText = {
    title: 'Tim Chen',
    subtitle: 'Senior Undergraduate Student at the University of Toronto',
    about: {
      title: 'About Me',
      text: "I'm a passionate software developer with expertise in building scalable web applications. With a strong foundation in React, Next.js, and TypeScript, I create elegant solutions to complex problems. My goal is to craft intuitive user experiences that make a positive impact.",
    },
    experience: {
      title: 'Experiences',
      jobs: [
        {
          company: 'MAYOHR',
          role: 'Software Engineer - Form Development Department',
          duration: 'May 2024 - July 2024',
          description: 'Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.',
        },
        {
          company: 'Bear Socks',
          role: 'Retailer',
          duration: 'August 2018',
          description: 'Managed sales and customer interactions at the Richmond Night Market.',
        },
      ],
    },
    education: {
      title: 'Education',
      details: [
        {
          institution: 'University of Toronto',
          degree: 'Mathematics & Its Applications Specialist (Probability/Statistics)',
          minors: 'Statistics, Computer Science',
          duration: 'September 2021 - Present',
        },
        {
          institution: 'St. John\'s School',
          degree: 'International Baccalaureate Diploma Programme',
          duration: 'August 2019 - May 2021',
        },
        {
          institution: 'Magee Secondary School',
          degree: 'BC High School Dogwood Diploma',
          duration: 'September 2016 - June 2019',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      details: [
        {
          name: 'Google Data Analytics Professional Certificate',
          issuingOrganization: 'Coursera',
          issueDate: 'January 2024',
        },
      ],
    },
    volunteer: {
      title: 'Volunteer Experiences',
      roles: [
        {
          position: 'Colony Scouter',
          organization: 'Scouts Canada',
          location: 'Richmond, BC',
          duration: '2019 - 2021',
        },
        {
          position: 'Teacher Assistant',
          organization: 'Future Invention Learning Laboratory',
          location: 'Richmond, BC',
          duration: '2019 - 2020',
        },
        {
          position: 'Event Organizer',
          organization: '2019 NFE North American University Fair',
          location: 'Vancouver, BC',
          duration: '2019',
        },
        {
          position: 'Vice President',
          organization: 'Magee English Support Club',
          location: 'Vancouver, BC',
          duration: '2018 - 2019',
        },
        {
          position: 'Student Coach',
          organization: 'Musqueam Golf Academy',
          location: 'Vancouver, BC',
          duration: '2017 - 2018',
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          title: 'Frontend',
          skills: [
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'HTML', icon: SiHtml5 },
            { name: 'Node.Js', icon: FaNodeJs },
          ],
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Python', icon: FaPython },
          ],
        },
        {
          title: 'Tools',
          skills: [
            { name: 'R', icon: SiR },
            { name: 'Spreadsheets', icon: BsFillFileEarmarkSpreadsheetFill },
            { name: 'Git', icon: FaGitAlt },
            { name: 'GitHub', icon: FaGithub },
            { name: 'Azure DevOps', icon: SiAzuredevops },
            { name: 'Visual Studio Code', icon: SiVisualstudiocode },
            { name: 'PyCharm', icon: SiPycharm },
            { name: 'Tableau', icon: SiTableau },
          ],
        },
      ],
    },
    callToAction: {
      title: "Let's Work Together",
      text: "Interested in collaborating or have a project in mind? I'd love to hear from you!",
      button: 'Get in Touch',
    },
    projects: [
      {
        id: 'mayohr',
        src: '/mayohr.jpg',
        alt: 'MAYOHR',
        link: '/projects/mayohr',
        description: 'Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.',
        tags: ['Form Development', 'TSX', 'Next.Js', 'React', 'VS Code'],
      },
      // Add more projects here if needed
    ],
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{homePageText.title}</h1>
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
        onClick={scrollToTop} // Adjust the vertical movement here
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}  // Continuous vertical movement
        transition={{ repeat: Infinity, duration: 0.5 }}  
      >
        <FaArrowUp size={24} />
      </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
