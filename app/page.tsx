"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./home.css";


export default function Home() {
  return (
    <div className="header">
            <div className="logo-container">
              <Image
                 src="/logo.png"
                 alt="Logo"
                 width={62.5}
                 height={93.5}
                 className="logo"
               />
             </div>
             <h1 className="name">Hariramani</h1>



             <div className="center">
              <div className="ring"></div>
              <div className="intro">
              <p className="t1">Hi  I  am</p>
              <p className="t2">Lokesh</p>
             </div>
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

