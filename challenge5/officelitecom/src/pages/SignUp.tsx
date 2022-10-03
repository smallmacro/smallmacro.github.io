import React from 'react'
import CountDown from '../components/CountDown'
import Form from '../components/Form'
import LogoName from '../components/LogoName'

function SignUp() {
  return (
    <main className='w-full  box-content bg-wholebg '>
      <div className='max-w-[1110px] flex flex-col my-0 mx-auto xl:flex-row xl:gap-x-[125px] xl:items-center'>
        <section className='w-full flex flex-col  gap-y-[4rem] my-0 mx-auto bg-header-pattern bg-contain bg-top bg-no-repeat md:items-start md:bg-none md:gap-y-10 xl:mb-[7.25rem]'>
            <div className=' flex flex-row mt-12 mb-4 mx-auto  md:my-[4.5rem] md:mx-10  xl:mx-0 xl:mb-[5.125rem] xl:mt-0'>
              <LogoName />
            </div>
            
            <div className='flex flex-col justify-center gap-y-6 md:flex-1 xl:items-start  mx-6   md:mx-10 xl:mx-0'>
              <h2 className='font-bold text-[40px] text-blacktext text-center leading-[48px] xl:text-[56px] xl:leading-[64px] xl:text-left'>Work smarter. Save time.</h2>
              <p className='my-8 text-center text-graytext xl:text-lg xl:text-left'>Easily manage your projects. Get on the list and receive in-app perks available only to 
              early subscribers. We are moving into final development and getting ready for official launch soon.</p>
            </div>
          
            <CountDown bgColor={'white'} />
        </section>

        <section className='w-full flex flex-col  items-center relative z-10 my-16 md:my-[6.5rem] mx-auto xl:h-full xl:pt-[237px] xl:pb-[279px] xl:my-0'>
          <Form />
          <div className='absolute top-[50%] left-0 z-0 bg-side-pattern bg-blackbg bg-auto bg-center bg-no-repeat w-full h-[20rem] xl:top-0 xl:left-[50%] xl:h-full xl:w-[420px]'></div>
        </section>
      </div>
    </main>
  )
}

export default SignUp