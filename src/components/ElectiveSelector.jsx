'use client';

import { useGpa } from '@/context/GpaContext';
import { curriculumData } from '@/data/curriculum';

export default function ElectiveSelector({ semKey }) {
  const { specialization, selectedElectives, setElectivesForSem } = useGpa();

  const semData = curriculumData[specialization]?.[semKey];
  if (!semData || Array.isArray(semData) || !semData.electivesPool) return null;

  const { electivesPool, requiredElectivesCount } = semData;
  const currentSelected = selectedElectives[semKey] || [];

  const toggleElective = (id) => {
    if (currentSelected.includes(id)) {
      setElectivesForSem(semKey, currentSelected.filter(e => e !== id));
    } else if (currentSelected.length < requiredElectivesCount) {
      setElectivesForSem(semKey, [...currentSelected, id]);
    }
  };

  const isFull = currentSelected.length >= requiredElectivesCount;

  return (
    <div className="p-4 rounded-xl border border-indigo-800/40 bg-indigo-950/30 print:hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h4 className="text-sm font-semibold text-indigo-300">
          Choose {requiredElectivesCount} Elective{requiredElectivesCount > 1 ? 's' : ''}
          <span className="ml-2 text-xs font-normal text-slate-400">
            ({currentSelected.length}/{requiredElectivesCount} selected)
          </span>
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {electivesPool.map(mod => {
          const isSelected = currentSelected.includes(mod.id);
          const isDisabled = !isSelected && isFull;
          return (
            <button
              key={mod.id}
              onClick={() => toggleElective(mod.id)}
              disabled={isDisabled}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200
                ${isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                  : isDisabled
                    ? 'bg-slate-800/40 border-slate-700/40 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-indigo-600/60 hover:text-indigo-300 hover:bg-slate-700'
                }`}
            >
              {isSelected && (
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
              <span>{mod.name}</span>
              <span className="opacity-60">({mod.credits}cr)</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
