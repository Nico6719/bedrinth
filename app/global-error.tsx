"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            A critical error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
