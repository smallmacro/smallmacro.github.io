import React, { useState } from 'react'
import ModalForm from './ModalForm'

const SearchForm = () => {

  const [displayModal, setDispalyModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDeafault();
  }
  return (
    <>
    <form className='h-[5rem] bg-white dark:bg-darkblue -mt-10 rounded-md flex flex-row pl-6 pr-4 justify-between md:gap-x-4 xl:gap-x-6 items-center md:px-6  ' action="" method="post">
      <label htmlFor="title" className='flex flex-row md:items-center md:gap-x-4 md:flex-1 md:py-5 md:border-r md:border-darkgrayop20 '>
        <span className='hidden md:block bg-icon-search w-6 h-6  '></span>
        <input type="text" name="title" id="title" placeholder='Filter by title,companies,expertise...' className='appearance-none  border-0 text-darkblue  placeholder:text-darkblueop50   dark:bg-darkblue dark:text-whiteop50 dark:placeholder:text-whiteop50 focus:ring-0 md:px-0 md:max-w-[168px] xl:max-w-[275px] xl:w-[80%]'/>
      </label>
      <button type='button' title='filter' className='ml-auto mr-6 w-5 h-5 md:hidden'>
        <svg width="20" height="20" className='fill-darkgray dark:fill-white' xmlns="http://www.w3.org/2000/svg"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"  fillRule="nonzero"/></svg>
      </button>
      <label htmlFor="location"  className='hidden md:flex md:flex-row md:flex-1 md:items-center md:gap-x-4 md:py-5 md:border-r md:border-darkgrayop20   '>
        <span className='block bg-icon-location w-[17px] h-6 '></span>
        <input type="text" placeholder='Filter by location...' className='appearance-none border-0 focus:ring-0 md:px-0 md:max-w-[145px] dark:bg-darkblue'/>
      </label>
      <label htmlFor="isFullTime" className='hidden md:flex flex-row  md:gap-x-4  md:py-5 md:max-w-[110px] xl:max-w-[168px] xl:flex-1 truncate'>
        
        <input type="checkbox" name="isFullTime" id="isFullTime" title='Full time' className='appearance-none border-0 bg-darkblueop10 dark:bg-whiteop10 rounded border-darkblueop10  w-6 h-6 checked:bg-icon-check focus:ring-0'/>
        <span className='font-bold dark:text-white'>Full Time Only</span>
      </label>

      <label htmlFor="search" className='bg-voilet w-12 h-12 rounded-[5px] cursor-pointer md:basis-20  md:flex md:justify-center md:items-center xl:basis-[123px]'>
        <button type="submit" title='search' name='search' className='flex' onSubmit={handleSubmit}>
          <svg width="24" height="24" className=" fill-white w-5 h-5 mx-3.5 my-3.5 md:hidden"  xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"  fillRule="nonzero"/></svg>
          <span className='hidden md:block md:text-white'>Search</span>
        </button>
      </label>
      
    </form>
    {displayModal && 
      <div className='flex absolute top-0 left-0 bg-bgmodal w-full h-screen  items-center '>
        <ModalForm />
      </div>
    } 
    </>
  )
}

export default SearchForm