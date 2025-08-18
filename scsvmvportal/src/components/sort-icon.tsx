import React from "react";

export function SortIcon() {
  return (
    <div className="flex flex-col items-center justify-center ml-1">
      {/* Blue up arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#2563eb"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[2px]"
      >
        <path d="M12 4L6 10H10V20H14V10H18L12 4Z" />
      </svg>

      {/* Gray down arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#9ca3af"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 20L18 14H14V4H10V14H6L12 20Z" />
      </svg>
    </div>
  );
}
