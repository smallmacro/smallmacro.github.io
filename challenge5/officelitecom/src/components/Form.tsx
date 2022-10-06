import React, { useState } from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement,
  email: HTMLInputElement,
  plan: HTMLSelectElement,
  phoneNo: HTMLInputElement,
  company: HTMLInputElement,
}

interface CustomFormElements extends HTMLFormElement {
  readonly elements: FormElements
}

// type FormInputs = {
//   name: string;
//   email: string;
//   // selected: string;
//   phoneNo: number | null;
//   company: string | null;
// }


const Form = () => {
  
  const pattern = /^\S+@\S+$/g;
  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name , setName] = useState("");
  const [email, setEmail] = useState("")
 
  const handleSubmit = (event : React.FormEvent<CustomFormElements>) =>{
    event.preventDefault();
    const form = event.currentTarget;
    const inputName = form.elements.name.value; 
    const inputEmail = form.elements.email.value;
    const selectedPlan = form.elements.plan.value;
    
    if (!inputName) {
      setNamePlaceholder("Name is required");
      setIsNameValid(false);
    }else{
      setNamePlaceholder("Name");
      setIsNameValid(true);
    }
    if(!inputEmail){
      // validationObj.email.isValid = false;
      setEmailPlaceholder("Email Address is required");
      setIsEmailValid(false);
    }else if (!inputEmail.match(pattern)) {
      setEmailPlaceholder("Please enter the correct email format");
      setEmail("");
      setIsEmailValid(false);
    }else{
      setEmailPlaceholder("Email");
      setIsEmailValid(true);
    }
    console.log({inputName, inputEmail, selectedPlan})
    
  
  }
  
  return (
    <form onSubmit={handleSubmit} className='bg-white  rounded-[13px] px-6 py-6 grid grid-cols-1 gap-6 shadow-3xl mx-6 z-10 md:w-[445px]  md:mx-10 md:py-10 md:px-[42px] xl:mx-0 xl:h-full' >
      <label className='block relative' htmlFor="name">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`mt-0 block w-full px-4 border-0 border-b-2 ${isNameValid?"border-graytext placeholder:text-graytext placeholder:opacity-50":"border-warnred placeholder:text-warnred placeholder:opacity-100"} focus:ring-0 focus:border-graytext text-blacktext `} name="name" id="name" placeholder={namePlaceholder} />
        <span className={`bg-icon-cross w-[20px] h-[20px] ${isNameValid?"invisible":"visible" } absolute top-2 right-2`}></span>

      </label>
      <label className='block relative' htmlFor="email">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
          className={`mt-0 block w-full px-4 border-0 border-b-2 ${isEmailValid?"border-graytext placeholder:text-graytext placeholder:opacity-50":"border-warnred placeholder:text-warnred placeholder:opacity-100"} focus:ring-0 focus:border-graytext text-blacktext `} name="email" id="email" placeholder={emailPlaceholder}  />
        <span className={`bg-icon-cross w-[20px] h-[20px] ${isEmailValid?"invisible":"visible"} absolute top-2 right-2`}></span>
      </label>
      <label className='block' htmlFor="plan">
        <select className='appearance-none mt-0 block w-full px-4 border-0 border-b-2 border-graytext cursor-pointer focus:ring-0 focus:border-graytext text-blacktext relative bg-arrow-down bg-[length:11px_5.5px]  ' name="plan" id="plan" title='plan'>
          <option value="Free" className='after:content-["Free"] after:block after:w-auto after:text-graytext' selected>Basic Pack </option>
          <option value="$9.99" >Pro Pack</option>
          <option value="$19.99">Ultimate Pack</option>
        </select>
      </label>
      <label className='block' htmlFor="phonenumber">
        <input type="number"  className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="phonenumber" id="phonenumber" placeholder='Phone Number'/>
      </label>
      <label className='block' htmlFor="company">
        <input type="text"  className='mt-0 block w-full px-4 border-0 border-b-2 border-graytext focus:ring-0 focus:border-graytext text-blacktext placeholder:opacity-50' name="company" id="company" placeholder='company'/>
      </label>
      <button type='submit'  className='btn-primaryblue w-full justify-center  px-[5.375rem] py-[14px] md:px-[91px]'> Get on the list</button>
    </form>
  )
}

export default Form