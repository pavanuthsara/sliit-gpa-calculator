'use client';

import { useEffect, useState } from 'react';

/**
 * Fetches and displays the total visit count from /api/visitors.
 * Calls the endpoint once on mount, which also increments the counter.
 * Renders nothing if the API is unavailable (e.g. missing env vars in dev).
 */
export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch('/api/visitors')
      .then((res) => res.json())
      .then(({ count }) => {
        setCount(count);
        setReady(true);
      })
      .catch(() => setReady(true)); // silently hide on network error
  }, []);

  // Don't render until we have a response; hide if count is unavailable
  if (!ready || count === null) return null;

  const formatted = new Intl.NumberFormat().format(count);

  return (
    <div
      id="visitor-counter"
      title="Total visits to this page"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                 bg-slate-800/60 border border-slate-700/50
                 text-slate-400 text-xs font-medium
                 backdrop-blur-sm select-none print:hidden"
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>

      <span>
        <span className="text-slate-200 font-semibold">{formatted}</span>
        {' '}
        <span>visit{count !== 1 ? 's' : ''}</span>
      </span>
    </div>
  );
}
