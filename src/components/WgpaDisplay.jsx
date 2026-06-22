'use client';

import { useGpa } from '@/context/GpaContext';
import { SPECIALIZATIONS } from '@/data/curriculum';
import { getDegreeClass } from '@/data/grading';

const years = [
  { key: 'Y1', label: 'Year 1', weight: '0%',  weightVal: 0    },
  { key: 'Y2', label: 'Year 2', weight: '20%', weightVal: 0.20 },
  { key: 'Y3', label: 'Year 3', weight: '30%', weightVal: 0.30 },
  { key: 'Y4', label: 'Year 4', weight: '50%', weightVal: 0.50 },
];

export default function WgpaDisplay() {
  const { wgpa, yearGPAs, specialization } = useGpa();

  const specLabel = SPECIALIZATIONS.find(s => s.id === specialization)?.label || specialization;
  const hasWgpa = wgpa !== null;
  const degreeClass = hasWgpa ? getDegreeClass(wgpa) : null;

  const progressWidth = hasWgpa ? `${Math.min((wgpa / 4) * 100, 100)}%` : '0%';

  const progressGradient = hasWgpa
    ? wgpa >= 3.70 ? 'from-amber-500 to-yellow-400'
    : wgpa >= 3.30 ? 'from-sky-500 to-blue-400'
    : wgpa >= 3.00 ? 'from-emerald-500 to-green-400'
    : wgpa >= 2.00 ? 'from-violet-500 to-purple-400'
    : 'from-red-500 to-rose-400'
    : 'from-slate-700 to-slate-600';

  return (
    <div className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-500
      ${hasWgpa
        ? `bg-gradient-to-br ${degreeClass.bg} ${degreeClass.border}`
        : 'bg-slate-900/60 border-slate-800/60'
      }`}
    >
      {/* Decorative glow orb */}
      {hasWgpa && (
        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20
          ${degreeClass.color.replace('text-', 'bg-')}`}
        />
      )}

      {/* Header */}
      <div className="relative flex flex-col gap-1 mb-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Final WGPA</p>
        <p className="text-slate-400 text-xs">{specLabel}</p>
      </div>

      {/* Main number */}
      <div className={`relative text-6xl font-black font-mono tracking-tight mb-1 transition-all duration-500
        ${hasWgpa ? degreeClass.color : 'text-slate-600'}`}
      >
        {hasWgpa ? wgpa.toFixed(2) : '0.00'}
      </div>
      <p className="text-xs text-slate-500 mb-4">out of 4.00</p>

      {/* Degree classification */}
      {degreeClass && (
        <div className={`mb-5 px-4 py-3 rounded-xl border ${degreeClass.border} bg-black/20 text-center`}>
          <p className={`text-base font-bold ${degreeClass.color}`}>{degreeClass.label}</p>
          <p className="text-xs text-slate-500 mt-0.5">Degree Classification</p>
        </div>
      )}

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-slate-600 mb-1.5">
          <span>0.00</span>
          <span className="text-slate-400">WGPA Progress</span>
          <span>4.00</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r ${progressGradient}`}
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* Year breakdown */}
      <div className="space-y-2.5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Year Breakdown</p>
        {years.map(({ key, label, weight }) => {
          const yearGpa = yearGPAs[key];
          const hasYear = yearGpa !== null;
          return (
            <div key={key} className="flex items-center gap-3 text-sm">
              <span className="w-14 text-slate-400 text-xs shrink-0">{label}</span>
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                {hasYear && (
                  <div
                    className="h-full rounded-full bg-indigo-400/60 transition-all duration-500"
                    style={{ width: `${(yearGpa / 4) * 100}%` }}
                  />
                )}
              </div>
              <span className={`w-10 text-right font-mono text-xs font-bold ${hasYear ? 'text-slate-200' : 'text-slate-600'}`}>
                {hasYear ? yearGpa.toFixed(2) : '—'}
              </span>
              <span className={`w-9 text-right text-xs font-medium ${key === 'Y1' ? 'text-slate-600' : 'text-indigo-400'}`}>
                ×{weight}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footnote */}
      <p className="mt-5 text-xs text-slate-600 italic">
        * Year 1 grades do not contribute to the final WGPA.
      </p>
    </div>
  );
}
