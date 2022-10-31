import React from 'react'


const CompanyInfo = () => {

	
  return (
    <div className='flex flex-col gap-y-6 bg-white items-center  dark:bg-darkblue rounded-md  -mt-[15px] pb-8 md:flex-row md:-mt-[40px] md:pb-0'>
		<div className='w-[50px] h-[50px] -mt-[25px]  bg-orange-500 rounded-[15px] md:w-[140px] md:h-[140px] md:mt-0 md:rounded-none md:rounded-bl-md'>
			<img src="" alt="logo" className='w-full h-full'/>
		</div>
		<div className='flex flex-col items-center gap-y-6 md:flex-row md:flex-1 md:items-center md:justify-between md:px-10 xl:pr-[43px]'>
			<div className='text-darkgray'>
				<h2 className='font-bold text-xl leading-[25px] text-darkblue dark:text-white text-center md:text-left'>Scoot</h2>
				<span className='font-base leading-5'>scoot.com</span>
			</div>
			<a href="#" title='company site' className='block text-voilet font-bold text-base leading-5 bg-voiletop10 py-4 px-5 rounded-[5px] '>Company Site</a>
			
		</div>
		
    </div>
  )
}

export default CompanyInfo