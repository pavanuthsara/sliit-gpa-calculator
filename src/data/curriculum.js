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
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 72, 73, 74]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 75, 76, 77]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 79, 80, 81]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 82, 83, 84]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 86, 87, 88]
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, // [cite: 89, 90, 91]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 92, 93, 94]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 95, 96, 97]
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 98, 99, 100]
    ],
    Y2S1: [
      {
        id: "IT2020",
        name: "Software Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 102, 103, 104]
      {
        id: "IT2030",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 105, 106, 107]
      {
        id: "IT2040",
        name: "Database Management Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 109, 110, 111]
      {
        id: "IT2050",
        name: "Computer Networks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 112, 113, 114]
      {
        id: "IT2060",
        name: "Operating Systems and System Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 115, 116, 117]
    ],
    Y2S2: [
      {
        id: "IT2010",
        name: "Mobile Application Development",
        credits: 4,
        type: "compulsory",
      }, // [cite: 119, 120, 121]
      {
        id: "IT2070",
        name: "Data Structures and Algorithms",
        credits: 4,
        type: "compulsory",
      }, // [cite: 122, 123]
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, // [cite: 124, 125, 126]
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, // [cite: 127, 128, 129]
      {
        id: "IT2110",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 130, 131, 132]
      {
        id: "IT2100",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 133, 134]
    ],
    Y3S1: [
      {
        id: "SE3010",
        name: "Software Engineering Process & Quality Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 136, 137, 138]
      {
        id: "SE3020",
        name: "Distributed Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 139, 140, 141]
      {
        id: "SE3030",
        name: "Software Architecture",
        credits: 4,
        type: "compulsory",
      }, // [cite: 142, 143, 144]
      {
        id: "SE3040",
        name: "Application Frameworks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 145, 146]
      {
        id: "IT3050",
        name: "Employability Skills Development - Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 147, 148, 149]
    ],
    Y3S2: [
      {
        id: "SE3050",
        name: "User Experience Engineering",
        credits: 3,
        type: "compulsory",
      }, // [cite: 150, 151]
      {
        id: "SE3060",
        name: "Database Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 152, 153, 154]
      {
        id: "SE3070",
        name: "Case Studies in Software Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 155, 156, 157]
      {
        id: "SE3080",
        name: "Software Project Management",
        credits: 3,
        type: "compulsory",
      }, // [cite: 158, 159, 160]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 161, 162]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 164, 165, 166]
        {
          id: "IT4070",
          name: "Preparation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 167, 168, 169]
      ],
      electivesPool: [
        {
          id: "IT4130",
          name: "Image Understanding & Processing",
          credits: 4,
          type: "elective",
        }, // [cite: 176, 183]
        {
          id: "IT4060",
          name: "Machine Learning",
          credits: 4,
          type: "elective",
        }, // [cite: 177, 184]
        {
          id: "SE4040",
          name: "Enterprise Application Development",
          credits: 4,
          type: "elective",
        }, // [cite: 178, 185]
        {
          id: "SE4020",
          name: "Mobile Application Design & Development",
          credits: 4,
          type: "elective",
        }, // [cite: 178, 186]
        { id: "SE4050", name: "Deep Learning", credits: 4, type: "elective" }, // [cite: 179, 187]
        {
          id: "SE4060",
          name: "Parallel Computing",
          credits: 4,
          type: "elective",
        }, // [cite: 180, 188]
        {
          id: "IE4060",
          name: "Robotics and Intelligent Systems",
          credits: 4,
          type: "elective",
        }, // [cite: 181, 189]
      ],
      requiredElectivesCount: 2, // [cite: 175]
    },
    Y4S2: {
      compulsory: [
        {
          id: "SE4010",
          name: "Current Trends in Software Engineering",
          credits: 4,
          type: "compulsory",
        }, // [cite: 170, 171, 172]
        {
          id: "SE4030",
          name: "Secure Software Development",
          credits: 4,
          type: "compulsory",
        }, // [cite: 173, 174]
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
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y2S1: [
      {
        id: "IT2020",
        name: "Software Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2030",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2040",
        name: "Database Management Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2050",
        name: "Computer Networks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2060",
        name: "Operating Systems and System Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y2S2: [
      {
        id: "IT2010",
        name: "Mobile Application Development",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2070",
        name: "Data Structures and Algorithms",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, // [cite: 206]
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2100",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT2110",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y3S1: [
      {
        id: "IT3010",
        name: "Network Design and Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3020",
        name: "Database Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3030",
        name: "Programming Applications & Frameworks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3040",
        name: "IT Project Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3050",
        name: "Employability Skills Development",
        credits: 1,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y3S2: [
      {
        id: "IT3060",
        name: "Human Computer Interaction",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3070",
        name: "Information Assurance & Security",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3080",
        name: "Data Science & Analytics",
        credits: 4,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3090",
        name: "Business Management for IT",
        credits: 3,
        type: "compulsory",
      }, // [cite: 206]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 206]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 206]
        {
          id: "IT4020",
          name: "Modern Topics in IT",
          credits: 4,
          type: "compulsory",
        }, // [cite: 206]
      ],
      electivesPool: [
        {
          id: "IT4030",
          name: "Internet of Things",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IT4040",
          name: "Database Administration",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IT4050",
          name: "Innovation Management & Entrepreneurship",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IT4060",
          name: "Machine Learning",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        { id: "IT4090", name: "Cloud Computing", credits: 4, type: "elective" }, // [cite: 206]
        {
          id: "IT4100",
          name: "Software Quality Assurance",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IT4110",
          name: "Computer Systems and Network Administration",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
      ],
      requiredElectivesCount: 3, // [cite: 206]
    },
    Y4S2: {
      compulsory: [
        {
          id: "IT4070",
          name: "Preparation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 206]
      ],
      electivesPool: [
        {
          id: "IT4120",
          name: "Knowledge Management",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        { id: "SE4050", name: "Deep Learning", credits: 4, type: "elective" }, // [cite: 206]
        {
          id: "SE4060",
          name: "Parallel Computing",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IT4130",
          name: "Image Understanding and Processing",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IE4040",
          name: "Information Assurance and Auditing",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
        {
          id: "IE4060",
          name: "Robotics and Intelligent Systems",
          credits: 4,
          type: "elective",
        }, // [cite: 206]
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // DATA SCIENCE
  // ─────────────────────────────────────────────────────────────────
  DS: {
    Y1S1: [
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 231, 232, 233]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 234, 235, 236]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 238, 239, 240]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 241, 242, 243]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 245, 246, 247]
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, // [cite: 248, 249, 250]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 251, 252, 253]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 254, 255, 256]
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 257, 258, 259]
    ],
    Y2S1: [
      {
        id: "IT2020",
        name: "Software Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 261, 262, 263]
      {
        id: "IT2030",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 264, 265, 266]
      {
        id: "IT2040",
        name: "Database Management Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 268, 269, 270]
      {
        id: "IT2050",
        name: "Computer Networks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 271, 272, 273]
      {
        id: "IT2060",
        name: "Operating Systems and System Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 274, 275, 276]
    ],
    Y2S2: [
      {
        id: "IT2010",
        name: "Mobile Application Development",
        credits: 4,
        type: "compulsory",
      }, // [cite: 278, 279, 288]
      {
        id: "IT2070",
        name: "Data Structures and Algorithms",
        credits: 4,
        type: "compulsory",
      }, // [cite: 280, 281, 289]
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, // [cite: 282, 283, 290]
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, // [cite: 284, 285, 291]
      {
        id: "IT2110",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 286, 287, 292]
      {
        id: "IT2100",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 293, 294]
    ],
    Y3S1: [
      {
        id: "IT3030",
        name: "Programming Applications and Frameworks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3011",
        name: "Theory and Practices in Statistical Modelling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3021",
        name: "Data Warehousing and Business Intelligence",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3031",
        name: "Database Systems and Data-Driven Application",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
    ],
    Y3S2: [
      {
        id: "IT3051",
        name: "Fundamentals of Data Mining",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3061",
        name: "Massive Data Processing and cloud Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3071",
        name: "Machine Learning and Optimization Methods",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3060",
        name: "Information Retrieval and Web Analytics",
        credits: 4,
        type: "compulsory",
      }, // [cite: 296]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 296]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 298]
        {
          id: "IT4070",
          name: "Preparation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 298]
        {
          id: "IT4011",
          name: "Database Administration and Storage Systems",
          credits: 4,
          type: "compulsory",
        }, // [cite: 298]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        {
          id: "IT4021",
          name: "Internet of Things and Big Data Analytics",
          credits: 4,
          type: "compulsory",
        }, // [cite: 298]
        {
          id: "IT4031",
          name: "Visual Analytics and User Experience Design",
          credits: 4,
          type: "compulsory",
        }, // [cite: 298]
        {
          id: "IT4041",
          name: "Introduction to Information Security Analytics",
          credits: 4,
          type: "compulsory",
        }, // [cite: 298]
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
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 480, 481, 482]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 483, 484, 485]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 487, 488, 489]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 490, 491, 492]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 494, 495, 496]
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, // [cite: 497, 498, 499]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 500, 501, 502]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 503, 504, 505]
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 506, 507, 508]
    ],
    Y2S1: [
      {
        id: "IT2020",
        name: "Software Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2030",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2040",
        name: "Database Management Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2050",
        name: "Computer Networks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2060",
        name: "Operating Systems and System Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
    ],
    Y2S2: [
      {
        id: "IT2010",
        name: "Mobile Application Development",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2070",
        name: "Data Structures and Algorithms",
        credits: 4,
        type: "compulsory",
      }, // [cite: 509]
      { id: "IT2080", name: "IT Project", credits: 4, type: "compulsory" }, // [cite: 509]
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2110",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 509]
      {
        id: "IT2100",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 509]
    ],
    Y3S1: [
      {
        id: "SE3011",
        name: "Technical Evolution of Multimedia",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3021",
        name: "Design Ideation & Creative Communication",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3061",
        name: "User Experience Designing",
        credits: 3,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3081",
        name: "Digital Marketing Strategies",
        credits: 3,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "IT3050",
        name: "Employability Skills Development Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 511]
    ],
    Y3S2: [
      {
        id: "SE3031",
        name: "3D Modeling & Animation",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3041",
        name: "Digital Video Production & Delivery",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3071",
        name: "Digital Image Processing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "SE3091",
        name: "Games Technology",
        credits: 4,
        type: "compulsory",
      }, // [cite: 511]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 511]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 513]
        {
          id: "IT4070",
          name: "Preperation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 513]
        {
          id: "SE4031",
          name: "Games Development",
          credits: 4,
          type: "compulsory",
        }, // [cite: 513]
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        {
          id: "SE4041",
          name: "Mobile Application Design and Development",
          credits: 4,
          type: "compulsory",
        }, // [cite: 513]
        {
          id: "SE4051",
          name: "Trends in Digital Media",
          credits: 4,
          type: "compulsory",
        }, // [cite: 513]
        {
          id: "SE4061",
          name: "Multimedia Project Management",
          credits: 4,
          type: "compulsory",
        }, // [cite: 513]
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
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE1010",
        name: "Engineering Mathematics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE1020",
        name: "Network Fundamentals",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y2S1: [
      {
        id: "IE2020",
        name: "Routing & Switching",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2030",
        name: "Analog Electronics",
        credits: 2,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2080",
        name: "Database Systems Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2010",
        name: "Digital Electronics",
        credits: 2,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT2030",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT2100",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y2S2: [
      {
        id: "IE2040",
        name: "Advanced Internetworking",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2060",
        name: "Computer Systems Administration",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2050",
        name: "Operating Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2090",
        name: "Professional Engineering Practice and Industrial Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE2070",
        name: "Embedded Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y3S1: [
      {
        id: "IE3010",
        name: "Network Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3020",
        name: "Directory Services and Network Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3030",
        name: "Wide area Networks",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3040",
        name: "Information Storage Management",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3050",
        name: "Wireless Communications",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y3S2: [
      {
        id: "IE3060",
        name: "Business Management for IT",
        credits: 3,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3070",
        name: "Network Technology Project",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IE3080",
        name: "Network Security Engineering",
        credits: 4,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 321]
      {
        id: "IT3050",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 321]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 321]
        {
          id: "IT4070",
          name: "Preperation for Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 321]
      ],
      electivesPool: [
        {
          id: "IE4040",
          name: "Information Assurance and Auditing",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4060",
          name: "Robotics & Intelligent Systems",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4020",
          name: "Enterprise Standards for Information Systems",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4010",
          name: "Information Security Management",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4080",
          name: "Software Defined Networks",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
      ],
      requiredElectivesCount: 4, // [cite: 321]
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        {
          id: "IE4050",
          name: "Parallel and Distributed Computing",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IT4030",
          name: "Internet of Things",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4070",
          name: "Design and Management of Enterprise Network",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
        {
          id: "IE4030",
          name: "Virtualization and Cloud Computing Technologies",
          credits: 4,
          type: "elective",
        }, // [cite: 321]
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // INFORMATION SYSTEMS ENGINEERING (ISE)
  // ─────────────────────────────────────────────────────────────────
  ISE: {
    Y1S1: [
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, //
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, //
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, //
    ],
    Y2S1: [
      {
        id: "IT2040",
        name: "DataBase Management Systems",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2021",
        name: "Object Oriented Programming",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2031",
        name: "Structured Analysis and Design",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2041",
        name: "Information Systems Analysis",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2071",
        name: "Design and Management of Computing Infrastructure",
        credits: 4,
        type: "compulsory",
      }, //
    ],
    Y2S2: [
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, //
      {
        id: "IE2051",
        name: "Information Systems Project",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2061",
        name: "Operating Systems and Systems Administration",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE2081",
        name: "Object Oriented Analysis and Design",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IT2100",
        name: "Employability Skills Development -Seminar",
        credits: 1,
        type: "compulsory",
      }, //
      {
        id: "IT2110",
        name: "Probability and Statistics",
        credits: 3,
        type: "compulsory",
      }, //
    ],
    Y3S1: [
      {
        id: "IE3011",
        name: "IS Project Management",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IE3021",
        name: "Organizational Business Functions I",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IE3031",
        name: "Management Information Systems",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IE3041",
        name: "Data Management and Business Intelligence",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE3051",
        name: "E Business Strategy & Architecture and Design",
        credits: 4,
        type: "compulsory",
      }, //
    ],
    Y3S2: [
      {
        id: "IE3061",
        name: "Information Security Management",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE3071",
        name: "Organizational Business Functions II",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IE3081",
        name: "Enterprise Resource Planning",
        credits: 4,
        type: "compulsory",
      }, //
      {
        id: "IE3091",
        name: "Information Systems Strategic Management",
        credits: 3,
        type: "compulsory",
      }, //
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, //
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, //
        {
          id: "IT4070",
          name: "Preparation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, //
      ],
      electivesPool: [
        {
          id: "IE4040",
          name: "Information Assurance and Auditing",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IE4151",
          name: "Human Resource Information Systems",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IT4100",
          name: "Software Quality Asuarance",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IE4081",
          name: "Supply Chain Management",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IT4120",
          name: "Knowledge Management",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IE4131",
          name: "Human Computer Interaction",
          credits: 4,
          type: "elective",
        }, //
        {
          id: "IT4050",
          name: "Innovation Management and Entrepreneurship",
          credits: 4,
          type: "elective",
        }, //
      ],
      requiredElectivesCount: 2, //
    },
    Y4S2: {
      compulsory: [
        {
          id: "IE4011",
          name: "Business Process Management",
          credits: 4,
          type: "compulsory",
        }, //
        {
          id: "IE4071",
          name: "Practicing Business Analyst",
          credits: 4,
          type: "compulsory",
        }, //
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
      {
        id: "IT1010",
        name: "Introduction to Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 337, 338, 339]
      {
        id: "IT1020",
        name: "Introduction to Computer Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 340, 341, 342]
      {
        id: "IT1030",
        name: "Mathematics for Computing",
        credits: 4,
        type: "compulsory",
      }, // [cite: 344, 345, 346]
      {
        id: "IT1040",
        name: "Communication Skills",
        credits: 3,
        type: "compulsory",
      }, // [cite: 347, 348, 349]
    ],
    Y1S2: [
      {
        id: "IT1050",
        name: "Object Oriented Concepts",
        credits: 2,
        type: "compulsory",
      }, // [cite: 351, 352, 353]
      {
        id: "IT1060",
        name: "Software Process Modeling",
        credits: 3,
        type: "compulsory",
      }, // [cite: 354, 355, 356]
      {
        id: "IT1080",
        name: "English for Academic Purposes",
        credits: 3,
        type: "compulsory",
      }, // [cite: 357, 358, 359]
      {
        id: "IT1090",
        name: "Information Systems and Data Modeling",
        credits: 4,
        type: "compulsory",
      }, // [cite: 360, 361, 362]
      {
        id: "IT1100",
        name: "Internet and Web Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 363, 364, 365]
    ],
    Y2S1: [
      {
        id: "IE2012",
        name: "Systems and Network Programming",
        credits: 4,
        type: "compulsory",
      }, // [cite: 367, 368, 369]
      {
        id: "IE2022",
        name: "Introduction to Cyber Security",
        credits: 4,
        type: "compulsory",
      }, // [cite: 370, 371, 372]
      {
        id: "IE2042",
        name: "Database Management Systems for Security",
        credits: 4,
        type: "compulsory",
      }, // [cite: 374, 375, 376]
      {
        id: "IE2032",
        name: "Secure Operating Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 377, 378, 379]
    ],
    Y2S2: [
      {
        id: "IE2052",
        name: "Advanced Networking Technologies",
        credits: 4,
        type: "compulsory",
      }, // [cite: 381, 382, 383]
      { id: "IE2062", name: "Web Security", credits: 4, type: "compulsory" }, // [cite: 384, 385, 386]
      {
        id: "IE2082",
        name: "Discrete Mathematics",
        credits: 4,
        type: "compulsory",
      }, // [cite: 387, 388, 389]
      {
        id: "IE2072",
        name: "Foundations of Algorithms",
        credits: 4,
        type: "compulsory",
      }, // [cite: 390, 391, 392]
      {
        id: "IT2090",
        name: "Professional Skills",
        credits: 2,
        type: "compulsory",
      }, // [cite: 393, 394, 395]
      {
        id: "IT2100",
        name: "Employability Skills Development-Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 396, 397, 398]
    ],
    Y3S1: [
      { id: "IE3112", name: "Mobile Security", credits: 4, type: "compulsory" }, // [cite: 400, 401, 402]
      {
        id: "IE3022",
        name: "Applied Information Assurance",
        credits: 4,
        type: "compulsory",
      }, // [cite: 403, 404]
      {
        id: "IE3032",
        name: "Network Security",
        credits: 4,
        type: "compulsory",
      }, // [cite: 405, 406]
      {
        id: "IE3042",
        name: "Secure Software Systems",
        credits: 4,
        type: "compulsory",
      }, // [cite: 407, 408]
      {
        id: "IE3052",
        name: "Information Security Risk Management",
        credits: 2,
        type: "compulsory",
      }, // [cite: 409, 410, 411]
      {
        id: "IE3062",
        name: "Data and Operating System Security",
        credits: 4,
        type: "compulsory",
      }, // [cite: 412, 413, 414]
    ],
    Y3S2: [
      {
        id: "IE3072",
        name: "Information Security Policy and Management",
        credits: 2,
        type: "compulsory",
      }, // [cite: 415, 416, 417]
      { id: "IE3082", name: "Cryptography", credits: 4, type: "compulsory" }, // [cite: 418, 419, 420]
      {
        id: "IE3092",
        name: "Information Security Project",
        credits: 4,
        type: "compulsory",
      }, // [cite: 421, 422, 423]
      {
        id: "IE3102",
        name: "Enterprise Standards for Information Security",
        credits: 2,
        type: "compulsory",
      }, // [cite: 424, 425, 426]
      {
        id: "IT3110",
        name: "Industry Placement",
        credits: 8,
        type: "compulsory",
      }, // [cite: 427, 428, 429]
      {
        id: "IT3050",
        name: "Employability Skills Development -Seminar",
        credits: 1,
        type: "compulsory",
      }, // [cite: 430, 431, 432]
    ],
    Y4S1: {
      compulsory: [
        {
          id: "IT4010",
          name: "Research Project",
          credits: 16,
          type: "compulsory",
        }, // [cite: 434]
        {
          id: "IT4070",
          name: "Preparation for the Professional World",
          credits: 2,
          type: "compulsory",
        }, // [cite: 434]
      ],
      electivesPool: [
        {
          id: "IE4012",
          name: "Offensive Hacking: Tactical and Strategic",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4042",
          name: "Secure Software Engineering",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4092",
          name: "Machine Learning for Cyber Security",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4022",
          name: "Security Economic Analysis",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
      ],
      requiredElectivesCount: 4, // [cite: 434]
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        {
          id: "IE4032",
          name: "Information Warfare",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4052",
          name: "Hardware Security",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4062",
          name: "Cyber Forensics and Incident Response",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
        {
          id: "IE4072",
          name: "Governance and Cyber Law Clinic",
          credits: 4,
          type: "elective",
        }, // [cite: 434]
      ],
      requiredElectivesCount: 0,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NEW SYLLABUS CURRICULUM DATA (mock — replace with real data when available)
// ─────────────────────────────────────────────────────────────────────────────
export const newCurriculumData = {
  // ─── SOFTWARE ENGINEERING (New Syllabus) ────────────────────────────────
  SE: {
    Y1S1: [
      { id: "NSE1010", name: "Fundamentals of Programming", credits: 4, type: "compulsory" },
      { id: "NSE1020", name: "Computer Architecture & Organisation", credits: 4, type: "compulsory" },
      { id: "NSE1030", name: "Discrete Mathematics", credits: 4, type: "compulsory" },
      { id: "NSE1040", name: "Professional Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NSE1050", name: "Object-Oriented Programming", credits: 4, type: "compulsory" },
      { id: "NSE1060", name: "Web Application Development", credits: 4, type: "compulsory" },
      { id: "NSE1070", name: "Database Fundamentals", credits: 4, type: "compulsory" },
      { id: "NSE1080", name: "Linear Algebra for Computing", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NSE2010", name: "Software Design Patterns", credits: 4, type: "compulsory" },
      { id: "NSE2020", name: "Agile Software Engineering", credits: 4, type: "compulsory" },
      { id: "NSE2030", name: "Advanced Database Systems", credits: 4, type: "compulsory" },
      { id: "NSE2040", name: "Computer Networks & Security", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NSE2050", name: "Full-Stack Development", credits: 4, type: "compulsory" },
      { id: "NSE2060", name: "Data Structures & Algorithm Analysis", credits: 4, type: "compulsory" },
      { id: "NSE2070", name: "Software Testing & Quality Assurance", credits: 3, type: "compulsory" },
      { id: "NSE2080", name: "Cloud Computing Fundamentals", credits: 3, type: "compulsory" },
      { id: "NSE2090", name: "Professional Development Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NSE3010", name: "Microservices & API Design", credits: 4, type: "compulsory" },
      { id: "NSE3020", name: "DevOps & Continuous Delivery", credits: 4, type: "compulsory" },
      { id: "NSE3030", name: "Secure Software Engineering", credits: 4, type: "compulsory" },
      { id: "NSE3040", name: "Artificial Intelligence for SE", credits: 4, type: "compulsory" },
      { id: "NSE3050", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NSE3060", name: "Scalable Software Architecture", credits: 4, type: "compulsory" },
      { id: "NSE3070", name: "Human-Computer Interaction", credits: 3, type: "compulsory" },
      { id: "NSE3080", name: "Project Management for Engineers", credits: 3, type: "compulsory" },
      { id: "NSE3090", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NSE4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NSE4020", name: "Emerging Trends in Software Engineering", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NSE4E10", name: "Machine Learning Engineering", credits: 4, type: "elective" },
        { id: "NSE4E20", name: "Blockchain Application Development", credits: 4, type: "elective" },
        { id: "NSE4E30", name: "Embedded & IoT Systems", credits: 4, type: "elective" },
        { id: "NSE4E40", name: "Natural Language Processing", credits: 4, type: "elective" },
        { id: "NSE4E50", name: "Game Engine Development", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: "NSE4030", name: "Enterprise Software Development", credits: 4, type: "compulsory" },
        { id: "NSE4040", name: "Software Product Management", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── INFORMATION TECHNOLOGY (New Syllabus) ──────────────────────────────
  IT: {
    Y1S1: [
      { id: "NIT1010", name: "Introduction to Computing", credits: 4, type: "compulsory" },
      { id: "NIT1020", name: "Digital Systems", credits: 4, type: "compulsory" },
      { id: "NIT1030", name: "Computational Mathematics", credits: 4, type: "compulsory" },
      { id: "NIT1040", name: "Academic English", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NIT1050", name: "Programming with Python", credits: 4, type: "compulsory" },
      { id: "NIT1060", name: "Web Technologies", credits: 4, type: "compulsory" },
      { id: "NIT1070", name: "Fundamentals of Databases", credits: 4, type: "compulsory" },
      { id: "NIT1080", name: "IT Systems & Infrastructure", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NIT2010", name: "Object Oriented Analysis & Design", credits: 4, type: "compulsory" },
      { id: "NIT2020", name: "Networking Essentials", credits: 4, type: "compulsory" },
      { id: "NIT2030", name: "Database Administration", credits: 4, type: "compulsory" },
      { id: "NIT2040", name: "Systems Analysis & Design", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NIT2050", name: "Mobile & Cloud Development", credits: 4, type: "compulsory" },
      { id: "NIT2060", name: "Cybersecurity Essentials", credits: 4, type: "compulsory" },
      { id: "NIT2070", name: "IT Project Management", credits: 3, type: "compulsory" },
      { id: "NIT2080", name: "Professional Practice", credits: 2, type: "compulsory" },
      { id: "NIT2090", name: "Employability Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NIT3010", name: "Enterprise Architecture", credits: 4, type: "compulsory" },
      { id: "NIT3020", name: "Big Data Technologies", credits: 4, type: "compulsory" },
      { id: "NIT3030", name: "IT Service Management", credits: 4, type: "compulsory" },
      { id: "NIT3040", name: "DevOps Practices", credits: 4, type: "compulsory" },
      { id: "NIT3050", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NIT3060", name: "Digital Transformation Strategy", credits: 4, type: "compulsory" },
      { id: "NIT3070", name: "Information Security Management", credits: 4, type: "compulsory" },
      { id: "NIT3080", name: "Business Intelligence & Analytics", credits: 4, type: "compulsory" },
      { id: "NIT3090", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NIT4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NIT4020", name: "Modern IT Trends", credits: 4, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NIT4E10", name: "Internet of Things", credits: 4, type: "elective" },
        { id: "NIT4E20", name: "Artificial Intelligence Applications", credits: 4, type: "elective" },
        { id: "NIT4E30", name: "Cloud & Edge Computing", credits: 4, type: "elective" },
        { id: "NIT4E40", name: "Software Quality Engineering", credits: 4, type: "elective" },
        { id: "NIT4E50", name: "Digital Entrepreneurship", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 3,
    },
    Y4S2: {
      compulsory: [
        { id: "NIT4030", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NIT4E60", name: "Knowledge Engineering", credits: 4, type: "elective" },
        { id: "NIT4E70", name: "Advanced Machine Learning", credits: 4, type: "elective" },
        { id: "NIT4E80", name: "Cyber Threat Intelligence", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─── DATA SCIENCE (New Syllabus) ────────────────────────────────────────
  DS: {
    Y1S1: [
      { id: "NDS1010", name: "Programming for Data Science", credits: 4, type: "compulsory" },
      { id: "NDS1020", name: "Digital Systems & Architecture", credits: 4, type: "compulsory" },
      { id: "NDS1030", name: "Calculus & Linear Algebra", credits: 4, type: "compulsory" },
      { id: "NDS1040", name: "Professional Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NDS1050", name: "Python for Analytics", credits: 4, type: "compulsory" },
      { id: "NDS1060", name: "Probability & Statistical Inference", credits: 4, type: "compulsory" },
      { id: "NDS1070", name: "Data Management Fundamentals", credits: 4, type: "compulsory" },
      { id: "NDS1080", name: "Introduction to Data Science", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NDS2010", name: "Machine Learning Fundamentals", credits: 4, type: "compulsory" },
      { id: "NDS2020", name: "Big Data Platforms", credits: 4, type: "compulsory" },
      { id: "NDS2030", name: "Advanced Statistical Modelling", credits: 4, type: "compulsory" },
      { id: "NDS2040", name: "Data Warehousing & BI", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NDS2050", name: "Deep Learning", credits: 4, type: "compulsory" },
      { id: "NDS2060", name: "Data Mining & Pattern Recognition", credits: 4, type: "compulsory" },
      { id: "NDS2070", name: "Data Visualisation", credits: 3, type: "compulsory" },
      { id: "NDS2080", name: "Professional Skills", credits: 2, type: "compulsory" },
      { id: "NDS2090", name: "Employability Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NDS3010", name: "Natural Language Processing", credits: 4, type: "compulsory" },
      { id: "NDS3020", name: "Computer Vision", credits: 4, type: "compulsory" },
      { id: "NDS3030", name: "Cloud Data Engineering", credits: 4, type: "compulsory" },
      { id: "NDS3040", name: "Time Series & Forecasting", credits: 4, type: "compulsory" },
      { id: "NDS3050", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NDS3060", name: "Responsible AI & Ethics", credits: 3, type: "compulsory" },
      { id: "NDS3070", name: "MLOps & Model Deployment", credits: 4, type: "compulsory" },
      { id: "NDS3080", name: "Causal Inference & Experimentation", credits: 4, type: "compulsory" },
      { id: "NDS3090", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NDS4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NDS4020", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
        { id: "NDS4030", name: "Advanced Database & Storage Systems", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "NDS4040", name: "IoT & Streaming Analytics", credits: 4, type: "compulsory" },
        { id: "NDS4050", name: "Visual Analytics & UX Design", credits: 4, type: "compulsory" },
        { id: "NDS4060", name: "Information Security for Data Science", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── INTERACTIVE MEDIA (New Syllabus) ───────────────────────────────────
  IM: {
    Y1S1: [
      { id: "NIM1010", name: "Foundations of Digital Media", credits: 4, type: "compulsory" },
      { id: "NIM1020", name: "Introduction to Programming", credits: 4, type: "compulsory" },
      { id: "NIM1030", name: "Graphic Design Principles", credits: 4, type: "compulsory" },
      { id: "NIM1040", name: "Professional Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NIM1050", name: "Web Design & Development", credits: 4, type: "compulsory" },
      { id: "NIM1060", name: "Digital Photography & Imaging", credits: 4, type: "compulsory" },
      { id: "NIM1070", name: "UX Design Fundamentals", credits: 4, type: "compulsory" },
      { id: "NIM1080", name: "Creative Computing", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NIM2010", name: "Motion Graphics & Animation", credits: 4, type: "compulsory" },
      { id: "NIM2020", name: "Interactive Application Development", credits: 4, type: "compulsory" },
      { id: "NIM2030", name: "Audio Design & Production", credits: 4, type: "compulsory" },
      { id: "NIM2040", name: "User Research Methods", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NIM2050", name: "3D Modelling & Rendering", credits: 4, type: "compulsory" },
      { id: "NIM2060", name: "Video Production & Post-Production", credits: 4, type: "compulsory" },
      { id: "NIM2070", name: "Digital Marketing & Social Media", credits: 3, type: "compulsory" },
      { id: "NIM2080", name: "Professional Practice", credits: 2, type: "compulsory" },
      { id: "NIM2090", name: "Employability Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NIM3010", name: "Extended Reality (XR) Development", credits: 4, type: "compulsory" },
      { id: "NIM3020", name: "Game Design & Development", credits: 4, type: "compulsory" },
      { id: "NIM3030", name: "Interaction Design", credits: 4, type: "compulsory" },
      { id: "NIM3040", name: "Creative Coding & Generative Art", credits: 3, type: "compulsory" },
      { id: "NIM3050", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NIM3060", name: "Immersive Media Production", credits: 4, type: "compulsory" },
      { id: "NIM3070", name: "Brand & Identity Design", credits: 4, type: "compulsory" },
      { id: "NIM3080", name: "Media Project Management", credits: 3, type: "compulsory" },
      { id: "NIM3090", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NIM4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NIM4020", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
        { id: "NIM4030", name: "Advanced Game Development", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
    Y4S2: {
      compulsory: [
        { id: "NIM4040", name: "AI in Creative Media", credits: 4, type: "compulsory" },
        { id: "NIM4050", name: "Trends in Digital Entertainment", credits: 4, type: "compulsory" },
        { id: "NIM4060", name: "Media Entrepreneurship", credits: 4, type: "compulsory" },
      ],
      electivesPool: [],
      requiredElectivesCount: 0,
    },
  },

  // ─── COMPUTER SYSTEMS & NETWORK ENGINEERING (New Syllabus) ─────────────
  CSNE: {
    Y1S1: [
      { id: "NCN1010", name: "Introduction to Computing", credits: 4, type: "compulsory" },
      { id: "NCN1020", name: "Digital Electronics & Logic Design", credits: 4, type: "compulsory" },
      { id: "NCN1030", name: "Engineering Mathematics I", credits: 4, type: "compulsory" },
      { id: "NCN1040", name: "Technical Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NCN1050", name: "Computer Organisation & Architecture", credits: 4, type: "compulsory" },
      { id: "NCN1060", name: "Network Fundamentals", credits: 4, type: "compulsory" },
      { id: "NCN1070", name: "Engineering Mathematics II", credits: 3, type: "compulsory" },
      { id: "NCN1080", name: "Object Oriented Programming", credits: 4, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NCN2010", name: "Routing & Switching Technologies", credits: 4, type: "compulsory" },
      { id: "NCN2020", name: "Analogue & RF Electronics", credits: 3, type: "compulsory" },
      { id: "NCN2030", name: "Database Systems Administration", credits: 4, type: "compulsory" },
      { id: "NCN2040", name: "Operating Systems", credits: 4, type: "compulsory" },
      { id: "NCN2050", name: "Statistics for Engineers", credits: 3, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NCN2060", name: "Advanced Internetworking", credits: 4, type: "compulsory" },
      { id: "NCN2070", name: "Embedded & IoT Systems", credits: 4, type: "compulsory" },
      { id: "NCN2080", name: "Computer Systems Administration", credits: 4, type: "compulsory" },
      { id: "NCN2090", name: "Professional Engineering Practice", credits: 4, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NCN3010", name: "Software Defined Networking", credits: 4, type: "compulsory" },
      { id: "NCN3020", name: "Wireless & Mobile Networks", credits: 4, type: "compulsory" },
      { id: "NCN3030", name: "Network Security Engineering", credits: 4, type: "compulsory" },
      { id: "NCN3040", name: "Cloud Infrastructure", credits: 4, type: "compulsory" },
      { id: "NCN3050", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NCN3060", name: "Wide Area Network Technologies", credits: 4, type: "compulsory" },
      { id: "NCN3070", name: "Network Technology Project", credits: 4, type: "compulsory" },
      { id: "NCN3080", name: "Business Management for Engineers", credits: 3, type: "compulsory" },
      { id: "NCN3090", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NCN4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NCN4020", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NCN4E10", name: "Network Automation & Orchestration", credits: 4, type: "elective" },
        { id: "NCN4E20", name: "Information Security Management", credits: 4, type: "elective" },
        { id: "NCN4E30", name: "Robotics & Intelligent Systems", credits: 4, type: "elective" },
        { id: "NCN4E40", name: "5G & Next-Gen Networks", credits: 4, type: "elective" },
        { id: "NCN4E50", name: "Virtualisation & Containerisation", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 4,
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        { id: "NCN4E60", name: "Parallel & Distributed Computing", credits: 4, type: "elective" },
        { id: "NCN4E70", name: "Internet of Things at Scale", credits: 4, type: "elective" },
        { id: "NCN4E80", name: "Enterprise Network Design", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─── CYBER SECURITY (New Syllabus) ──────────────────────────────────────
  CYBSEC: {
    Y1S1: [
      { id: "NCS1010", name: "Introduction to Cyber Security", credits: 4, type: "compulsory" },
      { id: "NCS1020", name: "Computer Systems & Architecture", credits: 4, type: "compulsory" },
      { id: "NCS1030", name: "Discrete Mathematics", credits: 4, type: "compulsory" },
      { id: "NCS1040", name: "Professional Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NCS1050", name: "Programming for Security", credits: 4, type: "compulsory" },
      { id: "NCS1060", name: "Network Fundamentals", credits: 4, type: "compulsory" },
      { id: "NCS1070", name: "Operating Systems Security", credits: 4, type: "compulsory" },
      { id: "NCS1080", name: "Web Security Essentials", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NCS2010", name: "Applied Cryptography", credits: 4, type: "compulsory" },
      { id: "NCS2020", name: "Network Security Engineering", credits: 4, type: "compulsory" },
      { id: "NCS2030", name: "Secure Software Development", credits: 4, type: "compulsory" },
      { id: "NCS2040", name: "Digital Forensics", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NCS2050", name: "Ethical Hacking & Penetration Testing", credits: 4, type: "compulsory" },
      { id: "NCS2060", name: "Information Assurance", credits: 4, type: "compulsory" },
      { id: "NCS2070", name: "Foundations of Algorithms", credits: 4, type: "compulsory" },
      { id: "NCS2080", name: "Professional Skills", credits: 2, type: "compulsory" },
      { id: "NCS2090", name: "Employability Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NCS3010", name: "Cloud Security", credits: 4, type: "compulsory" },
      { id: "NCS3020", name: "Mobile & IoT Security", credits: 4, type: "compulsory" },
      { id: "NCS3030", name: "Threat Intelligence & Incident Response", credits: 4, type: "compulsory" },
      { id: "NCS3040", name: "Security Risk Management", credits: 2, type: "compulsory" },
      { id: "NCS3050", name: "Data & AI Security", credits: 4, type: "compulsory" },
      { id: "NCS3060", name: "Employability Skills Seminar", credits: 1, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NCS3070", name: "Cyber Security Policy & Governance", credits: 2, type: "compulsory" },
      { id: "NCS3080", name: "Advanced Cryptographic Systems", credits: 4, type: "compulsory" },
      { id: "NCS3090", name: "Cyber Security Project", credits: 4, type: "compulsory" },
      { id: "NCS3100", name: "Enterprise Security Standards", credits: 2, type: "compulsory" },
      { id: "NCS3110", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NCS4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NCS4020", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NCS4E10", name: "Offensive Security & Red Teaming", credits: 4, type: "elective" },
        { id: "NCS4E20", name: "Secure Software Engineering", credits: 4, type: "elective" },
        { id: "NCS4E30", name: "ML for Cyber Security", credits: 4, type: "elective" },
        { id: "NCS4E40", name: "Security Economics & Law", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 4,
    },
    Y4S2: {
      compulsory: [],
      electivesPool: [
        { id: "NCS4E50", name: "Information Warfare", credits: 4, type: "elective" },
        { id: "NCS4E60", name: "Hardware & Firmware Security", credits: 4, type: "elective" },
        { id: "NCS4E70", name: "Cyber Forensics & Evidence", credits: 4, type: "elective" },
        { id: "NCS4E80", name: "Governance & Cyber Law Clinic", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 0,
    },
  },

  // ─── INFORMATION SYSTEMS ENGINEERING (New Syllabus) ─────────────────────
  ISE: {
    Y1S1: [
      { id: "NIS1010", name: "Introduction to Information Systems", credits: 4, type: "compulsory" },
      { id: "NIS1020", name: "Computing Fundamentals", credits: 4, type: "compulsory" },
      { id: "NIS1030", name: "Business Mathematics", credits: 4, type: "compulsory" },
      { id: "NIS1040", name: "Professional Communication", credits: 3, type: "compulsory" },
    ],
    Y1S2: [
      { id: "NIS1050", name: "Programming for IS", credits: 4, type: "compulsory" },
      { id: "NIS1060", name: "Web Application Development", credits: 4, type: "compulsory" },
      { id: "NIS1070", name: "Database Design & Development", credits: 4, type: "compulsory" },
      { id: "NIS1080", name: "IS Infrastructure", credits: 3, type: "compulsory" },
    ],
    Y2S1: [
      { id: "NIS2010", name: "Database Management Systems", credits: 4, type: "compulsory" },
      { id: "NIS2020", name: "Object Oriented Analysis & Design", credits: 4, type: "compulsory" },
      { id: "NIS2030", name: "Business Process Modelling", credits: 4, type: "compulsory" },
      { id: "NIS2040", name: "IS Analysis & Requirements Engineering", credits: 4, type: "compulsory" },
      { id: "NIS2050", name: "Computing Infrastructure Design", credits: 4, type: "compulsory" },
    ],
    Y2S2: [
      { id: "NIS2060", name: "Professional Skills", credits: 2, type: "compulsory" },
      { id: "NIS2070", name: "IS Project", credits: 4, type: "compulsory" },
      { id: "NIS2080", name: "Enterprise Systems Administration", credits: 4, type: "compulsory" },
      { id: "NIS2090", name: "Advanced OO Analysis & Design", credits: 4, type: "compulsory" },
      { id: "NIS2100", name: "Employability Seminar", credits: 1, type: "compulsory" },
      { id: "NIS2110", name: "Probability & Statistics", credits: 3, type: "compulsory" },
    ],
    Y3S1: [
      { id: "NIS3010", name: "IS Project Management", credits: 3, type: "compulsory" },
      { id: "NIS3020", name: "Digital Business Strategy", credits: 3, type: "compulsory" },
      { id: "NIS3030", name: "Enterprise Information Systems", credits: 4, type: "compulsory" },
      { id: "NIS3040", name: "Data Analytics & Business Intelligence", credits: 4, type: "compulsory" },
      { id: "NIS3050", name: "E-Commerce Architecture", credits: 4, type: "compulsory" },
    ],
    Y3S2: [
      { id: "NIS3060", name: "Information Security Management", credits: 4, type: "compulsory" },
      { id: "NIS3070", name: "Organisational Behaviour & Change Management", credits: 3, type: "compulsory" },
      { id: "NIS3080", name: "ERP & Supply Chain Systems", credits: 4, type: "compulsory" },
      { id: "NIS3090", name: "IS Strategic Management", credits: 3, type: "compulsory" },
      { id: "NIS3100", name: "Industry Internship", credits: 8, type: "compulsory" },
    ],
    Y4S1: {
      compulsory: [
        { id: "NIS4010", name: "Research Project", credits: 16, type: "compulsory" },
        { id: "NIS4020", name: "Preparation for the Professional World", credits: 2, type: "compulsory" },
      ],
      electivesPool: [
        { id: "NIS4E10", name: "Information Assurance & Auditing", credits: 4, type: "elective" },
        { id: "NIS4E20", name: "Human Resource Information Systems", credits: 4, type: "elective" },
        { id: "NIS4E30", name: "Software Quality Assurance", credits: 4, type: "elective" },
        { id: "NIS4E40", name: "Supply Chain Management Systems", credits: 4, type: "elective" },
        { id: "NIS4E50", name: "Knowledge Management Systems", credits: 4, type: "elective" },
        { id: "NIS4E60", name: "Human-Computer Interaction", credits: 4, type: "elective" },
        { id: "NIS4E70", name: "Innovation & Digital Entrepreneurship", credits: 4, type: "elective" },
      ],
      requiredElectivesCount: 2,
    },
    Y4S2: {
      compulsory: [
        { id: "NIS4030", name: "Business Process Management", credits: 4, type: "compulsory" },
        { id: "NIS4040", name: "Practicing Business Analyst", credits: 4, type: "compulsory" },
        { id: "NIS4050", name: "IS Governance & Compliance", credits: 4, type: "compulsory" },
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
