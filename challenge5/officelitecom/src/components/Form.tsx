import React from 'react'

const Form = () => {
  return (
    <form className='bg-white  rounded-[13px] px-6 py-6 grid grid-cols-1 gap-6  mx-6 z-10 md:w-[445px]  md:mx-10 md:py-10 md:px-[42px] xl:mx-0 xl:h-full'>
      <label className='block' htmlFor="name">
        <input type="text" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="name" id="name" placeholder='Name'/>
      </label>
      <label className='block relative' htmlFor="email">
        <input type="email" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext peer  focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="email" id="email" placeholder='Email' required/>
        <span className='bg-icon-cross w-[20px] h-[20px] invisible peer-invalid:visible  absolute top-2 right-2'></span>
      </label>
      <label className='block' htmlFor="plan">
        <select className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext relative after:bg-arrow-down after:bg-cover after:absolute after:w-[20px] after:h-[20px] after:top-0 after:-right-2 after:text-primaryblue' name="plan" id="plan" title='plan'>
          <option value="Free"  selected>Basic Pack Free</option>
          <option value="$9.99" >Pro Pack $9.99</option>
          <option value="$19.99">Ultimate Pack</option>
        </select>
      </label>
      <label className='block' htmlFor="phonenumber">
        <input type="number" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="phonenumber" id="phonenumber" placeholder='Phone Number'/>
      </label>
      <label className='block' htmlFor="company">
        <input type="text" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="company" id="company" placeholder='company'/>
      </label>
      <button className='btn-primaryblue w-full justify-center  px-[5.375rem] py-[14px] md:px-[91px]'> Get on the list</button>
    </form>
  )
}

export default Form