"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TestParallax = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom-=100",
      pin: textRef.current,
      pinSpacing: true,
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[150vh]">
      <img src="/img/left01.png" alt="" className="absolute top-50 left-0" />
      <img src="/img/left02.png" alt="" className="absolute top-150 left-30" />
      <img src="/img/left03.png" alt="" className="absolute top-250 left-0" />

      <img src="/img/right01.png" alt="" className="absolute top-50 right-20" />
      <img src="/img/right02.png" alt="" className="absolute top-150 right-0" />
      <img src="/img/right03.png" alt="" className="absolute top-250 right-30" />
      <div ref={textRef} className="text-center text-2xl leading-10 py-52">
        {/* 固定したいテキスト */}
        <p>
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
          {/* ... */}
        </p>
        <p className="pt-20">
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
          text text text text text text text text text text text text <br />
        </p>
      </div>
    </section>
  );
};

export default TestParallax;
