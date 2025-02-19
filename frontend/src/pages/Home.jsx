import React from 'react'
import JewelleryCollection from '../components/JewelleryCollection'
import HotSelling from '../components/HotSelling'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HeroTwo from '../components/HeroTwo'
import PeshawariChappalCollection from '../components/PeshawariChappalCollection'

const home = () => {
  return (
    <div>
      <HeroTwo/>
      <HotSelling />
      <JewelleryCollection />
      <PeshawariChappalCollection/>      
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default home
