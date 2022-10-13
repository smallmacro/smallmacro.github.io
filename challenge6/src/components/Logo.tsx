import React from 'react'
import LogoImg from '../assets/desktop/logo.svg'

const Logo = () => {
  return (
    <div>
      <img src={LogoImg} alt='Devjobs logo' className='w-[115px] h-8'/>
      <h1 className='hidden'>Devjobs</h1>
    </div>
  )
}

export default Logo