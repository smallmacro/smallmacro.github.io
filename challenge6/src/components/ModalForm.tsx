import React from 'react'

const ModalForm = () => {
  return (
    <form action="" className='bg-white dark:bg-darkblue  w-full mx-6  flex flex-col  rounded-md max-h-[217px]'>
      <label htmlFor="location"  className='flex flex-row gap-x-4 px-6 py-6 border-darkgrayop20 border-b items-center'>
        <span className='block bg-icon-location w-[17px] h-6'></span>
        <input type="text" placeholder='Filter by location...' className='border-0 focus:ring-0 text-base placeholder:opacity-50 px-0 py-0'/>
      </label>
      <label htmlFor="isFullTime" className='flex flex-row gap-x-4 px-6 py-6 items-center'>
        
        <input type="checkbox" name="isFullTime" id="isFullTime" title='Full time Only' className='accent-darkblueop10 dark:accent-whiteop10 rounded border-darkblueop10 w-6 h-6  checked:bg-icon-check '/>
        <span className='font-bold'>Full time Only</span>
      </label>
      <label htmlFor="btn" className='flex flex-row px-6 py-6 pt-0'>
        <button type='submit' name='btn' className='w-full bg-voilet text-white dark:text-white py-4 font-bold text-base rounded-[5px]'>Search</button>
      </label>
      
    </form>
  )
}

export default ModalForm