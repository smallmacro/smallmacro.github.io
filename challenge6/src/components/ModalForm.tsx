import React from 'react'

const ModalForm = () => {
  return (
    <form action="" className='bg-white  w-full mx-6  flex flex-col px-6 py-6 gap-6 rounded-md'>
      <label htmlFor="location"  className='flex flex-row gap-x-4'>
        <span className='block bg-icon-location w-[17px] h-6'></span>
        <input type="text" placeholder='Filter by location...'/>
      </label>
      <label htmlFor="isFullTime" className='flex flex-row gap-x-4'>
        
        <input type="checkbox" name="isFullTime" id="isFullTime" title='Full time Only' />
        <span>Full time Only</span>
      </label>
      <button type='submit' className='bg-voilet text-white py-4 font-bold text-base rounded-[5px]'>Search</button>
    </form>
  )
}

export default ModalForm