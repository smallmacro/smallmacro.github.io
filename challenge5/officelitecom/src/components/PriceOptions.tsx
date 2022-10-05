import React from 'react'
export interface Plan {
  planName: string;
  price: string;
  description: string;
  features: Array<string>;
}

type CardProps = {
  plan: Plan
}
type OptionsProps = {
  plans: Array<Plan>
}
const Card = ({plan} : CardProps) => {
  const featuresMarkUp = plan.features.map((feature) => {
    return(
      <li className='my-2'>{feature}</li>
    )
  })
  const bgColor = plan.planName.toLowerCase() === "pro" ? 'bg-primaryblue  bg-pricing-pattern bg-auto bg-bottom bg-no-repeat text-white md:bg-right xl:bg-bottom': 'bg-white' ;
  const featureColor = plan.planName.toLowerCase() === "pro" ? 'text-white opacity-75': 'text-graytext';
  const btnBg = plan.planName.toLowerCase() === "pro" ? 'btn-whiteblue ' : 'btn-grayblue';
  return (
    <div className={`grid grid-cols-1 justify-center py-10 mx-6 text-blacktext rounded-[13px] shadow-3xl md:mx-10 md:grid-cols-2  md:gap-y-2 md:gap-x-8  xl:grid-cols-1 xl:mx-0 ${bgColor}`} >
      <div className='flex flex-col mx-auto text-center md:row-span-3 md:text-left xl:grid-row-1 xl:text-center'>
        <span className=' font-bold text-[20px]  my-10 md:my-2'>{plan.planName}</span>
        <span className=' font-bold text-[56px] leading-[64px]  mb-2'>{plan.price}</span>
        <p className='text-[16px]  leading-7 '>{plan.description}</p>

      </div>
     
      <ul className={`my-8 mx-auto text-center md:row-span-4  md:text-left xl:grid-row-1 xl:text-center  ${featureColor}`}>
        {featuresMarkUp}
      </ul>
      <button className={`${btnBg} md:row-span-1 md:px-10 xl:grid-row-1 xl:text-center `}>Try for free</button>
    </div>
  )
}

const PriceOptions = ({plans}: OptionsProps) => {
  let plansMarkUp = plans.map((plan) => {
    return (
      <div className=' flex flex-col justify-center  xl:flex-1 '>
        <Card plan={plan}/>
      </div>
    )
  })
  return (
    <section className='w-full flex flex-col my-[100px] mx-auto gap-y-8 max-w-[1110px] xl:flex-row xl:gap-x-10 relative h-full  z-10'>
      {plansMarkUp}
    </section>
    
  )
}

export default PriceOptions