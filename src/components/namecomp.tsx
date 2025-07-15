"use client";

import { useEffect, useState } from "react";
import AnimatedLetters from "@/components/AnimatedLetters";

interface NameCompProps {
  text: string;
}

const NameComp = ({ text }: NameCompProps) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
      const textZone = document.querySelector(".text-zone");
      if (textZone) {
        (textZone as HTMLElement).startTime = performance.now();
      }
    }, nameArray.length * 100 + 1000);


    return () => clearTimeout(timer);
  }, [nameArray.length]);

  return (
    <span className="text-zone">
      <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={1} />
    </span>
  );
};

export default NameComp;
