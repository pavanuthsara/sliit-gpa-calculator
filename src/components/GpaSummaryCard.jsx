'use client';

import { getGpaColor } from '@/data/grading';

const getGpaBadge = (gpa) => {
  if (gpa === null) return null;
  if (gpa >= 3.70) return { text: 'Excellent', bg: 'bg-amber-500/15 text-amber-400 border-amber-500/30' };
  if (gpa >= 3.30) return { text: 'Very Good', bg: 'bg-sky-500/15 text-sky-400 border-sky-500/30' };
  if (gpa >= 3.00) return { text: 'Good',      bg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' };
  if (gpa >= 2.00) return { text: 'Pass',      bg: 'bg-violet-500/15 text-violet-400 border-violet-500/30' };
  return             { text: 'Fail',            bg: 'bg-red-500/15 text-red-400 border-red-500/30' };
};

export default function GpaSummaryCard({ gpa, label }) {
  const hasGpa = gpa !== null && gpa !== undefined;
  const colorClass = hasGpa ? getGpaColor(gpa) : 'text-slate-500';
  const badge = getGpaBadge(gpa);

  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300
      ${hasGpa ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-800/20 border-slate-800/40'}`}
    >
      <div>
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        <p className={`text-2xl font-bold font-mono tracking-tight mt-0.5 transition-all duration-300 ${colorClass}`}>
          {hasGpa ? gpa.toFixed(2) : '—'}
        </p>
      </div>
      {badge && (
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badge.bg}`}>
          {badge.text}
        </span>
      )}
    </div>
  );
}
