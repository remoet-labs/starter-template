"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ShowMoreProps {
  children: React.ReactNode;
  limit?: number;
}

export function ShowMore({ children, limit = 3 }: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const items = React.Children.toArray(children);

  if (items.length <= limit) {
    return <>{items}</>;
  }

  const visible = expanded ? items : items.slice(0, limit);

  return (
    <>
      {visible}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors cursor-pointer mx-auto"
      >
        {expanded ? (
          <>
            Show less <FiChevronUp size={14} />
          </>
        ) : (
          <>
            Show more ({items.length - limit}) <FiChevronDown size={14} />
          </>
        )}
      </button>
    </>
  );
}
