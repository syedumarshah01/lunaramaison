import React from 'react'
import JewelleryCollection from '../components/JewelleryCollection'
import HotSelling from '../components/HotSelling'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HeroTwo from '../components/HeroTwo'
import Hero from '../components/Hero'
import PeshawariChappalCollection from '../components/PeshawariChappalCollection'
import HeroThree from '../components/HeroThree'

const home = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <HeroTwo /> */}
      <HeroThree/>
      <HotSelling />
      <JewelleryCollection />
      <PeshawariChappalCollection/>      
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default home
