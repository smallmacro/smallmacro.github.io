import React from 'react'

const Card = () => {
  return (
    <div className='grid grid-cols-1 justify-center py-10 mx-6  bg-white rounded-[13px] md:mx-10 md:grid-cols-2  md:gap-y-2 md:gap-x-8 xl:ml-[165px] xl:grid-cols-1'>
      <div className='flex flex-col mx-auto text-center md:row-span-3 md:text-left xl:grid-row-1 xl:text-center'>
        <span className=' font-bold text-[20px] text-blacktext my-10 md:my-2'>Basic</span>
        <span className=' font-bold text-[56px] leading-[64px] text-blacktext mb-2'>Free</span>
        <p className='text-[16px]  leading-7 text-blacktext'>Up to 5 users for free</p>

      </div>
     
      <ul className='text-graytext mx-auto text-center md:row-span-4  md:text-left xl:grid-row-1 xl:text-center'>
        <li className='my-2 mt-14'>Basic document collaboration </li>
        <li className='my-2'>2 gb storage</li>
        <li className='my-2 mb-8' >Great security and support</li>
      </ul>
      <button className='btn-grayblue md:row-span-1 md:px-10 xl:grid-row-1 xl:text-center'>Try for free</button>
    </div>
  )
}

const PriceOptions = () => {
  return (
    <section className='w-full flex flex-col max-w-[1280px] my-10 mx-auto '>
      <Card />
    </section>
  )
}

export default PriceOptions