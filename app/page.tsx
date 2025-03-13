"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./home.css";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const fullText = ["Hi I am", "Lokesh"]; // Two separate lines
  const typingSpeed = 100;

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = fullText[lineIndex];
    let typedLines = ["", ""]; // Store typed text separately

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

  // Handle button clicks with navigation
  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    
    if (buttonName === "About Me") {
      router.push("/about");
    } else if (buttonName === "Projects") {
      router.push("/projects");
    } else if (buttonName === "Contact Info") {
      router.push("/profile");
    }
  };

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

        <div className="lamp-container">
          {/* Lamp 1 with About Me */}
          <div className="lamp-group">
            <div className="lamp">
              <Image src="/lamp.png" alt="lamp" width={54.545} height={61.905} />
            </div>
            <div className="lamp-glow"></div>
            <button
              className="lamp-button"
              onClick={() => handleButtonClick("About Me")}
            ></button>
            <div className="button-label">About Me</div>
          </div>

          {/* Lamp 2 with Projects */}
          <div className="lamp-group">
            <div className="lamp">
              <Image src="/lamp.png" alt="lamp" width={54.545} height={61.905} />
            </div>
            <div className="lamp-glow"></div>
            <button
              className="lamp-button"
              onClick={() => handleButtonClick("Projects")}
            ></button>
            <div className="button-label">Projects</div>
          </div>

          {/* Lamp 3 with Contact Info */}
          <div className="lamp-group">
            <div className="lamp">
              <Image src="/lamp.png" alt="lamp" width={54.545} height={61.905} />
            </div>
            <div className="lamp-glow"></div>
            <button
              className="lamp-button"
              onClick={() => handleButtonClick("Contact Info")}
            ></button>
            <div className="button-label">Contact Info</div>
          </div>
        </div>
      </div>
    </div>
  );
}