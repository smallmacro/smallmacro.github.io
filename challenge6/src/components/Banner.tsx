import React, { useState } from 'react'
import Logo from './Logo'

const Banner = () => {

  const [checked, setChecked] = useState(false);
  
  return (
    <header className='w-full h-[136px]  bg-mobile-header bg-no-repeat md:bg-tablet-header md:h-[160px] bg-cover xl:bg-desktop-header xl:h-[162px] '>
    <div className=' flex flex-row mx-6 py-9 md:mx-10 max-w-[1110px] xl:mx-auto justify-between xl:px-0'>
      <Logo />
      <div className='flex flex-row gap-x-4 items-center'>
        <span className='block bg-icon-sun w-[20px] h-[20px]'></span>
        <label htmlFor="modeToggle" className='inline-flex cursor-pointer relative '>
          <input type="checkbox" className='sr-only peer'  name="modeToggle" title='Select Mode' id="modeToggle" checked={checked} onChange={e => setChecked(e.target.checked)}  />
          <div className="w-12 h-6 bg-white peer-focus:outline-none  rounded-xl peer peer-checked:after:translate-x-6  after:content-[''] after:absolute after:top-[5px] after:left-[5px]   after:rounded-xl after:h-[14px] after:w-[14px] after:transition-all after:bg-voilet hover:after:bg-lightvoilet"></div>
        </label>
        <span className='block bg-icon-moon w-[12px] h-[12px]'></span>
      </div>
    </div>
    </header>
 
  )
}

export default Banner