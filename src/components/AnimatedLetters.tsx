import { useEffect, useRef } from "react";
import "./AnimatedLetters.css";

interface AnimatedLettersProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimatedLetters = ({
  letterClass,
  strArray,
  idx,
}: AnimatedLettersProps) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.target as HTMLElement;
    element.classList.remove("text-animate-hover");
    void element.offsetWidth; // Trigger reflow
    element.classList.add("text-animate-hover");
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          onMouseEnter={handleMouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
