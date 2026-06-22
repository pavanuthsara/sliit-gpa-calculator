/**
 * Full curriculum data for all 6 SLIIT specializations.
 * Y4 semesters use the structure: { compulsory: [], electivesPool: [], requiredElectivesCount: N }
 * All other semesters are flat arrays of modules.
 */
export const SPECIALIZATIONS = [
  { id: "SE", label: "Software Engineering" },
  { id: "IT", label: "Information Technology" },
  { id: "DS", label: "Data Science" },
  { id: "IM", label: "Interactive Media" },
  { id: "CSNE", label: "Computer Systems & Network Engineering" },
  { id: "CYBSEC", label: "Cyber Security" },
  { id: "ISE", label: "Information Systems Engineering" },
];

export const SYLLABI = [
  { id: "OLD", label: "Old Syllabus" },
  { id: "NEW", label: "New Syllabus" },
];

export const curriculumData = {
  // ─────────────────────────────────────────────────────────────────
  // SOFTWARE ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  SE: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IT2020", name: "Software Engineering", credits: 4, type: "compulsory" }, //
      { id: "IT2030", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //
      { id: "IT2040", name: "Database Management Systems", credits: 4, type: "compulsory" }, //
      { id: "IT2050", name: "Computer Networks", credits: 4, type: "compulsory" }, //
      { id: "IT2060", name: "Operating Systems and System Administration", credits: 4, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IT2010", name: "Mobile Application Development", credits: 4, type: "compulsory" }, //
      { id: "IT2070", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, //
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" }, //
      { id: "IT2110", name: "Probability and Statistics", credits: 3, type: "compulsory" }, //
      { id: "IT2100", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "SE3010", name: "Software Engineering Process & Quality Management", credits: 4, type: "compulsory" }, //
      { id: "SE3020", name: "Distributed Systems", credits: 4, type: "compulsory" }, //
      { id: "SE3030", name: "Software Architecture", credits: 4, type: "compulsory" }, //
      { id: "SE3040", name: "Application Frameworks", credits: 4, type: "compulsory" }, //
      { id: "IT3050", name: "Employability Skills Development - Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "SE3050", name: "User Experience Engineering", credits: 3, type: "compulsory" }, //
      { id: "SE3060", name: "Database Systems", credits: 4, type: "compulsory" }, //
      { id: "SE3070", name: "Case Studies in Software Engineering", credits: 4, type: "compulsory" }, //
      { id: "SE3080", name: "Software Project Management", credits: 3, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4070", name: "Preparation for the Professional World", credits: 2, type: "compulsory" }, //
      ],
      electivesPool: [
        { id: "IT4130", name: "Image Understanding & Processing", credits: 4, type: "elective" }, //
        { id: "IT4060", name: "Machine Learning", credits: 4, type: "elective" }, //
        { id: "SE4040", name: "Enterprise Application Development", credits: 4, type: "elective" }, //
        { id: "SE4020", name: "Mobile Application Design & Development", credits: 4, type: "elective" }, //
        { id: "SE4050", name: "Deep Learning", credits: 4, type: "elective" }, //
        { id: "SE4060", name: "Parallel Computing", credits: 4, type: "elective" }, //
        { id: "IE4060", name: "Robotics and Intelligent Systems", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 2, //
    },
    Y4S2: {
      compulsory: [
        { id: "SE4010", name: "Current Trends in Software Engineering", credits: 4, type: "compulsory" }, //
        { id: "SE4030", name: "Secure Software Development", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INFORMATION TECHNOLOGY
  // ─────────────────────────────────────────────────────────────────
  IT: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IT2020", name: "Software Engineering", credits: 4, type: "compulsory" }, //
      { id: "IT2030", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //
      { id: "IT2040", name: "Database Management Systems", credits: 4, type: "compulsory" }, //
      { id: "IT2050", name: "Computer Networks", credits: 4, type: "compulsory" }, //
      { id: "IT2060", name: "Operating Systems and System Administration", credits: 4, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IT2010", name: "Mobile Application Development", credits: 4, type: "compulsory" }, //
      { id: "IT2070", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, //
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" }, //
      { id: "IT2100", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
      { id: "IT2110", name: "Probability and Statistics", credits: 3, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "IT3010", name: "Network Design and Management", credits: 4, type: "compulsory" }, //
      { id: "IT3020", name: "Database Systems", credits: 4, type: "compulsory" }, //
      { id: "IT3030", name: "Programming Applications & Frameworks", credits: 4, type: "compulsory" }, //
      { id: "IT3040", name: "IT Project Management", credits: 4, type: "compulsory" }, //
      { id: "IT3050", name: "Employability Skills Development", credits: 1, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "IT3060", name: "Human Computer Interaction", credits: 4, type: "compulsory" }, //
      { id: "IT3070", name: "Information Assurance & Security", credits: 4, type: "compulsory" }, //
      { id: "IT3080", name: "Data Science & Analytics", credits: 4, type: "compulsory" }, //
      { id: "IT3090", name: "Business Management for IT", credits: 3, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4020", name: "Modern Topics in IT", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [
        { id: "IT4030", name: "Internet of Things", credits: 4, type: "elective" }, //
        { id: "IT4040", name: "Database Administration", credits: 4, type: "elective" }, //
        { id: "IT4050", name: "Innovation Management & Entrepreneurship", credits: 4, type: "elective" }, //
        { id: "IT4060", name: "Machine Learning", credits: 4, type: "elective" }, //
        { id: "IT4090", name: "Cloud Computing", credits: 4, type: "elective" }, //
        { id: "IT4100", name: "Software Quality Assurance", credits: 4, type: "elective" }, //
        { id: "IT4110", name: "Computer Systems and Network Administration", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 3, //
    },
    Y4S2: {
      compulsory: [
        { id: "IT4070", name: "Preparation for the Professional World", credits: 2, type: "compulsory" }, //
      ],
      electivesPool: [
        { id: "IT4120", name: "Knowledge Management", credits: 4, type: "elective" }, //
        { id: "SE4050", name: "Deep Learning", credits: 4, type: "elective" }, //
        { id: "SE4060", name: "Parallel Computing", credits: 4, type: "elective" }, //
        { id: "IT4130", name: "Image Understanding and Processing", credits: 4, type: "elective" }, //
        { id: "IE4040", name: "Information Assurance and Auditing", credits: 4, type: "elective" }, //
        { id: "IE4060", name: "Robotics and Intelligent Systems", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // DATA SCIENCE
  // ─────────────────────────────────────────────────────────────────
  DS: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IT2020", name: "Software Engineering", credits: 4, type: "compulsory" }, //
      { id: "IT2030", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //
      { id: "IT2040", name: "Database Management Systems", credits: 4, type: "compulsory" }, //
      { id: "IT2050", name: "Computer Networks", credits: 4, type: "compulsory" }, //
      { id: "IT2060", name: "Operating Systems and System Administration", credits: 4, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IT2010", name: "Mobile Application Development", credits: 4, type: "compulsory" }, //
      { id: "IT2070", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, //
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" }, //
      { id: "IT2110", name: "Probability and Statistics", credits: 3, type: "compulsory" }, //
      { id: "IT2100", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "IT3030", name: "Programming Applications and Frameworks", credits: 4, type: "compulsory" }, //
      { id: "IT3011", name: "Theory and Practices in Statistical Modelling", credits: 4, type: "compulsory" }, //
      { id: "IT3021", name: "Data Warehousing and Business Intelligence", credits: 4, type: "compulsory" }, //
      { id: "IT3031", name: "Database Systems and Data-Driven Application", credits: 4, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "IT3051", name: "Fundamentals of Data Mining", credits: 4, type: "compulsory" }, //
      { id: "IT3061", name: "Massive Data Processing and cloud Computing", credits: 4, type: "compulsory" }, //
      { id: "IT3071", name: "Machine Learning and Optimization Methods", credits: 4, type: "compulsory" }, //
      { id: "IT3060", name: "Information Retrieval and Web Analytics", credits: 4, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4070", name: "Preparation for the Professional World", credits: 2, type: "compulsory" }, //
        { id: "IT4011", name: "Database Administration and Storage Systems", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4021", name: "Internet of Things and Big Data Analytics", credits: 4, type: "compulsory" }, //
        { id: "IT4031", name: "Visual Analytics and User Experience Design", credits: 4, type: "compulsory" }, //
        { id: "IT4041", name: "Introduction to Information Security Analytics", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INTERACTIVE MEDIA
  // ─────────────────────────────────────────────────────────────────
  IM: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IT2020", name: "Software Engineering", credits: 4, type: "compulsory" }, //
      { id: "IT2030", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //
      { id: "IT2040", name: "Database Management Systems", credits: 4, type: "compulsory" }, //
      { id: "IT2050", name: "Computer Networks", credits: 4, type: "compulsory" }, //
      { id: "IT2060", name: "Operating Systems and System Administration", credits: 4, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IT2010", name: "Mobile Application Development", credits: 4, type: "compulsory" }, //
      { id: "IT2070", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, //
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" }, //
      { id: "IT2110", name: "Probability and Statistics", credits: 3, type: "compulsory" }, //
      { id: "IT2100", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "SE3011", name: "Technical Evolution of Multimedia", credits: 4, type: "compulsory" }, //
      { id: "SE3021", name: "Design Ideation & Creative Communication", credits: 4, type: "compulsory" }, //
      { id: "SE3061", name: "User Experience Designing", credits: 3, type: "compulsory" }, //
      { id: "SE3081", name: "Digital Marketing Strategies", credits: 3, type: "compulsory" }, //
      { id: "IT3050", name: "Employability Skills Development Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "SE3031", name: "3D Modeling & Animation", credits: 4, type: "compulsory" }, //
      { id: "SE3041", name: "Digital Video Production & Delivery", credits: 4, type: "compulsory" }, //
      { id: "SE3071", name: "Digital Image Processing", credits: 4, type: "compulsory" }, //
      { id: "SE3091", name: "Games Technology", credits: 4, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4070", name: "Preperation for the Professional World", credits: 2, type: "compulsory" }, //
        { id: "SE4031", name: "Games Development", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "SE4041", name: "Mobile Application Design and Development", credits: 4, type: "compulsory" }, //
        { id: "SE4051", name: "Trends in Digital Media", credits: 4, type: "compulsory" }, //
        { id: "SE4061", name: "Multimedia Project Management", credits: 4, type: "compulsory" }, //
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // COMPUTER SYSTEMS & NETWORK ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  CSNE: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IE1010", name: "Engineering Mathematics", credits: 3, type: "compulsory" }, //
      { id: "IE1020", name: "Network Fundamentals", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IE2020", name: "Routing & Switching", credits: 4, type: "compulsory" }, //
      { id: "IE2030", name: "Analog Electronics", credits: 2, type: "compulsory" }, //
      { id: "IE2080", name: "Database Systems Administration", credits: 4, type: "compulsory" }, //
      { id: "IE2010", name: "Digital Electronics", credits: 2, type: "compulsory" }, //
      { id: "IT2030", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //
      { id: "IT2100", name: "Probability and Statistics", credits: 3, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IE2040", name: "Advanced Internetworking", credits: 4, type: "compulsory" }, //
      { id: "IE2060", name: "Computer Systems Administration", credits: 4, type: "compulsory" }, //
      { id: "IE2050", name: "Operating Systems", credits: 4, type: "compulsory" }, //
      { id: "IE2090", name: "Professional Engineering Practice and Industrial Management", credits: 4, type: "compulsory" }, //
      { id: "IE2070", name: "Embedded Systems", credits: 4, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "IE3010", name: "Network Programming", credits: 4, type: "compulsory" }, //
      { id: "IE3020", name: "Directory Services and Network Management", credits: 4, type: "compulsory" }, //
      { id: "IE3030", name: "Wide area Networks", credits: 4, type: "compulsory" }, //
      { id: "IE3040", name: "Information Storage Management", credits: 4, type: "compulsory" }, //
      { id: "IE3050", name: "Wireless Communications", credits: 4, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "IE3060", name: "Business Management for IT", credits: 3, type: "compulsory" }, //
      { id: "IE3070", name: "Network Technology Project", credits: 4, type: "compulsory" }, //
      { id: "IE3080", name: "Network Security Engineering", credits: 4, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
      { id: "IT3050", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4070", name: "Preperation for Professional World", credits: 2, type: "compulsory" }, //
      ],
      electivesPool: [
        { id: "IE4040", name: "Information Assurance and Auditing", credits: 4, type: "elective" }, //
        { id: "IE4060", name: "Robotics & Intelligent Systems", credits: 4, type: "elective" }, //
        { id: "IE4020", name: "Enterprise Standards for Information Systems", credits: 4, type: "elective" }, //
        { id: "IE4010", name: "Information Security Management", credits: 4, type: "elective" }, //
        { id: "IE4080", name: "Software Defined Networks", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 4, //
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        { id: "IE4050", name: "Parallel and Distributed Computing", credits: 4, type: "elective" }, //
        { id: "IT4030", name: "Internet of Things", credits: 4, type: "elective" }, //
        { id: "IE4070", name: "Design and Management of Enterprise Network", credits: 4, type: "elective" }, //
        { id: "IE4030", name: "Virtualization and Cloud Computing Technologies", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INFORMATION SYSTEMS ENGINEERING (ISE)
  // ─────────────────────────────────────────────────────────────────
  ISE: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" },
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" },
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" },
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" },
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" },
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" },
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" },
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" },
    ],
    Y2S1: [
      { id: "IT2040", name: "DataBase Management Systems", credits: 4, type: "compulsory" },
      { id: "IE2021", name: "Object Oriented Programming", credits: 4, type: "compulsory" },
      { id: "IE2031", name: "Structured Analysis and Design", credits: 4, type: "compulsory" },
      { id: "IE2041", name: "Information Systems Analysis", credits: 4, type: "compulsory" },
      { id: "IE2071", name: "Design and Management of Computing Infrastructure", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" },
      { id: "IE2051", name: "Information Systems Project", credits: 4, type: "compulsory" },
      { id: "IE2061", name: "Operating Systems and Systems Administration", credits: 4, type: "compulsory" },
      { id: "IE2081", name: "Object Oriented Analysis and Design", credits: 4, type: "compulsory" },
      { id: "IT2100", name: "Employability Skills Development -Seminar", credits: 1, type: "compulsory" },
      { id: "IT2110", name: "Probability and Statistics", credits: 3, type: "compulsory" },
    ],
    Y3S1: [
      { id: "IE3011", name: "IS Project Management", credits: 3, type: "compulsory" },
      { id: "IE3021", name: "Organizational Business Functions I", credits: 3, type: "compulsory" },
      { id: "IE3031", name: "Management Information Systems", credits: 3, type: "compulsory" },
      { id: "IE3041", name: "Data Management and Business Intelligence", credits: 4, type: "compulsory" },
      { id: "IE3051", name: "E Business Strategy & Architecture and Design", credits: 4, type: "compulsory" },
    ],
    Y3S2: [
      { id: "IE3061", name: "Information Security Management", credits: 4, type: "compulsory" },
      { id: "IE3071", name: "Organizational Business Functions II", credits: 3, type: "compulsory" },
      { id: "IE3081", name: "Enterprise Resource Planning", credits: 4, type: "compulsory" },
      { id: "IE3091", name: "Information Systems Strategic Management", credits: 3, type: "compulsory" },
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "IT4070", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "IE4040", name: "Information Assurance and Auditing", credits: 4, type: "elective" },
        { id: "IE4151", name: "Human Resource Information Systems", credits: 4, type: "elective" },
        { id: "IT4100", name: "Software Quality Asuarance", credits: 4, type: "elective" },
        { id: "IE4081", name: "Supply Chain Management", credits: 4, type: "elective" },
        { id: "IT4120", name: "Knowledge Management", credits: 4, type: "elective" },
        { id: "IE4131", name: "Human Computer Interaction", credits: 4, type: "elective" },
        { id: "IT4050", name: "Innovation Management and Entrepreneurship", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: "IE4011", name: "Business Process Management", credits: 4, type: "compulsory" },
        { id: "IE4071", name: "Practicing Business Analyst", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // CYBER SECURITY
  // ─────────────────────────────────────────────────────────────────
  CYBSEC: {
    Y1S1: [
      { id: "IT1010", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //
      { id: "IT1020", name: "Introduction to Computer Systems", credits: 4, type: "compulsory" }, //
      { id: "IT1030", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //
      { id: "IT1040", name: "Communication Skills", credits: 3, type: "compulsory" }, //
    ],
    Y1S2: [
      { id: "IT1050", name: "Object Oriented Concepts", credits: 2, type: "compulsory" }, //
      { id: "IT1060", name: "Software Process Modeling", credits: 3, type: "compulsory" }, //
      { id: "IT1080", name: "English for Academic Purposes", credits: 3, type: "compulsory" }, //
      { id: "IT1090", name: "Information Systems and Data Modeling", credits: 4, type: "compulsory" }, //
      { id: "IT1100", name: "Internet and Web Technologies", credits: 4, type: "compulsory" }, //
    ],
    Y2S1: [
      { id: "IE2012", name: "Systems and Network Programming", credits: 4, type: "compulsory" }, //
      { id: "IE2022", name: "Introduction to Cyber Security", credits: 4, type: "compulsory" }, //
      { id: "IE2042", name: "Database Management Systems for Security", credits: 4, type: "compulsory" }, //
      { id: "IE2032", name: "Secure Operating Systems", credits: 4, type: "compulsory" }, //
    ],
    Y2S2: [
      { id: "IE2052", name: "Advanced Networking Technologies", credits: 4, type: "compulsory" }, //
      { id: "IE2062", name: "Web Security", credits: 4, type: "compulsory" }, //
      { id: "IE2082", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //
      { id: "IE2072", name: "Foundations of Algorithms", credits: 4, type: "compulsory" }, //
      { id: "IT2090", name: "Professional Skills", credits: 2, type: "compulsory" }, //
      { id: "IT2100", name: "Employability Skills Development-Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y3S1: [
      { id: "IE3112", name: "Mobile Security", credits: 4, type: "compulsory" }, //
      { id: "IE3022", name: "Applied Information Assurance", credits: 4, type: "compulsory" }, //
      { id: "IE3032", name: "Network Security", credits: 4, type: "compulsory" }, //
      { id: "IE3042", name: "Secure Software Systems", credits: 4, type: "compulsory" }, //
      { id: "IE3052", name: "Information Security Risk Management", credits: 2, type: "compulsory" }, //
      { id: "IE3062", name: "Data and Operating System Security", credits: 4, type: "compulsory" }, //
    ],
    Y3S2: [
      { id: "IE3072", name: "Information Security Policy and Management", credits: 2, type: "compulsory" }, //
      { id: "IE3082", name: "Cryptography", credits: 4, type: "compulsory" }, //
      { id: "IE3092", name: "Information Security Project", credits: 4, type: "compulsory" }, //
      { id: "IE3102", name: "Enterprise Standards for Information Security", credits: 2, type: "compulsory" }, //
      { id: "IT3110", name: "Industry Placement", credits: 8, type: "compulsory" }, //
      { id: "IT3050", name: "Employability Skills Development -Seminar", credits: 1, type: "compulsory" }, //
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4010", name: "Research Project", credits: 16, type: "compulsory" }, //
        { id: "IT4070", name: "Preparation for the Professional World", credits: 2, type: "compulsory" }, //
      ],
      electivesPool: [
        { id: "IE4012", name: "Offensive Hacking: Tactical and Strategic", credits: 4, type: "elective" }, //
        { id: "IE4042", name: "Secure Software Engineering", credits: 4, type: "elective" }, //
        { id: "IE4092", name: "Machine Learning for Cyber Security", credits: 4, type: "elective" }, //
        { id: "IE4022", name: "Security Economic Analysis", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 4, //
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        { id: "IE4032", name: "Information Warfare", credits: 4, type: "elective" }, //
        { id: "IE4052", name: "Hardware Security", credits: 4, type: "elective" }, //
        { id: "IE4062", name: "Cyber Forensics and Incident Response", credits: 4, type: "elective" }, //
        { id: "IE4072", name: "Governance and Cyber Law Clinic", credits: 4, type: "elective" }, //
      ],
      requiredElectivesCount: 0,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NEW SYLLABUS CURRICULUM DATA
// ─────────────────────────────────────────────────────────────────────────────
export const newCurriculumData = {
  // ─── SOFTWARE ENGINEERING (New Syllabus) ────────────────────────────────
  SE: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2150", name: "IT Project", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2020", name: "Web and Mobile Technologies", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3090", name: "Software Engineering Frameworks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3100", name: "Architecture based Development", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3110", name: "Quality Managment in Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "SE3120", name: "Distributed Systems", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3130", name: "User Experience Research & Design", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 6, type: "compulsory" }, //[cite: 2]
        { id: "SE4070", name: "Secure Software Development", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4080", name: "Cloud Native Development", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4100", name: "Deep Learning", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4090", name: "Mobile Application Design & Development", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: 6, type: "compulsory" }, //[cite: 2]
        { id: "SE4110", name: "Current Trends in Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4120", name: "Enterprise Application Development", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4140", name: "Big Data & Data Analytics", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4130", name: "Parallel Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── INFORMATION TECHNOLOGY (New Syllabus) ──────────────────────────────
  IT: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2150", name: "IT Project", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2020", name: "Web and Mobile Technologies", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3130", name: "Application Development", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3140", name: "Database Systems", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3150", name: "IT Process and Infrastructure Management", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: 1, type: "compulsory" }, //[cite: 2]
      { id: "IT3180", name: "Cloud Technologies", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3200", name: "Data Analytics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4210", name: "Information Security", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4150", name: "Intelligent Systems Development", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4180", name: "IT Policy Management and Governance", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4160", name: "Software Quality Management", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: 8, type: "compulsory" }, //[cite: 2]
        { id: "IT4190", name: "Current Trends in IT", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4120", name: "Enterprise Application Development", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4170", name: "Human Computer Interaction", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── DATA SCIENCE (New Syllabus) ────────────────────────────────────────
  DS: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2150", name: "IT Project", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2020", name: "Web and Mobile Technologies", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3081", name: "Statistical Modelling", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3091", name: "Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3101", name: "Data Warehousing and Business Intelligence", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "IT3111", name: "Deep Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3121", name: "Cloud Data Analytics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4051", name: "Modern Topics in Data Science", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4061", name: "Natural Language Processing", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4081", name: "Software Engineering Concepts", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4091", name: "Optimization Methods", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: 8, type: "compulsory" }, //[cite: 2]
        { id: "IT4071", name: "Data Governance, Privacy and Security", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4101", name: "Database Implementation and Administration", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4111", name: "MLOps for Data Analytics", credits: 8, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── INTERACTIVE MEDIA (New Syllabus) ───────────────────────────────────
  IM: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2011", name: "Technical Evolution of Multimedia", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2021", name: "Creative Expertise Development", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "SE3101", name: "Advanced Computer Graphics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3111", name: "Digital Business Management and Entrepreneurship", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3121", name: "UI/UX Designing and Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3131", name: "Fundamentals of Cinematography and Digital Multimedia", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "SE3141", name: "3D Modeling & Animation", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE3151", name: "Machine Learning based Image Manipulations", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 6, type: "compulsory" }, //[cite: 2]
        { id: "SE4071", name: "Games Technology", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4081", name: "Technology-based Entertainment and Aesthetics", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4101", name: "Advanced Computer Generated Imagery", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4111", name: "Advanced Cinematography and Television Production", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4061", name: "Multimedia Project Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4121", name: "Mobile Application Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: 8, type: "compulsory" }, //[cite: 2]
        { id: "SE4091", name: "New Media Project Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4131", name: "Games and Mixed Reality Applications", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4141", name: "New Media Insights", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4151", name: "Audio Engineering and Sonic Arts", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4061", name: "Multimedia Project Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "SE4161", name: "Advanced Digital Marketing and Advertising", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── COMPUTER SYSTEMS & NETWORK ENGINEERING (New Syllabus) ─────────────
  CSNE: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2100", name: "Data Communication and Wireless Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2110", name: "Network Management and Systems Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3090", name: "Network programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3100", name: "Virtulization and Cloud Computing Technologies", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3110", name: "Advanced Network Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "IE3120", name: "Capstone Project", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "IE3130", name: "Enterprise Network and Systems Security", credits: null, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: null, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4090", name: "DevOps", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4100", name: "Network Storage and Architecture", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4112", name: "Data & Systems Security", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4102", name: "Governance, Risk Management & Compliance", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: null, type: "compulsory" }, //[cite: 2]
        { id: "IE4110", name: "Software Defined Networks", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4120", name: "Robotics and Intelligent Systems", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4130", name: "Internet of Things", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── CYBER SECURITY (New Syllabus) ──────────────────────────────────────
  CYBSEC: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2092", name: "Introduction to Cyber Security", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2102", name: "Network Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3122", name: "Network Security", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3132", name: "Vulnerability Assessment & Penetration Testing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3142", name: "DevOps Security", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IT3190", name: "Industry Training", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3152", name: "Cryptography", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3162", name: "Ethical Hacking & Cyber Ops", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: null, type: "compulsory" }, //[cite: 2]
        { id: "IE4102", name: "Governance, Risk Management & Compliance", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4112", name: "Data & Systems Security", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4122", name: "Secure Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4132", name: "Cyber Law & Ethics", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IE4200", name: "Research Project - II", credits: 8, type: "compulsory" }, //[cite: 2]
        { id: "IE4142", name: "Digital Forensics", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4152", name: "Virtualization & Cloud Security", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4130", name: "Internet of Things", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── INFORMATION SYSTEMS ENGINEERING (New Syllabus) ─────────────────────
  ISE: {
    Y1S1: [
      { id: "IT1120", name: "Introduction to Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE1030", name: "Data Communication Networks", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1130", name: "Mathematics for Computing", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1140", name: "Fundamentals of Computing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y1S2: [
      { id: "IT1160", name: "Discrete Mathematics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1170", name: "Data Structures and Algorithms", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE1010", name: "Software Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT1150", name: "Technical Writing", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S1: [
      { id: "IT2120", name: "Probability and Statistics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "SE2010", name: "Object Oriented Programming", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2130", name: "Operating Systems & System Administration", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2140", name: "Database Design and Development", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y2S2: [
      { id: "IT2011", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2091", name: "IS Project", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE2101", name: "Requirement Engineering", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT2160", name: "Professional Skills", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S1: [
      { id: "IT3120", name: "Industry Economics & Management", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3111", name: "Enterprise Network and Information systems security", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3121", name: "Enterprise Architecture", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3101", name: "Organizational Functions", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y3S2: [
      { id: "IE3131", name: "Business Intelligence and Data Analytics", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IE3141", name: "IS Strategy. Management & Acquisition", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3190", name: "Industry Training", credits: 4, type: "compulsory" }, //[cite: 2]
      { id: "IT3160", name: "Research Methods", credits: 4, type: "compulsory" }, //[cite: 2]
    ],
    Y4S1: {
      compulsory: [
        { id: "IT4200", name: "Research Project - I", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4211", name: "Business Process Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4221", name: "Professional Business Analysis", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4231", name: "Digital Entrepreneurship", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4160", name: "Software Quality Assurance", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "IT4200", name: "Research Project - II", credits: 8, type: "compulsory" }, //[cite: 2]
        { id: "IE4241", name: "Emerging Trends in ISE", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4251", name: "Supply Chain Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IE4261", name: "IS Auditing and Risk Management", credits: 4, type: "compulsory" }, //[cite: 2]
        { id: "IT4170", name: "Human Computer Interaction", credits: 4, type: "compulsory" }, //[cite: 2]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },
};

/**
 * Returns the correct curriculum data object for the given syllabus.
 * @param {'OLD'|'NEW'} syllabus
 */
export const getCurriculumData = (syllabus) =>
  syllabus === 'NEW' ? newCurriculumData : curriculumData;

export const SEMESTER_KEYS = [
  "Y1S1",
  "Y1S2",
  "Y2S1",
  "Y2S2",
  "Y3S1",
  "Y3S2",
  "Y4S1",
  "Y4S2",
];

export const YEAR_SEMESTER_MAP = {
  Y1: ["Y1S1", "Y1S2"],
  Y2: ["Y2S1", "Y2S2"],
  Y3: ["Y3S1", "Y3S2"],
  Y4: ["Y4S1", "Y4S2"],
};

export const isY4Semester = (semKey) => semKey.startsWith("Y4");

/**
 * Returns all modules for a given semester (compulsory + chosen electives).
 * For Y4, pass selectedElectives = ['elective_id', ...] to merge them in.
 * @param {'OLD'|'NEW'} syllabus - which curriculum to use (default 'OLD')
 */
export const getModulesForSemester = (
  specialization,
  semKey,
  selectedElectiveIds = [],
  syllabus = 'OLD',
) => {
  const dataset = getCurriculumData(syllabus);
  const data = dataset[specialization]?.[semKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;

  // Y4 structure
  const electives = data.electivesPool.filter((m) =>
    selectedElectiveIds.includes(m.id),
  );
  return [...data.compulsory, ...electives];
};