import React from 'react'
import BriefIntroduction from '../components/BriefIntroduction'
import Footer from '../components/Footer'
import PriceOptions from '../components/PriceOptions'

function Home() {
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
      <div className='relative'>
        <PriceOptions plans={plans}/>
        <Footer />
      </div>
      
    </main>
  )
}

export default Home