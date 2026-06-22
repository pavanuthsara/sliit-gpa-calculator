// SLIIT 12-grade system
export const GRADE_POINTS = {
  'A+': 4.00,
  'A':  4.00,
  'A-': 3.70,
  'B+': 3.30,
  'B':  3.00,
  'B-': 2.70,
  'C+': 2.30,
  'C':  2.00,
  'C-': 1.70,
  'D+': 1.30,
  'D':  1.00,
  'E':  0.00,
};

export const GRADE_LIST = Object.keys(GRADE_POINTS);

// A grade is a pass if >= C (2.00 GP)
export const isPass = (grade) => GRADE_POINTS[grade] >= 2.00;

// WGPA year weights
export const YEAR_WEIGHTS = {
  Y1: 0.00,
  Y2: 0.20,
  Y3: 0.30,
  Y4: 0.50,
};

// Degree classification thresholds
export const DEGREE_CLASSES = [
  { label: 'First Class',         min: 3.70, color: 'text-amber-400',   bg: 'from-amber-500/20 to-yellow-500/10',  border: 'border-amber-400/40' },
  { label: 'Second Upper Class',  min: 3.30, color: 'text-sky-400',     bg: 'from-sky-500/20 to-blue-500/10',      border: 'border-sky-400/40' },
  { label: 'Second Lower Class',  min: 3.00, color: 'text-emerald-400', bg: 'from-emerald-500/20 to-green-500/10', border: 'border-emerald-400/40' },
  { label: 'Pass',                min: 2.00, color: 'text-violet-400',  bg: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-400/40' },
  { label: 'Fail',                min: 0.00, color: 'text-red-400',     bg: 'from-red-500/20 to-rose-500/10',      border: 'border-red-400/40' },
];

export const getDegreeClass = (wgpa) => {
  for (const cls of DEGREE_CLASSES) {
    if (wgpa >= cls.min) return cls;
  }
  return DEGREE_CLASSES[DEGREE_CLASSES.length - 1];
};

export const getGpaColor = (gpa) => {
  if (gpa >= 3.70) return 'text-amber-400';
  if (gpa >= 3.30) return 'text-sky-400';
  if (gpa >= 3.00) return 'text-emerald-400';
  if (gpa >= 2.00) return 'text-violet-400';
  return 'text-red-400';
};
