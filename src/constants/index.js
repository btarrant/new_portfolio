import { meta, shopify, starbucks, tesla } from "../assets-2/images";
import {
  aws,
  car,
  ciscoLogo,
  contact,
  css,
  docker,
  estate,
  figma,
  flask,
  git,
  github,
  growingPortraitsLogo,
  hcplogo,
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
  qualityLogicLogo,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  threejs,
  typescript,
  selenium,
  playwright,
  subliyLogo,
  uline,
  cisco,
  brainwave,
  gsap,
  mongodb,
  wordpress,
  woocommerce,
  elementor,
  php,
  openai,
  nextjs
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
  },
  {
    imageUrl: php,
    name: "php",
    type: "Backend",
  },
  {
    imageUrl: openai,
    name: "openai",
    type: "Backend",
  },
  {
    imageUrl: nextjs,
    name: "nextjs",
    type: "Frontend",
  }
];

export const experiences = [
  {
    title: "Founding Software Engineer",
    company_name: "Subliy",
    icon: subliyLogo,
    iconBg: "#ffffff",
    date: "March 2026 - Present",
    points: [
      "Transformed an AI-generated mobile/web application scaffold into a functional MVP by designing backend architecture and implementing core system workflows.",
      "Built and secured end-to-end authentication and user management systems across mobile, web, and API layers.",
      "Developed and deployed a production-ready admin dashboard connected to live backend services for operation visibility and control.",
      "Integrated mobile application flows with backend services, validating functionality through real-device testing and deployment workflows.",
      "Implemented automated testing and continuous integration pipelines using Jest, Supertest, Playwright, and GitHub Actions.",
      "Designed event-driven features including notifications, scoring, and user engagement systems with a focus on reliability and performance.",
      "Identified and resolved critical gaps across authentication, validation, and data handling, improving system reliability and reducing production risk.",
      "Leading full-stack development across frontend, backend, and infrastructure, collaborating directly with founders to define product scope and drive rapid iteration."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Growing Portraits (via JAQ Media)",
    icon: growingPortraitsLogo,
    iconBg: "#ffffff",
    date: "September 2024 - January 2026",
    points: [
      "Led development of a WordPress-based SaaS platform, building custom PHP plugins, backend workflows, and theme extensions to support dynamic user-generated content and subscription features.",
      "Designed and implemented REST API integrations and custom MySQL schemas, enabling scalable relational data models and backend services for the platform.",
      "Built interactive frontend functionality using JavaScript and API-driven architecture, connecting UI components with backend systems and content pipelines.",
      "Investigated and resolved production issues across PHP services, APIs, and frontend systems, using log analysis and reproducible debugging to isolate root causes.",
      "Acted as a technical bridge between product and engineering teams, translating customer-reported issues into actionable engineering investigations and fixes.",
      "Authored technical documentation and implementation guides to support development workflows and improve deployment stability.",
      "Built and maintained integrations with third-party APIs to support platform features."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco",
    icon: ciscoLogo,
    iconBg: "#ffffff",
    date: "July 2022 - April 2024",
    points: [
      "Core engineer on Cisco Networking Bot, an enterprise AI assistant supporting internal teams, customers, and partners, contributing across a React/TypeScript frontend and Python/Rasa/Flask backend.",
      "Designed and implemented REST API integrations connecting conversational AI services with enterprise data platforms and internal developer systems.",
      "Diagnosed and resolved production issues across frontend applications, backend APIs, and distributed integrations, performing deep root-cause analysis.",
      "Partnered with support and engineering teams to reproduce complex failures, analyze system behavior, and implement stability improvements across services.",
      "Contributed to release validation and regression prevention, improving platform reliability and reducing post-deployment issues.",
      "Authored technical documentation and implementation guides to support onboarding and cross-team collaboration."
    ],
  },
  {
    title: "Software QA Engineer",
    company_name: "Quality Logic",
    icon: qualityLogicLogo,
    iconBg: "#ffffff",
    date: "June 2022 - September 2023",
    points: [
      "Embedded with engineering teams supporting ULINE’s high-traffic e-commerce platforms, executing end-to-end, integration, and regression testing across catalog and order workflows.",
      "Investigated defects across frontend systems, APIs, and PHP-based backend services, reproducing issues and isolating root causes through log analysis and API inspection.",
      "Designed and maintained comprehensive test suites covering search, product configuration, checkout flows, and internal order management systems.",
      "Collaborated closely with developers to validate fixes, prioritize defects, and support stable releases across production environments.",
      "Performed deep system investigations to trace issues across web applications, backend services, and data pipelines, ensuring reliable platform behavior."
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "Housecall Pro",
    icon: hcplogo,
    iconBg: "#ffffff",
    date: "December 2021 - June 2022",
    points: [
      "Diagnosed complex SaaS platform issues across web and mobile systems, performing technical troubleshooting across APIs, application logic, and user workflows.",
      "Reproduced reported issues and delivered engineering-ready defect reports with logs, reproduction steps, and system behavior analysis."
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
