'use client';
import React from 'react';
import styles from './about.module.css';
import {
  FaCode, FaGolfBall, FaLightbulb, FaReact, FaHtml5, FaCss3, FaPython,
  FaWindows, FaApple, FaBasketballBall, FaHamburger, FaIceCream, FaPizzaSlice,
  FaUtensils, FaWineGlassAlt, FaCoffee, FaBeer, FaEgg, FaLemon
} from 'react-icons/fa';
import {
  SiTesla, SiNextdotjs, SiPycharm, SiTypescript, SiVisualstudiocode,
  SiLeagueoflegends, SiValorant, SiLogitechg, SiRazer, SiIntel, SiNvidia, SiXiaomi
} from 'react-icons/si';
import { MdScubaDiving, MdSportsEsports } from "react-icons/md";
import { BsNintendoSwitch } from 'react-icons/bs';

const AboutPage = () => {
  // 這裡是關於頁面的文本資料
  const aboutPageText = {
    title: 'About Me',
    biography: {
      title: 'Biography',
      text: "I am a senior undergraduate student at the University of Toronto, specializing in Mathematics & Its Applications with minors in Statistics and Computer Science. I am passionate about software development and creating impactful user experiences."
    },
    careerGoals: {
      title: 'Career Goals',
      text: "I aim to leverage his expertise in React, Next.js, and TypeScript to develop scalable web applications. My goal is to work in a dynamic environment where he can continuously grow as a developer and contribute to meaningful projects."
    },
    hobbies: {
      title: 'Hobbies and Interests',
      items: [
        {
          name: 'Coding', icon: FaCode, apps: [
            FaReact, SiVisualstudiocode, SiNextdotjs, SiPycharm, FaHtml5, FaCss3, FaPython, SiTypescript
          ]
        },
        {
          name: 'Sports', icon: FaGolfBall, apps: [
            FaBasketballBall, FaGolfBall, MdScubaDiving
          ]
        },
        {
          name: 'Video Games', icon: MdSportsEsports, apps: [
            SiLeagueoflegends, SiValorant, BsNintendoSwitch
          ]
        },
        {
          name: 'Exploring Tech', icon: FaLightbulb, apps: [
            SiLogitechg, FaWindows, FaApple, SiRazer, SiIntel, SiNvidia, SiXiaomi, SiTesla
          ]
        },
        {
          name: 'Food Adventures', icon: FaUtensils, apps: [
            FaHamburger, FaPizzaSlice, FaIceCream, FaWineGlassAlt, FaCoffee, FaBeer, FaEgg, FaLemon
          ]
        }
      ]
    },
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{aboutPageText.title}</h1>
      </header>

      <section className={`${styles.section} ${styles.biography}`}>
        <h2 className={styles.sectionTitle}>{aboutPageText.biography.title}</h2>
        <p className={styles.sectionText}>{aboutPageText.biography.text}</p>
      </section>

      <section className={`${styles.section} ${styles.careerGoals}`}>
        <h2 className={styles.sectionTitle}>{aboutPageText.careerGoals.title}</h2>
        <p className={styles.sectionText}>{aboutPageText.careerGoals.text}</p>
      </section>

      <section className={`${styles.section} ${styles.hobbies}`}>
        <h2 className={styles.sectionTitle}>{aboutPageText.hobbies.title}</h2>
        <div className={styles.hobbiesGrid}>
          {aboutPageText.hobbies.items.map((hobby, index) => (
            <div key={index} className={styles.hobbyItem}>
              <div className={styles.iconWrapper}>
                <hobby.icon className={styles.hobbyIcon} />
                <div className={styles.appIconsRing}>
                  {hobby.apps.map((AppIcon, i) => (
                    <AppIcon key={i} className={`${styles.appIcon} ${styles[`appIcon${i}`]}`} />
                  ))}
                </div>
              </div>
              <span className={styles.hobbyName}>{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
