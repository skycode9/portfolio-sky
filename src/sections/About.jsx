import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, words, chars", // words keep letters together so lines never break mid-word
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='min-h-screen flex bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
          {/* Text container */}
          <div className='about-text main-container py-28 lg:py-32 flex justify-center items-center font-heading text-black text-[length:clamp(1.5rem,3.1vw,3rem)] leading-[1.25]'>I’m Akash, a full-stack developer who turns ideas into fast, secure and polished web apps. I work across the whole stack: clean, responsive interfaces in React and Next.js, reliable backends and REST APIs in Node.js and Express, and well-designed databases in PostgreSQL and MongoDB. From payments and authentication to Docker, CI/CD and cloud deployment, I take a product from the first screen to a live release, and I care about the small details that make it a pleasure to use.</div>
      </div>
    </>
  )
}

export default About