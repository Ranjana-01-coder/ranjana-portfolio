"use client";

import { useEffect, useState } from "react";

export default function AboutHeading() {
  const fullText = "A little about me.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typing = setInterval(() => {
      currentIndex += 1;

      setDisplayText(fullText.substring(0, currentIndex));

      if (currentIndex === fullText.length) {
        clearInterval(typing);
      }
    }, 180);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="mt-4 flex items-center gap-4">
      <h2 className="text-4xl font-bold text-white md:text-6xl">
        {displayText}
        <span className="ml-1 text-purple-400 animate-pulse">|</span>
      </h2>
    </div>
  );
}