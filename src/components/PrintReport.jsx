'use client';

import { useGpa } from '@/context/GpaContext';
import { SPECIALIZATIONS, getModulesForSemester } from '@/data/curriculum';
import { GRADE_POINTS, getDegreeClass } from '@/data/grading';

const SEM_LABELS = {
  Y1S1: 'Year 1 – Semester 1', Y1S2: 'Year 1 – Semester 2',
  Y2S1: 'Year 2 – Semester 1', Y2S2: 'Year 2 – Semester 2',
  Y3S1: 'Year 3 – Semester 1', Y3S2: 'Year 3 – Semester 2',
  Y4S1: 'Year 4 – Semester 1', Y4S2: 'Year 4 – Semester 2',
};

const ALL_SEMS = ['Y1S1','Y1S2','Y2S1','Y2S2','Y3S1','Y3S2','Y4S1','Y4S2'];

export default function PrintReport() {
  const { specialization, grades, selectedElectives, semesterGPAs, yearGPAs, wgpa } = useGpa();
  const specLabel = SPECIALIZATIONS.find(s => s.id === specialization)?.label || specialization;
  const degreeClass = wgpa !== null ? getDegreeClass(wgpa) : null;

  return (
    <div className="hidden print:block p-8 text-black bg-white">
      {/* Report header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold">SLIIT Academic Performance Report</h1>
        <p className="text-gray-700 mt-1">Specialization: <strong>{specLabel}</strong></p>
        <p className="text-gray-500 text-sm mt-0.5">
          Generated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Semester tables – only those with at least one grade */}
      {ALL_SEMS.map(semKey => {
        const electives = selectedElectives[semKey] || [];
        const modules   = getModulesForSemester(specialization, semKey, electives);
        const semGrades = grades[semKey] || {};
        const gpa       = semesterGPAs[semKey];
        const hasGrade  = modules.some(m => semGrades[m.id]);
        if (!hasGrade) return null;

        return (
          <div key={semKey} className="mb-6 break-inside-avoid">
            <h2 className="text-sm font-bold bg-gray-100 px-3 py-2 rounded border border-gray-200 mb-2 flex justify-between">
              <span>{SEM_LABELS[semKey]}</span>
              {gpa !== null && <span className="font-normal">Semester GPA: <strong>{gpa.toFixed(2)}</strong></span>}
            </h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Code</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Module Name</th>
                  <th className="border border-gray-300 px-3 py-2 text-center font-semibold">Credits</th>
                  <th className="border border-gray-300 px-3 py-2 text-center font-semibold">Grade</th>
                  <th className="border border-gray-300 px-3 py-2 text-center font-semibold">Grade Points</th>
                </tr>
              </thead>
              <tbody>
                {modules.map(mod => {
                  const grade = semGrades[mod.id] || '';
                  const gp    = grade ? GRADE_POINTS[grade] : null;
                  return (
                    <tr key={mod.id}>
                      <td className="border border-gray-200 px-3 py-1.5 font-mono text-xs">{mod.id}</td>
                      <td className="border border-gray-200 px-3 py-1.5">{mod.name}{mod.type === 'elective' ? ' *' : ''}</td>
                      <td className="border border-gray-200 px-3 py-1.5 text-center">{mod.credits}</td>
                      <td className="border border-gray-200 px-3 py-1.5 text-center font-bold">{grade || '—'}</td>
                      <td className="border border-gray-200 px-3 py-1.5 text-center">{gp !== null ? gp.toFixed(2) : '—'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}

      {/* WGPA summary */}
      <div className="border-t-2 border-gray-800 pt-6 mt-4 break-inside-avoid">
        <h2 className="text-base font-bold mb-3">WGPA Summary</h2>
        <table className="w-full border-collapse text-sm mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 py-2 text-left">Academic Year</th>
              <th className="border border-gray-300 px-3 py-2 text-center">Year GPA</th>
              <th className="border border-gray-300 px-3 py-2 text-center">Weight</th>
              <th className="border border-gray-300 px-3 py-2 text-center">Contribution</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: 'Y1', label: 'Year 1', weight: 0.00 },
              { key: 'Y2', label: 'Year 2', weight: 0.20 },
              { key: 'Y3', label: 'Year 3', weight: 0.30 },
              { key: 'Y4', label: 'Year 4', weight: 0.50 },
            ].map(({ key, label, weight }) => {
              const yGpa = yearGPAs[key];
              const contribution = (yGpa !== null && weight > 0) ? (yGpa * weight).toFixed(3) : (weight === 0 ? 'N/A' : '—');
              return (
                <tr key={key}>
                  <td className="border border-gray-200 px-3 py-2">{label}</td>
                  <td className="border border-gray-200 px-3 py-2 text-center">{yGpa !== null ? yGpa.toFixed(2) : '—'}</td>
                  <td className="border border-gray-200 px-3 py-2 text-center">{(weight * 100).toFixed(0)}%</td>
                  <td className="border border-gray-200 px-3 py-2 text-center">{contribution}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-bold">Final WGPA: {wgpa !== null ? wgpa.toFixed(2) : 'N/A'}</p>
            {degreeClass && <p className="text-sm text-gray-700 mt-1">Classification: <strong>{degreeClass.label}</strong></p>}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 italic">* Elective module &nbsp;|&nbsp; Year 1 carries 0% weight in WGPA.</p>
      </div>
    </div>
  );
}
