'use client';

import { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { SPECIALIZATIONS, SEMESTER_KEYS } from '@/data/curriculum';
import { deriveGpaData } from '@/lib/calculations';

const GpaContext = createContext(null);
const LS_KEY = 'sliit_gpa_data';

const initialGrades = () =>
  Object.fromEntries(SEMESTER_KEYS.map(k => [k, {}]));

const initialElectives = () =>
  Object.fromEntries(SEMESTER_KEYS.map(k => [k, []]));

/** Safely read persisted state from localStorage. Returns null on any error. */
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Basic shape validation
    if (!parsed.specialization || !parsed.grades || !parsed.selectedElectives) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Persist current state to localStorage. */
function saveToStorage({ specialization, grades, selectedElectives }) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ specialization, grades, selectedElectives }));
  } catch {
    // Silently ignore (e.g., private browsing quota exceeded)
  }
}

export function GpaProvider({ children }) {
  // Initialise from localStorage if available, otherwise use defaults
  const [specialization, setSpecializationState] = useState(() => {
    const saved = loadFromStorage();
    return saved?.specialization ?? SPECIALIZATIONS[0].id;
  });

  const [grades, setGrades] = useState(() => {
    const saved = loadFromStorage();
    return saved?.grades ?? initialGrades();
  });

  const [selectedElectives, setSelectedElectives] = useState(() => {
    const saved = loadFromStorage();
    return saved?.selectedElectives ?? initialElectives();
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    saveToStorage({ specialization, grades, selectedElectives });
  }, [specialization, grades, selectedElectives]);

  // ─── Actions ─────────────────────────────────────────────────────

  const setSpecialization = useCallback((spec) => {
    setSpecializationState(spec);
    setGrades(initialGrades());
    setSelectedElectives(initialElectives());
  }, []);

  const setGrade = useCallback((semKey, moduleId, grade) => {
    setGrades(prev => ({
      ...prev,
      [semKey]: { ...prev[semKey], [moduleId]: grade },
    }));
  }, []);

  const setElectivesForSem = useCallback((semKey, electiveIds) => {
    setSelectedElectives(prev => ({ ...prev, [semKey]: electiveIds }));
    // Clear grades for removed electives
    setGrades(prev => {
      const existing = prev[semKey] || {};
      const filtered = Object.fromEntries(
        Object.entries(existing).filter(([id]) => {
          const isElective = id.includes('E0') || id.includes('4E');
          return !isElective || electiveIds.includes(id);
        })
      );
      return { ...prev, [semKey]: filtered };
    });
  }, []);

  /**
   * Clear ALL data — resets state AND wipes localStorage.
   * Specialization is reset to the default as well.
   */
  const clearAll = useCallback(() => {
    setSpecializationState(SPECIALIZATIONS[0].id);
    setGrades(initialGrades());
    setSelectedElectives(initialElectives());
    try { localStorage.removeItem(LS_KEY); } catch { /* ignore */ }
  }, []);

  // ─── Derived computations ─────────────────────────────────────────

  const derived = useMemo(() =>
    deriveGpaData({ specialization, grades, selectedElectives }),
    [specialization, grades, selectedElectives]
  );

  const value = {
    specialization,
    setSpecialization,
    grades,
    setGrade,
    selectedElectives,
    setElectivesForSem,
    clearAll,
    ...derived,
  };

  return <GpaContext.Provider value={value}>{children}</GpaContext.Provider>;
}

export function useGpa() {
  const ctx = useContext(GpaContext);
  if (!ctx) throw new Error('useGpa must be used inside GpaProvider');
  return ctx;
}
