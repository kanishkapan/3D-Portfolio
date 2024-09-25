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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets/assets";
  
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kanishka is a skilled web developer with a strong understanding of front-end and back-end technologies. His ability to convert complex designs into functional websites is impressive. He is a team player and always ready to learn new technologies.",
      name: "Vinamra Hetawal",
      designation: "UI/UX engineer ",
      company: "Acropolis",
      image: "WhatsApp Image 2024-06-03 at 22.16.27_71c6982e.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their colleague's success like Kanishka does.",
      name: "Garima Shrivastav",
      designation: "Club Editor ",
      company: "Rotaract Club of Meghdoot Symbiosis ",
      image: "WhatsApp Image 2024-06-03 at 23.23.17_c2b6e95b.jpg",
    },
    {
      testimonial:
        "This individual demonstrates exceptional proficiency in both frontend and backend technologies, crafting seamless user experiences and robust functionality. Their mastery of HTML, CSS, JavaScript, and popular frameworks ensures efficient and elegant solutions.  Overall, their expertise, adaptability, and dedication make them a valuable asset to any web development team.",
      name: "Gungun Jain",
      designation: "DSA Learner",
      company: "IET DAVV  ",
      image: "WhatsApp Image 2024-06-04 at 09.56.00_fd6997f5.jpg",
    },
    {
      testimonial:
        "Kanishka's expertise as a full stack developer is truly impressive. Working with him has always been a pleasure because of his dedication, consistency, problem-solving skills, and seamless ability to handle both front-end and back-end tasks.",
      name: "Mufaddal Ratlamwala",
      designation: "Co-Developer",
      company: "IET-DAVV",
      image: "WhatsApp Image 2024-06-04 at 01.00.23_3573f995.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kanishkapan",
    },
    {
      name: "Twitter clone",
      description:
        "I'm thrilled to share a project I've recently completed: a Twitter clone built using React and Tailwind CSS! 🎉 This project was an incredible learning experience that combined my passion for front-end development with the latest technologies in web development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "Screenshot 2024-05-23 041818.png",
      source_code_link: "https://github.com/kanishkapan/Twitter-Clone",
    },

    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/kanishkapan",
    },

    {
      name: "Image Gallery",
      description:
        "I’m thrilled to share a recent project I completed: an image gallery app built with React and the Pixabay API. The journey was filled with learning and overcoming challenges, and I’d love to share my story:",
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
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: "Screenshot 2024-06-04 032536.png",
      source_code_link: "https://github.com/kanishkapan",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  const socialMedia = [
    {
      name: "kanishkapan",
      icon: "images.png", // Replace with the path to your GitHub icon
      link: "https://github.com/kanishkapan",
    },
    {
      name: "Kanishka Pandey",
      icon: "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.webp", // Replace with the path to your LinkedIn icon
      link: "www.linkedin.com/in/kanishka-pandey-b0277b292",
    },
    {
      name: "@kaniii__21",
      icon:"png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird.png", // Replace with the path to your Twitter icon
      link: "https://x.com/kaniii__21",
    },
    {
      name: "hustlecrushconquer",
      icon:"png-transparent-camera-instagram-social-media-instagram-logo-social-media-circle-icon-thumbnail.png", // Replace with the path to your Instagram icon
      link: "https://www.instagram.com/hustlecrushconquer/",
    },
  
  ];
  export { services, technologies, experiences, testimonials, projects ,socialMedia};
  