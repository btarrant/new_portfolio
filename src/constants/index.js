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
];

export const experiences = [
  {
    title: "Quality Engineer",
    company_name: "QualityLogic (ULINE)",
    icon: uline,
    iconBg: "#f5d0a4",
    date: "June 2022 - Oct 2023",
    points: [
      "Test the data migration of ULINE internal applications from AS400 to DB2 using APIs and web services.",
      "Test ULINE internal applications using modern testing methodologies.",
      "Design test cases and test scenarios based on functional and non-functional requirements.",
      "Identify, document, and track defects or issues found during testing.",
      "Collaborate with DevOps and Software Engineers to find issues and debug code.",
      "Leveraged knowledge in Git, SQL, Kotlin & Java, SCRUM, Agile Development, APIs, web services, manual/automation testing, and the overall software development cycle.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#d0eef5",
    date: "July 2022 - Present",
    points: [
      "Lead engineer on front-end migration from legacy HTML and CSS to React + Typescript stack, and redesign of internal chatbot.",
      "Design and develop chatbot prototype, showcasing strong proficiency in design tools.",
      "Present comprehensive proposals to stakeholders, effectively communicating concepts and functionalities.",
      "Contribute to the back-end development of chatbot, leveraging knowledge in Rasa AI and Python.",
      "Leveraged knowledge in Git, Python, web design, JavaScript, React, Jira, SQL, TypeScript, Figma, and overall full stack development.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
