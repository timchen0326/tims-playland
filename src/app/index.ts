import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiR, SiAzuredevops, SiVisualstudiocode, SiPycharm, SiTableau } from "react-icons/si";

export const homePageText = {
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