import { meta, shopify, starbucks, tesla } from "../assets-2/images";
import {
  aws,
  car,
  contact,
  css,
  docker,
  estate,
  figma,
  flask,
  git,
  github,
  html,
  illustrator,
  jaq,
  java,
  javascript,
  jira,
  kotlin,
  linkedin,
  mui,
  mysql,
  nodejs,
  pricewise,
  photoshop,
  postman,
  python,
  qlinc,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  threejs,
  typescript,
  selenium,
  playwright,
  uline,
  cisco,
  brainwave,
  gsap,
  mongodb,
  wordpress,
  woocommerce,
  elementor
} from "../assets-2/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Threejs",
    type: "Frontend",
  },
  {
    imageUrl: illustrator,
    name: "Illustrator",
    type: "Frontend",
  },
  {
    imageUrl: photoshop,
    name: "Photoshop",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Frontend",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Version Control",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: selenium,
    name: "Selenium",
    type: "Testing",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "Testing",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: playwright,
    name: "Playwright",
    type: "Testing",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Backend",
  },
  {
    imageUrl: wordpress,
    name: "WordPress",
    type: "Frontend",
  },
  {
    imageUrl: woocommerce,
    name: "WooCommerce",
    type: "Backend",
  },
  {
    imageUrl: elementor,
    name: "Elementor",
    type: "Frontend",
  }
];

export const experiences = [
  {
    title: "WordPress Developer",
    company_name: "JAQ Media",
    icon: jaq,
    iconBg: "#d0eef5",
    date: "Sept 2024 - Pres",
    points: [
      "Lead the development and maintenance of the WordPress platform, ensuring optimal performance, security, and scalability.",
      "Implement and configure WordPress solutions to deliver seamless user experiences.",
      "Develop workflows and provide technical expertise to align website development with business objectives.",
      "Collaborate with cross-functional teams to deliver high-quality web solutions on schedule and within scope.",
      "Monitor and resolve technical issues, ensuring site stability and continued functionality.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#d0eef5",
    date: "July 2022 - Apr 2024",
    points: [
      "Redesigned and enhanced the performance of Cisco's internal AI chatbot using a React + TypeScript stack, improving system response time by 35% through optimized front-end architecture and efficient integration with AI-driven back-end systems. Utilized advanced and creative Front End development techniques, resulting in a 25% increase in user satisfaction scores for the AI chatbot interface.",
      "Designed and developed an AI chatbot frontend prototype, securing project approval from stakeholders within 3 weeks.",
      "Provided technical support and guidance, reducing incident resolution time by 20%.",
      "Created and updated technical documentation that decreased the average time for user onboarding by 15%.",
    ],
  },
  {
    title: "QA Software Engineer",
    company_name: "QualityLogic Inc",
    icon: qlinc,
    iconBg: "#f5d0a4",
    date: "June 2021 - Aug 2023",
    points: [
      "Identified and resolved over 100 software defects, contributing to a 30% reduction in post-release bug reports.",
      "Developed automated testing solutions that improved the efficiency of the QA process by 40%.",
      "Collaborated with development teams to identify and resolve bugs, leading to a 25% increase in overall product stability.",
      "Performed rigorous testing using tools such as Postman, SQL, Figma, Git, Playwright, Selenium, Cucumber, JUnit, and more, ensuring high-quality software delivery.",
    ],
  },
];

// TODO: Add social links?

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/btarrant",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/b-tarrant",
  },
];

export const projects = [
  {
    iconUrl: brainwave,
    theme: "btn-back-blue",
    name: "Portfolio Site (Currently here)",
    description:
      "My portfolio website is a 3D scrollable world that enables users to interact with various 3D elements using Three.js. It provides a unique and immersive experience for visitors, allowing them to explore my projects in an engaging and memorable way.",
    link: "https://github.com/btarrant/new_portfolio",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-black",
    name: "CodeCraft",
    description:
      "Created my own AI chatbot called CodeCraft, using the OpenAI API and powered by JavaScript. Elevate your interactions with intelligent conversations and innovative solutions.",
    link: "https://github.com/btarrant/openai_app",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-pink",
    name: "Brainwave",
    description:
      "Created the frontend of a responsive open AI Chatbot website. Packaged using Vite, constructed with React.js and styled using TailwindCSS, exemplifying modern UI/UX principles.",
    link: "https://github.com/btarrant/brainwave",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-green",
    name: "Game Hub",
    description:
      "Created app that serves as a hub for video game enthusiasts, providing information about various games using the Rawg.io video game API and leveraging the Chakra UI library for a clean and responsive user interface.",
    link: "https://github.com/btarrant/game-hub",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-red",
    name: "PricePulse",
    description:
      "Created app that allows users to track prices of Amazon products using data scraping. Track items and receive emails regarding price updates all with the help of cron jobs & Nodemailer. Also built with Next.js, Tailwind CSS, Cheerio, BrightData, and Headless UI.",
    link: "https://github.com/btarrant/pricepulse",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-yellow",
    name: "Apple iPhone Site Clone",
    description:
      "Created clone of Apple's site for the new iPhone 15. Includes dynamic and responsive videos, animations, and 3D model - imitating Apple's sleek and minimalistic look. Built using React.js, Tailwind CSS, GSAP, & Three.js",
    link: "https://github.com/btarrant/apple_site",
  },
];
