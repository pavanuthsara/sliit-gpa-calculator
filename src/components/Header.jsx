'use client';

import { useState } from 'react';
import { useGpa } from '@/context/GpaContext';

export default function Header({ onPrint }) {
  const { clearAll } = useGpa();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearConfirm = () => {
    clearAll();
    setShowConfirm(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg leading-tight tracking-tight">SLIIT GPA Calculator</h1>
                <p className="text-slate-400 text-xs">Academic Performance Tracker</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {/* Clear Data */}
              <button
                id="clear-data-btn"
                onClick={() => setShowConfirm(true)}
                title="Clear all saved data"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 hover:border-red-700/60 bg-slate-800/60 hover:bg-red-950/30 text-slate-400 hover:text-red-400 text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="hidden sm:inline">Clear Data</span>
              </button>

              {/* Print */}
              <button
                id="print-results-btn"
                onClick={onPrint}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium transition-all duration-150 shadow-lg shadow-indigo-600/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span className="hidden sm:inline">Print Results</span>
                <span className="sm:hidden">Print</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Confirm clear dialog ── */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-clear-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowConfirm(false)}
          />

          {/* Modal card */}
          <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-150">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>

            <h2 id="confirm-clear-title" className="text-center text-white font-bold text-lg mb-2">
              Clear All Data?
            </h2>
            <p className="text-center text-slate-400 text-sm mb-6 leading-relaxed">
              This will permanently delete all your saved grades and elective selections from this browser. This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                id="cancel-clear-btn"
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-sm font-medium transition-all duration-150"
              >
                Cancel
              </button>
              <button
                id="confirm-clear-btn"
                onClick={handleClearConfirm}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white text-sm font-bold transition-all duration-150 shadow-lg shadow-red-600/30"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
