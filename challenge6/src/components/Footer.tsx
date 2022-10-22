import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-white rounded-md  mt-16 mb-0 '>
      <div className='px-6 py-6 max-h-[96px] w-full md:px-10 md:py-[22px] md:flex md:flex-row md:justify-between'>
        <div className='hidden md:flex md: flex-col text-darkgray'>
          <span className='font-bold text-lg text-darkblue leading-[25px]'>Senior Softeware Engineer</span>
          <span className='leading-5 text-base'>So Digital Inc.</span>
        </div>
        <button type='button' className='text-white bg-voilet text-base leading-5 rounded-md font-bold w-full py-4 md:basis-[141px]'>Apply Now</button>
      </div>
    </footer>
  )
}

export default Footer