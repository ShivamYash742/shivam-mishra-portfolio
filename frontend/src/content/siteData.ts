export const siteData = {
  profile: {
    name: "Shivam Mishra",
    title: "B.Tech Computer Science and Engineering",
    tagline: "Full-Stack Developer | AI Enthusiast | Building Impactful Solutions",
    email: "Shivamyash742@gmail.com",
    phone: "+91 9871576382",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      portfolio: "#"
    },
    education: {
      degree: "B.Tech Computer Science and Engineering",
      institute: "Maharaja Surajmal Institute of Technology",
      timeline: "Sept 2023 - Aug 2027",
      gpa: "8.92/10"
    }
  },
  skills: {
    languages: ["HTML/CSS", "JavaScript", "TypeScript", "C/C++", "Python", "SQL"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST API", "FastAPI", "Next.js"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    versionControl: ["Git", "GitHub"],
    authentication: ["NextAuth", "Clerk"],
    mlFrameworks: ["Scikit-learn", "LightGBM", "XGBoost", "CatBoost", "Matplotlib", "Ensemble Learning"]
  },
  projects: [
    {
      name: "MockMentor",
      stack: ["Next.js", "Express.js", "FastAPI", "Python", "OpenCV", "NLP"],
      summary: "AI-powered mock interview platform that personalizes questions and feedback based on resume and JD; includes real-time conversation and facial expression analysis with comprehensive reports.",
      links: { github: "#", live: "#" },
      tags: ["AI", "NLP", "Full-Stack"]
    },
    {
      name: "AI Feedback Analyzer",
      stack: ["Next.js", "Python", "NLP", "FastAPI", "MongoDB"],
      summary: "Enterprise solution analyzing large-scale consumer reviews with advanced NLP to identify pain points and trends; auto-generates data-driven product recommendations.",
      links: { github: "#", live: "#" },
      tags: ["AI", "NLP", "Enterprise"]
    }
  ],
  experience: [
    {
      role: "Web Developer Intern",
      org: "Airtech India Pvt Ltd",
      timeline: "June 2025 - July 2025",
      highlights: [
        "Built a responsive company website in React from the ground up to establish primary online presence.",
        "Implemented reusable components and state management for a seamless UX.",
        "Collaborated with stakeholders to translate business needs into technical specs."
      ]
    },
    {
      role: "Technical Department Executive Head",
      org: "E-Cell, MSIT",
      timeline: "Aug 2025 - Present",
      highlights: [
        "Lead technical department overseeing web projects and providing guidance to student startups.",
        "Architect and build MVPs for emerging campus ventures.",
        "Previously contributed as Web Developer for Geek Room and MSC websites."
      ]
    }
  ],
  achievements: [
    "Finalist (Top 10) at Cube Innovators Hackathon (IIT Delhi).",
    "Problem Statement Finalist at HackwithMAIT 5.0.",
    "Top 15 Finalist at Hackcraft 2.0 for 'AI Feedback Analyzer'.",
    "Technical Department Executive Head at E-Cell, MSIT (Aug 2025 - Present)."
  ]
};

export type SiteData = typeof siteData;
