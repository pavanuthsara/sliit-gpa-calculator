/**
 * Full curriculum data for all 6 SLIIT specializations.
 * Y4 semesters use the structure: { compulsory: [], electivesPool: [], requiredElectivesCount: N }
 * All other semesters are flat arrays of modules.
 */
export const SPECIALIZATIONS = [
  { id: 'SE',      label: 'Software Engineering' },
  { id: 'IT',      label: 'Information Technology' },
  { id: 'DS',      label: 'Data Science' },
  { id: 'IM',      label: 'Interactive Media' },
  { id: 'CSNE',    label: 'Computer Systems & Network Engineering' },
  { id: 'CYBSEC',  label: 'Cyber Security' },
];

export const curriculumData = {

  // ─────────────────────────────────────────────────────────────────
  // SOFTWARE ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  SE: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'IT1020', name: 'Mathematics for Computing',           credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'IT1050', name: 'Object Oriented Programming',         credits: 4, type: 'compulsory' },
      { id: 'IT1060', name: 'Discrete Mathematics',                credits: 3, type: 'compulsory' },
      { id: 'IT1070', name: 'Web Technologies',                    credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'SE2010', name: 'Data Structures & Algorithms',        credits: 4, type: 'compulsory' },
      { id: 'SE2020', name: 'Database Management Systems',         credits: 4, type: 'compulsory' },
      { id: 'SE2030', name: 'Software Engineering Principles',     credits: 3, type: 'compulsory' },
      { id: 'SE2040', name: 'Operating Systems',                   credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'SE2050', name: 'Design Patterns',                     credits: 3, type: 'compulsory' },
      { id: 'SE2060', name: 'Computer Networks',                   credits: 3, type: 'compulsory' },
      { id: 'SE2070', name: 'Software Testing',                    credits: 3, type: 'compulsory' },
      { id: 'SE2080', name: 'Statistics for Computing',            credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'SE3010', name: 'Software Architecture',               credits: 4, type: 'compulsory' },
      { id: 'SE3020', name: 'Enterprise Application Development',  credits: 4, type: 'compulsory' },
      { id: 'SE3030', name: 'DevOps Engineering',                  credits: 3, type: 'compulsory' },
      { id: 'SE3040', name: 'Human Computer Interaction',          credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'SE3050', name: 'Distributed Systems',                 credits: 4, type: 'compulsory' },
      { id: 'SE3060', name: 'Agile Project Management',            credits: 3, type: 'compulsory' },
      { id: 'SE3070', name: 'Security Engineering',                credits: 3, type: 'compulsory' },
      { id: 'SE3080', name: 'Research Methods',                    credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'SE4010', name: 'Software Engineering Project I',    credits: 6, type: 'compulsory' },
        { id: 'SE4020', name: 'Professional Practice & Ethics',    credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'SE4E01', name: 'Machine Learning Engineering',      credits: 3, type: 'elective' },
        { id: 'SE4E02', name: 'Cloud Computing & Microservices',   credits: 3, type: 'elective' },
        { id: 'SE4E03', name: 'Internet of Things',                credits: 3, type: 'elective' },
        { id: 'SE4E04', name: 'Blockchain Technology',             credits: 3, type: 'elective' },
        { id: 'SE4E05', name: 'Mobile Application Development',    credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'SE4030', name: 'Software Engineering Project II',   credits: 8, type: 'compulsory' },
        { id: 'SE4040', name: 'Industry Placement Report',         credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'SE4E06', name: 'Advanced Algorithms',               credits: 3, type: 'elective' },
        { id: 'SE4E07', name: 'Natural Language Processing',        credits: 3, type: 'elective' },
        { id: 'SE4E08', name: 'AR/VR Development',                 credits: 3, type: 'elective' },
        { id: 'SE4E09', name: 'Enterprise Architecture',           credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INFORMATION TECHNOLOGY
  // ─────────────────────────────────────────────────────────────────
  IT: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'IT1020', name: 'Mathematics for Computing',           credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'IT1050', name: 'Object Oriented Programming',         credits: 4, type: 'compulsory' },
      { id: 'IT1060', name: 'Discrete Mathematics',                credits: 3, type: 'compulsory' },
      { id: 'IT1070', name: 'Web Technologies',                    credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'IT2010', name: 'Data Structures & Algorithms',        credits: 4, type: 'compulsory' },
      { id: 'IT2020', name: 'Database Systems',                    credits: 4, type: 'compulsory' },
      { id: 'IT2030', name: 'Systems Analysis & Design',           credits: 3, type: 'compulsory' },
      { id: 'IT2040', name: 'Computer Networks',                   credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'IT2050', name: 'Web Application Development',         credits: 4, type: 'compulsory' },
      { id: 'IT2060', name: 'IT Project Management',               credits: 3, type: 'compulsory' },
      { id: 'IT2070', name: 'Operating Systems',                   credits: 3, type: 'compulsory' },
      { id: 'IT2080', name: 'Statistics & Probability',            credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'IT3010', name: 'Enterprise Systems',                  credits: 4, type: 'compulsory' },
      { id: 'IT3020', name: 'IT Infrastructure Management',        credits: 4, type: 'compulsory' },
      { id: 'IT3030', name: 'Business Intelligence',               credits: 3, type: 'compulsory' },
      { id: 'IT3040', name: 'Human Computer Interaction',          credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'IT3050', name: 'Cloud Infrastructure',                credits: 4, type: 'compulsory' },
      { id: 'IT3060', name: 'Information Security',                credits: 3, type: 'compulsory' },
      { id: 'IT3070', name: 'Service-Oriented Architecture',       credits: 3, type: 'compulsory' },
      { id: 'IT3080', name: 'Research Methods',                    credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'IT4010', name: 'IT Capstone Project I',             credits: 6, type: 'compulsory' },
        { id: 'IT4020', name: 'IT Governance & Compliance',        credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'IT4E01', name: 'Digital Transformation',            credits: 3, type: 'elective' },
        { id: 'IT4E02', name: 'ERP Systems',                       credits: 3, type: 'elective' },
        { id: 'IT4E03', name: 'IT Service Management',             credits: 3, type: 'elective' },
        { id: 'IT4E04', name: 'Machine Learning for IT',           credits: 3, type: 'elective' },
        { id: 'IT4E05', name: 'DevOps & Automation',               credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'IT4030', name: 'IT Capstone Project II',            credits: 8, type: 'compulsory' },
        { id: 'IT4040', name: 'Professional Practice',             credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'IT4E06', name: 'Big Data Technologies',             credits: 3, type: 'elective' },
        { id: 'IT4E07', name: 'Internet of Things Applications',   credits: 3, type: 'elective' },
        { id: 'IT4E08', name: 'Advanced Database Systems',         credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // DATA SCIENCE
  // ─────────────────────────────────────────────────────────────────
  DS: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'DS1020', name: 'Probability & Statistics I',          credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'DS1050', name: 'Python for Data Science',             credits: 4, type: 'compulsory' },
      { id: 'DS1060', name: 'Linear Algebra',                      credits: 3, type: 'compulsory' },
      { id: 'IT1070', name: 'Web Technologies',                    credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'DS2010', name: 'Data Structures & Algorithms',        credits: 4, type: 'compulsory' },
      { id: 'DS2020', name: 'Probability & Statistics II',         credits: 4, type: 'compulsory' },
      { id: 'DS2030', name: 'Database Systems for DS',             credits: 3, type: 'compulsory' },
      { id: 'DS2040', name: 'Data Wrangling & Visualization',      credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'DS2050', name: 'Machine Learning Fundamentals',       credits: 4, type: 'compulsory' },
      { id: 'DS2060', name: 'Big Data Technologies',               credits: 3, type: 'compulsory' },
      { id: 'DS2070', name: 'Applied Statistics',                  credits: 3, type: 'compulsory' },
      { id: 'DS2080', name: 'Research Methods',                    credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'DS3010', name: 'Deep Learning',                       credits: 4, type: 'compulsory' },
      { id: 'DS3020', name: 'Natural Language Processing',          credits: 4, type: 'compulsory' },
      { id: 'DS3030', name: 'Data Engineering',                    credits: 3, type: 'compulsory' },
      { id: 'DS3040', name: 'Business Analytics',                  credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'DS3050', name: 'Computer Vision',                     credits: 4, type: 'compulsory' },
      { id: 'DS3060', name: 'Cloud Platforms for Data Science',    credits: 3, type: 'compulsory' },
      { id: 'DS3070', name: 'Ethics in AI & Data',                 credits: 3, type: 'compulsory' },
      { id: 'DS3080', name: 'Advanced Statistical Modelling',      credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'DS4010', name: 'Data Science Research Project I',   credits: 6, type: 'compulsory' },
        { id: 'DS4020', name: 'Data Science in Industry',          credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'DS4E01', name: 'Reinforcement Learning',            credits: 3, type: 'elective' },
        { id: 'DS4E02', name: 'Time Series Analysis',              credits: 3, type: 'elective' },
        { id: 'DS4E03', name: 'Graph Neural Networks',             credits: 3, type: 'elective' },
        { id: 'DS4E04', name: 'Explainable AI',                    credits: 3, type: 'elective' },
        { id: 'DS4E05', name: 'Bioinformatics',                    credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'DS4030', name: 'Data Science Research Project II',  credits: 8, type: 'compulsory' },
        { id: 'DS4040', name: 'Professional Practice',             credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'DS4E06', name: 'MLOps & Model Deployment',          credits: 3, type: 'elective' },
        { id: 'DS4E07', name: 'Quantum Computing Concepts',        credits: 3, type: 'elective' },
        { id: 'DS4E08', name: 'Healthcare Analytics',              credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INTERACTIVE MEDIA
  // ─────────────────────────────────────────────────────────────────
  IM: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'IM1020', name: 'Design Principles & Fundamentals',    credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'IM1050', name: 'Digital Media Production',            credits: 4, type: 'compulsory' },
      { id: 'IM1060', name: 'Typography & Visual Design',          credits: 3, type: 'compulsory' },
      { id: 'IT1070', name: 'Web Technologies',                    credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'IM2010', name: 'User Experience Design',              credits: 4, type: 'compulsory' },
      { id: 'IM2020', name: 'Interactive Web Development',         credits: 4, type: 'compulsory' },
      { id: 'IM2030', name: '2D & 3D Animation',                   credits: 3, type: 'compulsory' },
      { id: 'IM2040', name: 'Game Design Concepts',                credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'IM2050', name: 'Mobile UI/UX Design',                 credits: 4, type: 'compulsory' },
      { id: 'IM2060', name: 'Motion Graphics',                     credits: 3, type: 'compulsory' },
      { id: 'IM2070', name: 'Front-End Frameworks',                credits: 3, type: 'compulsory' },
      { id: 'IM2080', name: 'Creative Research Methods',           credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'IM3010', name: 'Game Development',                    credits: 4, type: 'compulsory' },
      { id: 'IM3020', name: 'AR/VR Fundamentals',                  credits: 4, type: 'compulsory' },
      { id: 'IM3030', name: 'Digital Audio & Sound Design',        credits: 3, type: 'compulsory' },
      { id: 'IM3040', name: 'Human Computer Interaction',          credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'IM3050', name: 'Interactive Narrative Design',        credits: 4, type: 'compulsory' },
      { id: 'IM3060', name: 'Advanced Game Mechanics',             credits: 3, type: 'compulsory' },
      { id: 'IM3070', name: 'Creative Portfolio Development',      credits: 3, type: 'compulsory' },
      { id: 'IM3080', name: 'Research Methods in Media',           credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'IM4010', name: 'Interactive Media Project I',       credits: 6, type: 'compulsory' },
        { id: 'IM4020', name: 'Media Industry Practice',           credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'IM4E01', name: 'Advanced VR/AR Development',        credits: 3, type: 'elective' },
        { id: 'IM4E02', name: 'Generative Art & AI',               credits: 3, type: 'elective' },
        { id: 'IM4E03', name: 'Advanced Game Engine Programming',  credits: 3, type: 'elective' },
        { id: 'IM4E04', name: 'Digital Film & Cinematography',     credits: 3, type: 'elective' },
        { id: 'IM4E05', name: 'Immersive Experience Design',       credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'IM4030', name: 'Interactive Media Project II',      credits: 8, type: 'compulsory' },
        { id: 'IM4040', name: 'Professional Creative Portfolio',   credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'IM4E06', name: 'Social Media & Content Strategy',   credits: 3, type: 'elective' },
        { id: 'IM4E07', name: 'UX Research & Usability Testing',   credits: 3, type: 'elective' },
        { id: 'IM4E08', name: 'E-Sports & Gaming Business',        credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // COMPUTER SYSTEMS & NETWORK ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  CSNE: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'CS1020', name: 'Digital Logic & Electronics',         credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'IT1050', name: 'Object Oriented Programming',         credits: 4, type: 'compulsory' },
      { id: 'CS1060', name: 'Computer Architecture',               credits: 3, type: 'compulsory' },
      { id: 'CS1070', name: 'Data Communications Basics',          credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'CS2010', name: 'Data Structures & Algorithms',        credits: 4, type: 'compulsory' },
      { id: 'CS2020', name: 'Computer Networks I',                 credits: 4, type: 'compulsory' },
      { id: 'CS2030', name: 'Operating Systems',                   credits: 3, type: 'compulsory' },
      { id: 'CS2040', name: 'Embedded Systems',                    credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'CS2050', name: 'Computer Networks II',                credits: 4, type: 'compulsory' },
      { id: 'CS2060', name: 'Signals & Systems',                   credits: 3, type: 'compulsory' },
      { id: 'CS2070', name: 'Network Administration',              credits: 3, type: 'compulsory' },
      { id: 'CS2080', name: 'Technical Report Writing',            credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'CS3010', name: 'Advanced Networking',                 credits: 4, type: 'compulsory' },
      { id: 'CS3020', name: 'Network Security',                    credits: 4, type: 'compulsory' },
      { id: 'CS3030', name: 'Wireless Communications',             credits: 3, type: 'compulsory' },
      { id: 'CS3040', name: 'Cloud & Virtualization',              credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'CS3050', name: 'Software Defined Networking',         credits: 4, type: 'compulsory' },
      { id: 'CS3060', name: 'IoT Systems',                         credits: 3, type: 'compulsory' },
      { id: 'CS3070', name: 'Network Automation',                  credits: 3, type: 'compulsory' },
      { id: 'CS3080', name: 'Research Methods',                    credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'CS4010', name: 'Network Engineering Project I',     credits: 6, type: 'compulsory' },
        { id: 'CS4020', name: 'Professional Engineering Practice', credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'CS4E01', name: '5G & Next-Gen Networks',            credits: 3, type: 'elective' },
        { id: 'CS4E02', name: 'Network Function Virtualization',   credits: 3, type: 'elective' },
        { id: 'CS4E03', name: 'Satellite Communications',          credits: 3, type: 'elective' },
        { id: 'CS4E04', name: 'Edge & Fog Computing',              credits: 3, type: 'elective' },
        { id: 'CS4E05', name: 'Autonomous Systems & Robotics',     credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'CS4030', name: 'Network Engineering Project II',    credits: 8, type: 'compulsory' },
        { id: 'CS4040', name: 'Industry Placement Report',         credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'CS4E06', name: 'Advanced Cybersecurity',            credits: 3, type: 'elective' },
        { id: 'CS4E07', name: 'Network Performance Engineering',   credits: 3, type: 'elective' },
        { id: 'CS4E08', name: 'Quantum Networking',                credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // CYBER SECURITY
  // ─────────────────────────────────────────────────────────────────
  CYBSEC: {
    Y1S1: [
      { id: 'IT1010', name: 'Introduction to Programming',         credits: 4, type: 'compulsory' },
      { id: 'CY1020', name: 'Cyber Security Fundamentals',         credits: 3, type: 'compulsory' },
      { id: 'IT1030', name: 'Computer Systems Fundamentals',       credits: 3, type: 'compulsory' },
      { id: 'IT1040', name: 'Communication Skills',                credits: 2, type: 'compulsory' },
    ],
    Y1S2: [
      { id: 'IT1050', name: 'Object Oriented Programming',         credits: 4, type: 'compulsory' },
      { id: 'CY1060', name: 'Cryptography Basics',                 credits: 3, type: 'compulsory' },
      { id: 'CY1070', name: 'Computer Networks for Security',      credits: 3, type: 'compulsory' },
      { id: 'IT1080', name: 'Professional Development',            credits: 2, type: 'compulsory' },
    ],
    Y2S1: [
      { id: 'CY2010', name: 'Data Structures & Algorithms',        credits: 4, type: 'compulsory' },
      { id: 'CY2020', name: 'Network Security',                    credits: 4, type: 'compulsory' },
      { id: 'CY2030', name: 'Operating Systems Security',          credits: 3, type: 'compulsory' },
      { id: 'CY2040', name: 'Ethical Hacking Fundamentals',        credits: 3, type: 'compulsory' },
    ],
    Y2S2: [
      { id: 'CY2050', name: 'Web Application Security',            credits: 4, type: 'compulsory' },
      { id: 'CY2060', name: 'Malware Analysis',                    credits: 3, type: 'compulsory' },
      { id: 'CY2070', name: 'Digital Forensics I',                 credits: 3, type: 'compulsory' },
      { id: 'CY2080', name: 'Security Research Methods',           credits: 3, type: 'compulsory' },
    ],
    Y3S1: [
      { id: 'CY3010', name: 'Advanced Penetration Testing',        credits: 4, type: 'compulsory' },
      { id: 'CY3020', name: 'Cloud Security',                      credits: 4, type: 'compulsory' },
      { id: 'CY3030', name: 'Incident Response & Threat Intel',    credits: 3, type: 'compulsory' },
      { id: 'CY3040', name: 'Security Operations Centre (SOC)',    credits: 3, type: 'compulsory' },
    ],
    Y3S2: [
      { id: 'CY3050', name: 'Advanced Cryptography',               credits: 4, type: 'compulsory' },
      { id: 'CY3060', name: 'Digital Forensics II',                credits: 3, type: 'compulsory' },
      { id: 'CY3070', name: 'Security Architecture & Design',      credits: 3, type: 'compulsory' },
      { id: 'CY3080', name: 'Governance, Risk & Compliance',       credits: 2, type: 'compulsory' },
    ],
    Y4S1: {
      compulsory: [
        { id: 'CY4010', name: 'Cyber Security Research Project I', credits: 6, type: 'compulsory' },
        { id: 'CY4020', name: 'Cyber Law & Ethics',                credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'CY4E01', name: 'Offensive Security & Red Teaming',  credits: 3, type: 'elective' },
        { id: 'CY4E02', name: 'Industrial Control Systems Sec.',   credits: 3, type: 'elective' },
        { id: 'CY4E03', name: 'Blockchain Security',               credits: 3, type: 'elective' },
        { id: 'CY4E04', name: 'AI in Cyber Security',              credits: 3, type: 'elective' },
        { id: 'CY4E05', name: 'Zero Trust Architecture',           credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: 'CY4030', name: 'Cyber Security Research Project II',credits: 8, type: 'compulsory' },
        { id: 'CY4040', name: 'Professional Practice',             credits: 2, type: 'compulsory' },
      ],
      electivesPool: [
        { id: 'CY4E06', name: 'Threat Hunting & Intelligence',     credits: 3, type: 'elective' },
        { id: 'CY4E07', name: 'Bug Bounty & Vulnerability Disc.',  credits: 3, type: 'elective' },
        { id: 'CY4E08', name: 'Cyber Security Management',         credits: 3, type: 'elective' },
      ],
      requiredElectivesCount: 1,
    },
  },
};

export const SEMESTER_KEYS = ['Y1S1','Y1S2','Y2S1','Y2S2','Y3S1','Y3S2','Y4S1','Y4S2'];

export const YEAR_SEMESTER_MAP = {
  Y1: ['Y1S1', 'Y1S2'],
  Y2: ['Y2S1', 'Y2S2'],
  Y3: ['Y3S1', 'Y3S2'],
  Y4: ['Y4S1', 'Y4S2'],
};

export const isY4Semester = (semKey) => semKey.startsWith('Y4');

/**
 * Returns all modules for a given semester (compulsory + chosen electives).
 * For Y4, pass selectedElectives = ['elective_id', ...] to merge them in.
 */
export const getModulesForSemester = (specialization, semKey, selectedElectiveIds = []) => {
  const data = curriculumData[specialization]?.[semKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;

  // Y4 structure
  const electives = data.electivesPool.filter(m => selectedElectiveIds.includes(m.id));
  return [...data.compulsory, ...electives];
};
