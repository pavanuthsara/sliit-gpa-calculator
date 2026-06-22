'use client';

import { useGpa } from '@/context/GpaContext';
import { SPECIALIZATIONS } from '@/data/curriculum';

export default function SpecializationSelector() {
  const { specialization, setSpecialization } = useGpa();

  return (
    <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm print:hidden">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <label htmlFor="specialization-select" className="block text-sm font-semibold text-slate-300 mb-1">
            Degree Specialization
          </label>
          <p className="text-xs text-slate-500">Select your programme to load the correct modules</p>
        </div>
        <div className="w-full sm:w-auto">
          <select
            id="specialization-select"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full sm:w-80 bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                       cursor-pointer transition-colors hover:bg-slate-700"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '16px',
              paddingRight: '40px',
              appearance: 'none',
            }}
          >
            {SPECIALIZATIONS.map(spec => (
              <option key={spec.id} value={spec.id}>{spec.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick-select badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {SPECIALIZATIONS.map(spec => (
          <button
            key={spec.id}
            onClick={() => setSpecialization(spec.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              specialization === spec.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {spec.id}
          </button>
        ))}
      </div>
    </div>
  );
}
