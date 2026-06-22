'use client';

import { useGpa } from '@/context/GpaContext';
import { SPECIALIZATIONS, SYLLABI } from '@/data/curriculum';

export default function SpecializationSelector() {
  const { specialization, setSpecialization, syllabus, setSyllabus } = useGpa();

  return (
    <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm print:hidden space-y-5">

      {/* ── Syllabus Toggle ── */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Curriculum Syllabus
        </p>
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-800/80 border border-slate-700/60 gap-1">
          {SYLLABI.map((s) => {
            const isActive = syllabus === s.id;
            return (
              <button
                key={s.id}
                id={`syllabus-${s.id.toLowerCase()}-btn`}
                onClick={() => setSyllabus(s.id)}
                className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/40 scale-[1.02]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
                }`}
              >
                {s.label}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
                )}
              </button>
            );
          })}
        </div>
        {syllabus === 'NEW' && (
          <p className="mt-2 text-xs text-amber-400/80 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
            </svg>
            New Syllabus modules are mock data — update them in <code className="font-mono text-amber-300">curriculum.js</code> when ready.
          </p>
        )}
      </div>

      {/* ── Specialization Selector ── */}
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
      <div className="flex flex-wrap gap-2">
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
