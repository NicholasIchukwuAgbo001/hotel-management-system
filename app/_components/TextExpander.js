"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = typeof children === "string" ? children : children?.toString();
  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 30).join(" ") + "...";

  return (
    <div>
      {displayText}{" "}
      <button
        type="button"
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default TextExpander;