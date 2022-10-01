import React from 'react'

const Form = () => {
  return (
    <form className='bg-white  rounded-[13px] px-6 py-6 grid grid-cols-1 gap-6  mx-6   md:mx-10 xl:mx-0'>
      <label className='block' htmlFor="name">
        <input type="text" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="name" id="name" placeholder='Name'/>
      </label>
      <label className='block' htmlFor="email">
        <input type="email" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="email" id="email" placeholder='email'/>
      </label>
      <label className='block' htmlFor="plan">
        <select className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="plan" id="plan" title='plan'>
          <option value="Free"  selected>Basic Pack <span className='text-blacktext opacity-40 font-bold'>Free</span></option>
          <option value="$9.99" >Pro Pack <span>$9.99</span></option>
          <option value="$19.99">Ultimate Pack</option>
        </select>
      </label>
      <label className='block' htmlFor="phonenumber">
        <input type="number" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="phonenumber" id="phonenumber" placeholder='Phone Number'/>
      </label>
      <label className='block' htmlFor="company">
        <input type="text" className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="company" id="company" placeholder='company'/>
      </label>
      <button className='btn-primaryblue w-full justify-center  '> Get on the list</button>
    </form>
  )
}

export default Form