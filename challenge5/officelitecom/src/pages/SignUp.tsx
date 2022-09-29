import React from 'react'
import CountDown from '../components/CountDown'
import LogoName from '../components/LogoName'

function SignUp() {
  return (
    <main className='w-full flex flex-col bg-wholebg md:flex-col '>
      <section className='w-full flex flex-col max-w-[1110px] gap-y-[4rem] my-0 mx-auto bg-header-pattern bg-contain bg-top bg-no-repeat md:items-start md:bg-none'>
          <div className=' flex flex-row mt-12 mb-4 mx-auto  md:my-[4.5rem] md:mx-10  xl:mx-0 xl:my-[5.125rem]'>
            <LogoName />
          </div>
          
          <div className='flex flex-col justify-center gap-y-6 md:flex-1 xl:items-start'>
            <h2 className='font-bold text-[40px] text-blacktext text-center leading-[48px] xl:text-[56px] xl:leading-[64px] xl:text-left'>Work smarter. Save time.</h2>
            <p className='my-8 text-center text-graytext xl:text-lg xl:text-left'>Easily manage your projects. Get on the list and receive in-app perks available only to 
            early subscribers. We are moving into final development and getting ready for official launch soon.</p>
          </div>
        
          <CountDown bgColor={'white'}/>
      </section>
      
    </main>
  )
}

export default SignUp