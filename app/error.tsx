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
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
