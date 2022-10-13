import { useState } from 'react'


import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header className='w-full h-[136px]  bg-mobile-header '>
      <Banner />
    </header> 
    
  )
}

export default App
