'use client';

import { useGpa } from '@/context/GpaContext';
import { GRADE_LIST, GRADE_POINTS } from '@/data/grading';

const gradeColor = (grade) => {
  if (!grade) return 'text-slate-500';
  const gp = GRADE_POINTS[grade];
  if (gp >= 3.70) return 'text-amber-400';
  if (gp >= 3.00) return 'text-sky-400';
  if (gp >= 2.00) return 'text-emerald-400';
  if (gp >= 1.00) return 'text-orange-400';
  return 'text-red-400';
};

export default function ModuleTable({ semKey, modules }) {
  const { grades, setGrade } = useGpa();
  const semGrades = grades[semKey] || {};

  if (!modules || modules.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm italic">
        No modules available. Select electives above to add modules.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-800/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/60 border-b border-slate-700/60">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-24">Code</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Module Name</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-20">Credits</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-32">Grade</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-20">GP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {modules.map((mod) => {
              const grade = semGrades[mod.id] || '';
              const gp = grade ? GRADE_POINTS[grade] : null;
              const isElective = mod.type === 'elective';
              const isFail = grade && GRADE_POINTS[grade] < 2.00;
              return (
                <tr
                  key={mod.id}
                  className={`group transition-colors hover:bg-slate-800/30 ${isElective ? 'bg-indigo-950/20' : ''}`}
                >
                  <td className="px-4 py-3">
                    <span className={`font-mono text-xs px-2 py-1 rounded-md ${isElective ? 'bg-indigo-900/50 text-indigo-300' : 'bg-slate-800 text-slate-400'}`}>
                      {mod.id}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-200">
                    {mod.name}
                    {isElective && <span className="ml-2 text-xs text-indigo-400 font-medium">(Elective)</span>}
                  </td>
                  <td className="px-4 py-3 text-center text-slate-300 font-mono">{mod.credits}</td>
                  <td className="px-4 py-3">
                    <select
                      id={`grade-${semKey}-${mod.id}`}
                      value={grade}
                      onChange={(e) => setGrade(semKey, mod.id, e.target.value)}
                      className={`w-full bg-slate-800 border text-sm rounded-lg px-2 py-1.5 text-center
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer
                                  ${isFail
                                    ? 'border-red-700/60 bg-red-950/30 text-red-400'
                                    : grade
                                      ? `border-slate-600 ${gradeColor(grade)}`
                                      : 'border-slate-700 text-slate-400'
                                  }`}
                    >
                      <option value="">-- Select --</option>
                      {GRADE_LIST.map(g => (
                        <option key={g} value={g} className="text-white bg-slate-800">{g}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {gp !== null ? (
                      <span className={`font-mono font-bold ${gradeColor(grade)}`}>
                        {gp.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="sm:hidden space-y-2">
        {modules.map((mod) => {
          const grade = semGrades[mod.id] || '';
          const gp = grade ? GRADE_POINTS[grade] : null;
          const isElective = mod.type === 'elective';
          const isFail = grade && GRADE_POINTS[grade] < 2.00;
          return (
            <div
              key={mod.id}
              className={`rounded-xl border p-4 transition-all ${
                isFail ? 'border-red-800/60 bg-red-950/20' : 'border-slate-800/60 bg-slate-800/30'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex-1">
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${isElective ? 'bg-indigo-900/50 text-indigo-300' : 'bg-slate-700 text-slate-400'}`}>
                    {mod.id}
                  </span>
                  <p className="mt-1.5 text-sm text-slate-200 font-medium">{mod.name}</p>
                  {isElective && <span className="text-xs text-indigo-400">(Elective)</span>}
                </div>
                <span className="text-xs text-slate-400 whitespace-nowrap">{mod.credits} cr</span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  id={`grade-mobile-${semKey}-${mod.id}`}
                  value={grade}
                  onChange={(e) => setGrade(semKey, mod.id, e.target.value)}
                  className={`flex-1 bg-slate-900 border rounded-lg px-3 py-2 text-sm
                              focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer
                              ${isFail
                                ? 'border-red-700 bg-red-950/30 text-red-400'
                                : grade
                                  ? `border-slate-600 ${gradeColor(grade)}`
                                  : 'border-slate-700 text-slate-400'
                              }`}
                >
                  <option value="">-- Select Grade --</option>
                  {GRADE_LIST.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {gp !== null && (
                  <span className={`font-mono font-bold text-sm min-w-[2.5rem] text-right ${gradeColor(grade)}`}>
                    {gp.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
