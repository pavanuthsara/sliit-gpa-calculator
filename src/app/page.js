'use client';

import { GpaProvider } from '@/context/GpaContext';
import Header from '@/components/Header';
import SpecializationSelector from '@/components/SpecializationSelector';
import SemesterAccordion from '@/components/SemesterAccordion';
import WgpaDisplay from '@/components/WgpaDisplay';
import PrintReport from '@/components/PrintReport';
import VisitorCounter from '@/components/VisitorCounter';

export default function HomePage() {
  const handlePrint = () => window.print();

  return (
    <GpaProvider>
      <div className="min-h-screen bg-slate-950">
        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-900/15 rounded-full blur-3xl" />
        </div>

        <Header onPrint={handlePrint} />

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Page heading */}
          <div className="mb-8 print:hidden">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-3xl font-black text-white tracking-tight">
                GPA &amp; WGPA{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Calculator
                </span>
              </h2>
              <VisitorCounter />
            </div>
            <p className="text-slate-400 mt-1 text-sm">
              Select your specialization, enter your grades, and your GPA &amp; WGPA update in real time.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left: selector + accordion */}
            <div className="lg:col-span-2 space-y-5">
              <SpecializationSelector />
              <SemesterAccordion />
            </div>

            {/* Right: sticky WGPA panel */}
            <div className="lg:sticky lg:top-24">
              <WgpaDisplay />
            </div>
          </div>

          {/* How-to guide */}
          <div className="mt-8 p-5 rounded-2xl border border-slate-800/40 bg-slate-900/40 print:hidden">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">How to use</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Select Specialization', desc: 'Choose your SLIIT degree programme to load the correct modules.' },
                { step: '2', title: 'Enter Your Grades',     desc: 'Open each semester and pick your grade from the dropdown for every module.' },
                { step: '3', title: 'View Results',          desc: 'Semester GPAs and your final WGPA update instantly in the side panel.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-600/20 border border-indigo-600/40 flex items-center justify-center text-indigo-400 text-xs font-bold flex-shrink-0 mt-0.5">
                    {step}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grading reference */}
          <div className="mt-4 p-5 rounded-2xl border border-slate-800/40 bg-slate-900/40 print:hidden">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">Grade Reference</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {[
                { grade: 'A+', gp: '4.00', range: '90–100', color: 'text-amber-400' },
                { grade: 'A',  gp: '4.00', range: '80–89',  color: 'text-amber-400' },
                { grade: 'A-', gp: '3.70', range: '75–79',  color: 'text-amber-400' },
                { grade: 'B+', gp: '3.30', range: '70–74',  color: 'text-sky-400' },
                { grade: 'B',  gp: '3.00', range: '65–69',  color: 'text-sky-400' },
                { grade: 'B-', gp: '2.70', range: '60–64',  color: 'text-sky-400' },
                { grade: 'C+', gp: '2.30', range: '55–59',  color: 'text-emerald-400' },
                { grade: 'C',  gp: '2.00', range: '45–54',  color: 'text-emerald-400' },
                { grade: 'C-', gp: '1.70', range: '40–44',  color: 'text-orange-400' },
                { grade: 'D+', gp: '1.30', range: '35–39',  color: 'text-orange-400' },
                { grade: 'D',  gp: '1.00', range: '30–34',  color: 'text-orange-400' },
                { grade: 'E',  gp: '0.00', range: '00–29',  color: 'text-red-400' },
              ].map(({ grade, gp, range, color }) => (
                <div key={grade} className="flex items-center gap-2 bg-slate-800/40 rounded-lg px-3 py-2">
                  <span className={`font-bold text-sm w-6 ${color}`}>{grade}</span>
                  <div>
                    <p className="text-xs text-slate-300 font-mono">{gp}</p>
                    <p className="text-xs text-slate-600">{range}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Print report (hidden on screen, visible on print) */}
        <PrintReport />
      </div>
    </GpaProvider>
  );
}
