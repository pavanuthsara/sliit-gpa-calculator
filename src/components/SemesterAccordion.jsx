'use client';

import { useState } from 'react';
import { useGpa } from '@/context/GpaContext';
import { isY4Semester, getModulesForSemester } from '@/data/curriculum';
import { getGpaColor } from '@/data/grading';
import ModuleTable from './ModuleTable';
import ElectiveSelector from './ElectiveSelector';
import GpaSummaryCard from './GpaSummaryCard';

const YEAR_LABELS   = { Y1: 'Year 1', Y2: 'Year 2', Y3: 'Year 3', Y4: 'Year 4' };
const YEAR_WEIGHTS  = { Y1: '0% weight', Y2: '20% weight', Y3: '30% weight', Y4: '50% weight' };
const SEM_LABELS    = { Y1S1: 'Semester 1', Y1S2: 'Semester 2', Y2S1: 'Semester 1', Y2S2: 'Semester 2', Y3S1: 'Semester 1', Y3S2: 'Semester 2', Y4S1: 'Semester 1', Y4S2: 'Semester 2' };

const YEAR_MAP = [
  { year: 'Y1', sems: ['Y1S1', 'Y1S2'] },
  { year: 'Y2', sems: ['Y2S1', 'Y2S2'] },
  { year: 'Y3', sems: ['Y3S1', 'Y3S2'] },
  { year: 'Y4', sems: ['Y4S1', 'Y4S2'] },
];

function SemesterPanel({ semKey }) {
  const { specialization, syllabus, selectedElectives, semesterGPAs } = useGpa();
  const gpa = semesterGPAs[semKey];
  const electives = selectedElectives[semKey] || [];
  const modules = getModulesForSemester(specialization, semKey, electives, syllabus);
  const isY4 = isY4Semester(semKey);

  return (
    <div className="space-y-4">
      {isY4 && <ElectiveSelector semKey={semKey} />}
      <ModuleTable semKey={semKey} modules={modules} />
      <GpaSummaryCard gpa={gpa} label={`${SEM_LABELS[semKey]} GPA`} />
    </div>
  );
}

export default function SemesterAccordion() {
  const { semesterGPAs, yearGPAs } = useGpa();
  const [openYear, setOpenYear] = useState('Y1');
  const [openSem, setOpenSem] = useState({ Y1: 'Y1S1', Y2: null, Y3: null, Y4: null });

  const toggleYear = (year) => setOpenYear(prev => prev === year ? null : year);
  const toggleSem  = (year, sem) => setOpenSem(prev => ({ ...prev, [year]: prev[year] === sem ? null : sem }));

  return (
    <div className="space-y-3">
      {YEAR_MAP.map(({ year, sems }) => {
        const yearGpa    = yearGPAs[year];
        const isYearOpen = openYear === year;

        return (
          <div
            key={year}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden
              ${isYearOpen ? 'border-indigo-800/50 shadow-xl shadow-indigo-950/30' : 'border-slate-800/60'}`}
          >
            {/* Year header */}
            <button
              onClick={() => toggleYear(year)}
              className={`w-full flex items-center justify-between px-5 py-4 transition-colors duration-200
                ${isYearOpen ? 'bg-slate-800/80' : 'bg-slate-900/60 hover:bg-slate-800/40'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all
                  ${isYearOpen ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40' : 'bg-slate-800 text-slate-400'}`}>
                  {year.replace('Y', 'Y')}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{YEAR_LABELS[year]}</p>
                  <p className="text-xs text-slate-500">{YEAR_WEIGHTS[year]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {yearGpa !== null && (
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Year GPA</p>
                    <p className={`font-mono font-bold text-sm ${getGpaColor(yearGpa)}`}>
                      {yearGpa.toFixed(2)}
                    </p>
                  </div>
                )}
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isYearOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Semesters */}
            {isYearOpen && (
              <div className="border-t border-slate-800/60">
                {sems.map((semKey, idx) => {
                  const semGpa   = semesterGPAs[semKey];
                  const isSemOpen = openSem[year] === semKey;

                  return (
                    <div key={semKey} className={idx > 0 ? 'border-t border-slate-800/40' : ''}>
                      {/* Semester header */}
                      <button
                        onClick={() => toggleSem(year, semKey)}
                        className={`w-full flex items-center justify-between px-6 py-3.5 transition-colors
                          ${isSemOpen ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full transition-colors ${isSemOpen ? 'bg-indigo-400' : 'bg-slate-700'}`} />
                          <span className="text-sm font-medium text-slate-300">{SEM_LABELS[semKey]}</span>
                          <span className="hidden sm:inline text-xs text-slate-600 font-mono">{semKey}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {semGpa !== null && (
                            <span className={`text-xs font-mono font-bold ${getGpaColor(semGpa)}`}>
                              GPA {semGpa.toFixed(2)}
                            </span>
                          )}
                          <svg
                            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isSemOpen ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {/* Semester content */}
                      {isSemOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-3 bg-slate-900/30">
                          <SemesterPanel semKey={semKey} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
