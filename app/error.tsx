'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
          Error
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Something broke
        </h1>
        <p className="mt-4 text-slate-400 text-sm leading-relaxed">
          An unexpected error stopped this page from rendering. You can try again or reload.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400/60 font-semibold rounded-xl transition-all duration-200"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
