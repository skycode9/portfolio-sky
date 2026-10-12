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
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
          {/* Text container */}
          <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>I’m Akash, a full-stack developer who builds fast, secure web apps from the first screen to the live deployment. Clean, responsive frontends in React and Next.js, solid backends and REST APIs in Node.js and Express, and well-designed databases in PostgreSQL and MongoDB. You work with one person who owns the whole product, instead of managing a team.</div>
      </div>
    </>
  )
}

export default About