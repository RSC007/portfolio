function getAge(birthDate) {
  const dob = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

export const fullName = "Rushikesh Chitte";

export const designation = "React JS Developer";

export const email = "rushichitte1998+work@gmail.com";
export const phone = "+91-70439-52537";
export const location = "Surat, Gujarat, India";
export const cvUrl =
  "https://drive.google.com/file/d/1ceklCokiZ06oBNhBwG6XRwGvkLmyq-5G/view?usp=sharing";

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rushikesh-chitte-26b786166/" },
  { name: "Twitter", url: "https://twitter.com/RUSHIKE32714454" },
  { name: "Instagram", url: "https://www.instagram.com/rs_chitte/" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100009133947674" },
];

export const codingProfiles = [
  { name: "LeetCode", count: "76+", url: "https://leetcode.com/rushichitte1998/" },
  {
    name: "Coding Ninjas",
    count: "132+",
    url: "https://www.codingninjas.com/studio/profile/025be801-4500-45a0-8d11-88f75b3cdf3f",
  },
];

export const summary =
  "React.js Developer with 5+ years of experience building scalable web applications using React, JavaScript, Next.js, Redux, and Context API. Experienced in developing complex healthcare, HRMS, and enterprise applications with expertise in state management, API integration, PDF generation, performance optimization, and reusable component development. Skilled in leveraging AI-assisted development tools such as Claude, Codex, ChatGPT, and Gemini to improve coding, debugging, refactoring, and development productivity.";

export const bioList = [
  {
    title: "Birthday",
    value: "16/March/1998",
  },
  {
    title: "Age",
    value: String(getAge("1998-03-16")),
  },
  {
    title: "Address",
    value: "Umiyanagar-2, Navagam, Surat",
  },
  {
    title: "Email",
    value: "rushichitte1998+work@gmail.com",
    href: "mailto:rushichitte1998+work@gmail.com",
  },
  {
    title: "Phone",
    value: "+91-70439-52537",
    href: "tel:+917043952537",
  },
  {
    title: "Nationality",
    value: "India",
  },
  {
    title: "Study",
    value: "Savitribai Phule Pune University",
  },
  {
    title: "Degree",
    value: "B.E. Information Technology",
  },
  {
    title: "Interest",
    value: "Traveling, Learning, Anime",
  },
  {
    title: "Freelance",
    value: "Available",
  },
];

export const codingLanguage = [
  {
    title: "JavaScript",
    value: 80,
  },
  {
    title: "React Js",
    value: 80,
  },
  {
    title: "Node Js & Express",
    value: 60,
  },
  {
    title: "HTML & CSS",
    value: 90,
  },
];

export const language = [
  {
    title: "English",
    value: 80,
  },
  {
    title: "Hindi",
    value: 90,
  },
  {
    title: "Marathi",
    value: 100,
  },
  {
    title: "Gujarati",
    value: 60,
  },
];

export const knowledge = [
  "Frontend: React.js, JavaScript, Next.js, TypeScript",
  "State: Redux, RTK Query, Context API",
  "UI & Forms: Material UI, Bootstrap, Formik, AG Grid",
  "Backend: Node.js, Express, Java",
  "Database: MySQL, MongoDB",
  "DevOps & Tools: Jenkins, Git, Jira, Azure",
  "AI & Productivity: Claude, ChatGPT, Codex, Gemini, Prompt Engineering",
];

export const interest = [
  "System Design ( React )",
  "Code & Performance Optimization",
  "AI-assisted Development",
  "Mentoring students in JavaScript",
  "Learning languages",
];

export const experience = [
  {
    period: "June-2024 To Present",
    company: "EveryDose Innovations, Pune",
    description:
      "React JS Developer on EveryDose.ai. Built the MedGuide module end-to-end, multilingual (13 languages, incl. Arabic RTL) PDF generation, and EHR medication workflows.",
  },
  {
    period: "Dec-2022 To April-2024 (Remote)",
    company: "ContactPoint360, Kerala",
    description:
      "Software Developer on H2R.ai, an HRMS covering hiring to offboarding, built with React, TypeScript and Material UI. Also redesigned and refactored the Career and Career Admin apps.",
  },
  {
    period: "June-2021 To Dec-2022 (On-Site)",
    company: "Bigscal Technologies, Surat",
    description:
      "Software Developer on the GNE and CEM admin panels (React, Formik, Redux Toolkit, AG Grid) with Java and MySQL stored procedures, plus enhancements to an Electron-based HRMS app.",
  },
];

export const education = [
  {
    period: "2016-2017 ( 12th Science )",
    collage: "Gurukrupa High School",
  },
  {
    period: "Aug 2016 - July 2021",
    collage:
      "B.E. Information Technology, D.Y.Patil Collage Of Engineering ( SPPU ) - CGPA 7.85",
  },
];

export const projects = [
  {
    company: "EveryDose Innovations (Pune)",
    period: "June-2024 To Present",
    products: [
      {
        name: "EveryDose.ai",
        url: "https://everydose.ai",
        points: [
          "Independently developed the MedGuide module end-to-end, including medication scheduling, pictograms, PDF generation, preview, and support for 13 language translations.",
          "Built and tested the PDF generation pipeline across multiple document scenarios, validating layouts, fonts, images, page breaks, multilingual content, and PDF output consistency.",
          "Developed a runtime SVG-to-PNG conversion script to process pictograms during application execution and ensure reliable rendering in generated PDFs.",
          "Resolved complex HTML-to-PDF issues, including CSS compatibility, custom fonts, blank PDFs, image rendering, page layouts, and browser-to-PDF differences.",
          "Implemented Arabic RTL and multilingual PDF rendering, handling Unicode, language-specific fonts, text direction, and document layouts.",
          "Developed EHR medication workflows for reviewing, including, ignoring, removing, and re-importing medications, with deduplication and inclusion-state logic.",
          "Managed complex medication state using React Context API, resolving stale state and state leakage across forms, dialogs, and EHR workflows.",
          "Built dynamic Formik medication forms supporting PRN medications, multiple frequency types, conditional fields, validation, and scheduling.",
          "Resolved complex React rendering issues, including lost focus, stale values, unexpected resets, and unnecessary re-renders.",
          "Leveraged Claude, Codex, ChatGPT, and Gemini for AI-assisted coding, debugging, code optimization, documentation, and accelerating day-to-day development workflows.",
        ],
      },
    ],
  },
  {
    company: "ContactPoint360 (Remote)",
    period: "Dec-2022 To April-2024",
    products: [
      {
        name: "H2R.ai (Hire to Rehire)",
        url: "https://contactpoint360.h2r.ai/app/dashboard",
        points: [
          "Developed an advanced HRMS system using React, TypeScript, Material UI, and other cutting-edge technologies.",
          "This system effectively streamlines HR operations, encompassing the entire spectrum from streamlined hiring procedures to smooth offboarding processes.",
          "Collaborated with back-end developers and product managers to implement new features.",
        ],
      },
      {
        name: "Career And Career Admin Panel",
        url: "http://dvcareer.cp360apps.com/About",
        points: [
          "Implemented new UI designs and optimized existing React components across the Career and Career Admin applications.",
          "Developed using React, Material UI, and other cutting-edge technologies.",
          "Improved existing React components by applying consistent coding standards and refactoring repetitive implementation patterns.",
        ],
      },
    ],
  },
  {
    company: "Bigscal Technologies (Surat)",
    period: "June-2021 To Dec-2022",
    products: [
      {
        name: "CMS / GNE & CEM Admin Panels",
        points: [
          "Developed and integrated stored procedures in MySQL, enhancing database functionality.",
          "Implemented CRUD operations, ensuring seamless interaction between Java code and the database.",
          "Collaborated with the development team to optimize Java code, resulting in a 15% improvement in application performance.",
          "Developed React-based admin interfaces for GNE and CEM, implementing CRUD workflows, forms, role-based functionality, and API integrations.",
          "Used Formik, Bootstrap, Redux Toolkit, and AG Grid to build and maintain frontend workflows.",
          "In the GNE (Gifts and Entertainment) project, an admin panel allowed individuals at various organizational levels to assign ranks to clients. These rankings were used by stakeholders to determine the distribution of gifts and vacation packages. In the CEM (Contact Event Management) project, events were organized to distribute these prizes to clients.",
        ],
      },
      {
        name: "HRMS (Electron)",
        points: [
          "Enhanced the Electron-based HRMS application with features including history tracking and screenshot capture.",
        ],
      },
    ],
  },
];
