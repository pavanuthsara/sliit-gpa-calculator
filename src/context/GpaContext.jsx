'use client';

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { SPECIALIZATIONS, SEMESTER_KEYS } from '@/data/curriculum';
import { deriveGpaData } from '@/lib/calculations';

const GpaContext = createContext(null);

const initialGrades = () =>
  Object.fromEntries(SEMESTER_KEYS.map(k => [k, {}]));

const initialElectives = () =>
  Object.fromEntries(SEMESTER_KEYS.map(k => [k, []]));

export function GpaProvider({ children }) {
  const [specialization, setSpecializationState] = useState(SPECIALIZATIONS[0].id);
  const [grades, setGrades] = useState(initialGrades);
  const [selectedElectives, setSelectedElectives] = useState(initialElectives);

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
          // Keep compulsory module grades; only keep elective grades if still selected
          const isElective = id.includes('E0') || id.includes('4E');
          return !isElective || electiveIds.includes(id);
        })
      );
      return { ...prev, [semKey]: filtered };
    });
  }, []);

  const resetAll = useCallback(() => {
    setGrades(initialGrades());
    setSelectedElectives(initialElectives());
  }, []);

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
    resetAll,
    ...derived,
  };

  return <GpaContext.Provider value={value}>{children}</GpaContext.Provider>;
}

export function useGpa() {
  const ctx = useContext(GpaContext);
  if (!ctx) throw new Error('useGpa must be used inside GpaProvider');
  return ctx;
}
