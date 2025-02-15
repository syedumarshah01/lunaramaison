import React from 'react'
import Hero from '../components/Hero'
import JewelleryCollection from '../components/JewelleryCollection'
import HotSelling from '../components/HotSelling'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HeroTwo from '../components/HeroTwo'
import PeshawariChappalCollection from '../components/PeshawariChappalCollection'

const home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroTwo />
      <HotSelling />
      <JewelleryCollection />
      <PeshawariChappalCollection/>      
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default home
