// app/capsules/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("CAPSULES PAGE ERROR:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-red-50 border border-red-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          ⚠️ Error Details (Debug Mode)
        </h2>
        
        <div className="mb-4">
          <p className="text-sm font-bold text-red-600 mb-1">Error Name:</p>
          <p className="text-sm bg-white border border-red-200 rounded p-2 font-mono break-all">
            {error?.name || "Unknown"}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-bold text-red-600 mb-1">Error Message:</p>
          <p className="text-sm bg-white border border-red-200 rounded p-2 font-mono break-all whitespace-pre-wrap">
            {error?.message || "No message"}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-bold text-red-600 mb-1">Stack Trace:</p>
          <pre className="text-xs bg-white border border-red-200 rounded p-2 font-mono break-all whitespace-pre-wrap overflow-auto max-h-64">
            {error?.stack || "No stack trace"}
          </pre>
        </div>

        <button
          onClick={reset}
          className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}