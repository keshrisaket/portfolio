
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  
];

const words = [
  { id:1 ,text: "Ideas", imgPath: "/images/ideas.svg" },
  { id:2 ,text: "Concepts", imgPath: "/images/concepts.svg" },
  { id:3 ,text: "Designs", imgPath: "/images/designs.svg" },
  { id:4 ,text: "Code", imgPath: "/images/code.svg" },
  { id:5 ,text: "Ideas", imgPath: "/images/ideas.svg" },
  { id:6 ,text: "Concepts", imgPath: "/images/concepts.svg" },
  { id:7 ,text: "Designs", imgPath: "/images/designs.svg" },
  { id:8 ,text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/HTML.png",
  },
  {
    imgPath: "/images/logos/JS.png",
  },
  {
    imgPath: "/images/logos/JAVA.png",
  },
  {
    imgPath: "/images/logos/REACT.png",
  },
  {
    imgPath: "/images/logos/NEXT.png",
  },
  {
    imgPath: "/images/logos/EXPRESS.png",
  },
  {
    imgPath: "/images/logos/NODE.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/SQL.png",
  },
  {
    imgPath: "/images/logos/Mongo.png",
  },
  {
    imgPath: "/images/logos/Tailwind.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  // {
  //   name: "React Developer",
  //   imgPath: "/images/logos/react.png",
  // },
  {
    name: "Java Developer",
    imgPath: "/images/logos/icons8-spring-boot-240.svg",
  },
  // {
  //   name: "Backend Developer",
  //   imgPath: "/images/logos/node.png",
  // },
  // {
  //   name: "Interactive Developer",
  //   imgPath: "/images/logos/three.png",
  // },
  // {
  //   name: "Project Manager",
  //   imgPath: "/images/logos/git.svg",
  // },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Saket Keshri brought creativity and technical expertise to the team, significantly improving our Application performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
   
    logoPath: "/images/NoobDev.png",
    title: "Full-stack Developer and Graphic Designer",
    date: "December 2025 - Present",
    responsibilities: [
    "Architected and deployed 'Dehati', a high-performance E-commerce ecosystem featuring a Spring Boot backend and a synchronized Android mobile application.",
    "Developed robust RESTful APIs using Spring Boot to handle secure transactions, real-time inventory management, and user authentication.",
    "Engineered the 'Dehati' Android application using WebView technology, incorporating custom splash screens, progress tracking, and offline resilience logic.",
    "Designed the complete visual identity for Dehati, including high-fidelity UI layouts, promotional graphics, and 2D animations for marketing materials.",
    "Built a centralized Admin Suite to empower stakeholders with real-time data visualization and order orchestration capabilities.",
    "Collaborated with the Business Planning team to translate rural commerce requirements into scalable technical features."
    ],
  },
  {
    review:
      "Keshri’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "https://aikingsolutions.com/images/logo.svg",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "August 2025 - November 2025",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "A versatile developer who seamlessly bridged the gap between complex microservices and automated security. His work on AIOps-based monitoring significantly reduced system downtime.",
    imgPath: "https://image3.mouthshut.com/images/imagesp/l/925835451s.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer (Full Time)",
    date: "January 2025 - August 2025",
    responsibilities: [
    "Architected and deployed scalable microservices using Spring Boot, Hibernate, and GoLang on AWS EC2 environments.",
    "Containerized application modules using Docker to ensure environment consistency and rapid deployment cycles.",
    "Engineered an AIOps-driven anomaly detection system utilizing Prometheus and Python LSTM models for predictive monitoring.",
    "Integrated RabbitMQ to enable robust asynchronous processing and decoupling of high-traffic backend services.",
    "Established a comprehensive DevSecOps pipeline using Jenkins for CI/CD and Semgrep for automated security scanning."
  ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Leo Messi",
    mentions: "@leoMessiiii",
    review:
      "I can’t say enough good things about Saket. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.He's mah GOAT",
    imgPath: "/images/Messi.jpg",
  },
  {
    name: "Cristiano Ronaldo",
    mentions: "@cr7suiiiiii",
    review:
      "Working with Keshri was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects. He's the real GOAT",
    imgPath: "/images/pendu.jpg",
  },
  {
    name: "Muthmar jr",
    mentions: "@muthmar_injured",
    review:
      "Collaborating with Saket was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Keshri's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Saket is the ideal partner. I hope he never get's injured like me",
    imgPath: "/images/muthmar.jpg",
  },
  {
    name: "Pedri Gonzalez",
    mentions: "@magic_pedri",
    review:
      "Saket was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall. Loved that dude",
    imgPath: "/images/pedri.jpg",
  },
  {
    name: "Lamine Yamal",
    mentions: "@madrid's_DAD",
    review:
      "Keshri’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/yamal.jpg",
  },
  {
    name: "Antony",
    mentions: "@goat_antony",
    review:
      "Saket was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch. In my opinion Saket is the real GOAT",
    imgPath: "/images/antony.jpg",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/saketkeshri7/?hl=en",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://github.com/keshrisaket",
    imgPath: "/images/git.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/saketkeshri/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};