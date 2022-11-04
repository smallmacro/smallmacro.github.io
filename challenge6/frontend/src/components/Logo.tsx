import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/desktop/logo.svg'

const Logo = () => {
  const home = "/";
  return (
    <Link to={home}>
      <img src={LogoImg} alt='Devjobs logo' className='w-[115px] h-8'/>
      <h1 className='hidden'>Devjobs</h1>
    </Link>
  )
}

export default Logo