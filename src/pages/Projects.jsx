import React from 'react'
import projects from '../data/projects'
import CTA from '../components/CTA'

// "https://example.com/" -> "example.com"
const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const Projects = () => {
  return (
    <>
    <div className='bg-white text-black'>
      <div className='main-container py-28'>
        <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-x-8 gap-y-12 mt-8 lg:mt-16'>
          {projects.map(({ id, name, type, stack, description, image, link }) => (
            <div
              key={id}
              className="overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden aspect-[2/1] rounded-2xl border border-black/10"
              >
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

              {/* Project Name */}
              <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4">
                {name}
              </span>

              {/* Project Details */}
              <span className="text-sm lg:text-base text-gray-500 mt-1">{stack}</span>
              <p className="text-base lg:text-lg mt-2 max-w-2xl">{description}</p>

              {/* Live Link */}
              <p className="text-base lg:text-lg mt-2 break-all">
                <span className="font-medium">Link: </span>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  {displayUrl(link)}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <CTA />
    </>
  )
}

export default Projects
