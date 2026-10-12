import React from 'react'
import { Link } from 'react-router-dom'

const GradientButton = ({ text, link, className = "" }) => {

  const classes = `btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg ${className}`;

  // Internal routes go through the router, everything else is a normal link
  if (link.startsWith('/')) {
    return <Link to={link} className={classes}>{text}</Link>
  }

  const external = link.startsWith('http');

  return (
    <>
        <a href={link} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{text}</a>
    </>
  )
}

export default GradientButton
