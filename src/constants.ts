// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/incapp-logo-box.webp';

// Education Section Logo's
import iecLogo from './assets/education_logo/iec.jpeg';
import upBoardLogo from './assets/education_logo/upborad.jpeg';


// Project Section Logo's
import designsystemLogo from './assets/work_logo/designsystem.png';
import mypersonalworkLogo from './assets/work_logo/myproject.png';
import companayLogo from './assets/work_logo/company.png';
import portfoliLogo from './assets/work_logo/portfolio.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Frontend Developer",
    company: "Whiz-Cloud",
    date: "October 2022 - Present",
    desc: "Working as an Angular Frontend Developer, developing scalable and maintainable web applications using Angular and TypeScript. Actively working with RxJS, Signals, REST APIs, and Angular Material to build reusable and responsive UI components. Involved in API integration, performance optimization, and following Angular best practices to deliver clean and efficient frontend solutions.",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "RxJS",
      "Signals",
      "Angular Material",
      "PrimeNG",
      "HTML",
      "CSS",
      "REST API",
      "Git",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Self-Taught Angular Developer",
    company: "Personal Angular Projects",
    date: "Present",
    desc: "Designed and developed a complete Angular enterprise-style application from scratch and deployed it on Vercel. Implemented reusable authentication flow, route guards, lazy loading, form validations, generic services, reusable tables, pagination, filtering, and clean folder architecture. Focused on scalable UI, performance optimization, and real-world Angular best practices.",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "RxJS",
      "Route Guards",
      "Lazy Loading",
      "Form Validation",
      "Reusable Services",
      "Pagination",
      "Filtering",
      "Git",
      "Vercel Deployment",
    ],
  },

  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Learner",
    company: "Incapp – The Coding Institute",
    date: "2021",
    desc: "Completed hands-on training in frontend development with a focus on Angular fundamentals. Learned HTML, CSS, Bootstrap, JavaScript, Angular basics, component-based architecture, routing, and Git. Built practice projects and UI components to strengthen real-world frontend development skills.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Angular Basics",
      "Git",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Angular Design System (Custom UI Library)",
    description:
      "A scalable and reusable Angular Design System built for enterprise applications. This custom UI library includes Accordion, Input fields, Textarea, Calendar, Dropdown, and other form controls. Developed using Angular and TypeScript, it focuses on consistency, reusability, and ease of integration across multiple projects.",
    image: designsystemLogo, // apni image import karein
    tags: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Angular Material",
      "PrimeNG",
      "signals",
      "lazy loading",
      "form validation",
      "route guards",
      "API Integration",
      "Performance Optimization",
      "Custom UI Library",
      "Design System",
      "Reusable Components",
      "Html",
      "Css",
      "Bootstrap",
      "Git",
    ],
    github: "",
    webapp:
      "https://design-system.swiredigital-s3-staging.com/accordian",
  },

  {
    id: 1,
    title: "Angular Enterprise Application",
    description:
      "An enterprise-level Angular application built for learning and real-world practice. It includes complete authentication flow such as Login, Signup, Forgot Password, and Reset Password. The project uses reusable generic services, shared components, reusable tables, headers, and demonstrates advanced Angular concepts.",
    image: mypersonalworkLogo,
    tags: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Angular Material",
      "PrimeNG",
      "signals",
      "lazy loading",
      "form validation",
      "route guards",
      "API Integration",
      "Performance Optimization",
      "Custom UI Library",
      "Design System",
      "Reusable Components",
      "Html",
      "Css",
      "Bootstrap",
      "Git",
    ],
    github:
      "https://github.com/anil-dev-frontend/angular-enterprise",
    webapp:
      "https://angular-enterprise-iota.vercel.app/",
  },

  {
    id: 2,
    title: "Whiz Cloud – Company Website",
    description:
      "Official company website developed using Angular. The website represents company services, branding, and offerings with a modern UI and responsive design. Focused on performance, clean structure, and scalability for future enhancements.",
    image: companayLogo,
    tags: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Angular Material",
      "Html",
      "Css",
      "Bootstrap",
      "Git",
    ],
    github: "",
    webapp:
      "https://www.whiz-cloud.com/",
  },

  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website built using React.js and Tailwind CSS. It showcases my skills, projects, experience, and contact details with a modern UI, smooth animations, and responsive layout. Designed to highlight frontend expertise and real-world project experience.",
    image: portfoliLogo,
    tags: [
      "React JS",
      "TYpeScript",
      "JavaScript",
      "API Integration",
      "Fetch",
      "Axios",
      "React Router",
      "Tailwind CSS",
      "Portfolio",
      "Responsive UI",
      "Frontend Development",
    ],
    github:
      "https://github.com/anil-dev-frontend/Anil-Kumar-Portfolio",
    webapp: "",
  },
];
export const education = [
  {
    id: 0,
    img: iecLogo,
    school: "IEC College Of Engineering & Technology, Greater Noida, Uttar Pradesh",
    date: "2013 – 2017",
    grade: "74%",
    desc: "I completed my Bachelor of Technology (B.Tech) from IEC College Of Engineering & Technology, Greater Noida. During my academic journey, I developed strong analytical and problem-solving skills. Over time, my interest in software development and technology grew, which motivated me to transition into the IT field and build a career in frontend and web development.",
    degree: "Bachelor of Technology (B.Tech)",
  },
  {
    id: 1,
    img: upBoardLogo,
    school: "Ram Narayan Intermediate College, Katya, Uttar Pradesh",
    date: "2011 – 2012",
    grade: "76%",
    desc: "I completed my Intermediate (Class XII) education from Ram Narayan Intermediate College, Katya, under the Uttar Pradesh Board. I studied Physics, Chemistry, and Mathematics (PCM), which strengthened my analytical thinking and problem-solving abilities.",
    degree: "Intermediate (Class XII) – UP Board (PCM)",
  },
  {
    id: 2,
    img: upBoardLogo,
    school: "Shri Baburam Intermediate College, Lamkan, Uttar Pradesh",
    date: "2009 – 2010",
    grade: "64%",
    desc: "I completed my High School (Class X) education from Shri Baburam Intermediate College, Lamkan, under the Uttar Pradesh Board. My studies provided a solid academic foundation and discipline for higher education.",
    degree: "High School (Class X) – UP Board",
  }
];