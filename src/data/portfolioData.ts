export const portfolioData = {
  personal: {
    name: 'Uttam',
    lastName: 'Chaudhary',
    title: 'Software Developer',
    location: 'India',
    tagline: 'Building clean, performant web experiences and solving problems one algorithm at a time.',
    email: 'contact@uttamchaudhary.dev',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/uttamchaudhary07/',
    github: 'https://github.com/Uttamchaudhary07',
    leetcode: 'https://leetcode.com/u/Uttamchaudhary/',
    email: 'contact@uttamchaudhary.dev',
  },
  about: {
    title: 'About Me',
    introduction:
      'I am a Computer Science Engineering student passionate about software development, AI-powered applications, and problem solving. I enjoy building scalable web applications, exploring machine learning, and continuously improving my engineering skills through projects and competitive programming.',
    stats: [
      { label: '2027 Graduate', value: 'B.Tech CSE' },
      { label: 'Projects Built', value: '3+' },
      { label: 'LeetCode Solved', value: '150+' },
      { label: 'Available For', value: 'Roles' },
    ],
  },
  education: [
    {
      university: 'Jain University',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      startYear: 2023,
      endYear: 2027,
      location: 'Bangalore, India',
      courses: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management',
        'Computer Networks',
        'Software Engineering',
        'Artificial Intelligence',
      ],
    },
  ],
  skills: {
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C'],
    frontend: ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express', 'Spring Boot'],
    database: ['MySQL', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
  projects: [
    {
      id: 1,
      title: 'Smart Attendance System',
      subtitle: 'AI-Powered Face Recognition Platform',
      description:
        'A real-time attendance management system using live face recognition and barcode scanning. Features an admin session control panel, student self-service portal, biometric accuracy tracking, and a live camera feed — all in a clean, responsive interface.',
      image: '/projects/face-recognition.png',
      liveUrl: 'https://facerecognition.sagarjaiswal.dev/',
      githubUrl: 'https://github.com/Uttamchaudhary07',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'React'],
      featured: true,
      accentColor: '#7c3aed',
    },
    {
      id: 2,
      title: 'Developer Portfolio',
      subtitle: 'Minimalistic Interactive Showcase',
      description:
        'A modern, minimalistic portfolio built with React, TypeScript, and Framer Motion. Features smooth scroll interactions, a custom magnetic cursor, dark glassmorphism design, an interactive LeetCode analytics dashboard, and a dynamic project carousel.',
      image: '',
      liveUrl: '#',
      githubUrl: 'https://github.com/Uttamchaudhary07/Portfolio',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Vite'],
      featured: false,
      accentColor: '#ff6b35',
    },
  ],
  leetcode: {
    profileUrl: 'https://leetcode.com/u/Uttamchaudhary/',
    problemsSolved: 150,
    contestRating: 1650,
    ranking: '2.5M',
  },
  experience: [
    {
      title: 'Open Source Contributions',
      description: 'Contributing to various open-source projects and learning from the global developer community.',
      year: 'Ongoing',
    },
    {
      title: 'Personal Projects',
      description: 'Building innovative projects to solve real-world problems using modern tech stacks.',
      year: 'Ongoing',
    },
    {
      title: 'Competitive Programming',
      description: 'Regularly solving algorithmic challenges on LeetCode and HackerRank to sharpen problem-solving skills.',
      year: 'Ongoing',
    },
    {
      title: 'Continuous Learning',
      description: 'Exploring new technologies and frameworks to stay current with the rapidly evolving tech landscape.',
      year: 'Ongoing',
    },
  ],
};
