import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import projects from '../data/projects'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Work = () => {

  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll
    // Measured inside functions so it is recalculated on resize
    const getProjectsWidth = () => projectsRef.current.scrollWidth;

    gsap.to(projectsRef.current, {
      x: () => -(getProjectsWidth() - window.innerWidth),
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "top top",
        end: () => `+=${getProjectsWidth()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1, // prevents flicker on fast scroll
        invalidateOnRefresh: true,
      },
    });
  }, { scope: workRef });


  return (
    <>
      <div ref={workRef} className="min-h-screen flex flex-col justify-center bg-white text-black pt-24 pb-10 overflow-hidden">
        
        {/* Title Wrapper */}
        <div className='main-container pb-6 lg:pb-8 flex max-md:flex-col gap-6 justify-between items-start md:items-end'>
          <div className='max-w-xl'>
            <h3 className='mb-3'>Selected Work</h3>
            <p className='text-lg lg:text-xl'>Apps I built end to end, from the first screen to the live deployment. Every one is live, so you can test it yourself.</p>
          </div>
          <GradientButton text="Explore All" link="/projects" className="btn-light" />
        </div>
        <div ref={projectsRef}>
          {/* Projects */}
          <div className='flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
            {projects.map(({ id, name, type, image, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-2xl shrink-0 h-[170px] lg:h-[min(336px,45vh)] aspect-[2/1] block overflow-hidden border border-black/10 group"
              >
                {/* Project Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />

                {/* Project Type */}
                <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {type}
                </span>
              </a>
            ))}
            {/* Spacer so the last card does not touch the edge */}
            <div className='shrink-0 w-px' aria-hidden='true'></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Work