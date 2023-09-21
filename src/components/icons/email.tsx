import React from "react";

type Props = {
  className?: string;
};

export default function Email({ className = "w-6 h-6 text-white" }: Props) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"
      />
    </svg>
  );
}
