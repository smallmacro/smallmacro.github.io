import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import BriefIntroduction from './components/BriefIntroduction'
import Footer from './components/Footer'
import PriceOptions from './components/PriceOptions'



function App() {
  const [count, setCount] = useState(0)
  const plans = [
    {
      planName: 'Basic',
      price: 'free',
      description: "Up to 5 users for free",
      features: [ "Basic documentation collabration", "2 GB storage","Great security and support" ],
    },
    {
      planName: 'Pro',
      price: '$9.99',
      description: "Per user, billed monthly",
      features: [ "All essential integrations", "50 gb storage","More control and insights" ],
    },
    {
      planName: 'Ultimate',
      price: '$19.99 ',
      description: "Per user, billed monthly",
      features: [ "Robust work management", "100 gb storage","VIP support" ],
    }]
  return (
    
    <main className='w-full flex flex-col bg-wholebg md:flex-col '>
      <BriefIntroduction />
      <PriceOptions plans={plans}/>
      <Footer />
    </main>
  )
}

export default App
