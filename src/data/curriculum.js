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
 */
export const getModulesForSemester = (
  specialization,
  semKey,
  selectedElectiveIds = [],
) => {
  const data = curriculumData[specialization]?.[semKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;

  // Y4 structure
  const electives = data.electivesPool.filter((m) =>
    selectedElectiveIds.includes(m.id),
  );
  return [...data.compulsory, ...electives];
};
