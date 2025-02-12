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
    title: "QA Software Engineer",
    company_name: "JAQ Media",
    icon: jaq,
    iconBg: "#b1bbbd",
    date: "Sept 2024 - Present",
    points: [
      "Lead QA, testing, and development for an interactive WordPress platform using WooCommerce and third-party integrations.",
      "Develop and execute manual and automated test strategies using Playwright, Selenium, Jest, Postman, and JUnit, to maintain high software reliability.",
      "Identify and resolve defects, ensuring seamless user experiences and site scalability.",
      "Collaborate with cross-functional teams to identify, document, and resolve defects, ensuring seamless user experiences.",
      "Monitor and troubleshoot technical issues, conducting root cause analysis to enhance site stability and functionality.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#d0eef5",
    date: "July 2022 - Apr 2024",
    points: [
      "Engineered and optimized Cisco’s internal AI chatbot with React + TypeScript, improving response time by 35% and increasing user satisfaction by 25%.",
      "Spearheaded frontend development of an AI chatbot prototype, securing stakeholder approval within 3 weeks and influencing company-wide AI initiatives.",
      "Developed reusable UI components, reducing development time for future chatbot iterations by 40%.",
      "Designed and implemented performance monitoring tools, leading to 20% faster issue resolution.",
      "Created and updated technical documentation, reducing user onboarding time by 15%."
    ],
  },
  {
    title: "QA Software Engineer",
    company_name: "QualityLogic Inc",
    icon: qlinc,
    iconBg: "#90fcd6",
    date: "June 2021 - Aug 2023",
    points: [
      "Developed and executed automated testing solutions, increasing QA efficiency by 40%.",
      "Identified and resolved 100+ software defects, reducing post-release bug reports by 30%.",
      "Develop and execute manual and automated test strategies using Playwright, Selenium, Jest, Postman, and JUnit, to maintain high software reliability.",
      "Improved collaboration between QA and development teams, leading to a 25% increase in product stability.",
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
    name: "Automated Testing Framework",
    description:
      "This project demonstrates my ability to design and implement robust automated testing solutions and highlights my commitment to quality assurance in modern web applications.",
    link: "https://github.com/btarrant/game-hub-test",
  },
];
