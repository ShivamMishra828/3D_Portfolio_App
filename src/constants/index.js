import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  udemy,
  internshala,
  chatapp,
  newsapp,
  textutils,
  threejs,
  celticlab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Youtuber",
    icon: creator,
  },
  {
    title: "Designer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Development",
    company_name: "Celtic Lab",
    icon: celticlab,
    iconBg: "#383E56",
    date: "July 2022 - Aug 2022",
    points: [
      "I gained exposure to a range of technologies that are commonly used in full stack development. This included learning about front-end frameworks like React and Angular, back-end technologies like Node.js and Django, and databases such as MongoDB and PostgreSQL",
      " I learned a lot about best practices in terms of coding style, version control, and project management, and was able to contribute to real-world projects by taking on tasks like feature development and bug fixing. ",
      "Another key takeaway from the internship was a better understanding of the full development process for web applications. This included learning about requirements gathering, prototyping, testing, deployment, and maintenance."
    ],
  },
  {
    title: "ReactJS Training",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Understanding betweend Single‐Page and Multi‐Page Websites.",
      "UnderStands JSX, how Babel Help to modify JavaScript Code, Understanding of Props, State and Hooks",
      "Learn About React‐Dom, React‐Routers and how they Works.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "Jun 2020 - Aug 2020",
    points: [
      "Produced HTML, CSS, Javascript for responsive web designs in compliance with company standards and protocols.",
      "Have worked with web debugging tools (Chrome Developer Console)",
      "Learning how to minify code – CSS and JS.",
      "Working on front‐end widgets."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN Chat-App",
    description:
      "The MERN Stack based chat-app is designed to provide users with a seamless communication experience. The app has a one-to-one chat feature, allowing users to easily connect with their friends and family members. It also has a group chat functionality, enabling users to communicate with multiple people at once. The app also features voice and video calling, enabling users to have face-to-face conversations from anywhere in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/ShivamMishra828/MERN-Chat-App",
  },
  {
    name: "React News-App",
    description:
      "The ReactJS-based news app is designed to provide users with easy access to the latest news from around the world. Using the app, users can browse through news articles that are categorized based on different topics, including technology, sports, politics, entertainment, and more. The app fetches news from various reliable sources and presents them in a clean and user-friendly interface. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/ShivamMishra828/Kal-Tak-News_React-App",
  },
  {
    name: "Text-Utils",
    description:
      "The ReactJS-based text app is a versatile tool that can be used to perform various operations on any line of text. This app is designed to make text manipulation easy and efficient. With this app, users can modify text in a variety of ways, such as converting text to uppercase or lowercase, adding or removing spaces, removing punctuation, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/ShivamMishra828/TextUtils-React-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
