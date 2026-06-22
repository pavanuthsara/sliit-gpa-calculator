import { GRADE_POINTS, YEAR_WEIGHTS } from '@/data/grading';
import { getModulesForSemester, YEAR_SEMESTER_MAP } from '@/data/curriculum';

/**
 * Calculate the GPA for a single semester.
 * @param {Array} modules - Array of { id, credits, ... }
 * @param {Object} grades  - { moduleId: gradeString }
 * @returns {number|null}  - GPA value or null if no grades entered
 */
export function calculateSemesterGPA(modules, grades = {}) {
  let totalPoints = 0;
  let totalCredits = 0;

  for (const mod of modules) {
    const grade = grades[mod.id];
    if (grade !== undefined && grade !== '') {
      const gp = GRADE_POINTS[grade];
      if (gp !== undefined) {
        totalPoints += mod.credits * gp;
        totalCredits += mod.credits;
      }
    }
  }

  if (totalCredits === 0) return null;
  return totalPoints / totalCredits;
}

/**
 * Calculate a year's GPA from two semesters.
 */
export function calculateYearGPA(s1GPA, s2GPA) {
  const valid = [s1GPA, s2GPA].filter(g => g !== null);
  if (valid.length === 0) return null;
  return valid.reduce((a, b) => a + b, 0) / valid.length;
}

/**
 * Calculate WGPA using the SLIIT year weightings.
 * Y1=0%, Y2=20%, Y3=30%, Y4=50%
 */
export function calculateWGPA(yearGPAs) {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const [year, weight] of Object.entries(YEAR_WEIGHTS)) {
    if (weight === 0) continue;
    const gpa = yearGPAs[year];
    if (gpa !== null && gpa !== undefined) {
      weightedSum += gpa * weight;
      totalWeight += weight;
    }
  }

  if (totalWeight === 0) return null;
  return weightedSum / totalWeight;
}

/**
 * Derive all computed values from raw state.
 */
export function deriveGpaData({ specialization, grades, selectedElectives }) {
  const semesterGPAs = {};
  const yearGPAs = {};

  for (const [year, sems] of Object.entries(YEAR_SEMESTER_MAP)) {
    for (const semKey of sems) {
      const electives = selectedElectives[semKey] || [];
      const modules = getModulesForSemester(specialization, semKey, electives);
      semesterGPAs[semKey] = calculateSemesterGPA(modules, grades[semKey] || {});
    }
    const [s1, s2] = sems;
    yearGPAs[year] = calculateYearGPA(semesterGPAs[s1], semesterGPAs[s2]);
  }

  const wgpa = calculateWGPA(yearGPAs);
  return { semesterGPAs, yearGPAs, wgpa };
}
