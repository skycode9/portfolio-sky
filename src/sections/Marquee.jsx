import React from 'react'
import star from '../assets/images/star.svg'

const words = ['BUILD', 'SHIP', 'SCALE', 'BUILD', 'SHIP', 'SCALE'];

// The row is rendered twice so the loop has no visible jump
const Row = ({ starClass, hidden = false }) => (
  <span aria-hidden={hidden} className="flex shrink-0 gap-4 lg:gap-8 pe-4 lg:pe-8">
    {words.map((word, index) => (
      <React.Fragment key={index}>
        <span>{word}</span>
        <img src={star} alt="" className={`${starClass} w-[7vw]`} />
      </React.Fragment>
    ))}
  </span>
)

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden bg-white text-black pb-28 lg:pb-44">

        {/* Row 1 */}
        <div className="flex w-max whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <Row starClass="marquee-star1" />
          <Row starClass="marquee-star1" hidden />
        </div>

        {/* Row 2 (reverse) */}
        <div className="flex w-max whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <Row starClass="marquee-star2" />
          <Row starClass="marquee-star2" hidden />
        </div>

      </div>
    </>
  )
}

export default Marquee
