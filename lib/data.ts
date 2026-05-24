export const profile = {
  name: "Shivam Mishra",
  initials: "SM",
  title: "Full-Stack Developer & AI Enthusiast",
  tagline: "Building impactful solutions at the intersection of AI and modern web.",
  email: "shivamyash742@gmail.com",
  phone: "+91 9871576382",
  github: "https://github.com/shivamyash742",
  linkedin: "https://linkedin.com/in/shivamyash742",
  portfolio: "https://shivamyash742.vercel.app",
} as const;

export const education = {
  degree: "B.Tech Computer Science and Engineering",
  institute: "Maharaja Surajmal Institute of Technology",
  timeline: "Sept 2023 – Aug 2027",
  gpa: "9.0/10",
} as const;

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "C++", "TypeScript"],
    color: "#7C3AED",
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "#06B6D4",
  },
  {
    category: "Data & Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "Express.js"],
    color: "#8B5CF6",
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "#0EA5E9",
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NLP", "Scikit-learn", "OpenCV", "MediaPipe"],
    color: "#7C3AED",
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Clerk", "NextAuth"],
    color: "#06B6D4",
  },
] as const;

export const projects = [
  {
    name: "MockMentor",
    subtitle: "AI Voice-Based Interview Simulation Platform",
    description:
      "Real-time AI-powered mock interview platform that personalizes questions based on resume + job description, with live voice conversation and facial expression analysis.",
    stack: [
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Groq (LLaMA 3.1)",
      "Web Speech API",
      "OpenCV",
      "MediaPipe",
    ],
    points: [
      "Built real-time voice-based interview system using LLM-driven conversation based on resume and JD",
      "Designed backend to manage interview sessions, transcripts, and performance metrics",
      "Implemented low-latency STT/TTS pipeline using browser APIs for continuous voice interaction",
      "Generated automated feedback by analyzing speech patterns (WPM, pauses, filler words)",
      "Integrated LLM for question generation and structured performance evaluation",
      "Developed CV-based stress detection module using OpenCV + MediaPipe",
    ],
    github: "https://github.com/shivamyash742",
    live: "#",
    tags: ["AI", "NLP", "Full-Stack"],
    accentColor: "#7C3AED",
  },
  {
    name: "AI Feedback Analyzer",
    subtitle: "NLP-Powered Consumer Review Analysis",
    description:
      "Enterprise-grade data analysis pipeline processing large-scale consumer reviews with advanced NLP to surface key trends, pain points, and actionable product insights.",
    stack: ["Next.js", "Python", "NLP", "FastAPI", "MongoDB", "Pandas"],
    points: [
      "Built data analysis pipeline to process large-scale consumer review datasets",
      "Implemented NLP preprocessing and sentiment analysis to identify key trends and pain points",
      "Generated automated insights to support data-driven product improvement decisions",
    ],
    github: "https://github.com/shivamyash742",
    live: "#",
    tags: ["AI", "NLP", "Enterprise"],
    accentColor: "#06B6D4",
  },
] as const;

export const experience = [
  {
    role: "Technical Department Executive Head",
    org: "E-Cell, MSIT",
    timeline: "Aug 2025 – Present",
    current: true,
    highlights: [
      "Lead technical development for multiple student startups, guiding web-based MVP development",
      "Designed and built scalable web solutions for early-stage products",
      "Mentored developers and coordinated execution across multiple projects",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Airtech India Pvt Ltd",
    timeline: "June 2025 – July 2025",
    current: false,
    highlights: [
      "Built responsive Next.js web application improving user navigation and UI consistency",
      "Translated business requirements into scalable frontend features through stakeholder collaboration",
      "Developed reusable components to accelerate development and maintain consistency",
    ],
  },
] as const;

export const achievements = [
  { text: "Finalist — Cube Innovators Hackathon", detail: "IIT Delhi", icon: "🏆" },
  { text: "Finalist — Code Slayer Hackathon", detail: "NIT Delhi", icon: "🥇" },
  { text: "Finalist — HackwithMAIT 5.0", detail: "Problem Statement Winner", icon: "🎯" },
  { text: "Finalist — Hackcraft 2.0 & 3.0", detail: "AI Feedback Analyzer", icon: "🚀" },
  {
    text: "Technical Dept. Executive Head",
    detail: "E-Cell MSIT, Aug 2025–Present",
    icon: "⚡",
  },
  {
    text: "SQL & Analytics",
    detail: "Aggregation queries for structured dataset insights",
    icon: "📊",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
