"use client"

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto">
        <a href="#events"> Explore Events</a>
        <Image src='/icons/arrow-down.svg' alt="arrow-down" width={20} height={20} className="ml-1"/>
    </button>

  )
}

export default ExploreBtn
