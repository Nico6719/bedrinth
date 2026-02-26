"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard errors (e.g. unsupported context)
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${className}`}
      aria-label={copied ? "Copied" : `Copy "${text}" to clipboard`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      )}
    </button>
  );
}
