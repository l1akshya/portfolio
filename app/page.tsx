"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./home.css";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = ["Hi I am", "Lokesh"]; // Two separate lines
  const typingSpeed = 100;

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = fullText[lineIndex];
    let typedLines: string[] = ["", ""]; // Store typed text separately

    const interval = setInterval(() => {
      if (charIndex < currentLine.length) {
        typedLines[lineIndex] += currentLine.charAt(charIndex);
        setText(typedLines.join("<br />")); // Ensures correct line breaks
        charIndex++;
      } else if (lineIndex < fullText.length - 1) {
        // Move to next line
        lineIndex++;
        charIndex = 0;
        currentLine = fullText[lineIndex];
      } else {
        clearInterval(interval); // Stop typing once done
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <div className="center">
        <div className="ring"></div>

        <div className="intro" dangerouslySetInnerHTML={{ __html: text }}></div>

        <div className="char-container">
          <Image
            src="/char.png"
            alt="char"
            className="char"
            width={250}
            height={93.5}
          />
        </div>
      </div>
    </div>
  );
}
