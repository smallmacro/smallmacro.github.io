import React from 'react'
import Logo from './Logo'

const Banner = () => {
  return (
    <div className=' flex flex-row mx-6 py-9 md:mx-10 max-w-[1110px] xl:mx-auto justify-between xl:px-0'>
      <Logo />
      <div className='flex flex-row gap-x-4 items-center'>
        <span className='block bg-icon-sun w-[20px] h-[20px]'></span>
        <label htmlFor="modeToggle" className='inline-flex cursor-pointer relative '>
          <input type="checkbox" className='sr-only peer'  name="modeToggle" title='Select Mode' id="modeToggle" value=""  />
          <div className="w-12 h-6 bg-white peer-focus:outline-none  rounded-xl peer peer-checked:after:translate-x-6  after:content-[''] after:absolute after:top-[5px] after:left-[5px]   after:rounded-xl after:h-[14px] after:w-[14px] after:transition-all after:bg-voilet hover:after:bg-lightvoilet"></div>
        </label>
        <span className='block bg-icon-moon w-[12px] h-[12px]'></span>
      </div>
    </div>
     
 
  )
}

export default Banner