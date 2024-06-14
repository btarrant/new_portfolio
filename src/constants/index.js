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
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#d0eef5",
    date: "July 2022 - Apr 2024",
    points: [
      "Lead engineer on front-end migration and redesign of internal Cisco chatbot from legacy HTML/CSS to a React.js + Typescript stack.",
      "Design and develop chatbot prototype, showcasing strong proficiency in design tools.",
      "Improved chatbot overall maintainability, scalability, and performance.",
      "Present comprehensive proposals to stakeholders, effectively communicating concepts and functionalities.",
      "Contribute to the back-end development of chatbot, leveraging knowledge in Rasa AI and Python.",
      "Leveraged knowledge in Git, Python, AI, Web Design, JavaScript, React.js, APIs, Jira, SQL, TypeScript, Figma, and Full Stack Development.",
    ],
  },
  {
    title: "QA Software Engineer",
    company_name: "QualityLogic Inc. (ULINE)",
    icon: uline,
    iconBg: "#f5d0a4",
    date: "June 2022 - Oct 2023",
    points: [
      "Tested the data migration of ULINE internal applications from AS400 to DB2 using a combination of testing methods.",
      "Design test cases and test scenarios based on functional and non-functional requirements.",
      "Identify, document, and track defects or issues found during testing.",
      "Collaborate with DevOps and Software Engineers to find issues and debug code.",
      "Leveraged knowledge in Git, SQL, Kotlin & Java, SCRUM, Agile Development, APIs, web services, manual/automation testing, and the overall software development cycle.",
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
