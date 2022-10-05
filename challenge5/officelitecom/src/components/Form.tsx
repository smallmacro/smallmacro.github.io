import React, { useState } from 'react'


const Form = () => {
  const [name, setName] = useState("");
  const [emial, setEmail] = useState("");
  // const [option, setOption] = useState("");
  const [phoneno, setPhoneno] = useState(0);
  const [company, setCompany] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: {value: string};
      email: {value :string};
      phoneno:{value: number};
      company: {value: string};
    }
    if (target.name.value === '' || target.name.value.trim() === '') {
      setIsNameValid(false);
    }
    
  }
  return (
    <form onSubmit={handleSubmit} className='bg-white  rounded-[13px] px-6 py-6 grid grid-cols-1 gap-6 shadow-3xl mx-6 z-10 md:w-[445px]  md:mx-10 md:py-10 md:px-[42px] xl:mx-0 xl:h-full' >
      <label className='block' htmlFor="name">
        <input type="text" onChange={(e) => setName(e.target.value)} className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="name" id="name" placeholder='Name' required/>
      </label>
      <label className='block relative' htmlFor="email">
        <input type="email" onChange={(e) => setEmail(e.target.value)} className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext peer  focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="email" id="email" placeholder='Email'  required/>
        <span className='bg-icon-cross w-[20px] h-[20px] invisible absolute top-2 right-2'></span>
      </label>
      <label className='block' htmlFor="plan">
        <select className='appearance-none mt-0 block w-full px-4 border-0 border-b-2 border-graytext cursor-pointer focus:ring-0 focus:border-graytext text-blacktext relative bg-arrow-down bg-[length:11px_5.5px]  ' name="plan" id="plan" title='plan'>
          <option value="Free" className='after:content-["Free"] after:block after:w-auto after:text-graytext'>Basic Pack </option>
          <option value="$9.99" >Pro Pack</option>
          <option value="$19.99">Ultimate Pack</option>
        </select>
      </label>
      <label className='block' htmlFor="phonenumber">
        <input type="number" onChange={(e) => setPhoneno(e.target.valueAsNumber)} className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="phonenumber" id="phonenumber" placeholder='Phone Number'/>
      </label>
      <label className='block' htmlFor="company">
        <input type="text" onChange={(e) => setCompany(e.target.value)} className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="company" id="company" placeholder='company'/>
      </label>
      <button type='submit' onSubmit={handleSubmit} className='btn-primaryblue w-full justify-center  px-[5.375rem] py-[14px] md:px-[91px]'> Get on the list</button>
    </form>
  )
}

export default Form