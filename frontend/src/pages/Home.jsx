import React from 'react'
import { Helmet } from 'react-helmet-async'
import JewelleryCollection from '../components/JewelleryCollection'
import HotSelling from '../components/HotSelling'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import PeshawariChappalCollection from '../components/PeshawariChappalCollection'
import Slider from '../components/Slider'


const home = () => {

  const getHomeSchemaJson = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Lunara Maison - Artificial Jewellery & Peshawari Chappal",
      "description": "Explore our stunning collection of artificial jewellery and authentic Peshawari chappals. Shop now and elevate your style!",
      "url": "https://www.lunaramaison.com",
      "image": "https://www.lunaramaison.com/lunaramaison.png",
      "keywords": ["Artificial Jewellery","Peshawari Chappal", "Fashion","E-commerce"],
      "mainEntity": {
        "@type": "Organization",
        "name": "Lunara Maison",
        "logo": "https://www.lunaramaison.com/lunaramaison.png",
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.lunaramaison.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Collection",
            "item": "https://www.lunaramaison.com/collection"
          }
        ]
      },
    }
    return JSON.stringify(schema)
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
      <title>Lunara Maison</title>
      <meta name="description" content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"/>
      <meta name="keywords" content="artificial jewellery, jewellery, ring, necklace, bracelet, women, men, Peshawari chappals, fashion accessories, affordable jewellery, handmade chappals, stylish footwear"/>

        {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Lunara Maison"/>
      <meta property="og:description" content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"/>
      <meta property="og:site_name" content="Lunara Maison"/>

      {/* Twitter */}
      <meta property="twitter:title" content="Lunara Maison"/>
      <meta property="twitter:description" content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"/>

      <link rel="canonical" href="https://www.lunaramaison.com/"/>

      <script type="application/ld+json">
        {getHomeSchemaJson()}
      </script>
      </Helmet>

      <div>
        <Slider/>
        <HotSelling />
        <JewelleryCollection />
        <PeshawariChappalCollection/>      
        <OurPolicy />
        <NewsletterBox />
    </div>
    </>
    
  )
}

export default home
